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
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 4px',
      color: 'black',
      'font-size': '10px',
    },
  }));

  return (
    <div className="flex justify-around item-content w-[120px]">
      <StyledBadge badgeContent={thumbCount || ''}>
        <ThumbUpAltIcon className={cn(thumbCount ? 'text-fSelect' : '')} />
      </StyledBadge>
      <ChatBubbleOutlineIcon />
      <OpenInNewIcon />
    </div>
  );
}

export default UserActions;
