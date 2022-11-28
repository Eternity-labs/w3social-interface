import * as React from 'react';
import Avatar from '@mui/material/Avatar';

function UserInfo() {
  return (
    <div className="flex w-full">
      <Avatar className="w-[36px] h-[36px] mr-[8px]">H </Avatar>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-black font-medium text-[14px]">vital.eth</span>
          <span className="rounded-full text-[10px] text-black text-opacity-50 bg-white flex justify-center items-center px-[6px] py-[4px] relative top-[4px]">
            DID#0425
          </span>
        </div>
        <div className="text-[10px]">builder</div>
      </div>
    </div>
  );
}

export default UserInfo;
