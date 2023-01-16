import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { calcDays } from '@utils/index';

function TimeAndMore({ time }: any) {
  return (
    <div className="flex justify-end items-center w-[80px] text-grey">
      <span>{calcDays(time)}</span>
      {/* <MoreHorizIcon /> */}
    </div>
  );
}

export default TimeAndMore;
