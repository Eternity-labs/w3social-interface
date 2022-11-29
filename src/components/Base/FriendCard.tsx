import Avatar from '@mui/material/Avatar';
import * as React from 'react';

function FriendCard() {
  return (
    <div className="flex w-[150px] h-[82px] box-border p-[12px] border-solid bg-white border-[1px] border-transparent rounded-[10px]">
      <Avatar className="w-[36px] h-[36px] mr-[14px]">H </Avatar>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-black font-medium text-[14px]">vital.eth</span>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
