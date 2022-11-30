import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import useDidDetail from '@hooks/useDidDetail';
import Header from './header';

function MessagePage() {
  const { tabIndex, handleTabIndexChange, handleBack } = useDidDetail();

  return (
    <div>
      <Header />
      <div className="pt-[58px] px-[30px]">
        <TabContext value={tabIndex}>
          <CustomTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
            <Tab className="pb-0 px-0 min-w-[40px]" label="新消息" value="1" />
            <Tab className="pb-0 px-0 min-w-[40px]" label="已读" value="2" />
          </CustomTabList>
          <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="1">
            <div>新消息</div>
          </TabPanel>
          <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="2">
            <div>已读</div>
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
}
export default MessagePage;
