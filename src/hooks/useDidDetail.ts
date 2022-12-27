import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import UserService from '@apis/services/SingleuserService';

const useDidDetail = (props: any) => {
  console.log(props);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = props?.userId || searchParams.get('id') || 0;
  const [tabIndex, setTabIndex] = useState('1');
  // const [page, setPage] = useState(1);
  const { data: userData, isLoading } = useQuery(
    ['getDidInfo', id],
    () => UserService.getDidInfo({ id }),
    {
      enabled: !!id,
    }
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
    id,
  };
};

export default useDidDetail;
