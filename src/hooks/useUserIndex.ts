import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useUserIndex = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toUnlock = () => {
    navigate('/unlock');
  };
  return {
    toUnlock,
    navigate,
    isOpen,
    setIsOpen,
  };
};

export default useUserIndex;
