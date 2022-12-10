import { Web3Provider, ExternalProvider } from '@ethersproject/providers';
import { Connector } from '@type/wallet';
import { atom } from 'jotai';
import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type GlobalWalletType = {
  chainId: number | undefined;
  account: string;
  accounts: string[];
  library: Web3Provider | undefined;
  provider: ExternalProvider | undefined;
  errMsg: Error | undefined;
  connector: Connector;
  isActive: boolean;
  isActivating: boolean;
};
const DEFAULT_STATE = {} as GlobalWalletType;

const walletTypeStore = createStore(
  immer<GlobalWalletType>(() => ({
    ...DEFAULT_STATE,
  }))
);
// 代表
// 代表了下拉列表当前的 钱包类型
const walletTypeAtom = atom(1);
export { walletTypeAtom, walletTypeStore };
