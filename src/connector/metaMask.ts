import { URLS } from './config/chainIds';
import { initializeConnector } from './core';
import { MetaMask } from './metaMaskConnector';

export const [metaMask, hooks, store] = initializeConnector<MetaMask>(
  actions => new MetaMask({ actions }),
  Object.keys(URLS).map(chainId => Number(chainId))
);
