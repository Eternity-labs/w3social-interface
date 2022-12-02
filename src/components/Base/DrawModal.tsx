import * as React from 'react';
import useDidFilter from '@hooks/useDidFilter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { allFilters } from '@config/didConfig';
import ClearIcon from '@mui/icons-material/Clear';
import SyncIcon from '@mui/icons-material/Sync';
import Labels from './Labels';
import FilterItem from '../FilterItem';

const CusDraw = styled(Drawer)({
  '& .MuiPaper-root': {
    'border-radius': '30px 30px 0 0',
  },
});

const DrawContentBox = styled('div')({
  'min-height': '45vh',
  padding: '0 16px',
  'box-sizing': 'border-box',
});

const ExpandRow = styled('div')`
  height: '30px';
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export interface BaseDrawProps {
  isOpen: boolean;
  closeDrawModal: <T>(data?: T) => void;
  children?: JSX.Element;
}
function Draw(props: BaseDrawProps) {
  const { isOpen, closeDrawModal, children } = props;
  return (
    <div className="flex">
      <CusDraw anchor="bottom" open={isOpen} onClose={closeDrawModal}>
        <DrawContentBox>
          <ExpandRow onClick={closeDrawModal}>
            <IconButton edge="start" className="text-black  mx-0 text-[16px]" aria-label="expand">
              <ExpandMoreIcon />
            </IconButton>
          </ExpandRow>
          {children}
        </DrawContentBox>
      </CusDraw>
    </div>
  );
}

export default Draw;
