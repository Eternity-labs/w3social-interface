import * as React from 'react';
import cn from 'classnames';
import { LabelsProps } from '@types/index';

function Labels({ labels, type }: LabelsProps) {
  const getCN = (curType: string = 'black') => {
    const base =
      'text-[10px] rounded-full py-[3px] border-[1px] border-solid px-[6px] ml-[6px] first:ml-[0] flex justify-center align-center';
    console.log(curType);
    if (curType !== 'black') {
      return cn(base, `bg-${curType} text-${curType} border-current`);
    }

    return cn(base, 'bg-black text-white border-black');
  };

  return (
    <div className="flex">
      {labels.map(label => (
        <span key={label} className={getCN(type)}>
          {label}
        </span>
      ))}
    </div>
  );
}

export default Labels;
