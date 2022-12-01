import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ImessageCardProps {
  avatar: string;
}
const messageCard = (props: ImessageCardProps) => {
  const list = ['招发', 'Tok付', 'df人'];

  return (
    <div className="h-[52px] flex">
      <Avatar className="text-[20px] mr-[14px]">H</Avatar>
      <div className="flex flex-col flex-1">
        <div className="flex ">
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
