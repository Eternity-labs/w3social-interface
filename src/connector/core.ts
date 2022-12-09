/* eslint-disable react-hooks/rules-of-hooks */
import { Networkish } from '@ethersproject/networks';
import { Web3Provider, BaseProvider } from '@ethersproject/providers';
import { Web3ReactStore, Web3ReactState, Actions, Connector } from '@type/wallet';
import { useState, useEffect, useMemo } from 'react';
import create, { UseBoundStore } from 'zustand';
import { createWeb3ReactStoreAndActions } from './store';

let DynamicProvider: typeof Web3Provider | null | undefined;
async function importProvider(): Promise<void> {
  if (DynamicProvider === undefined) {
    try {
      const { Web3Provider: innerProvider } = await import('@ethersproject/providers');
      DynamicProvider = innerProvider;
    } catch {
      console.debug('@ethersproject/providers not available');
      DynamicProvider = null;
    }
  }
}

export type Web3ReactHooks = ReturnType<typeof getStateHooks> &
  ReturnType<typeof getDerivedHooks> &
  ReturnType<typeof getAugmentedHooks>;

export type Web3ReactSelectedHooks = ReturnType<typeof getSelectedConnector>;

export type Web3ReactPriorityHooks = ReturnType<typeof getPriorityConnector>;

const CHAIN_ID = ({ chainId }: Web3ReactState) => chainId;
const ACCOUNTS = ({ accounts }: Web3ReactState) => accounts;
const ACTIVATING = ({ activating }: Web3ReactState) => activating;
const ERROR = ({ error }: Web3ReactState) => error;
const ACCOUNTS_EQUALITY_CHECKER = (
  oldAccounts: Web3ReactState['accounts'],
  newAccounts: Web3ReactState['accounts']
): boolean =>
  (oldAccounts === undefined && newAccounts === undefined) ||
  (oldAccounts !== undefined &&
    oldAccounts.length === newAccounts?.length &&
    oldAccounts.every((oldAccount, i) => oldAccount === newAccounts[i]));

function computeIsActive({ chainId, accounts, activating }: Web3ReactState) {
  return Boolean(chainId && accounts && !activating);
}

function getStateHooks(useConnector: UseBoundStore<Web3ReactStore>) {
  function useChainId(): Web3ReactState['chainId'] {
    return useConnector(CHAIN_ID);
  }

  function useAccounts(): Web3ReactState['accounts'] {
    return useConnector(ACCOUNTS, ACCOUNTS_EQUALITY_CHECKER);
  }
  function useIsActivating(): Web3ReactState['activating'] {
    return useConnector(ACTIVATING);
  }

  function useError(): Web3ReactState['error'] {
    return useConnector(ERROR);
  }
  return { useChainId, useAccounts, useIsActivating, useError };
}

/**
 * Creates a variety of convenience `hooks` that return data associated with a particular passed connector.
 *
 * @param initializedConnectors - Two or more [connector, hooks(, store)] arrays, as returned from initializeConnector.
 * @returns hooks - A variety of convenience hooks that wrap the hooks returned from initializeConnector.
 */
export function getSelectedConnector(
  ...initializedConnectors:
    | [Connector, Web3ReactHooks][]
    | [Connector, Web3ReactHooks, Web3ReactStore][]
) {
  function getIndex(connector: Connector) {
    const index = initializedConnectors.findIndex(
      ([initializedConnector]) => connector === initializedConnector
    );
    if (index === -1) throw new Error('Connector not found');
    return index;
  }

  function useSelectedStore(connector: Connector) {
    const store = initializedConnectors[getIndex(connector)][2];
    if (!store) throw new Error('Stores not passed');
    return store;
  }

  // the following code calls hooks in a map a lot, which violates the eslint rule.
  // this is ok, though, because initializedConnectors never changes, so the same hooks are called each time
  function useSelectedChainId(connector: Connector) {
    const values = initializedConnectors.map(([, { useChainId }]) => useChainId());
    return values[getIndex(connector)];
  }

  function useSelectedAccounts(connector: Connector) {
    const values = initializedConnectors.map(([, { useAccounts }]) => useAccounts());
    return values[getIndex(connector)];
  }

  function useSelectedIsActivating(connector: Connector) {
    const values = initializedConnectors.map(([, { useIsActivating }]) => useIsActivating());
    return values[getIndex(connector)];
  }

  function useSelectedAccount(connector: Connector) {
    const values = initializedConnectors.map(([, { useAccount }]) => useAccount());
    return values[getIndex(connector)];
  }

  function useSelectedError(connector: Connector) {
    const values = initializedConnectors.map(([, { useError }]) => useError());
    return values[getIndex(connector)];
  }

  function useSelectedIsActive(connector: Connector) {
    const values = initializedConnectors.map(([, { useIsActive }]) => useIsActive());
    return values[getIndex(connector)];
  }

  /**
   * @typeParam T - A type argument must only be provided if one or more of the connectors passed to
   * getSelectedConnector is using `connector.customProvider`, in which case it must match every possible type of this
   * property, over all connectors.
   */
  function useSelectedProvider<T extends BaseProvider = Web3Provider>(
    connector: Connector,
    network?: Networkish
  ): T | undefined {
    const index = getIndex(connector);

    const values = initializedConnectors.map(([, { useProvider }], i) =>
      useProvider<T>(network, i === index)
    );
    return values[index];
  }

  function useSelectedENSNames(connector: Connector, provider?: BaseProvider) {
    const index = getIndex(connector);
    const values = initializedConnectors.map(([, { useENSNames }], i) =>
      useENSNames(i === index ? provider : undefined)
    );
    return values[index];
  }

  function useSelectedENSName(connector: Connector, provider?: BaseProvider) {
    const index = getIndex(connector);
    const values = initializedConnectors.map(([, { useENSName }], i) =>
      useENSName(i === index ? provider : undefined)
    );
    return values[index];
  }

  return {
    useSelectedStore,
    useSelectedChainId,
    useSelectedAccounts,
    useSelectedIsActivating,
    useSelectedAccount,
    useSelectedError,
    useSelectedIsActive,
    useSelectedProvider,
    useSelectedENSNames,
    useSelectedENSName,
  };
}

