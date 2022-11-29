import * as React from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import cn from 'classnames';
import { UserActionsProps } from '@type/index';

function UserActions({ thumbCount = 4 }: UserActionsProps) {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    position: 'relative',
    left: thumbCount ? '-4px' : 0,

    '& .MuiBadge-badge': {
      right: -3,
      top: 10,
      padding: '0 4px',
      color: 'black',
      'font-size': '14px',
    },
  }));

  return (
    <div className="flex justify-evenly items-end w-[100px] text-[10px]">
      <StyledBadge badgeContent={thumbCount || ''}>
        <ThumbUpAltIcon className={cn(thumbCount ? 'text-fSelect' : '', 'text-[16px]')} />
      </StyledBadge>
      <ChatBubbleOutlineIcon className="text-[16px]" />
      <OpenInNewIcon className="text-[16px]" />
    </div>
  );
}

export default UserActions;
