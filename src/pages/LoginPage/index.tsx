import { useState } from 'react';
import '@assets/styles/loginPage.css';
import MuiButton from '@mui/material/Button';
import MuiRadio from '@mui/material/Radio';

function LoginPage(): JSX.Element {
  const [selectedValue, setselectedValue] = useState<boolean>(false);
  const setRadioValue = () => {
    setselectedValue(!selectedValue);
  };
  return (
    <div className="h-full">
      <div className=" flex flex-col items-center  justify-between ">
        <div className=" flex items-center justify-center mt-[80px] w-[300px] h-[300px] rounded-[150px] bg-gradient-to-r from-purple-500 to-pink-500">
          <div>
            <div>logo</div>
            <p className="text-[12px] leading-[16px]  pt-[35px] text-center">
              Web3.0 年轻人的聚集地
            </p>
          </div>
        </div>
        <div>
          <div className="flex ">
            <MuiRadio
              size="small"
              className="w-[9px] h-[9px]"
              checked={selectedValue === true}
              onClick={setRadioValue}
              value={selectedValue}
              name="radio-buttons"
            />
            <p className="text-[8px] text-[gray]">同意服务条款勾选此项声明</p>
          </div>
          <MuiButton
            variant="contained"
            className=" w-[230px] h-[38px] rounded-full bg-black text-[12px]"
          >
            开始探索Web 3.0
          </MuiButton>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
