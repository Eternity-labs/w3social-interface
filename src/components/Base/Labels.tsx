import cn from 'classnames';
import { LabelsProps } from '@type/index';

function Labels({ labels, type }: LabelsProps) {
  const getCN = (curType: string = 'black') => {
    const base =
      'text-[10px] rounded-full py-[2px] border-[1px] border-solid px-[8px] ml-[6px] first:ml-[0] flex justify-center items-center';
    if (curType === 'grey') {
      return cn(base, `text-${curType} border-current`);
    }
    if (curType !== 'black') {
      return cn(base, `bg-${curType} text-${curType} border-current`);
    }

    return cn(base, 'bg-black text-white border-black');
  };

  return (
    <div className="flex items-center">
      {labels?.map((label, index) => (
        <span key={label + index} className={getCN(type)}>
          {label}
        </span>
      ))}
    </div>
  );
}

export default Labels;
