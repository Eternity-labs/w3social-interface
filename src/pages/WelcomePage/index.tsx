import { useState } from 'react';
import { styled } from '@mui/material/styles';
import '@assets/styles/loginPage.css';
import MuiButton from '@mui/material/Button';
import MuiRadio from '@mui/material/Radio';

const CusRadio = styled(MuiRadio)({
  width: '16px',
  height: '16px',
  '& .MuiSvgIcon-root': {
    width: '9x',
    height: '9px',
  },
});
function WelcomePage(): JSX.Element {
  const [selectedValue, setselectedValue] = useState<boolean>(false);
  const setRadioValue = () => {
    setselectedValue(!selectedValue);
  };
  return (
    <div className="h-full">
      <div className=" flex flex-col items-center  justify-between ">
        <div className=" flex items-center justify-center mt-[80px] w-[300px] h-[300px] rounded-[150px] bg-logobg">
          <div>
            <div>logo</div>
            <p className="text-[12px] leading-[16px]  pt-[35px] text-center">
              Web3.0 年轻人的聚集地
            </p>
          </div>
        </div>
        <div className="mt-[84px]">
          <div className="flex  h-[16px] mt-[84] items-center justify-center">
            <CusRadio
              size="small"
              checked={selectedValue === true}
              onClick={setRadioValue}
              value={selectedValue}
              name="radio-buttons"
            />
            <p className="text-[8px] text-[gray]">同意服务条款勾选此项声明</p>
          </div>
          <MuiButton
            variant="contained"
            className=" w-[230px] h-[38px] mt-[14px] rounded-full bg-black text-[12px]"
          >
            开始探索Web 3.0
          </MuiButton>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
