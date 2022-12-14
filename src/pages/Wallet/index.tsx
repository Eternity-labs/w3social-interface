import { metaMask } from '@connector/metaMask';
import { useWallet } from '@hooks/useWallet';
import { Card } from '@mui/material';
import { useEffect, memo, useState } from 'react';
import { Accounts } from './Accounts';
import Chain from './Chain';
import { ConnectWithSelect } from './ConnectWithSelect';
import ContractInfo from './Contract';
import { Status } from './Status';

function MetaMaskCard() {
  console.log('🌺🌺组件被渲染🌺🌺');
  const { chainId, accounts, library, errMsg, isActive, isActivating } = useWallet();
  useEffect(() => {
    // 链接钱包
    void metaMask.connectEagerly();
  }, []);

  return (
    <Card>
      <div>
        <h3 className="p-[20px] text-center">连接钱包</h3>
        <Status isActivating={isActivating} error={errMsg} isActive={isActive} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={library} />
      </div>
      <ConnectWithSelect
        connector={metaMask}
        chainId={chainId}
        isActivating={isActivating}
        error={errMsg}
        isActive={isActive}
      />
      <ContractInfo />
    </Card>
  );
}
MetaMaskCard.whyDidYouRender = true;
export default memo(MetaMaskCard);
