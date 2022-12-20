import DidServices from '@apis/services/DidService';
import useStore from '@states/useStore';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useSetting = () => {
  const navigate = useNavigate();
  const { userInfo } = useStore();
  const [show, setShow] = useState(true);
  const id = userInfo?.id;

  const { data, isLoading } = useQuery(
    ['getUserCenterInfo', id],
    () => DidServices.getUserCenterInfo({ id: `${id}` }),
    {
      enabled: !!id,
    }
  );

  useEffect(() => {
    setShow(data?.hide === 1);
  }, [data]);

  const toUserDetail = () => {
    navigate('/dUser');
  };

  const toResetPassword = () => {
    navigate(`/resetPass?email=${data?.email}`);
  };

  const switchWechat = e => {
    console.log(e);
  };

  return {
    toUserDetail,
    data,
    isLoading,
    toResetPassword,
    switchWechat,
    show,
  };
};

export default useSetting;
