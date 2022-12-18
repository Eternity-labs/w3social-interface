import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export type UserInfoProps = {
  showDid: boolean;
  name: string;
  identity: string;
  headSculpture: string;
};

function UserInfo({ showDid = false, name, identity, headSculpture }: UserInfoProps) {
  return (
    <div className="flex w-full">
      <Avatar src={headSculpture} className="w-[36px] h-[36px] mr-[8px]">
        H{' '}
      </Avatar>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-black font-medium text-[14px]">{name}</span>
          {showDid && (
            <span className="rounded-full text-[10px] text-black text-opacity-50 bg-white flex justify-center items-center px-[6px] py-[2px] relative top-[4px]">
              DID#0425
            </span>
          )}
        </div>
        <div className="text-[10px]">{identity}</div>
      </div>
    </div>
  );
}

export default UserInfo;
