import Header from './header';
import DetailHead from './detailHead';
import LabelList from './labelList';
import DragButton from './dragButton';

function NeedDetail() {
  return (
    <div className="">
      <Header />
      <div className="pl-[16px] pr-[25px] pt-[60px]">
        <DetailHead />
        <LabelList className="mt-[20px]" />
        <div className="text-slimGray text-[10px] font-mediu py-[20px]">两周前</div>
      </div>
      <DragButton />
    </div>
  );
}
export default NeedDetail;
