import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDidCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const jumpToDetail = () => {
    navigate('detail/2');
  };

  return {
    loading,
    jumpToDetail,
  };
};

export default useDidCard;
