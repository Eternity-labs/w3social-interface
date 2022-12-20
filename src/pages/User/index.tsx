import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import FriendCard from '@components/Base/FriendCard';
import DidArticleCard from '@components/Did/DidArticleCard';
import DidCard from '@components/Did/DidCard';
import Avatar from '@mui/material/Avatar';
import HttpsIcon from '@mui/icons-material/Https';
import * as React from 'react';
import SwipeCard from '@components/User/SwipeCard';
import useUserIndex from '@hooks/useUserIndex';
import BaseHeader from '@components/Base/BaseHeader';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Draw from '@components/Base/DrawModal';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';

function UserInfoDetail() {
  const navigate = useNavigate();
  const { toUnlock, isOpen, setIsOpen } = useUserIndex();

  return (
    <>
      <div className="relative h-screen">
        <BaseHeader onRight={() => setIsOpen(true)} right={<MoreHorizIcon />} />
        <div className="flex w-full p-[36px] pt-[60px]">
          <Avatar className="w-[84px] h-[84px] mr-[26px]">H </Avatar>
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-black font-semibold text-[18px]">vital.eth</span>
            </div>
            <div className="text-[14px]">builder</div>
          </div>
        </div>
        <div className="relative top-[-12px] h-[calc(100%-146px)] box-border p-[36px] rounded-t-[36px] bg-white">
          <div className="flex justify-between items-center mb-[16px]">
            <span className="text-black font-semibold flex items-center">
              <HttpsIcon className="mr-[4px]" />
              DID未解锁
            </span>
            <span
              onClick={toUnlock}
              className="inline-block bg-black text-[white] text-[10px] px-[10px] rounded-full"
            >
              去解锁 ——&gt;
            </span>
          </div>
          {/* <DidCard /> */}
          {/* <SwipeCard /> */}
          <TabContext value="2">
            <CustomTabList aria-label="lab API tabs example">
              <Tab className="pb-0 px-0 min-w-[40px]" label="朋友" value="1" />
              <Tab className="pb-0 px-0 min-w-[40px]" label="帖子" value="2" />
            </CustomTabList>
            <TabPanel
              className="h-auto max-h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto"
              value="1"
            >
              <div className="flex flex-wrap justify-between">
                <FriendCard />
              </div>
            </TabPanel>
            <TabPanel
              className="h-auto max-h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto"
              value="2"
            >
              <DidArticleCard
                className="bg-grey"
                title="[全职远程。。。。]"
                avatar="h"
                userName="此身份用户名"
              />
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
