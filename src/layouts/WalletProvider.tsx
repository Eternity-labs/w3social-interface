import { Web3ReactHooks } from '@connector/core';
import { hooks as metaMaskHooks, metaMask } from '@connector/metaMask';
import { MetaMask } from '@connector/metaMaskConnector';
import { Web3ReactProvider } from '@connector/provider';
import { walletTypeAtom } from '@states/wallet';
import { useAtom } from 'jotai';
import { ReactNode } from 'react';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];
export default function WalletProvider({ children }: { children: ReactNode }): JSX.Element {
  const [walletType] = useAtom(walletTypeAtom);
  const connectorOverride = connectors[walletType - 1][0];
  return (
    <Web3ReactProvider connectors={connectors} connectorOverride={connectorOverride}>
      {children}
    </Web3ReactProvider>
  );
}
