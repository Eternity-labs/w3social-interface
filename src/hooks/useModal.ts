import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { CustomModalProps } from '@components/Login/Modal';

const CustomModal = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
type RenderModalProps = {
  children: any;
};
const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const RenderModal = (props: RenderModalProps) => {
    const { children } = props;
    // return (
    //   <div>logo</div>
    // )
    // return isVisible ?
    // <></>
    //  <CustomModal open={isVisible}  onClose={hideModal}>{children}</CustomModal>
    //   : ""
  };
  return {
    showModal,
    hideModal,
    RenderModal,
  };
};
