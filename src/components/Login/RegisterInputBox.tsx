import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MuiButton from '@mui/material/Button';
import InputCom from './Input';

function RegisterBox() {
  const endAdornmentCom = (
    <MuiButton
      variant="contained"
      className=" w-[88px] h-[30px] text-white rounded-full bg-black text-[12px]"
    >
      立即注册
    </MuiButton>
  );
  return (
    <>
      <InputCom
        placeholder="输入邮箱"
        className="mt-[64px] pr-[4px]"
        endAdornmentCom={endAdornmentCom}
      >
        <MailOutlineIcon />
      </InputCom>
      <InputCom placeholder="输入密码" className="mt-[20px]">
        <LockOpenIcon />
      </InputCom>
      <InputCom placeholder="再次输入密码" className="mt-[20px]">
        <LockOpenIcon />
      </InputCom>
    </>
  );
}
export default RegisterBox;
