import { BaseProvider, Networkish, Web3Provider } from '@ethersproject/providers';
import { Connector, Web3ReactStore } from '@type/wallet';
import {
  createContext,
  ReactNode,
  MutableRefObject,
  useRef,
  useContext,
  Context,
  memo,
} from 'react';
import { Web3ReactPriorityHooks, getPriorityConnector, Web3ReactHooks } from './core';

export type Web3ContextType<T extends BaseProvider = Web3Provider> = {
  connector: Connector;
  chainId: ReturnType<Web3ReactPriorityHooks['useSelectedChainId']>;
  accounts: ReturnType<Web3ReactPriorityHooks['useSelectedAccounts']>;
  isActivating: ReturnType<Web3ReactPriorityHooks['useSelectedIsActivating']>;
  account: ReturnType<Web3ReactPriorityHooks['useSelectedAccount']>;
  isActive: ReturnType<Web3ReactPriorityHooks['useSelectedIsActive']>;
  provider: T | undefined;
  ENSNames: ReturnType<Web3ReactPriorityHooks['useSelectedENSNames']>;
  ENSName: ReturnType<Web3ReactPriorityHooks['useSelectedENSName']>;
  hooks: ReturnType<typeof getPriorityConnector>;
  error: ReturnType<Web3ReactPriorityHooks['useSelectedError']>;
};

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export interface Web3ReactProviderProps {
  children: ReactNode;
  connectors: [Connector, Web3ReactHooks][] | [Connector, Web3ReactHooks, Web3ReactStore][];
  connectorOverride?: Connector;
  network?: Networkish;
  lookupENS?: boolean;
}

export function Web3ReactProvider({
  children,
  connectors,
  connectorOverride,
  network,
  lookupENS = true,
}: Web3ReactProviderProps) {
  const cachedConnectors: MutableRefObject<Web3ReactProviderProps['connectors']> =
    useRef(connectors);
  // because we're calling `getPriorityConnector` with these connectors, we need to ensure that they're not changing in place
  if (
    connectors.length !== cachedConnectors.current.length ||
    connectors.some((connector, i) => {
      const cachedConnector = cachedConnectors.current[i];
      // because a "connector" is actually an array, we want to be sure to only perform an equality check on the actual Connector
      // class instance, to see if they're the same object
      return connector[0] !== cachedConnector[0];
    })
  )
    throw new Error(
      'The connectors prop passed to Web3ReactProvider must be referentially static. If connectors is changing, try providing a key prop to Web3ReactProvider that changes every time connectors changes.'
    );

  const hooks = getPriorityConnector(...connectors);
  const {
    usePriorityConnector,
    useSelectedChainId,
    useSelectedAccounts,
    useSelectedIsActivating,
    useSelectedAccount,
    useSelectedIsActive,
    useSelectedProvider,
    useSelectedENSNames,
    useSelectedENSName,
    useSelectedError,
  } = hooks;

  const priorityConnector = usePriorityConnector();
  const connector = connectorOverride ?? priorityConnector;

  const chainId = useSelectedChainId(connector);
  const accounts = useSelectedAccounts(connector);
  const isActivating = useSelectedIsActivating(connector);
  const account = useSelectedAccount(connector);
  const isActive = useSelectedIsActive(connector);
  // note that we've omitted a <T extends BaseProvider = Web3Provider> generic type
  // in Web3ReactProvider, and thus can't pass T through to useSelectedProvider below.
  // this is because if we did so, the type of provider would include T, but that would
  // conflict because Web3Context can't take a generic. however, this isn't particularly
  // important, because useWeb3React (below) is manually typed
  const provider = useSelectedProvider(connector, network);
  const ENSNames = useSelectedENSNames(connector, lookupENS ? provider : undefined);
  const ENSName = useSelectedENSName(connector, lookupENS ? provider : undefined);
  const error = useSelectedError(connector);

  console.log('provider: ', {
    connector,
    chainId,
    accounts,
    isActivating,
    account,
    isActive,
    provider,
    ENSNames,
    ENSName,
    hooks,
    error,
  });

  return (
    <Web3Context.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        connector,
        chainId,
        accounts,
        isActivating,
        account,
        isActive,
        provider,
        ENSNames,
        ENSName,
        hooks,
        error,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3React<T extends BaseProvider = Web3Provider>(): Web3ContextType<T> {
  const context = useContext(Web3Context as Context<Web3ContextType<T> | undefined>);
  if (!context) throw Error('useWeb3React can only be used within the Web3ReactProvider component');
  return context;
}
