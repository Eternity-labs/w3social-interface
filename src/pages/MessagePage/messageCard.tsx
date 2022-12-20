import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { MessageInfo } from '@apis/model/SingleuserModel';
import IconButton from '@mui/material/IconButton';
import cn from 'classnames';
import { calcDays } from '@utils/index';
import MessageTip from './MessageTip';

interface ImessageCardProps {
  headSculpture: string;
  id: number;
}

const messageCard = (props: MessageInfo & { className?: string }) => {
  const {
    headSculpture,
    content = 'Hi, 我想认识一下你！',
    id,
    friendsid,
    nickname,
    identity,
    tag = [],
    className,
    createTime,
  } = props;
  return (
    <div className={cn('flex', className || '')}>
      <Avatar className="text-[20px] mr-[14px] h-[52px] w-[52px]">
        <img src={headSculpture} alt="avatar" />
      </Avatar>
      <div className="flex-1 flex-col">
        <div className="flex">
          <div className="flex flex-col flex-1">
            <div className="flex ">
              <div className="text-[12px] text-black mr-[10px]">{nickname}</div>
              <div className="text-[#666] text-[10px]">{identity}</div>
            </div>
            <div className="mt-[10px]">
              <Labels labels={tag} />
            </div>
          </div>
          <div className="flex flex-col items-end justify-between overflow-visible">
            <MessageTip id={id} friendsid={friendsid}>
              <IconButton>
                <MoreHorizIcon className="text-[15px]" />
              </IconButton>
            </MessageTip>
            <div className="text-[#222] text-[10px]">{calcDays(createTime)}</div>
          </div>
        </div>
        <div className="mt-[12px]">
          <p className="py-[10px] px-[6px] text-[10px] bg-oMainColor rounded-[6px]">
            {content || 'Hi, 我想认识一下你！'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default messageCard;
