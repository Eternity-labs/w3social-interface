import CodeBox, { CodeBoxHandle } from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom, { RegisterBoxHandle } from '@components/Login/RegisterInputBox';
import { useRef, useState } from 'react';
import MuiButton from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '@apis/services/LoginService';
import { IRegisterReq } from '@apis/model/LoginModel';

function RegisterPage(): JSX.Element {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [vertifyRes, setRes] = useState<string>('');

  const onCodeChange = (data: string) => {
    setCode(data);
  };
  const RegisInfoRef = useRef<RegisterBoxHandle>();
  const CodeRef = useRef<CodeBoxHandle>();

  const register = () => {
    const regisInfoRes = RegisInfoRef.current!.check();
    const codeRes = CodeRef.current!.check();

    if (!regisInfoRes || !codeRes) {
      return;
    }
    console.log(regisInfoRes);
    console.log(codeRes);

    const params: IRegisterReq = {
      loginInfo: {
        email: regisInfoRes.email,
        password: regisInfoRes.pass,
      },
      code: String(codeRes),
    };
    LoginService.register(params).then(res => {
      console.log('汽车🚗---》', res);
    });
  };
  const RegisterButton = (
    <MuiButton
      onClick={register}
      variant="contained"
      className=" w-[250px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
    >
      立即注册
    </MuiButton>
  );
  return (
    <>
      <BackIconCom />
      <div className="flex h-full flex-col items-center bg-logoBg rounded-tl-[230px]">
        <div className="mt-[48px]">logo</div>
        {/* 表单 */}
        <RegisterInputBoxCom onRef={RegisInfoRef} />
        <CodeBox
          len={4}
          className="mt-[50px]"
          onChange={onCodeChange}
          onRef={CodeRef}
          isCodeError={false}
        />
        {RegisterButton}
      </div>
    </>
  );
}
export default RegisterPage;
