/* eslint-disable no-alert */
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import '@assets/styles/loginPage.css';
import MuiButton from '@mui/material/Button';
import MuiRadio from '@mui/material/Radio';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import logImg from '@assets/images/logo3.png';

const CusRadio = styled(MuiRadio)({
  width: '16px',
  height: '16px',
  '& .MuiSvgIcon-root': {
    width: '9x',
    height: '9px',
  },
});
type ExploreButtonProps = {
  onClick?: () => void;
};

function ExploreButton(props: ExploreButtonProps): JSX.Element {
  const { onClick = () => {} } = props;
  return (
    <MuiButton
      onClick={onClick}
      variant="contained"
      className=" w-[230px] h-[38px] mt-[14px] rounded-full bg-black text-[12px]"
    >
      开始探索Web 3.0
    </MuiButton>
  );
}
function WelcomePage(): JSX.Element {
  const [selectedValue, setselectedValue] = useState<boolean>(false);
  const [error, showError] = useState<boolean>(false);
  const setRadioValue = () => {
    setselectedValue(!selectedValue);
  };
  const ToastError = () => {
    showError(true);
  };
  useEffect(() => {
    if (selectedValue) {
      showError(false);
    }
  }, [selectedValue]);

  const startExplore = () => {};
  return (
    <div className="h-full">
      {/* bg-logoBg */}
      <div className=" flex flex-col items-center  justify-between ">
        <div className=" flex items-center justify-center mt-[80px] w-[300px] h-[300px] rounded-[150px] bg-logoBg">
          <div>
            <img src={logImg} alt="logo" className="w-[160px]" />
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
              className={error ? 'text-[#F34747]' : ''}
              sx={{
                '&.Mui-checked': {
                  color: '#72F9B8',
                },
              }}
            />
            <Link to="/protocal?pageName=agreement">
              <p className={cn('text-[8px]', 'text-slimGray', error ? 'text-[#F34747]' : '')}>
                同意服务条款勾选此项声明
              </p>
            </Link>
          </div>
          {selectedValue ? (
            <Link to="/register">
              <ExploreButton />
            </Link>
          ) : (
            <ExploreButton onClick={ToastError} />
          )}
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
