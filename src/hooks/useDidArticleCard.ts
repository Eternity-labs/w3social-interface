import { useNavigate } from 'react-router-dom';

const useDidArticleCard = () => {
  const navigate = useNavigate();

  const handleToDetail = (sourceId: number = 0) => {
    navigate(`/needDetail?id=${sourceId}`);
  };

  return { handleToDetail };
};

export default useDidArticleCard;
