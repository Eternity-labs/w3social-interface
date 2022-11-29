import MainContainer from '@components/Base/MainContainer';
import DidContentCard from '@components/Did/DidContentCard';
import DidFilter from '@components/Did/DidFilter';
import * as React from 'react';

function DidIndex() {
  return (
    <div>
      <DidFilter />
      <DidContentCard />
    </div>
  );
}

export default DidIndex;
