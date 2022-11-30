import { useNavigate } from 'react-router-dom';

const useDidContentCard = () => {
  const navigate = useNavigate();
  const jumpToContent = () => {
    navigate('detail/2');
  };

  return {
    jumpToContent,
  };
};

export default useDidContentCard;
