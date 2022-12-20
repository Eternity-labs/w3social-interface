import { useNavigate } from 'react-router-dom';

const useDidContentCard = () => {
  const navigate = useNavigate();
  const jumpToContent = (sourceId: number) => {
    navigate(`/needDetail?id=${sourceId}`);
  };

  return {
    jumpToContent,
  };
};

export default useDidContentCard;