/**
 * Creates a variety of convenience `hooks` that return data associated with the first of the `initializedConnectors`
 * that is active.
 *
 * @param initializedConnectors - Two or more [connector, hooks(, store)] arrays, as returned from initializeConnector.
 * @returns hooks - A variety of convenience hooks that wrap the hooks returned from initializeConnector.
 */
export function getPriorityConnector(
  ...initializedConnectors:
    | [Connector, Web3ReactHooks][]
    | [Connector, Web3ReactHooks, Web3ReactStore][]
) {
  const {
    useSelectedStore,
    useSelectedChainId,
    useSelectedAccounts,
    useSelectedIsActivating,
    useSelectedAccount,
    useSelectedIsActive,
    useSelectedProvider,
    useSelectedENSNames,
    useSelectedENSName,
    useSelectedError,
  } = getSelectedConnector(...initializedConnectors);

  function usePriorityConnector() {
    const values = initializedConnectors.map(([, { useIsActive }]) => useIsActive());
    const index = values.findIndex(isActive => isActive);
    return initializedConnectors[index === -1 ? 0 : index][0];
  }

  function usePriorityStore() {
    return useSelectedStore(usePriorityConnector());
  }

  function usePriorityChainId() {
    return useSelectedChainId(usePriorityConnector());
  }

  function usePriorityAccounts() {
    return useSelectedAccounts(usePriorityConnector());
  }

  function usePriorityError() {
    return useSelectedError(usePriorityConnector());
  }

  function usePriorityIsActivating() {
    return useSelectedIsActivating(usePriorityConnector());
  }

  function usePriorityAccount() {
    return useSelectedAccount(usePriorityConnector());
  }

  function usePriorityIsActive() {
    return useSelectedIsActive(usePriorityConnector());
  }

  /**
   * @typeParam T - A type argument must only be provided if one or more of the connectors passed to
   * getPriorityConnector is using `connector.customProvider`, in which case it must match every possible type of this
   * property, over all connectors.
   */
  function usePriorityProvider<T extends BaseProvider = Web3Provider>(network?: Networkish) {
    return useSelectedProvider<T>(usePriorityConnector(), network);
  }

  function usePriorityENSNames(provider?: BaseProvider) {
    return useSelectedENSNames(usePriorityConnector(), provider);
  }

  function usePriorityENSName(provider?: BaseProvider) {
    return useSelectedENSName(usePriorityConnector(), provider);
  }

  return {
    useSelectedStore,
    useSelectedChainId,
    useSelectedAccounts,
    useSelectedIsActivating,
    useSelectedAccount,
    useSelectedIsActive,
    useSelectedProvider,
    useSelectedENSNames,
    useSelectedENSName,
    useSelectedError,
    usePriorityConnector,
    usePriorityStore,
    usePriorityChainId,
    usePriorityAccounts,
    usePriorityIsActivating,
    usePriorityAccount,
    usePriorityIsActive,
    usePriorityProvider,
    usePriorityENSNames,
    usePriorityENSName,
    usePriorityError,
  };
}

