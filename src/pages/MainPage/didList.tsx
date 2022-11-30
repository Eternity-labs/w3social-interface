import ListContainer from '@components/Base/ListContainer';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import useDidList from '@hooks/useDidList';
import * as React from 'react';

function DidIndex() {
  const { handleRefresh, handleLoadMore } = useDidList();
  return (
    <>
      <DidFilter />
      <ListContainer onPullDown={handleRefresh} onPullUp={handleLoadMore}>
        <DidCard />
      </ListContainer>
    </>
  );
}

export default DidIndex;
