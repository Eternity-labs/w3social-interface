import CodeBox from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom from '@components/Login/RegisterInputBox';
import { useRef, useState } from 'react';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import ModifyModal from '@components/Login/ModifyModal';

function RegisterPage(): JSX.Element {
  const navigate = useNavigate();

  const [code, setCode] = useState<string>('');
  const [vertifyRes, setRes] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [modifyValue, setModifyValue] = useState({ email: '', pass: '' });
  const onCodeChange = (data: string) => {
    setCode(data);
  };
  const ChildRef = useRef(!null);
  const CodeRef = useRef(!null);

  const modify = () => {
    const value = ChildRef.current.check();
    setModifyValue(value);
    console.log('🚗-code-》', code);
    CodeRef.current.check();
    // 修改成功
    setOpen(true);
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
