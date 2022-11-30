import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const iconCss = '';
  return (
    <div className="fixed h-[44px] w-full flex justify-between items-center pl-[8px] pr-[10px] bg-white z-10">
      <ArrowBackIosIcon className="text-[#C1C1C1] p-[8px] text-[36px]" onClick={navigate(-1)} />
      <MoreHorizIcon className="text-black p-[8px] text-[36px]" />
    </div>
  );
}
export default Header;
