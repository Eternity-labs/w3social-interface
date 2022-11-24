import MuiButton from '@mui/material/Button';
import FinishIcon from '@/assets/images/finishedIcon.png';

function IntroducePage() {
  return (
    <div className=" h-full">
      <div className="h-[300px] bg-logobg relative">
        <div>logo</div>
        <img
          className="w-[120px] absolute  -bottom-[10px] left-[calc(50%-80px)]"
          src={FinishIcon}
          alt="finishIcon"
        />
      </div>
      <div className="font-black text-center mt-[35px]">感谢您的填写</div>
      <div className="flex flex-col items-center justify-content">
        <div className="text-[14px] text-[#515151] pl-[25px] pr-[25px] mt-[52px]">
          <p className="text-center">您可以开始探索Web3 Social啦，其他您的获得全新的社交体验 </p>
        </div>

        <MuiButton
          variant="contained"
          className=" w-[163px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
        >
          我知道啦
        </MuiButton>
      </div>
    </div>
  );
}
export default IntroducePage;
