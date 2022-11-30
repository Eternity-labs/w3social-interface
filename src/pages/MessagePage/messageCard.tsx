import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ImessageCardProps {
  avatar: string;
}
const messageCard = (props: ImessageCardProps) => {
  const list = ['招募开发', 'Token支付', '寻找合伙人'];

  return (
    <div className="h-[52px]">
      <Avatar className="text-[20px] mr-[14px]">H</Avatar>
      <div>
        <div>
          <div>此用户身份</div>
          <div>Builder</div>
        </div>
        <Labels labels={list} />
      </div>
      <div>
        <MoreHorizIcon />
        <div>2分钟前</div>
      </div>
    </div>
  );
};
export default messageCard;
