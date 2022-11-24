import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';

function DidUserInfo() {
  return (
    <div className="flex py-[24px] border-0 border-b-[1px] border-solid border-fSelect  ">
      <Avatar className="w-[70px] h-[70px] mr-[24px]">H </Avatar>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex mb-1">
            <span className="text-black font-semibold text-[14px]">vital.eth</span>
          </div>
          <div className="text-[10px] font-medium text-grey">builder</div>
        </div>
        <Labels labels={['asdfas', 'asdfasas']} />
      </div>
    </div>
  );
}

export default DidUserInfo;
