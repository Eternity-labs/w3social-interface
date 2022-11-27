import cn from 'classnames';
import ErrorIcon from '@mui/icons-material/Error';

type ErrorTipProps = {
  message: string;
  className?: string;
  isShowIcon?: boolean;
};
function ErrorTip(props: ErrorTipProps) {
  const { message, className, isShowIcon = false } = props;

  const baseCss = 'text-[#F34747] text-[10px]';
  return (
    <div className={cn(baseCss, className || '')}>
      {isShowIcon && <ErrorIcon className="w-[9px] h-[9px] mr-[5px]" />}
      {message}
    </div>
  );
}
export default ErrorTip;
