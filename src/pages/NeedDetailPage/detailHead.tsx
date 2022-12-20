import Avatar from '@mui/material/Avatar';

type Props = {
  identity: string;
  headSculpture: string;
  nickname: string;
};

function detailHead({ identity, headSculpture, nickname }: Props) {
  return (
    <div className="h-[40px] w-full flex">
      <Avatar src={headSculpture} className="text-[20px] mr-[14px]" />
      <div className="h-full flex flex-col justify-between">
        <p className="text-[#363636] text-[12px] font-semibold">{nickname}</p>
        <p className="text-[#666666] text-[10px]">{identity}</p>
      </div>
    </div>
  );
}
export default detailHead;
