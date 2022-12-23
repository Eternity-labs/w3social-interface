import * as React from 'react';
import MuiChip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import cn from 'classNames';

interface CusChipProps {
  label: string;
  size?: 'small' | 'medium' | undefined;
  onDelete?: React.EventHandler<any>;
  onClick?: React.MouseEventHandler<any>;
  deleteIcon?: React.ReactNode;
  className?: string;
}

function Chip(props: CusChipProps) {
  const { label, onDelete, onClick, size, deleteIcon, className } = props;

  return (
    <MuiChip
      size={size}
      label={label}
      variant="outlined"
      onClick={onClick}
      onDelete={onDelete}
      deleteIcon={deleteIcon}
      className={cn('border-[#0DCE71] text-[#0DCE71] h-[18px] text-[8px]', className || '')}
    />
  );
}
export default Chip;
