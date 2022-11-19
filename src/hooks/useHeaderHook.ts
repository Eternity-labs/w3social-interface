import { useState } from 'react';
import cn from 'classnames';

const useHeaderHook = () => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const buttonSwitch = (index: number) => {
    setActiveBtnIndex(index);
  };

  const getButtonClass = (index: number) => {
    const base = 'flex-1 rounded-full m-2 shadow-none';
    return activeBtnIndex === index
      ? cn(base, 'bg-black text-white')
      : cn(base, 'bg-transparent text-black');
  };

  return {
    activeBtnIndex,
    buttonSwitch,
    getButtonClass,
  };
};

export default useHeaderHook;
