import DidServices from '@apis/services/DidService';
import UserService from '@apis/services/SingleuserService';
import useStore from '@states/useStore';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useUserIndex = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setIndex] = useState('2');

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
    () => UserService.getFriends({ id }),
    {
      enabled: !!id,
    }
  );

  const handleTableChange = val => {
    setIndex(`${val}`);
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
  };
};

export default useUserIndex;
