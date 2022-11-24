import MuiButton from '@mui/material/Button';
import ComputerGus from '@/assets/images/computerGuy.png';

function IntroducePage() {
  return (
    <div className=" h-full">
      <div className="h-[300px] bg-logobg relative">
        <div className="flex justify-between pl-[28px] pr-[28px]">
          <div>logo</div>
          <div className="font-black text-[15px] text-[#515151]">跳过灵魂绑定</div>
        </div>
        <img
          className="w-[202px] absolute bottom-[20px] left-[calc(50%-101px)]"
          src={ComputerGus}
          alt="computerGuy"
        />
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
