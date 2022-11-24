import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const CustomModal = styled(Dialog)({});
type RenderModalProps = {
  children: any;
};
const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  function RenderModal(props: RenderModalProps) {
    const { children } = props;
    return <CustomModal open={isVisible}>{children}</CustomModal>;
  }
  return {
    showModal,
    hideModal,
    RenderModal,
  };
};
export default useModal;
