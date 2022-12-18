import * as React from 'react';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { UserActionsProps } from '@type/index';
import Icon from '@mui/material/Icon';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  position: 'relative',
  '& .MuiBadge-badge': {
    right: -5,
    top: '7px',
    padding: '0 4px',
    color: 'black',
    'font-size': '14px',
  },
}));
function UserActions(props: UserActionsProps) {
  const { thumbCount = 0, onLike, onComment, isLike } = props;

  const iconCss = 'h-[30px] flex items-center pl-[5px] pr-[5px]';
  return (
    <div className="flex items-center justify-end w-[100px] text-[10px] h-[40px]">
      <div onClick={onLike} className={iconCss}>
        <StyledBadge badgeContent={thumbCount || 0}>
          {isLike ? (
            <ThumbUpAltIcon className="text-fSelect text-[16px]" />
          ) : (
            <ThumbUpAltOutlinedIcon className="text-[16px]" />
          )}
        </StyledBadge>
      </div>

      {/* <div onClick={onComment} className={iconCss}>
        <ChatBubbleOutlineIcon className="text-[16px]" />
      </div> */}
      {/* <div className={iconCss}>
        <OpenInNewIcon className="text-[16px]" />
      </div> */}
    </div>
  );
}

export default UserActions;
