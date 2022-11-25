import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DidUserInfo from '@components/Did/DidUserInfo';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useDidDetail from '@hooks/useDidDetail';
import { styled } from '@mui/material/styles';
import LocalFooter from '@components/Base/LocalFooter';
import WishList from '@components/Did/WishList';
import ButtonActions from '@components/Did/BottomActions';

const CusTabList = styled(TabList)({
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

function DidDetail() {
  const { tabIndex, handleTabIndexChange } = useDidDetail();

  return (
    <div className="p-[16px] pb-[48px] bg-green relative">
      <div className="flex justify-between items-center">
        <ArrowBackIosIcon />
        <span className="flex justify-center items-center rounded-full px-[6px] py-[3px] text-[8px] color-fSelect bg-white">
          DID #0897
        </span>
      </div>
      <DidUserInfo />
      <TabContext value={tabIndex}>
        <CusTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
          <Tab className="pb-0 px-0 min-w-[40px]" label="自我介绍" value="1" />
          <Tab className="pb-0 px-0 min-w-[40px]" label="帖子" value="2" />
        </CusTabList>
        <TabPanel className="h-[180px]" value="1">
          Item One
        </TabPanel>
        <TabPanel className="h-[180px]" value="2">
          Item Two
        </TabPanel>
      </TabContext>
      <LocalFooter />
      <WishList />
      <ButtonActions />
    </div>
  );
}

export default DidDetail;
