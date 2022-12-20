import DidServices from '@apis/services/DidService';
import useStore from '@states/useStore';
import { useQuery } from 'react-query';

const useUserDetail = () => {
  const { userInfo } = useStore();
  const id = userInfo?.id;

  const { data, isLoading } = useQuery(
    ['getUserCenterInfo', id],
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

export default useUserDetail;
