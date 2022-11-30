import { useNavigate } from 'react-router-dom';

const useDidContentCard = () => {
  const navigate = useNavigate();
  const jumpToContent = () => {
    console.log('to where');
  };

  return {
    jumpToContent,
  };
};

export default useDidContentCard;
