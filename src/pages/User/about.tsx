import * as React from 'react';
import ii from '@assets/images/computerGuy.png';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import BaseHeader from '@components/Base/BaseHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const handleUserProtocal = () => {
    navigate('/protocal?pageName=privacy');
  };
  const handleAboutUs = () => {
    navigate('/protocal?pageName=aboutUs');
  };
  return (
    <>
      <BaseHeader title="关于" />
      <div className="p-[16px] mt-[60px] bg-white rounded-[16px] m-[16px] text-center">
        <img src={ii} alt="" />
        <p className="text-black font-semibold text-[12px] my-[32px]">Version 0.0.1</p>
        <List>
          {/* <ListItemButton>
            <ListItemText primary="加入社群" />
            <ArrowForwardIosIcon />
          </ListItemButton> */}
          <ListItemButton onClick={handleUserProtocal}>
            <ListItemText primary="隐私协议" />
            <ArrowForwardIosIcon />
          </ListItemButton>
          <ListItemButton onClick={handleAboutUs}>
            <ListItemText primary="关于我们" />
            <ArrowForwardIosIcon />
          </ListItemButton>
        </List>
      </div>
    </>
  );
}

export default About;
