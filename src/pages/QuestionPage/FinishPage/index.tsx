import MuiButton from '@mui/material/Button';

function IntroducePage() {
  return (
    <div className=" h-full">
      <div className="h-[300px] bg-logobg">
        <div>logo</div>
      </div>
      <div className="font-black text-center">注册成功</div>
      <div className="flex flex-col items-center justify-content">
        <div className="text-[14px] text-[#515151] pl-[25px] pr-[25px] mt-[52px]">
          <p className="text-center"> 为了更好的帮助你建设web3的社交</p>
          <p className="text-center">我们需要对您的灵魂进行绑定！需要填写一些简单问卷</p>
        </div>

        <MuiButton
          variant="contained"
          className=" w-[163px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
        >
          立即注册
        </MuiButton>
      </div>
    </div>
  );
}
export default IntroducePage;
