import * as React from 'react';
import abi from '@abis/DidContract.json';
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import Button from '@mui/material/Button';
import { useWallet } from '@hooks/useWallet';

function ContractInfo() {
  const { library, account } = useWallet();
  const address = '0xdEe7D41d9c9F6774C8E0c2e17ECD7e4ab21F8210';
  const signer = library?.getSigner();
  const contract = new Contract(address, abi, signer!);

  const [pending, setPending] = React.useState(false);

  const mint = async () => {
    const result = await contract.mint('We3social', account);
    console.log('mint: ', result);
  };

  const getInfo = async () => {
    setPending(true);
    console.log('account: ', account);
    const result = await contract.DID(account);
    console.log('getInfo: ', result);
    setPending(false);
  };

  return (
    <div>
      <div className="py-[10px]">
        <Button
          className="py-[10px]"
          fullWidth
          disabled={pending}
          variant="contained"
          onClick={mint}
        >
          调用合约
        </Button>
      </div>
      <div className="py-[10px]">
        <Button
          className="py-[10px]"
          fullWidth
          disabled={pending}
          variant="contained"
          onClick={getInfo}
        >
          获取合约数据
        </Button>
      </div>
    </div>
  );
}

ContractInfo.whyDidYouRender = true;

export default ContractInfo;
