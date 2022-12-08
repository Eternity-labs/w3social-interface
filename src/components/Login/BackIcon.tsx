import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

function BackIconCom(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      className="fixed top-[24px] left-[23px] w-[30px] h-[30px] bg-[#72F9B8] rounded-full flex items-center justify-center"
      onClick={() => navigate(-1)}
    >
      <KeyboardBackspaceIcon />
    </div>
  );
}
export default BackIconCom;
