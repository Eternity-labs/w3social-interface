import NotMatch from '@assets/images/NotFound.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/main');
    }, 3000);
  }, []);
  return (
    <div className="h-full flex items-center justify-center">
      <div>
        <img src={NotMatch} alt="notMatchRouteImg" className="w-[200px]" />
        <div className="mt-[50px]">页面飞走了，即将跳到主页...</div>
      </div>
    </div>
  );
}
export default NotFoundPage;
