import { useNavigate } from 'react-router-dom';

const useDidCard = () => {
  const navigate = useNavigate();
  const jumpToDetail = () => {
    navigate('detail/2');
  };

  return {
    jumpToDetail,
  };
};

export default useDidCard;
