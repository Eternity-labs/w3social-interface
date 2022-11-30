import { useState } from 'react';

const useDidList = () => {
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

export default useDidList;
