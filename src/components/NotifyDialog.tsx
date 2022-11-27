/* eslint-disable import/extensions */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { NotifyDialogProps } from '@type/index';
import { styled } from '@mui/material/styles';
import warningIcon from '@assets/images/warning.png';
import successIcon from '@assets/images/success.png';

const RoundedDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    'border-radius': '16px',
    'min-width': '88vw',
  },
});

function NotifyDialog({
  open,
  type,
  confirmText,
  cancelText,
  contentText,
  handleCancel,
  handleConfirm,
}: NotifyDialogProps) {
  const buttonClass =
    'text-black bg-white text-[10px] rounded-full py-[4px] px-[16px] border-[1px] border-solid border-black ml-[6px] flex justify-center align-center first:bg-black first:text-white';

  return (
    <RoundedDialog open={open} onClose={handleCancel}>
      <DialogContent>
        <p className="flex justify-center items-center h-[100px] box-border p-[6px]">
          {type === 'SUCCESS' ? (
            <img src={successIcon} alt="Success" />
          ) : (
            <img src={warningIcon} alt="Warning" />
          )}
        </p>
        <p className="text-[14px] font-medium">{contentText}</p>
      </DialogContent>
      <DialogActions className="flex justify-around pb-[16px]">
        {confirmText && (
          <span className={buttonClass} onClick={handleConfirm}>
            {confirmText}
          </span>
        )}
        <span className={buttonClass} onClick={handleCancel}>
          {cancelText}
        </span>
      </DialogActions>
    </RoundedDialog>
  );
}

export default NotifyDialog;
