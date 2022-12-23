import * as React from 'react';
import Button from '@mui/material/Button';
import Wechat from '@assets/images/wechat.png';

function ButtonActions({ onArticle, onUserName }: any) {
  return (
    <div className="absolute bottom-[16px] left-0 right-0">
      <div className="flex justify-around mt-[16px] ">
        {/* <Button onClick={onArticle} variant="text" className="text-black">
          查看他的帖子
        </Button> */}
        <Button
          onClick={onUserName}
          variant="outlined"
          className="rounded-full bg-black text-white"
          startIcon={<img alt="wechat" width="24" height="16" src={Wechat} />}
        >
          获取社交账号
        </Button>
      </div>
    </div>
  );
}

export default ButtonActions;
