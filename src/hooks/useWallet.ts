import { walletTypeStore } from '@states/wallet';
import create from 'zustand';

export function useWallet() {
  const useWalletTypeStoreStore = create(walletTypeStore);
  return useWalletTypeStoreStore();
}
