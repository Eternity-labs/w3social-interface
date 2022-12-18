import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import SquareService from '@apis/services/SquareService';
import Loading from '@components/common/Loading';
import Header from './header';
import DetailHead from './detailHead';
import LabelList from './labelList';

function NeedDetail() {
  const [searchParams] = useSearchParams();
  const sourceID = Number(searchParams.get('id')) || 0;
  const { isLoading, data } = useQuery('GetMomentDetail', () =>
    SquareService.getMomentById({ id: sourceID })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <Header />
      <div className="pl-[16px] pr-[25px] pt-[60px]">
        <DetailHead />
        <LabelList className="mt-[20px]" />
        <div className="text-slimGray text-[10px] font-mediu py-[20px]">两周前</div>
      </div>
    </div>
  );
}
export default NeedDetail;
