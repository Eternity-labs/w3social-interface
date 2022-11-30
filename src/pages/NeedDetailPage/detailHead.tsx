import Avatar from '@mui/material/Avatar';

function detailHead() {
  return (
    <div className="h-[40px] w-full flex">
      <Avatar className="text-[20px] mr-[14px]">H</Avatar>
      <div className="h-full flex flex-col justify-between">
        <p className="text-[#363636] text-[12px] font-semibold">用户名</p>
        <p className="text-[#666666] text-[10px]">builder</p>
      </div>
    </div>
  );
}
export default detailHead;
