import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

interface Headerprops {
  left?: JSX.Element;
  right?: JSX.Element;
  title?: string | JSX.Element;
}
function Header(props: Headerprops) {
  const { left, right, title } = props;
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="fixed h-[44px] w-full flex items-center justify-between pr-[10px] bg-white z-10">
      {left || (
        <div onClick={back} className="w-[44px] h-[44px] flex items-center justify-center">
          <ArrowBackIosIcon className="text-[#C1C1C1] p-[8px] text-[36px]" />
        </div>
      )}
      {title === 'string' ? <div className="flex-1">{title}</div> : title}
      {right || ''}
    </div>
  );
}
export default Header;
