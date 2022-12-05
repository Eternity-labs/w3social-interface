import CodeBox, { CodeBoxHandle } from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom, { RegisterBoxHandle } from '@components/Login/RegisterInputBox';
import { useRef, useState } from 'react';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ModifyModal from '@components/Login/ModifyModal';
import useModal from '@hooks/useModal';
import { IchangePasswordReq } from '@apis/model/LoginModel';
import LoginService from '@apis/services/LoginService';

function RegisterPage(): JSX.Element {
  const navigate = useNavigate();

  const [code, setCode] = useState<string>('');
  const { isOpen, handleOpen } = useModal();
  const [modifyValue, setModifyValue] = useState({ email: '', pass: '' });
  const onCodeChange = (data: string) => {
    setCode(data);
  };
  const ChildRef = useRef<RegisterBoxHandle>();
  const CodeRef = useRef<CodeBoxHandle>();

  const modify = async () => {
    const regisInfoRes = ChildRef.current!.check();
    const codeRes = CodeRef.current!.check();

    if (!regisInfoRes || !codeRes) {
      return;
    }
    setModifyValue(regisInfoRes);
    const params: IchangePasswordReq = {
      loginInfo: {
        email: regisInfoRes.email,
        password: regisInfoRes.pass,
      },
      code: String(codeRes),
    };
    LoginService.changePassword(params).then(res => {
      if (res.code === 200 && res.data.token) {
        handleOpen();
      }
    });
  };

  const jumpLoginpage = () => {
    navigate(`/?email=${modifyValue.email}`);
  };
  const RegisterButton = (
    <MuiButton
      onClick={modify}
      variant="contained"
      className=" w-[250px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
    >
      确认修改
    </MuiButton>
  );

  return (
    <>
      <BackIconCom />
      <div className="flex h-full flex-col items-center bg-[#F5F5F5]">
        <div className="mt-[48px]">logo</div>
        {/* 表单 */}
        <RegisterInputBoxCom onRef={ChildRef} />
        <CodeBox
          len={4}
          className="mt-[50px]"
          onChange={onCodeChange}
          onRef={CodeRef}
          isCodeError={false}
        />
        {RegisterButton}
      </div>
      {isOpen && <ModifyModal isOpen={isOpen} confirm={jumpLoginpage} />}
    </>
  );
}
export default RegisterPage;
