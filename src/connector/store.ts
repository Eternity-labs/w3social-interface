import { getAddress } from '@ethersproject/address';
import { Actions, Web3ReactState, Web3ReactStateUpdate, Web3ReactStore } from '@type/wallet';
import { isEqual } from 'lodash-es';
import { immer } from 'zustand/middleware/immer';
import createStore from 'zustand/vanilla';

export const MAX_SAFE_CHAIN_ID = 4503599627370476;

function validateChainId(chainId: number): void {
  if (!Number.isInteger(chainId) || chainId <= 0 || chainId > MAX_SAFE_CHAIN_ID) {
    throw new Error(`Invalid chainId ${chainId}`);
  }
}

function validateAccount(account: string): string {
  return getAddress(account);
}

export class ChainIdNotAllowedError extends Error {
  public readonly chainId: number;

  public constructor(chainId: number) {
    super('this network is not supported');
    this.chainId = chainId;
    this.name = ChainIdNotAllowedError.name;
    Object.setPrototypeOf(this, ChainIdNotAllowedError.prototype);
  }
}

function ensureChainIdIsAllowed(
  chainId: number,
  allowedChainIds: number[]
): ChainIdNotAllowedError | undefined {
  return allowedChainIds.some(allowedChainId => chainId === allowedChainId)
    ? undefined
    : new ChainIdNotAllowedError(chainId);
}

const DEFAULT_STATE: Web3ReactState = {
  chainId: undefined,
  accounts: undefined,
  activating: false,
  error: undefined,
};

export function createWeb3ReactStoreAndActions(
  allowedChainIds?: number[]
): [Web3ReactStore, Actions] {
  // const store = createStore<Web3ReactState>(() => DEFAULT_STATE);
  const store = createStore(
    immer<Web3ReactState>(() => ({
      ...DEFAULT_STATE,
    }))
  );
  let nullifier = 0;
  function startActivation(): () => void {
    // redux状态订阅 cancelActivation
    const nullifierCached = ++nullifier;
    // store.setState({ ...DEFAULT_STATE, activating: true });
    store.setState(state => {
      state.activating = true;
    });
    return () => {
      if (nullifier === nullifierCached) {
        store.setState(state => {
          state.activating = false;
        });
      }
    };
  }

  function update(stateUpdate: Web3ReactStateUpdate): void {
    if (stateUpdate.chainId !== undefined) {
      validateChainId(stateUpdate.chainId);
    }
    if (stateUpdate.accounts !== undefined) {
      Object.defineProperties(stateUpdate, {
        accounts: {
          value: [...stateUpdate.accounts],
          writable: true,
        },
      });
      for (let i = 0; i < stateUpdate.accounts.length; i++) {
        stateUpdate.accounts[i] = validateAccount(stateUpdate.accounts[i]);
      }
    }
    // 锁 cancel
    nullifier++;
    store.setState(existingState => {
      const chainId = stateUpdate.chainId ?? existingState.chainId;
      const accounts = stateUpdate.accounts ?? existingState.accounts;
      let { error } = existingState;
      // 当前的开发环境下
      if (chainId && allowedChainIds) {
        const chainIdError = ensureChainIdIsAllowed(chainId, allowedChainIds);
        if (chainIdError && error) {
          // error 但是不是ChainIdNotAllowedError
          // 是ChainIdNotAllowedError但是 chainid
          if (
            !(error instanceof ChainIdNotAllowedError) ||
            error.chainId !== chainIdError.chainId
          ) {
            console.debug(`${error.name} is being clobbered by ${chainIdError.name}`);
          }
        }
        error = chainIdError;
      }
      // error clear
      if (error && !(error instanceof ChainIdNotAllowedError) && chainId && accounts) {
        error = undefined;
      }
      let { activating } = existingState;
      if (activating && (error || (chainId && accounts))) {
        activating = false;
      }
      existingState.chainId = chainId;

      if (!isEqual(existingState.accounts, accounts)) {
        // chainid
        existingState.accounts = accounts;
      }
      existingState.error = error;
      existingState.activating = activating;
    });
  }

  function reportError(error: Error | undefined): void {
    // cancel
    nullifier++;
    if (error === undefined) {
      // reset
      store.setState(() => ({ ...DEFAULT_STATE, error }));
    } else {
      store.setState(state => {
        state.error = error;
      });
    }
  }
  return [store, { startActivation, update, reportError }];
}
