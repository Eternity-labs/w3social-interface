import { metaMask, hooks } from '@connector/metaMask';
import { useWallet } from '@hooks/useWallet';
import * as React from 'react';

function Wallet() {
  const { useAccount, useAccounts, useChainId, useIsActive, useIsActivating, useProvider } = hooks;
  const account = useAccount();
  const accounts = useAccounts();
  const chainId = useChainId();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const provider = useProvider();

  const res = useWallet();

  const handleConnectMetaMask = async () => {
    await metaMask.connectEagerly();
    metaMask.activate();
  };

  React.useEffect(() => {
    console.log('account: ', account);
    console.log('accounts: ', accounts);
    console.log('chainId: ', chainId);
    console.log('isActive: ', isActive);
    console.log('isActivating: ', isActivating);
    console.log('provider: ', provider);
  }, [account, accounts, chainId, isActive, isActivating, provider]);

  React.useEffect(() => {
    console.log('🌺🌺provider🌺🌺', res);
  }, [res]);

  return (
    <div>
      <span onClick={handleConnectMetaMask}>连接钱包</span>
    </div>
  );
}

export default React.memo(Wallet);
