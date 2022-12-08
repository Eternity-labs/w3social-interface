import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import DidService from '@apis/services/DidService';

type PageName = 'aboutUs' | 'agreement' | 'privacy';
function Protocal() {
  const [searchParams] = useSearchParams();
  const pageName: PageName = searchParams.get('pageName') as PageName;
  let isError = false;
  let getData: () => void;
  if (pageName === 'aboutUs') {
    getData = () => DidService.getAbouts();
  } else if (pageName === 'agreement') {
    getData = () => DidService.getAgreement();
  } else if (pageName === 'privacy') {
    getData = () => DidService.getPrivacy();
  } else {
    isError = true;
  }
  const { data } = useQuery(pageName || 'protocal', () => getData());
  const protocalContent = () => {
    return {
      __html:
        '<p>X星云在全球首提“元电商”概念及运营模式。“元电商”本质上是“元宇宙×新电商”共享生态体系，是在新一代互联网+数字化平台经济的大趋势下，运用数字化前沿技术连通虚拟和现实两个维度的商业化场景，以数据要素在虚实两个空间实现便利、安全的增值流通转化，形成数字资产价值收益由全体权利人共享的经济模式。</p>',
    };
  };
  if (isError) {
    return <div>fdfd</div>;
  }
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={protocalContent()} />;
}
export default Protocal;
