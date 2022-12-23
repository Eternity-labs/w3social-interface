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

  const handleChange = (status: boolean) => {
    DidServices.changeWechat({
      id,
      hide: status === true ? 1 : 0,
    }).then(res => {
      setShow(status);
    });
  };

  useEffect(() => {
    setShow(userInfo?.hide === 1);
  }, [userInfo]);

  const toUserDetail = () => {
    navigate('/dUser');
  };

  const toResetPassword = () => {
    navigate(`/resetPass?email=${data?.email}`);
  };

  const switchWechat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    handleChange(checked);
  };

  const toQuestionDetail = () => {
    navigate('/question');
  };

  return {
    toUserDetail,
    data,
    isLoading,
    toResetPassword,
    switchWechat,
    show,
    toQuestionDetail,
  };
};

export default useSetting;
