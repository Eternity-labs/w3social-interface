import useDidArticleCard from '@hooks/useDidArticleCard';
import Avatar from '@mui/material/Avatar';
import cn from 'classnames';

export interface DidBaseArticleCardProps {
  title: string;
  avatar: string;
  userName: string;
  className?: string;
}
interface DidArticleCardProps extends DidBaseArticleCardProps {
  children?: any;
}
function DidArticleCard(props: DidArticleCardProps) {
  const { title, avatar, userName, children, className } = props;

  const { handleToDetail } = useDidArticleCard();
  return (
    <div
      onClick={handleToDetail}
      className={cn(
        'flex flex-col justify-between p-[12px] mb-[12px] rounded-[8px] bg-white',
        className || ''
      )}
    >
      <h4 className="text-[12px] truncate mb-[28px]">{title}</h4>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar className="text-[20px] mr-[8px]">H</Avatar>
          <span className="text-[10px] text-[#363636]">{userName}</span>
        </div>
        {children && children}
      </div>
    </div>
  );
}
export default DidArticleCard;
