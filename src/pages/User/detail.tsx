import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import BaseHeader from '@components/Base/BaseHeader';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function UserDetail() {
  return (
    <>
      <BaseHeader title="我的信息" />
      <Stack direction="row" className="flex items-center justify-center mt-[20px]" spacing={2}>
        <Avatar className="w-[85px] h-[85px] relative">
          H
          <label
            htmlFor="user_avatar"
            className="absolute w-full h-[30px] bg-black leading-[30px] bg-opacity-30 bottom-0 text-center text-[10px] "
          >
            更换头像
            <input
              id="user_avatar"
              type="file"
              accept="image/*"
              className="absolute z-[2] top-0 left-0 right-0 bottom-0 invisible"
            />
          </label>
        </Avatar>
      </Stack>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="昵称" />
          <p>当前身份用户名</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="城市" />
          <p>北京</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="生日" />
          <p>1999.10.01</p>
        </ListItemButton>
      </List>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="职业" />
          <p>视觉设计</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="目的" />
          <p>认识新朋友</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="期望对象" />
          <p>一起学习</p>
        </ListItemButton>
      </List>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="我的身份" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="我的标签" />
        </ListItemButton>
      </List>
    </>
  );
}

export default UserDetail;
