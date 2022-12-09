import { useWalletGlobal } from '@hooks/useGlobalWallet';
import { memo } from 'react';

function DataContainer() {
  useWalletGlobal();
  return null;
}
DataContainer.whyDidYouRender = true;
export default memo(DataContainer);
