import MuiButton from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputCom from '@components/Login/Input';
import DividingLine from '@components/Base/DividingLine';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import ErrorTip from '@components/Base/ErrorTip';
import type { LoginPageUrlParams } from '@routes/types';
import Demo from './demo';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const emailRef = useRef(!null);
  const passRef = useRef(!null);
  const initialError = {
    email: '',
    pass: '',
  };
  const [searchParams] = useSearchParams();
  const [errorObj, setError] = useState({ ...initialError });
  let storageErr = {
    ...initialError,
  };
  const checkEmail = () => {
    if (!emailRef?.current?.value) {
      storageErr = {
        ...storageErr,
        email: '邮箱不能为空',
      };
    } else {
      storageErr = {
        ...storageErr,
        email: '',
      };
    }
  };
  const checkPass = () => {
    if (!passRef?.current?.value) {
      console.log(passRef.current.value);
      storageErr = {
        ...storageErr,
        pass: '密码不能为空',
      };
    } else {
      storageErr = {
        ...storageErr,
        pass: '',
      };
    }
  };
  const login = () => {
    checkEmail();
    checkPass();
    console.log('🚗--》', storageErr);
    setError({ ...storageErr });
    // 发送请求
  };
  const jumpResetPassPage = () => {
    const email = emailRef?.current?.value;
    if (email) {
      navigate(`/resetPass?email=${email}`);
    } else {
      navigate(`/resetPass`);
    }
  };
  return (
    <div className="flex h-full flex-col items-center bg-logoBg rounded-bl-[230px]">
      <Demo />
      <div>logo</div>
      <div className="w-[250px] mt-[64px]">
        <InputCom
          placeholder="请输入邮箱"
          InputRef={emailRef}
          defaultValue={searchParams.get('email') || ''}
        >
          <MailOutlineIcon />
        </InputCom>
        {errorObj.email && <ErrorTip message={errorObj.email} className="pl-[16px]" />}
        <InputCom placeholder="请输入密码" className="mt-[30px]" InputRef={passRef}>
          <LockOpenIcon />
        </InputCom>
        {errorObj.pass && <ErrorTip message={errorObj.pass} className="pl-[16px]" />}
      </div>
      <div
        className="w-[250px] mt-[4px] text-slimGray text-[8px] text-right"
        onClick={jumpResetPassPage}
      >
        忘记密码&nbsp;&gt;&gt;
      </div>

      <MuiButton
        onClick={login}
        variant="contained"
        className=" w-[250px] h-[38px] mt-[14px] rounded-full bg-black text-[12px]"
      >
        登陆
      </MuiButton>
      <DividingLine text="还没有账号 ?" className="mt-[30px]" />
      <Link to="/register">
        <MuiButton
          variant="outlined"
          className=" w-[250px] h-[38px] mt-[26px] border-black text-black rounded-full bg-transparent text-[12px]"
        >
          立即注册
        </MuiButton>
      </Link>
    </div>
  );
}
export default LoginPage;
