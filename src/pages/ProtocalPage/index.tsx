import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import DidService from '@apis/services/DidService';

const queryMap = {
  aboutUs: DidService.getAbouts,
  agreement: DidService.getAgreement,
  privacy: DidService.getPrivacy,
};
type PageNameType = keyof typeof queryMap;
function Protocal() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageName: PageNameType = searchParams.get('pageName') as PageNameType;
  let isError = false;
  let getData: () => void;

  if (!queryMap[pageName]) {
    isError = true;
  }
  const { data } = useQuery(pageName || 'protocal', queryMap[pageName], {
    enabled: !isError,
  });
  const protocalContent = () => {
    return {
      __html: data || '',
    };
  };
  if (isError) {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }
  if (isError) {
    return (
      <div className="h-full flex items-center justify-center">
        <div>页面发生错误，即将回退到上一页...</div>
      </div>
    );
  }
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={protocalContent()} />;
}
export default Protocal;
