import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useHeaderHook from '@hooks/useHeaderHook';

export default function MenuAppBar() {
  const { getButtonClass, buttonSwitch } = useHeaderHook();

  return (
    <AppBar className="bg-transparent shadow-none" position="static">
      <Toolbar className="flex px-0">
        <IconButton
          size="large"
          edge="start"
          className="text-black flex-1 text-2xl mx-0"
          aria-label="menu"
        >
          <MenuIcon />
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
          size="large"
          edge="start"
          className="text-black flex-1 text-2xl mx-0"
          aria-label="menu"
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
