import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import useDidDetail from '@hooks/useDidDetail';
import UserService from '@apis/services/SingleuserService';
import { useQuery } from 'react-query';
import useStore from '@states/useStore';
import Header from './header';
import MessageCard from './messageCard';

function MessagePage() {
  const { userInfo } = useStore();
  const { tabIndex, handleTabIndexChange, handleBack } = useDidDetail();
  const MessageQuery = useQuery(
    'getMessage',
    () => UserService.getMessage({ userId: userInfo!.id }),
    {
      enabled: !!userInfo?.id,
    }
  );
  return (
    <div>
      <Header />
      <div className="pt-[58px] px-[30px]">
        <TabContext value={tabIndex}>
          <CustomTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
            <Tab className="pb-0 px-0 min-w-[40px]" label="新消息" value="1" />
            {/* <Tab className="pb-0 px-0 min-w-[40px]" label="已读" value="2" /> */}
          </CustomTabList>
          <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="1">
            {MessageQuery?.data &&
              MessageQuery?.data!.map((item, index) => {
                return <MessageCard {...MessageQuery.data[index]} key={index} />;
              })}
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
