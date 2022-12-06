import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import BaseHeader from '@components/Base/BaseHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';

function Setting() {
  return (
    <>
      <BaseHeader title="设置" />
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="邮箱" />
          <p>web3@found.com</p>
        </ListItemButton>
      </List>
      <List className="bg-white mt-[20px]">
        <ListItemButton>
          <ListItemText primary="修改DID" />
          <ArrowForwardIosIcon />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="修改密码" />
          <ArrowForwardIosIcon />
        </ListItemButton>
      </List>
      <List className="bg-white mt-[20px]">
        {/* <ListItemButton>
          <ListItemText primary="显示模式" />
          <ArrowForwardIosIcon />
        </ListItemButton>
        <Divider /> */}
        <ListItemButton>
          <ListItemText primary="对他人隐藏我的社交账号" />
          <Switch edge="end" />
        </ListItemButton>
      </List>
    </>
  );
}

export default Setting;
