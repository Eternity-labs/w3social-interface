import { metaMask } from '@connector/metaMask';
import { useWallet } from '@hooks/useWallet';
import * as React from 'react';

function Wallet() {
  const res = useWallet();
  console.log('🌺🌺provider🌺🌺', res);
  React.useEffect(() => {
    // 链接钱包
    void metaMask.connectEagerly();
  }, []);

  React.useEffect(() => {
    console.log(res);
  }, [res]);

  return <div>123</div>;
}

export default React.memo(Wallet);
