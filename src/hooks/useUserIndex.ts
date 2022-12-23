import UserService from '@apis/services/SingleuserService';
import useStore from '@states/useStore';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const useUserIndex = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setIndex] = useState('1');

  const { userInfo } = useStore();
  const id = userInfo?.id;

  const { data: userData, isLoading: cardLoading } = useQuery(
    ['getDidInfo', userInfo?.id],
    () => UserService.getDidInfo({ id: `${id}` }),
    {
      enabled: !!id,
    }
  );

  const { isLoading, data: friendData } = useQuery(
    ['friendData', id],
    () => UserService.getFriends({ id, page: 0, size: 100 }),
    {
      enabled: !!id,
    }
  );

  const handleTableChange = (e: React.SyntheticEvent, newValue: string) => {
    setIndex(newValue);
    e.stopPropagation();
  };

  const handleCopy = () => {
    const copyEle = document.querySelector!('#account_id'); // 获取要复制的节点
    const range = document.createRange(); // 创造range
    window!.getSelection().removeAllRanges(); // 清除页面中已有的selection
    range.selectNode(copyEle); // 选中需要复制的节点
    window.getSelection().addRange(range); // 执行选中元素
    const copyStatus = document.execCommand('Copy'); // 执行copy操作
    // 对成功与否定进行提示
    if (copyStatus) {
      toast('复制成功');
    } else {
      toast('复制失败');
    }
    window.getSelection().removeAllRanges(); // 清除页面中已有的selection
  };

  const toUnlock = () => {
    navigate('/unlock');
  };
  return {
    toUnlock,
    navigate,
    isOpen,
    setIsOpen,
    isLoading,
    friendData,
    userInfo,
    tabIndex,
    handleTableChange,
    userData,
    cardLoading,
    id,
    handleCopy,
  };
};

export default useUserIndex;
