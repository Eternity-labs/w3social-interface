import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MuiButton from '@mui/material/Button';
import { useRef, useImperativeHandle, useState } from 'react';
import ErrorTip from '@components/Base/ErrorTip';
import InputCom from './Input';

const emialReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
type InputProps = {
  onRef: any;
};
function RegisterBox(props: InputProps) {
  const { onRef } = props;
  const emailRef = useRef(!null);
  const passRef = useRef(!null);
  const vertifyPassRef = useRef(!null);

  const [errorObj, setError] = useState<any>({
    email: '',
    pass: '',
    vertifyPass: '',
  });
  const checkEmail = () => {
    if (!emailRef.current.value) {
      console.log('aaaaaa');

      setError({
        ...errorObj,
        email: '邮箱不能为空',
      });
    } else if (emialReg.test(emailRef.current.value)) {
      setError({
        ...errorObj,
        email: '邮箱格式错误',
      });
    } else {
      setError({
        ...errorObj,
        email: '',
      });
    }
  };
  const checkPass = () => {
    if (!passRef.current.value) {
      setError({
        ...errorObj,
        pass: '密码不能为空',
      });
    } else {
      setError({
        ...errorObj,
        pass: '',
      });
    }
  };
  const checkVertifyPass = () => {
    if (!vertifyPassRef.current.value) {
      setError({
        ...errorObj,
        vertifyPass: '确认密码不能为空',
      });
    } else if (vertifyPassRef.current.value !== passRef.current.value) {
      setError({
        ...errorObj,
        vertifyPass: '密码不一致',
      });
    } else {
      setError({
        ...errorObj,
        vertifyPass: '',
      });
    }
  };
  const check = () => {
    console.log('aavvvvv');
    checkEmail();
    checkPass();
    checkVertifyPass();
  };
  const getEmailCode = () => {
    checkEmail();
    console.log(emailRef.current.value);
  };
  const endAdornmentCom = (
    <MuiButton
      onClick={getEmailCode}
      variant="contained"
      className=" w-[88px] h-[30px] text-white rounded-full bg-black text-[12px]"
    >
      获取验证码
    </MuiButton>
  );
  useImperativeHandle(onRef, () => {
    // 需要将暴露的接口返回出去
    return {
      check,
    };
  });

  return (
    <>
      <InputCom
        placeholder="输入邮箱"
        className="mt-[64px] pr-[4px]"
        InputRef={emailRef}
        endAdornmentCom={endAdornmentCom}
      >
        <MailOutlineIcon />
      </InputCom>
      <ErrorTip message={errorObj.email} />
      <InputCom placeholder="输入密码" className="mt-[20px]" InputRef={passRef}>
        <LockOpenIcon />
      </InputCom>
      {errorObj.pass && <ErrorTip message={errorObj.pass} />}
      <InputCom placeholder="再次输入密码" className="mt-[20px]" InputRef={vertifyPassRef}>
        <LockOpenIcon />
      </InputCom>
      {errorObj.vertifyPassRef && <ErrorTip message={errorObj.vertifyPassRef} />}
    </>
  );
}

export default RegisterBox;
