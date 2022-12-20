import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Labels from '@components/Base/Labels';

type Props = { nickname: string; identity: string; img: string; tag: string[] };

function DidUserInfo({ nickname, identity, img, tag }: Props) {
  return (
    <div className="flex py-[24px] border-0 border-b-[1px] border-solid border-fSelect  ">
      <Avatar src={img} className="w-[70px] h-[70px] mr-[24px]">
        {img}
      </Avatar>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex mb-1">
            <span className="text-black font-semibold text-[14px]">{nickname}</span>
          </div>
          <div className="text-[10px] font-medium text-grey">{identity}</div>
        </div>
        <Labels labels={tag} />
      </div>
    </div>
  );
}

export default DidUserInfo;
