import { useState } from 'react';
import { useQuery } from 'react-query';
import DidService from '@apis/services/DidService';
import UserService from '@apis/services/UserService';

const usePaging = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery('GetUserInfo', () => UserService.getUserInfo());
  const userId = data?.id;
  useQuery(
    ['DidList', page],
    () =>
      DidService.getDidList({
        id: userId as number,
        page,
        size: 10,
      }),
    {
      enabled: !!userId,
    }
  );
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const handleRefresh = () => {
    console.log('pull down and refresh');
    setList([1, 2, 3, 4, 5]);
  };

  const handleLoadMore = () => {
    console.log('load more');
    setList([...list, 1, 2, 3, 4, 5]);
  };

  return {
    list,
    handleRefresh,
    handleLoadMore,
  };
};

export default usePaging;
