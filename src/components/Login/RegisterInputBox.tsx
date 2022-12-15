import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MuiButton from '@mui/material/Button';
import { useRef, useImperativeHandle, useState, forwardRef } from 'react';
import ErrorTip from '@components/Base/ErrorTip';
import LoginServices from '@apis/services/LoginService';
import { useMutation } from 'react-query';
import { useCountDown } from 'ahooks';
import InputCom from './Input';
// 2min倒计时
const COUNTDOWN = 2 * 60 * 1000;
const emialReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
type InputProps = {
  onRef: any;
  type?: number;
};
function RegisterBox(props: InputProps, ref: any) {
  const { onRef, type = 1 } = props;
  const emailRef = useRef<HTMLInputElement>();
  const passRef = useRef<HTMLInputElement>();
  const vertifyPassRef = useRef<HTMLInputElement>();
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {},
  });
  const [errorObj, setError] = useState<any>({
    email: '',
    pass: '',
    vertifyPass: '',
  });
  const SendCodeMutation = useMutation(LoginServices.sendCode, {
    onSuccess: () => {
      setTargetDate(Date.now() + COUNTDOWN);
    },
  });
  let errorData = {
    email: '',
    pass: '',
    vertifyPass: '',
  };
  const checkEmail = () => {
    if (!emailRef.current!.value) {
      errorData = {
        ...errorData,
        email: '邮箱不能为空',
      };
    } else if (!emialReg.test(emailRef.current!.value)) {
      errorData = {
        ...errorData,
        email: '邮箱不符合规范',
      };
    } else {
      errorData = {
        ...errorData,
        email: '',
      };
    }
  };
  const checkPass = () => {
    if (!passRef.current!.value) {
      errorData = {
        ...errorData,
        pass: '密码不能为空',
      };
    } else {
      errorData = {
        ...errorData,
        pass: '',
      };
    }
  };
  const checkVertifyPass = () => {
    if (!vertifyPassRef.current!.value) {
      errorData = {
        ...errorData,
        vertifyPass: '确认密码不能为空',
      };
    } else if (vertifyPassRef.current!.value !== passRef.current!.value) {
      errorData = {
        ...errorData,
        vertifyPass: '密码不一致',
      };
    } else {
      errorData = {
        ...errorData,
        vertifyPass: '',
      };
    }
  };

  const getEmailCode = async () => {
    checkEmail();
    setError(errorData);
    if (!errorData.email) {
      SendCodeMutation.mutate({
        loginInfo: {
          email: emailRef.current!.value,
        },
        type,
      });
    }
  };
  const check = (): null | { email: string; pass: string } => {
    checkEmail();
    checkPass();
    checkVertifyPass();
    setError(errorData);
    if (!errorData.email && !errorData.vertifyPass && !errorData.pass) {
      return {
        email: emailRef.current!.value,
        pass: passRef.current!.value,
      };
    }
    return null;
  };
  const endAdornmentCom = () => {
    if (SendCodeMutation.isLoading) {
      return (
        <MuiButton
          variant="contained"
          className=" w-[88px] h-[30px] text-white rounded-full bg-slimGray text-[12px]"
        >
          正在发送中...
        </MuiButton>
      );
    }
    if (countdown) {
      return (
        <MuiButton
          variant="contained"
          className=" w-[88px] h-[30px] text-white rounded-full bg-slimGray text-[12px]"
        >
          {Math.round(countdown / 1000)}s
        </MuiButton>
      );
    }
    return (
      <MuiButton
        onClick={getEmailCode}
        variant="contained"
        className=" w-[88px] h-[30px] text-white rounded-full bg-black  text-[12px]"
      >
        获取验证码
      </MuiButton>
    );
  };
  useImperativeHandle(onRef, () => {
    // 需要将暴露的接口返回出去
    return {
      check,
    };
  });
  const errorTipCSS = 'w-[250px] pl-[16px]';
  return (
    <>
      <InputCom
        placeholder="输入邮箱"
        className="mt-[64px] pr-[4px]"
        InputRef={emailRef}
        endAdornmentCom={endAdornmentCom()}
      >
        <MailOutlineIcon />
      </InputCom>
      <ErrorTip message={errorObj.email} className={errorTipCSS} />
      <InputCom placeholder="输入密码" className="mt-[20px]" InputRef={passRef} type="password">
        <LockOpenIcon />
      </InputCom>
      {errorObj.pass && <ErrorTip message={errorObj.pass} className={errorTipCSS} />}
      <InputCom
        placeholder="再次输入密码"
        className="mt-[20px]"
        InputRef={vertifyPassRef}
        type="password"
      >
        <LockOpenIcon />
      </InputCom>
      {errorObj.vertifyPassRef && <ErrorTip message={errorObj.vertifyPassRef} />}
      <ErrorTip message={errorObj.vertifyPass} className={errorTipCSS} />
    </>
  );
}
export type RegisterBoxHandle = {
  check: () => { email: string; pass: string };
};

export default forwardRef<RegisterBoxHandle, InputProps>(RegisterBox);
