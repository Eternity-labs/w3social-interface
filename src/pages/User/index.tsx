import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import FriendCard from '@components/Base/FriendCard';
import DidArticleCard from '@components/Did/DidArticleCard';
import DidCard from '@components/Did/DidCard';
import Avatar from '@mui/material/Avatar';
import HttpsIcon from '@mui/icons-material/Https';
import SwipeCard from '@components/User/SwipeCard';
import useUserIndex from '@hooks/useUserIndex';
import BaseHeader from '@components/Base/BaseHeader';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Draw from '@components/Base/DrawModal';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';
import ArticleList from '@components/ArticleList';
import { useWallet } from '@hooks/useWallet';
import { metaMask } from '@connector/metaMask';
import { useEffect } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { replaceAccount } from '@utils/index';

function UserInfoDetail() {
  const navigate = useNavigate();
  const { account } = useWallet();
  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);
  const {
    toUnlock,
    isOpen,
    setIsOpen,
    userInfo,
    friendData,
    isLoading,
    userData,
    cardLoading,
    handleTableChange,
    tabIndex,
    id,
    handleCopy,
  } = useUserIndex();
  if (!id || cardLoading) {
    return null;
  }

  const { identity, headSculpture, nickname } = userInfo;
  const { did } = userData;

  return (
    <>
      <div className="relative h-screen overflow-y-hidden">
        <BaseHeader onRight={() => setIsOpen(true)} right={<MoreHorizIcon />} title="个人中心" />
        <div className="flex w-full p-[36px] pt-[60px]">
          <Avatar src={headSculpture} className="w-[84px] h-[84px] mr-[26px]" />
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-black font-semibold text-[18px]">{nickname}</span>
            </div>
            <div className="text-[14px]">{identity}</div>
            {account && (
              <div className="text-[12px] mt-[4px] flex items-center">
                <span className="inline-block w-[120px] truncate">{replaceAccount(account)}</span>
                <p className="absolute top-[-1000px]" id="account_id">
                  {account}
                </p>
                <ContentCopyIcon onClick={handleCopy} />
              </div>
            )}
          </div>
        </div>
        <div className="relative top-[-20px] h-[calc(100%-146px)] box-border px-[36px] py-[20px] rounded-t-[36px] bg-white">
          <div className="flex justify-between items-center mb-[16px]">
            <span className="text-black font-semibold flex items-center">
              {did ? (
                'DID已解锁'
              ) : (
                <>
                  <HttpsIcon className="mr-[4px]" />
                  DID未解锁
                </>
              )}
            </span>
            {!did && (
              <span
                onClick={toUnlock}
                className="inline-block bg-black text-[white] text-[10px] px-[10px] rounded-full"
              >
                去解锁 →
              </span>
            )}
          </div>
          <DidCard classNames="bg-gray-300" needJump={false} {...userData} />
          {/* <SwipeCard /> */}
          <TabContext value={tabIndex}>
            <CustomTabList onChange={handleTableChange} aria-label="lab API tabs example">
              <Tab className="pb-0 px-0 min-w-[40px]" label="朋友" value="1" />
              <Tab className="pb-0 px-0 min-w-[40px]" label="帖子" value="2" />
            </CustomTabList>
            <TabPanel
              className="h-auto max-h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto pb-[10px]"
              value="1"
            >
              <div className="flex flex-wrap justify-between">
                <FriendCard friendData={friendData} isLoading={isLoading} />
              </div>
            </TabPanel>
            {/* // className="h-auto max-h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto" */}
            <TabPanel className="h-[calc(100%-200px)] p-0 my-[12px]" value="2">
              <ArticleList userId={`${id}`} entryIsMy />
            </TabPanel>
          </TabContext>
        </div>
      </div>
      <Draw
        isOpen={isOpen}
        closeDrawModal={() => {
          setIsOpen(false);
        }}
      >
        <List className="mt-[16px]">
          <ListItemButton onClick={() => navigate('/about')}>
            <ListItemText className="text-center" primary="关于" />
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/setting')}>
            <ListItemText className="text-center" primary="设置" />
          </ListItemButton>
        </List>
      </Draw>
    </>
  );
}

export default UserInfoDetail;
