import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useHeaderHook from '@hooks/useHeader';

export default function MenuAppBar() {
  const { needNotify, getButtonClass, buttonSwitch } = useHeaderHook();

  return (
    <AppBar className="bg-transparent shadow-none" position="static">
      <Toolbar className="flex px-0 box-border h-[35px]">
        <IconButton edge="start" className="text-black flex-1 mx-0 text-[30px]" aria-label="menu">
          <AccountCircleIcon />
        </IconButton>
        <div className="flex-6 flex box-border rounded-full bg-white">
          <Button className={getButtonClass(0)} onClick={() => buttonSwitch(0)} variant="contained">
            DID 推送
          </Button>
          <Button className={getButtonClass(1)} onClick={() => buttonSwitch(1)} variant="contained">
            需求广场
          </Button>
        </div>
        <IconButton
          edge="start"
          className="text-black flex-1 mx-0 text-[30px] pr-0"
          aria-label="menu"
        >
          {needNotify ? <NotificationsActiveIcon /> : <NotificationsIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
