import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ButtonActions() {
  return (
    <div className="absolute bottom-[16px] left-0 right-0">
      <div className="flex justify-between mt-[16px] ">
        <Button variant="text" className="text-black">
          查看他的帖子
        </Button>
        <Button
          variant="outlined"
          className="rounded-full bg-black text-white"
          startIcon={<ArrowBackIosIcon />}
        >
          获取社交账号
        </Button>
      </div>
    </div>
  );
}

export default ButtonActions;
