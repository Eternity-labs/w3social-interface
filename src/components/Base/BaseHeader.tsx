import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  left?: JSX.Element;
  right?: JSX.Element;
  title?: string | JSX.Element;
  onRight?: () => void;
}
function BaseHeader(props: HeaderProps) {
  const { left, right, title, onRight } = props;
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const handleRight = () => {
    onRight?.();
  };
  return (
    <div className="h-[44px] fixed top-0 w-full flex items-center justify-between px-[16px] bg-white z-10">
      <div onClick={back} className="h-[36px] w-[36px] flex items-center">
        <ArrowBackIosIcon className="text-[#C1C1C1] text-[16px]" />
      </div>
      {typeof title === 'string' ? (
        <div className="flex-1 text-center font-semibold">{title}</div>
      ) : (
        title
      )}
      <div onClick={handleRight} className="h-[36px] w-[36px] flex items-center">
        {' '}
        {right}
      </div>
    </div>
  );
}
export default BaseHeader;
