import { useNavigate } from 'react-router-dom';

const useDidArticleCard = () => {
  const navigate = useNavigate();

  const handleToDetail = () => {
    navigate('/needDetail');
  };

  return { handleToDetail };
};

export default useDidArticleCard;
