import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { MessageInfo } from '@apis/model/SingleuserModel';
import IconButton from '@mui/material/IconButton';
import MessageTip from './MessageTip';

interface ImessageCardProps {
  headSculpture: string;
  id: number;
}

const messageCard = (props: MessageInfo) => {
  const list = ['招发', 'Tok付', 'df人'];
  const { headSculpture, content = 'Hi, 我想认识一下你！', id } = props;
  return (
    <div className="h-[52px] flex">
      <Avatar className="text-[20px] mr-[14px] h-[52px] w-[52px]">
        <img src={headSculpture} alt="avatar" />
      </Avatar>
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
          <div className="flex flex-col items-end justify-between overflow-visible">
            <MessageTip id={id}>
              <IconButton>
                <MoreHorizIcon className="text-[15px]" />
              </IconButton>
            </MessageTip>
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
