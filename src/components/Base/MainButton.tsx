import MuiButton from '@mui/material/Button';
import cn from 'classNames';

type MainButtonProps = {
  onClick?: () => void;
  className?: string;
  text: string;
};
function MainButton(props: MainButtonProps) {
  const { onClick, className, text } = props;
  return (
    <MuiButton
      onClick={onClick}
      variant="contained"
      className={cn('w-[250px] h-[38px] rounded-full bg-black text-[12px]', className)}
    >
      {text}
    </MuiButton>
  );
}
export default MainButton;
