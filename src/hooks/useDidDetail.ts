import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import SquareService from '@apis/services/SquareService';
import { PAGE_SIZE } from '@config/common';
import UserService from '@apis/services/SingleuserService';

const useDidDetail = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState('1');
  const [page, setPage] = useState(1);
  const { data: userData, isLoading } = useQuery(['getDidInfo'], () =>
    UserService.getDidInfo({ id: '1' })
  );

  const { data: articleData } = useQuery(['getMomentList'], () =>
    SquareService.getMomentList({ userId: 1, page, size: PAGE_SIZE }).then(res => {
      setPage(res.currentPage + 1);

      return res.records;
    })
  );

  const handleTabIndexChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
    e.stopPropagation();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return {
    tabIndex,
    handleTabIndexChange,
    handleBack,
    userData,
    isLoading,
    articleData,
  };
};

export default useDidDetail;
