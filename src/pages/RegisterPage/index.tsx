import CodeBox from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom from '@components/Login/RegisterInputBox';
import { useRef, useState } from 'react';
import MuiButton from '@mui/material/Button';
import { Link } from 'react-router-dom';

function RegisterPage(): JSX.Element {
  const [code, setCode] = useState<string>('');
  const [vertifyRes, setRes] = useState<string>('');

  const onCodeChange = (data: string) => {
    setCode(data);
  };
  const ChildRef = useRef(!null);
  const CodeRef = useRef(!null);

  const register = () => {
    const a = ChildRef.current.check();
    console.log('🚗--》', a);
    console.log('🚗-code-》', code);
    CodeRef.current.check();
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
      <div className="flex h-full flex-col items-center bg-logobg rounded-tl-[230px]">
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
        <Link to="/startquestion">{RegisterButton}</Link>
      </div>
    </>
  );
}
export default RegisterPage;
