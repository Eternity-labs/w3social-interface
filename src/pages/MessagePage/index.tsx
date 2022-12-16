import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import useDidDetail from '@hooks/useDidDetail';
import UserService from '@apis/services/SingleuserService';
import { useQuery } from 'react-query';
import useStore from '@states/useStore';
import { Message } from '@mui/icons-material';
import NoDataImg from '@assets/images/noData.png';
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
    <>
      <Header />
      <div className="h-full">
        <div className="pt-[58px] px-[30px] h-full flex flex-col">
          {MessageQuery?.data &&
            MessageQuery?.data!.map((item, index) => {
              return (
                <MessageCard
                  {...MessageQuery.data[index]}
                  key={index}
                  className={index > 0 ? 'mt-[20px]' : ''}
                />
              );
            })}
          {!MessageQuery?.data?.length && (
            <div className="flex flex-col items-center justify-center mt-[30px]">
              <img src={NoDataImg} alt="noData" className="w-[240px]" />
              <p>暂无数据...</p>
            </div>
          )}
          {/* <TabContext value={tabIndex}>
            <CustomTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
              <Tab className="pb-0 px-0 min-w-[40px]" label="新消息" value="1" />
              <Tab className="pb-0 px-0 min-w-[40px]" label="已读" value="2" />
            </CustomTabList>
            <TabPanel className="flex-1 px-0" value="1">
              {MessageQuery?.data &&
                MessageQuery?.data!.map((item, index) => {
                  return (
                    <MessageCard
                      {...MessageQuery.data[index]}
                      key={index}
                      className={index > 0 ? 'mt-[20px]' : ''}
                    />
                  );
                })}
              {!MessageQuery?.data?.length && (
                <div className="flex flex-col items-center justify-center mt-[30px]">
                  <img src={NoDataImg} alt="noData" className="w-[240px]" />
                  <p>暂无数据...</p>
                </div>
              )}
            </TabPanel>
            <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="2">
              <div>已读</div>
            </TabPanel>
          </TabContext> */}
        </div>
      </div>
    </>
  );
}
export default MessagePage;
