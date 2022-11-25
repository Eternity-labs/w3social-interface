import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import cn from 'classnames';

type UnlockDidItemProps = {
  icon: string;
  feature: string;
  desc: string;
  className?: string;
};
function UnlockDidItem(props: UnlockDidItemProps) {
  const { icon, feature, desc, className } = props;
  return (
    <div className={cn('flex items-center', className || '')}>
      <AudiotrackIcon />
      <div className="flex-1 flex flex-col justify-between ml-[30px]">
        <span className="text-black">{feature}</span>
        <span className="text-[#908c8c]">{desc}</span>
      </div>
    </div>
  );
}
export default UnlockDidItem;
