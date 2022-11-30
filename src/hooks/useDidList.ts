const useDidList = () => {
  const handleRefresh = () => {
    console.log('pull down and refresh');
  };

  const handleLoadMore = () => {
    console.log('load more');
  };

  return {
    handleRefresh,
    handleLoadMore,
  };
};

export default useDidList;
