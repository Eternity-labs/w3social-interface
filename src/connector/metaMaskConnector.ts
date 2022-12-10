/* eslint-disable max-classes-per-file */
import type detectEthereumProvider from '@metamask/detect-provider';

import {
  AddEthereumChainParameter,
  Connector,
  MetaMaskConstructorArgs,
  MetaMaskProvider,
  ProviderConnectInfo,
  ProviderRpcError,
  WatchAssetParameters,
} from '@type/wallet';

export class NoMetaMaskError extends Error {
  public constructor() {
    super('MetaMask not installed');
    this.name = NoMetaMaskError.name;
    Object.setPrototypeOf(this, NoMetaMaskError.prototype);
  }
}

function parseChainId(chainId: string) {
  return Number.parseInt(chainId, 16);
}

export class MetaMask extends Connector {
  public provider?: MetaMaskProvider;

  private readonly options?: Parameters<typeof detectEthereumProvider>[0];

  private eagerConnection?: Promise<void>;

  constructor({ actions, options, initConnect = false }: MetaMaskConstructorArgs) {
    super(actions);
    if (initConnect && typeof window === 'undefined') {
      throw new Error(
        'initConnect = true is invalid for SSR, instead use the connectEagerly method in a useEffect'
      );
    }
    this.options = options;
    if (initConnect) {
      this.connectEagerly();
    }
  }

  private async isomorphicInitialize(): Promise<void> {
    console.log('isomorphicInitialize eagerConnection', this.eagerConnection);
    if (this.eagerConnection) {
      return;
    }
    await (this.eagerConnection = import('@metamask/detect-provider')
      .then(m => m.default(this.options))
      .then(provider => {
        if (provider) {
          this.provider = <MetaMaskProvider>provider;
          if (this.provider.providers?.length) {
            this.provider =
              this.provider.providers.find(p => p.isMetaMask) ?? this.provider.providers[0];
          }
          this.provider.on('connect', ({ chainId }: ProviderConnectInfo): void => {
            console.log('isomorphicInitialize connect', chainId);
            this.actions.update({ chainId: parseChainId(chainId) });
          });
          this.provider.on('disconnect', (): void => {
            console.log('isomorphicInitialize disconnect');
            this.actions.reportError(undefined);
            // this.activate();
          });
          this.provider.on('chainChanged', (chainId: string): void => {
            console.log('isomorphicInitialize chainChanged', chainId);
            this.actions.update({ chainId: parseChainId(chainId) });
          });
          this.provider.on('accountsChanged', async (accounts: string[]): Promise<void> => {
            if (accounts.length === 0) {
              this.actions.reportError(undefined);
            } else {
              console.log('isomorphicInitialize accountsChanged', accounts);
              this.actions.update({ accounts });
              // this.activate();
            }
          });
        }
      }));
  }

  public async connectEagerly(): Promise<void> {
    console.log('🌻🌻🌻早期调用🌻🌻🌻');
    const cancelActivation = this.actions.startActivation();
    await this.isomorphicInitialize();
    if (!this.provider) {
      this.actions.reportError(new NoMetaMaskError());
      return cancelActivation();
    }
    const { provider } = this;
    return Promise.all([
      provider.request({ method: 'eth_chainId' }) as Promise<string>,
      provider.request({ method: 'eth_accounts' }) as Promise<string[]>,
    ])
      .then(async ([chainId, accounts]) => {
        if (accounts.length) {
          this.actions.update({ chainId: parseChainId(chainId), accounts });
        } else {
          cancelActivation();
          console.log('No accounts returned');
          // 获取余额 主动的调出metaMask
          await provider.request({ method: 'eth_requestAccounts' });
        }
      })
      .catch(error => {
        console.log('Could not connect eagerly', error);
        cancelActivation();
      });
  }

  public async activate(
    desiredChainIdOrChainParameters?: number | AddEthereumChainParameter
  ): Promise<void> {
    let cancelActivation: () => void;
    if (!this.provider?.isConnected?.()) cancelActivation = this.actions.startActivation();
    await this.isomorphicInitialize();
    if (!this.provider) {
      return this.actions.reportError(new NoMetaMaskError());
    }
    const temp = this.provider;
    // 先对照下metamask现在链接状态
    return Promise.all([this.provider.request({ method: 'eth_chainId' }) as Promise<string>])
      .then(async ([chainId]) => {
        // 再同步获取下账户信息 chainId
        const accounts = (await temp.request({
          method: 'eth_requestAccounts',
        })) as string[];
        // 避免获取的chainid 0x56565
        const receivedChainId = parseChainId(chainId);
        // 解析一下当前的传递主动链接的chainID是啥
        const desiredChainId =
          typeof desiredChainIdOrChainParameters === 'number'
            ? desiredChainIdOrChainParameters
            : desiredChainIdOrChainParameters?.chainId;
        // 如果用户没主动传 或者但是跟目前 metamask一致
        if (!desiredChainId || receivedChainId === desiredChainId) {
          return this.actions.update({ chainId: receivedChainId, accounts });
        }
        // 用户主动链接的 chainID 转成二进制
        const desiredChainIdHex = `0x${desiredChainId.toString(16)}`;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const provider = this.provider!;

        // 切链
        return provider
          .request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: desiredChainIdHex }],
          })
          .catch(async (error: ProviderRpcError) => {
            // 错误 这个链不在当前的metamask下 主动添加
            if (error.code === 4902 && typeof desiredChainIdOrChainParameters !== 'number') {
              return provider.request({
                method: 'wallet_addEthereumChain',
                params: [{ ...desiredChainIdOrChainParameters, chainId: desiredChainIdHex }],
              });
            }
            this.actions.reportError(error);
            throw error;
          })
          .then(async () => {
            await this.activate(desiredChainId);
          });
      })
      .catch(error => {
        this.actions.reportError(error);
      });
  }

  public async watchAsset({
    address,
    symbol,
    decimals,
    image,
  }: WatchAssetParameters): Promise<true> {
    if (!this.provider) throw new Error('No provider');

    return this.provider
      .request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address, // The address that the token is at.
            symbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals, // The number of decimals in the token
            image, // A string url of the token logo
          },
        },
      })
      .then(success => {
        if (!success) throw new Error('Rejected');
        return true;
      });
  }
}
