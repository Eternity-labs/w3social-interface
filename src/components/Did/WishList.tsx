import * as React from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Labels from '@components/Base/Labels';

function WishList() {
  return (
    <div className="flex items-center justify-between mt-[16px]">
      <span className="flex items-center">
        <SentimentSatisfiedAltIcon className="text-fSelect mr-[8px]" />
        北京
      </span>
      <Labels labels={['焦鹏宇', '爱神的箭否', '打扫房间哦i']} type="grey" />
    </div>
  );
}

export default WishList;
