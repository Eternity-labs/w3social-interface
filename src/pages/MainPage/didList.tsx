import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import * as React from 'react';

function DidIndex() {
  return (
    <div>
      <DidFilter />
      <DidCard />
    </div>
  );
}

export default DidIndex;
