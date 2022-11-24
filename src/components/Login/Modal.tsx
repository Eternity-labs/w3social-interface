import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
export interface CustomModalProps {
  id?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onOpen: () => void;
}
function CustomModal(props: CustomModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { children, onOpen } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        {children}
      </BootstrapDialog>
    </div>
  );
}
