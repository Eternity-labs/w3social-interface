import MuiButton from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputCom from '@components/Login/Input';

function LoginPage(): JSX.Element {
  return (
    <div className="flex h-full flex-col items-center bg-logobg rounded-bl-[230px]">
      <div>logo</div>
      <div className="w-[250px] mt-[64px]">
        <InputCom placeholder="请输入邮箱">
          <MailOutlineIcon />
        </InputCom>
        <InputCom placeholder="请输入密码" className="mt-[30px]">
          <LockOpenIcon />
        </InputCom>
      </div>
      <div className="w-[250px] mt-[4px] text-slimgray text-[8px] text-right">
        忘记密码&nbsp;&gt;&gt;
      </div>
      <MuiButton
        variant="contained"
        className=" w-[250px] h-[38px] mt-[14px] rounded-full bg-black text-[12px]"
      >
        登陆
      </MuiButton>
      <div className="mt-[48px] flex h-[16px] items-center justify-center">
        <div className="h-px w-[80px] bg-[#878787] " />
        <p className="h-[8px] ml-[19px] leading-[8px] mr-[19px] text-slimgray text-[8px] ">
          还没有账号 ？
        </p>
        <div className="h-px w-[80px]  bg-[#878787]" />
      </div>
      <MuiButton
        variant="outlined"
        className=" w-[250px] h-[38px] mt-[26px] border-black text-black rounded-full bg-transparent text-[12px]"
      >
        立即注册
      </MuiButton>
    </div>
  );
}
export default LoginPage;
