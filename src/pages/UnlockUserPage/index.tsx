import DidCard from '@components/Did/DidCard';
import DividingLine from '@components/Base/DividingLine';
import UnlockDidItem from '@components/Did/UnlockDidItem';
import { Button } from '@mui/material';
import abi from '@abis/DidContract.json';
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { useWallet } from '@hooks/useWallet';
import { useEffect, useState } from 'react';
import { metaMask } from '@connector/metaMask';
import BaseHeader from '@components/Base/BaseHeader';
import { useQuery } from 'react-query';
import useStore from '@states/useStore';
import UserService from '@apis/services/SingleuserService';

type TItem = {
  icon: string;
  feature: string;
  desc: string;
};
function UnlockUser() {
  const items: Array<TItem> = [
    {
      icon: '1232',
      feature: '空投',
      desc: 'Did发型到10000张的时候，用户将获得创世NFT',
    },
    {
      icon: '1232',
      feature: '获得社交账户100个每天',
      desc: 'web3的更好体验',
    },
    {
      icon: '1232',
      feature: '您的账户获得更高的曝光',
      desc: '让您在web3中，闪闪发光',
    },
    {
      icon: '1232',
      feature: '专属社区',
      desc: '一起加入到创世俱乐部中吧，一种独特的身份象征',
    },
    {
      icon: '1232',
      feature: '邮箱',
      desc: '(对应的sub title)',
    },
  ];
  const { userInfo } = useStore();
  const id = userInfo?.id;

  const { data: userData, isLoading: cardLoading } = useQuery(
    ['getDidInfo', id],
    () => UserService.getDidInfo({ id: `${id}` }),
    {
      enabled: !!id,
    }
  );
  const { library, account } = useWallet();
  const address = '0xdEe7D41d9c9F6774C8E0c2e17ECD7e4ab21F8210';
  const signer = library?.getSigner();
  const contract = new Contract(address, abi, signer!);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);

  const getInfo = async () => {
    const result = await contract.DID(account);
    setIsPending(false);
  };

  const mint = async () => {
    setIsPending(true);
    const result = await contract.mint('We3social', account);
    console.log('mint: ', result);
    getInfo();
  };

  return (
    <>
      <BaseHeader title="解锁身份" />
      <div className="pl-[40px] pr-[40px] pt-[80px]">
        <DidCard {...userData} />
        <DividingLine text="已发售1.1k" className="mt-[40px]" />
        {items.map((item, index) => {
          return <UnlockDidItem {...item} className="mt-[30px]" />;
        })}
        <Button
          onClick={mint}
          disabled={isPending}
          variant="outlined"
          className=" w-[275px] h-[50px] mt-[34px] border-black text-black rounded-full bg-transparent text-[13px] font-medium shadow-buttonUnlock"
        >
          199CNY
        </Button>
      </div>
    </>
  );
}
export default UnlockUser;
