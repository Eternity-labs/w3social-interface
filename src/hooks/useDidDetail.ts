import { useState } from 'react';

const useDidDetail = () => {
  const [tabIndex, setTabIndex] = useState('1');

  const handleTabIndexChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
    e.stopPropagation();
  };

  return {
    tabIndex,
    handleTabIndexChange,
  };
};

export default useDidDetail;
