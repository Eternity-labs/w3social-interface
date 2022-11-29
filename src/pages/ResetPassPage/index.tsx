import CodeBox from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom from '@components/Login/RegisterInputBox';
import { useRef, useState } from 'react';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/Base/Modal';
import { useCountDown } from 'ahooks';

function RegisterPage(): JSX.Element {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [vertifyRes, setRes] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const onCodeChange = (data: string) => {
    setCode(data);
  };
  const ChildRef = useRef(!null);
  const CodeRef = useRef(!null);

  const modify = () => {
    const a = ChildRef.current.check();
    console.log('🚗--》', a);
    console.log('🚗-code-》', code);
    CodeRef.current.check();
    // 修改成功
    setOpen(true);
  };
  const onEnd = () => {
    navigate('/');
  };
  const [countdown] = useCountDown({ leftTime: 60 * 1000, onEnd });

  const RegisterButton = (
    <MuiButton
      onClick={modify}
      variant="contained"
      className=" w-[250px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
    >
      确认修改
    </MuiButton>
  );
  const ModalContent = (
    <div>
      将在<span className="text-[#1FD47D]">{Math.round(countdown / 1000)}s</span>
      后跳转到登陆页面&gt;&gt;
    </div>
  );
  const modalOptions = {
    title: '已成功修改密码',
    content: ModalContent,
    buttonText: '去登陆',
  };
  const jumpLoginpage = () => {};

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
      <Modal isOpen={isOpen} options={modalOptions} confirm={jumpLoginpage} />
    </>
  );
}
export default RegisterPage;
