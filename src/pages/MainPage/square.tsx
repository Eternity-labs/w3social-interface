import ListContainer from '@components/Base/ListContainer';
import DidArticleCard from '@components/Did/DidArticleCard';
import * as React from 'react';

function DidIndex() {
  return (
    <div>
      <ListContainer>
        <DidArticleCard title="Index" userName="爱迪生交付件" avatar="asdf" />
        <DidArticleCard title="Index" userName="爱迪生交付件" avatar="asdf" />
        <DidArticleCard title="Index" userName="爱迪生交付件" avatar="asdf" />
        <DidArticleCard title="Index" userName="爱迪生交付件" avatar="asdf" />
      </ListContainer>
    </div>
  );
}

export default DidIndex;
