import * as React from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Labels from '@components/Base/Labels';

type WishType = { tags: string[] };

function WishList({ tags }: WishType) {
  return (
    <div className="flex items-center justify-between mt-[16px]">
      <span className="flex items-center">
        <SentimentSatisfiedAltIcon className="text-fSelect mr-[8px]" />
        愿望清单
      </span>
      <Labels labels={tags} type="grey" />
    </div>
  );
}

export default WishList;
