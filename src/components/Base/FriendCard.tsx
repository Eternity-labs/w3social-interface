import Avatar from '@mui/material/Avatar';
import { GRADIENTS } from '@config/common';
import cn from 'classnames';
import '@assets/styles/backgroundStyle.css';
import { useState } from 'react';
import DidDetail from '@pages/MainPage/main/didDetail';
import Draw from './DrawModal';

const bgColor = ['didCardBg1', 'didCardBg2', 'didCardBg3', 'didCardBg4', 'didCardBg5'];

type FriendsProps = {
  isLoading: boolean;
  friendData: any;
};
function FriendCard(props: FriendsProps) {
  const { friendData, isLoading } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
  if (isLoading) {
    return <div>正在加载...</div>;
  }
  const handleClickCard = id => {
    setUserId(id);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-[10px]">
        {friendData.map((item, index) => {
          const bg = bgColor[index % 5];
          const cls = cn(
            'flex box-border w-[148px] h-[82px] box-border p-[12px] rounded-[10px]',
            bg
          );
          return (
            <div key={index} onClick={() => handleClickCard(item.id)} className={cls}>
              <Avatar className="w-[36px] h-[36px] mr-[14px]" src={item.headSculpture}>
                {' '}
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-black font-medium text-[14px]">{item.identity}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Draw isOpen={isOpen} closeDrawModal={() => setIsOpen(false)}>
        <DidDetail userId={userId} />
      </Draw>
    </>
  );
}

export default FriendCard;
