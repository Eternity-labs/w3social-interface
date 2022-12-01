import { useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return { isOpen, handleOpen };
};
export default useModal;
