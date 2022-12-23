import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import BaseHeader from '@components/Base/BaseHeader';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import useUserDidDetail from '@hooks/useUserDidDetail';

function UserDetail() {
  const { data = {}, isLoading } = useUserDidDetail();
  if (isLoading || !data.id) {
    return null;
  }
  const {
    city,
    nickname,
    head_sculpture: headSculpture,
    identity,
    tag,
    wishtag,
    gender,
    profession,
  } = data;
  return (
    <>
      <BaseHeader title="我的信息" />
      <Stack
        direction="row"
        className="flex relative items-center justify-center mt-[60px]"
        spacing={2}
      >
        <div className="w-[85px] h-[85px] relative overflow-hidden rounded-full">
          <Avatar src={headSculpture} className="w-[85px] h-[85px] relative" />
          {/* <label
            htmlFor="user_avatar"
            className="absolute w-[85px] ml-0 h-[30px] bg-black leading-[30px] bg-opacity-50 bottom-0 text-white text-center text-[10px] "
          >
            更换头像
            <input
              id="user_avatar"
              type="file"
              accept="image/*"
              className="absolute z-[2] top-0 left-0 right-0 bottom-0 invisible"
            />
          </label> */}
        </div>
      </Stack>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="昵称" />
          <p>{nickname}</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="城市" />
          <p>{city ?? ''}</p>
        </ListItemButton>
        {/* <Divider /> */}
        {/* <ListItemButton>
          <ListItemText primary="生日" />
          <p>1999.10.01</p>
        </ListItemButton> */}
      </List>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="职业" />
          <p>{profession ?? ''}</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="性别" />
          <p>{gender === 1 ? '男' : '女'}</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="期望对象" />
          <p>{wishtag?.join('、')}</p>
        </ListItemButton>
      </List>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="我的身份" />
          <p>{identity}</p>
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="我的标签" />
          <p>{tag?.join('、')}</p>
        </ListItemButton>
      </List>
    </>
  );
}

export default UserDetail;
