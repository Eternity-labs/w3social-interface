import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDidDetail = () => {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState('1');

  const handleTabIndexChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
    e.stopPropagation();
  };

  const handleBack = () => {
    navigate(-1);
  };

  return {
    tabIndex,
    handleTabIndexChange,
    handleBack,
  };
};

export default useDidDetail;
