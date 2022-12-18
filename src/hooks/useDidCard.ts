import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useDidCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const jumpToDetail = (id: number) => {
    navigate(`detail?id=${id}`);
  };

  return {
    loading,
    jumpToDetail,
  };
};

export default useDidCard;
