import * as React from 'react';
import TabList from '@mui/lab/TabList';
import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const CustomTabList = styled(TabList)({
  '& .MuiTab-root': {
    color: '#666666',
  },
  '& .Mui-selected': {
    color: 'black',
  },
  '& .MuiTabs-indicator': {
    'background-color': 'black',
  },
});

export { Tab, TabContext, TabPanel, CustomTabList };
