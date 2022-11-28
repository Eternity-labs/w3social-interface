import IntroduceContent from '@components/Base/IntroduceContent';
import Labels from '@components/Base/Labels';
import TimeAndMore from '@components/Base/TimeAndMore';
import UserActions from '@components/Base/UserActions';
import UserInfo from '@components/Base/UserInfo';

function DidContentCard() {
  return (
    <div className="border-0 border-b-[1px] border-solid py-[16px] mt-[16px] relative">
      <div className="absolute top-0 right-0">
        <TimeAndMore />
      </div>
      <div className="flex">
        <UserInfo />
      </div>
      <div className="my-[16px]">
        <IntroduceContent />
      </div>
      <div className="flex justify-between">
        <Labels labels={['asdf']} />
        <UserActions thumbCount={0} />
      </div>
    </div>
  );
}

export default DidContentCard;
