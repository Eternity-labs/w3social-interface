import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import useHeaderHook from '@hooks/useHeader';
import { useNavigate } from 'react-router-dom';
import myIcon from '@assets/images/icons/my.png';
import vectorIcon from '@assets/images/icons/vector.png';

export default function MenuAppBar() {
  const { needNotify, getButtonClass, buttonSwitch } = useHeaderHook();
  const navigate = useNavigate();
  return (
    <AppBar className="bg-transparent shadow-none" position="static">
      <Toolbar className="flex px-0 box-border h-[35px]">
        <IconButton
          onClick={() => navigate('/aUser')}
          edge="start"
          className="text-black flex-1 mx-0 text-[30px]"
          aria-label="menu"
        >
          <img src={myIcon} alt="myicon" className="w-[30px] h-[30px]" />
          {/* <AccountCircleIcon /> */}
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
          onClick={() => navigate('/message')}
        >
          {needNotify ? (
            <Badge color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          ) : (
            <NotificationsIcon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
