import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function TimeAndMore() {
  return (
    <div className="flex justify-between items-center w-[80px] text-grey">
      <span>两周前</span>
      <MoreHorizIcon />
    </div>
  );
}

export default TimeAndMore;
