import * as React from 'react';
import useDidFilter from '@hooks/useDidFilter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { allFilters } from '@config/didConfig';
import Labels from './Base/Labels';
import FilterItem from './FilterItem';

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
  const { showFilter, showDrawer, filter, filterList, setShowDrawer, handleFilterChange } =
    useDidFilter();

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
          <ExpandRow>
            <IconButton edge="start" className="text-black  mx-0 text-[16px]" aria-label="expand">
              <ExpandMoreIcon />
            </IconButton>
          </ExpandRow>
          <div className="flex border-b-1">
            <div>
              {filterList.map(({ name, value, label }) => (
                <span key={name + value}>{label}</span>
              ))}
            </div>
          </div>
          {allFilters.map(({ label, name, items }, idx) => (
            <FilterItem
              key={name}
              label={label}
              name={name}
              list={items}
              value={filter[name]}
              onChange={handleFilterChange}
            />
          ))}
        </DrawContentBox>
      </CusDraw>
    </div>
  );
}

export default DidFilter;
