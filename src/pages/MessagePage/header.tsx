import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const iconCss = '';
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="fixed h-[44px] w-full flex justify-between items-center pl-[8px] pr-[10px]  z-10">
      <div onClick={back}>
        <ArrowBackIosIcon className="text-[#C1C1C1] p-[8px] text-[36px]" />
      </div>
    </div>
  );
}
export default Header;
