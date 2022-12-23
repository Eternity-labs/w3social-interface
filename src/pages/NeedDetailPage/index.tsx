import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import SquareService from '@apis/services/SquareService';
import Loading from '@components/common/Loading';
import Draw from '@components/Base/DrawModal';
import { List, ListItemButton, ListItemText, Divider } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Header from './header';
import DetailHead from './detailHead';
import LabelList from './labelList';

function NeedDetail() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const sourceID = Number(searchParams.get('id')) || 0;
  const { isLoading, data } = useQuery('GetMomentDetail', () =>
    SquareService.getMomentById({ id: sourceID })
  );
  if (isLoading) {
    return <Loading />;
  }
  const { content, headSculpture, tag, title, nickname, identity, img } = data;
  const HeadData = {
    headSculpture,
    nickname,
    identity,
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleReport = () => {
    setIsOpen(false);
    toast('举报成功');
  };
  const tags = tag ? tag.split('&') : [];

  return (
    <>
      <div className="bg-white">
        <Header onClickMore={handleOpen} />
        <div className="pl-[16px] pr-[25px] pt-[60px]">
          <DetailHead {...HeadData} />
          <div className="py-[16px]">{content}</div>
          {img && <img className="w-[180px] h-[180px]" src={img} alt="" />}
          <LabelList tag={tags} className="mt-[20px]" />
          <div className="text-slimGray text-[10px] font-mediu py-[20px]">两周前</div>
        </div>
      </div>
      <Draw
        isOpen={isOpen}
        closeDrawModal={() => {
          setIsOpen(false);
        }}
      >
        <List className="mt-[16px]">
          <ListItemButton onClick={handleReport}>
            <ListItemText className="text-center" primary="举报" />
          </ListItemButton>
        </List>
      </Draw>
    </>
  );
}
export default NeedDetail;
