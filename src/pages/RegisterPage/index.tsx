import CodeBox from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom from '@components/Login/RegisterInputBox';
import { useRef } from 'react';
import MuiButton from '@mui/material/Button';

function RegisterPage(): JSX.Element {
  const onCodeChange = (code: string) => {};
  const ChildRef = useRef(!null);
  const register = () => {
    ChildRef.current.check();
  };
  return (
    <>
      <BackIconCom />
      <div className="flex h-full flex-col items-center bg-logobg rounded-tl-[230px]">
        <div className="mt-[48px]">logo</div>
        {/* 表单 */}
        <RegisterInputBoxCom onRef={ChildRef} />
        <CodeBox len={4} className="mt-[50px]" onChange={onCodeChange} />
        <MuiButton
          onClick={register}
          variant="contained"
          className=" w-[250px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
        >
          立即注册
        </MuiButton>
      </div>
    </>
  );
}
export default RegisterPage;
