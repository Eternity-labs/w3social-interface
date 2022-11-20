import * as React from 'react';
import useDidFilter from '@hooks/useDidFilter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Labels from './Base/Labels';

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

function DidFilter() {
  const { showFilter, showDrawer, setShowDrawer } = useDidFilter();

  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        {showFilter ? <Labels labels={['asf', 'adg']} /> : <span>全部</span>}
      </div>

      <IconButton
        edge="start"
        className="text-black  mx-0 rotate-90 text-[16px]"
        aria-label="menu"
        onClick={() => setShowDrawer(true)}
      >
        <TuneIcon />
      </IconButton>
      <CusDraw anchor="bottom" open={showDrawer} onClose={() => setShowDrawer(false)}>
        <DrawContentBox>
          <ExpandRow className=" p-[16px] flex items-center justify-center">
            <IconButton
              edge="start"
              className="text-black  mx-0 rotate-90 text-[16px]"
              aria-label="expand"
            >
              <ExpandMoreIcon />
            </IconButton>
          </ExpandRow>
        </DrawContentBox>
      </CusDraw>
    </div>
  );
}

export default DidFilter;
