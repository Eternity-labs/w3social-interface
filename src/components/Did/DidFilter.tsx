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
import Labels from '../Base/Labels';
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

function DidFilter(props: any) {
  const {
    showFilter,
    showDrawer,
    filter,
    filterList,
    filterLabel,
    setShowDrawer,
    handleFilterChange,
    handleCloseFilterModal,
  } = useDidFilter(props);

  return (
    <div className="flex justify-between items-center">
      <div className="flex-1">
        {showFilter ? <Labels labels={filterLabel} /> : <span>全部</span>}
      </div>

      <IconButton
        edge="start"
        className="text-black  mx-0 rotate-90 text-[16px]"
        aria-label="menu"
        onClick={() => setShowDrawer(true)}
      >
        <TuneIcon />
      </IconButton>
      <CusDraw anchor="bottom" open={showDrawer} onClose={handleCloseFilterModal}>
        <DrawContentBox>
          <ExpandRow onClick={handleCloseFilterModal}>
            <IconButton edge="start" className="text-black  mx-0 text-[16px]" aria-label="expand">
              <ExpandMoreIcon />
            </IconButton>
          </ExpandRow>
          <div className="flex border-0 border-b border-solid justify-between h-[60px]">
            <div className="flex flex-wrap">
              {filterList.map(({ name, value, label }) => (
                <div
                  key={name + value}
                  className="text-fSelect text-[10px] min-w-[60px] h-[24px] flex items-center justify-between px-[8px] py-[2px] rounded-full border-solid border-[1px] ml-[12px] first:ml-0"
                >
                  <span>{label}</span>
                  <ClearIcon
                    className="text-[10px]"
                    onClick={() => handleFilterChange({ [name]: 0 }, 'DELETE')}
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] flex-shrink-0 text-fSelect w-[80px] flex justify-end">
              <span className="h-[12px]" onClick={() => handleFilterChange({ a: 0 }, 'CLEAR')}>
                清除全部
                <SyncIcon className="text-[10px]" />
              </span>
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
