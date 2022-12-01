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
      <Avatar className="text-[20px] mr-[14px] h-[52px] w-[52px]">H</Avatar>
      <div className="flex-1 flex-col">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <div className="flex ">
              <div className="text-[12px] text-black mr-[10px]">此用户身份</div>
              <div className="text-[#666] text-[10px]">Builder</div>
            </div>
            <div className="mt-[10px]">
              <Labels labels={list} />
            </div>
          </div>
          <div className="flex flex-col items-end justify-between">
            <MoreHorizIcon className="text-[15px]" />
            <div className="text-[#222] text-[10px]">2分钟前</div>
          </div>
        </div>
        <div className="mt-[12px]">
          <p className="py-[10px] px-[6px] text-[10px] bg-oMainColor rounded-[6px]">
            你好，我想认识一下你，我们正在招募小伙伴
          </p>
        </div>
      </div>
    </div>
  );
};

export default messageCard;
