import { useState } from 'react';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

const useHeaderHook = () => {
  const navigate = useNavigate();
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  const [needNotify, setNeedNotify] = useState(true);
  const paths = ['', 'square'];

  const buttonSwitch = (index: number) => {
    setActiveBtnIndex(index);
    navigate(paths[index], { replace: true });
  };

  const getButtonClass = (index: number) => {
    const base = 'flex-1 rounded-full m-[5px] h-[25px] shadow-none transition-colors';
    return activeBtnIndex === index
      ? cn(base, 'bg-black text-white ')
      : cn(base, 'bg-transparent text-black');
  };

  return {
    activeBtnIndex,
    needNotify,
    buttonSwitch,
    getButtonClass,
  };
};

export default useHeaderHook;
