import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = styled(Dialog)({});
export type RenderModalProps = {
  children?: any;
  isOpen: boolean;
  confirm?: () => void;
  handleClose?: () => void;
  isShowExit?: boolean;
  options?: {
    title: string;
    content: string | JSX.Element;
    buttonText?: string;
    customButton?: JSX.Element;
  };
};
function Modal(props: RenderModalProps) {
  const { isOpen, options, children = null, confirm, handleClose, isShowExit = true } = props;
  const ButtonCom = options?.buttonText && (
    <Button
      onClick={confirm}
      variant="contained"
      className="w-[80px] h-[27px] mt-[45px] rounded-full bg-black flex items-center justify-center text-[12px]"
    >
      {options?.buttonText}
    </Button>
  );
  const close = () => {
    handleClose?.();
  };
  return (
    <CustomModal open={isOpen}>
      {(children && (
        <div className="w-[300px] py-[25px] px-[15px] flex flex-col items-center">{children}</div>
      )) || (
        <div className="w-[300px] pt-[52px] pb-[27px] pl-[30px] pr-[30px] box-border flex flex-col items-center">
          <div className="text-black text-[14px] text-center">{options?.title}</div>
          <div className="text-[#515151] text-[10px] mt-[18px] text-center">{options?.content}</div>
          <div>{options?.buttonText ? Button : options?.customButton}</div>
        </div>
      )}
      {isShowExit && (
        <div className="absolute right-[0] top-[0]" onClick={close}>
          <CloseIcon className="text-[40px] p-[10px]" />
        </div>
      )}
    </CustomModal>
  );
}
export default Modal;
