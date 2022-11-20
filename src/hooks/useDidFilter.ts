import { useState } from 'react';

const useDidFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  return {
    showFilter,
    setShowFilter,
    showDrawer,
    setShowDrawer,
  };
};

export default useDidFilter;
