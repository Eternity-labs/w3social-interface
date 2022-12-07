import * as React from 'react';
import ii from '@assets/images/computerGuy.png';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import BaseHeader from '@components/Base/BaseHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Draw from '@components/Base/DrawModal';
import Divider from '@mui/material/Divider';

function About() {
  return (
    <>
      <BaseHeader title="关于" />
      <div className="p-[16px] bg-white rounded-[16px] m-[16px] text-center">
        <img src={ii} alt="" />
        <p className="text-black font-semibold text-[12px] my-[32px]">Version 0.0.1</p>
        <List>
          <ListItemButton>
            <ListItemText primary="加入社群" />
            <ArrowForwardIosIcon />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="隐私协议" />
            <ArrowForwardIosIcon />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="用户协议" />
            <ArrowForwardIosIcon />
          </ListItemButton>
        </List>
        <Draw isOpen closeDrawModal={() => {}}>
          <List className="mt-[16px]">
            <ListItemButton>
              <ListItemText className="text-center" primary="规划" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText className="text-center" primary="关于" />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText className="text-center" primary="设置" />
            </ListItemButton>
          </List>
        </Draw>
      </div>
    </>
  );
}

export default About;
