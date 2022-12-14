import { AddEthereumChainParameter, BasicChainInformation, ExtendedChainInformation } from '@type/wallet';
import { MainnetIcon, BscIcon, MaticIcon, ArbitrumICON, MoonbeamIcon } from './misc';

export enum SupportedChainId {
  MAINNET = 1,
  BSC = 56,
  MATIC = 137,
  ARBITRUM = 42161,
  TESTNET = 1337,
  MOONBEAM = 1284,
  MOONBEAM_TEST = 1287,
}

export enum SupportedChainId16 {
  '0x1' = 1,
  '0x38' = 56,
  '0x89' = 137,
  '0xa4b1' = 42161,
  '0x539' = 1337,
  '0x504' = 1284,
  '0x507' = 1287,
}

export const NETWORK_LABEL: { [chainId in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: 'Ethereum',
  //[SupportedChainId.RINKEBY]: 'Rinkeby',
  [SupportedChainId.MATIC]: 'Polygon (Matic)',
  //[SupportedChainId.MATIC_TESTNET]: 'Polygon Testnet',
  [SupportedChainId.BSC]: 'BSC',
  //[SupportedChainId.BSC_TESTNET]: 'BSC Testnet',
  [SupportedChainId.ARBITRUM]: 'Arbitrum',
  //[SupportedChainId.ARBITRUM_TESTNET]: 'Arbitrum Testnet',
  [SupportedChainId.TESTNET]: 'Testnet',
  [SupportedChainId.MOONBEAM]: 'Moonbeam',
  [SupportedChainId.MOONBEAM_TEST]: 'Moonbeam test',
};

export const ALL_SUPPORTED_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  //SupportedChainId.RINKEBY,
  SupportedChainId.BSC,
  //SupportedChainId.BSC_TESTNET,
  SupportedChainId.MATIC,
  //SupportedChainId.MATIC_TESTNET,
  SupportedChainId.ARBITRUM,
  SupportedChainId.MOONBEAM,
  SupportedChainId.MOONBEAM_TEST,
];
// per EIP-3085
export interface ChainInfoItem {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrls?: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export type ChainInfo = { readonly [chainId in SupportedChainId]: ChainInfoItem };

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.MAINNET]: {
    chainId: SupportedChainId16[SupportedChainId.MAINNET],
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`https://mainnet.infura.io/v3/`],
    blockExplorerUrls: ['https://etherscan.com'],
    iconUrls: [MainnetIcon],
  },
  [SupportedChainId.BSC]: {
    chainId: SupportedChainId16[SupportedChainId.BSC],
    chainName: 'BSC',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
    iconUrls: [BscIcon],
  },
  [SupportedChainId.MATIC]: {
    chainId: SupportedChainId16[SupportedChainId.MATIC],
    chainName: 'Polygon (Matic)',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: [
      'https://polygon-rpc.com/',
      'https://rpc-mainnet.matic.network',
      'https://rpc-mainnet.maticvigil.com',
      'https://matic-mainnet.chainstacklabs.com/',
      'https://rpc-mainnet.matic.quiknode.pro',
      'https://matic-mainnet-full-rpc.bwarelabs.com',
    ],
    blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com'],
    iconUrls: [MaticIcon],
  },
  [SupportedChainId.ARBITRUM]: {
    chainId: SupportedChainId16[SupportedChainId.ARBITRUM],
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'Arbitrum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io/'],
    iconUrls: [ArbitrumICON],
  },
  [SupportedChainId.TESTNET]: {
    chainId: SupportedChainId16[SupportedChainId.TESTNET],
    chainName: 'TestNet',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: [`http://localhost:7545`],
    blockExplorerUrls: ['https://etherscan.com'],
    iconUrls: [MainnetIcon],
  },
  [SupportedChainId.MOONBEAM]: {
    chainId: SupportedChainId16[SupportedChainId.MOONBEAM],
    chainName: 'Moonbeam',
    nativeCurrency: {
      name: 'Moonbeam',
      symbol: 'GLMR',
      decimals: 18,
    },
    rpcUrls: [`https://rpc.ankr.com/moonbeam`, `https://moonbeam.public.blastapi.io`, `https://1rpc.io/glmr`, `https://rpc.api.moonbeam.network`],
    blockExplorerUrls: ['https://moonscan.io/'],
    iconUrls: [MoonbeamIcon],
  },
  [SupportedChainId.MOONBEAM_TEST]: {
    chainId: SupportedChainId16[SupportedChainId.MOONBEAM_TEST],
    chainName: 'MoonbeamTest',
    nativeCurrency: {
      name: 'MoonbeamTest',
      symbol: 'DEV',
      decimals: 18,
    },
    rpcUrls: [`https://rpc.testnet.moonbeam.network`, `https://moonbase-alpha.public.blastapi.io`, `wss://wss.api.moonbase.moonbeam.network`, `https://rpc.api.moonbase.moonbeam.network`],
    blockExplorerUrls: ['https://moonbase.moonscan.io/'],
    iconUrls: [MoonbeamIcon],
  },
};

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAIN_INFO).reduce<{
  [chainId: number]: string[];
}>((accumulator, cId) => {
  const chainId = Number(cId) as SupportedChainId;
  const validURLs: string[] = CHAIN_INFO[chainId].rpcUrls || [];
  if (validURLs.length) {
    accumulator[chainId] = validURLs;
  }
  return accumulator;
}, {});

function isExtendedChainInformation(
  chainInformation: BasicChainInformation | ExtendedChainInformation
): chainInformation is ExtendedChainInformation {
  return !!(chainInformation as ExtendedChainInformation).nativeCurrency;
}
export function getAddChainParameters(chainId: number): AddEthereumChainParameter | number {
  if (!(chainId in CHAIN_INFO)) {
    return chainId;
  }
  const chainInformation = CHAIN_INFO[chainId];
  if (isExtendedChainInformation(chainInformation)) {
    return {
      chainId,
      chainName: chainInformation.name,
      nativeCurrency: chainInformation.nativeCurrency,
      rpcUrls: chainInformation.urls,
      blockExplorerUrls: chainInformation.blockExplorerUrls,
    };
  } else {
    return chainId;
  }
}

export const Connector_Address = '0xdEe7D41d9c9F6774C8E0c2e17ECD7e4ab21F8210'