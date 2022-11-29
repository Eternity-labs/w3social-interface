import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export type DidArticleCardProps = {
  title: string;
  avatar: string;
  userName: string;
  children?: any;
};
function DidArticleCard(props: DidArticleCardProps) {
  const { title, avatar, userName, children } = props;
  return (
    <div className="flex flex-col justify-between p-[12px] mb-[12px] rounded-[8px] bg-fSelect">
      <h4 className="text-[12px] truncate mb-[28px]">
        【全职远程】UI/UX设计师/酒店管理+环保创新平酒店管理+环保创新平
      </h4>
      <div className="flex items-center">
        <Avatar className="text-[20px] mr-[8px]">H</Avatar>
        <span className="text-[10px] text-[#363636]">次身份用户名</span>
      </div>
    </div>
  );
}
export default DidArticleCard;
