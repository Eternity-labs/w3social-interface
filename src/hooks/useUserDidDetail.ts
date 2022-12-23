import DidServices from '@apis/services/DidService';
import useStore from '@states/useStore';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useUserDidDetail = () => {
  const { userInfo } = useStore();
  const id = userInfo?.id;

  const { data, isLoading } = useQuery(
    ['getUserCenterInfo1', id],
    () => DidServices.getUserCenterInfo({ id: `${id}` }),
    {
      enabled: !!id,
    }
  );

  return {
    data,
    isLoading,
  };
};

export default useUserDidDetail;
