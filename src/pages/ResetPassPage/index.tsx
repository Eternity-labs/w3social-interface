import CodeBox from '@components/Login/CodeBox';
import BackIconCom from '@components/Login/BackIcon';
import RegisterInputBoxCom from '@components/Login/RegisterInputBox';
import useModal from '@hooks/useModal';
import MuiButton from '@mui/material/Button';

function RegisterPage(): JSX.Element {
  const { showModal, hideModal, RenderModal } = useModal();
  const onCodeChange = (code: string) => {};
  const resetPass = () => {};
  return (
    <>
      <BackIconCom />
      <div className="flex h-full flex-col items-center bg-[#F5F5F5]">
        <div className="mt-[48px]">logo</div>
        <RegisterInputBoxCom />
        <CodeBox len={4} className="mt-[50px]" onChange={onCodeChange} />
        <MuiButton
          onClick={resetPass}
          variant="contained"
          className=" w-[250px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]"
        >
          确认修改
        </MuiButton>
      </div>
      <RenderModal />
    </>
  );
}
export default RegisterPage;
