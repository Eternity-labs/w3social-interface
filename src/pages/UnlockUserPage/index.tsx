import DidCard from '@components/Did/DidCard';
import DividingLine from '@components/Base/DividingLine';
import UnlockDidItem from '@components/Did/UnlockDidItem';
import MuiButton from '@mui/material/Button';

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
  ];
  return (
    <div className="pl-[40px] pr-[40px] pt-[20px]">
      <DidCard />
      <DividingLine text="已发售1.1k" className="mt-[40px]" />
      {items.map((item, index) => {
        return <UnlockDidItem {...item} className="mt-[30px]" />;
      })}
      <MuiButton
        variant="outlined"
        className=" w-[275px] h-[50px] mt-[34px] border-black text-black rounded-full bg-transparent text-[13px] font-medium shadow-buttonunlock"
      >
        199CNY
      </MuiButton>
    </div>
  );
}
export default UnlockUser;