/**
 * @returns ENSNames - An array of length `accounts.length` which contains entries which are either all `undefined`,
 * indicated that names cannot be fetched because there's no provider, or they're in the process of being fetched,
 * or `string | null`, depending on whether an ENS name has been set for the account in question or not.
 */
function useENS(provider?: BaseProvider, accounts: string[] = []): undefined[] | (string | null)[] {
  const [ENSNames, setENSNames] = useState<(string | null)[] | undefined>();

  useEffect(() => {
    if (provider && accounts.length) {
      let stale = false;

      Promise.all(accounts.map(account => provider.lookupAddress(account)))
        .then(name => {
          if (stale) return;
          setENSNames(name);
        })
        .catch(error => {
          if (stale) return;
          console.debug('Could not fetch ENS names', error);
          setENSNames(new Array<null>(accounts.length).fill(null));
        });

      return () => {
        stale = true;
        setENSNames(undefined);
      };
    }
  }, [provider, accounts]);

  return ENSNames ?? new Array<undefined>(accounts.length).fill(undefined);
}

function getAugmentedHooks<T extends Connector>(
  connector: T,
  { useAccounts, useChainId }: ReturnType<typeof getStateHooks>,
  { useAccount, useIsActive }: ReturnType<typeof getDerivedHooks>
) {
  /**
   * Avoid type erasure by returning the most qualified type if not otherwise set.
   * Note that this function's return type is `T | undefined`, but there is a code path
   * that returns a Web3Provider, which could conflict with a user-provided T. So,
   * it's important that users only provide an override for T if they know that
   * `connector.customProvider` is going to be defined and of type T.
   *
   * @typeParam T - A type argument must only be provided if using `connector.customProvider`, in which case it
   * must match the type of this property.
   */
  function useProvider<B extends BaseProvider = Web3Provider>(
    network?: Networkish,
    enabled = true
  ): B | undefined {
    const isActive = useIsActive();
    const chainId = useChainId();

    // ensure that Provider is going to be available when loaded if @ethersproject/providers is installed
    const [loaded, setLoaded] = useState(DynamicProvider !== undefined);
    useEffect(() => {
      if (loaded) return;
      let stale = false;
      void importProvider().then(() => {
        if (stale) return;
        setLoaded(true);
      });
      // eslint-disable-next-line consistent-return
      return () => {
        stale = true;
      };
    }, [loaded]);

    // eslint-disable-next-line consistent-return
    return useMemo(() => {
      // to ensure connectors remain fresh, we condition re-renders on loaded, isActive and chainId
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      void loaded && isActive && chainId;
      if (enabled) {
        if (connector.customProvider) return connector.customProvider as T;
        // see tsdoc note above for return type explanation.
        if (DynamicProvider && connector.provider) {
          const lib = new DynamicProvider(connector.provider, network) as unknown as T;
          lib.detectNetwork().then(net => {
            console.log('provider update success', net);
          });
          return lib;
        }
      }
    }, [loaded, enabled, isActive, chainId, network]);
  }

  function useENSNames(provider?: BaseProvider): undefined[] | (string | null)[] {
    const accounts = useAccounts();
    return useENS(provider, accounts);
  }

  function useENSName(provider?: BaseProvider): undefined | string | null {
    const account = useAccount();
    const accounts = useMemo(() => (account === undefined ? undefined : [account]), [account]);
    return useENS(provider, accounts)?.[0];
  }

  return { useProvider, useENSNames, useENSName };
}

// 派生基础的hooks
function getDerivedHooks({
  useChainId,
  useAccounts,
  useIsActivating,
  useError,
}: ReturnType<typeof getStateHooks>) {
  function useAccount(): string | undefined {
    return useAccounts()?.[0];
  }

  function useIsActive(): boolean {
    const chainId = useChainId();
    const accounts = useAccounts();
    const activating = useIsActivating();
    const error = useError();
    return computeIsActive({
      chainId,
      accounts,
      activating,
      error,
    });
  }

  return { useAccount, useIsActive };
}

export function initializeConnector<T extends Connector>(
  f: (actions: Actions) => T,
  allowedChainIds?: number[]
) {
  // 状态处理的这个
  const [store, actions] = createWeb3ReactStoreAndActions(allowedChainIds);
  const connector = f(actions);
  const useConnector = create(store);
  const stateHooks = getStateHooks(useConnector);
  const derivedHooks = getDerivedHooks(stateHooks);
  const augmentedHooks = getAugmentedHooks<T>(connector, stateHooks, derivedHooks);
  // metaMask带着zustand操作，返回Zustand组件外状态+React结合起来
  return [connector, { ...stateHooks, ...derivedHooks, ...augmentedHooks }, store] as const;
}
