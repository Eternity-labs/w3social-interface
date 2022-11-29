import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/button';

const CustomModal = styled(Dialog)({});
type RenderModalProps = {
  children?: any;
  isOpen: boolean;
  confirm?: () => void;

  options: {
    title: string;
    content: string | JSX.Element;
    buttonText?: string;
    customButton?: JSX.Element;
  };
};
function Modal(props: RenderModalProps) {
  const { isOpen, options, children = null, confirm } = props;
  const Button = (
    <MuiButton
      onClick={confirm}
      variant="contained"
      className=" w-[80px] h-[27px] mt-[45px] rounded-full bg-black text-[12px]"
    >
      登陆
    </MuiButton>
  );
  return (
    <CustomModal open={isOpen}>
      {children || (
        <div className="w-[300px] pt-[52px] pb-[27px] pl-[30px] pr-[30px] box-border flex flex-col items-center">
          <div className="text-black text-[14px] text-center">{options.title}</div>
          <div className="text-[#515151] text-[10px] mt-[18px] text-center"> {options.content}</div>
          <div>{options.buttonText ? Button : options.customButton}</div>
        </div>
      )}
    </CustomModal>
  );
}
export default Modal;
