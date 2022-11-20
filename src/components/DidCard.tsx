import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';

function DidCard() {
  return (
    <Card className="p-4 h-120px shadow-none rounded-[12px] bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex mb-[35px]">
        <Avatar className="w-[36px] h-[36px] mr-[8px]">H </Avatar>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="text-black font-medium text-[14px]">vital.eth</span>
            <span className="rounded-full text-[10px] text-black text-opacity-50 bg-white flex justify-center items-center px-[6px] py-[4px]">
              DID#0425
            </span>
          </div>
          <div className="text-[10px]">builder</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Labels labels={['asdf', 'sdhof']} />
        <span className="text-[10px] text-gray-700">两周前</span>
      </div>
    </Card>
  );
}

export default DidCard;
