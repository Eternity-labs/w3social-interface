import IntroduceContent from '@components/Base/IntroduceContent';
import Labels from '@components/Base/Labels';
import TimeAndMore from '@components/Base/TimeAndMore';
import UserActions from '@components/Base/UserActions';
import UserInfo from '@components/Base/UserInfo';
import useDidContentCard from '@hooks/useDidContentCard';

function DidContentCard(props: any) {
  const {
    onLike,
    onComment,
    nickname: name,
    identity,
    headSculpture,
    content,
    likes,
    isLike,
    id,
    tag,
  } = props;
  const userInfo = {
    name,
    identity,
    headSculpture,
  };
  const { jumpToContent } = useDidContentCard();
  return (
    <div className="border-0 border-b-[1px] border-solid py-[16px] mt-[16px] relative">
      <div className="absolute top-4 right-0">
        <TimeAndMore />
      </div>
      <div className="flex">
        <UserInfo showDid={false} {...userInfo} />
      </div>
      <div onClick={() => jumpToContent(id)} className="my-[16px]">
        <IntroduceContent content={content} />
      </div>
      <div className="flex justify-between">
        <Labels labels={tag ?? []} />
        <UserActions thumbCount={likes} onLike={onLike} onComment={onComment} isLike={!!isLike} />
      </div>
    </div>
  );
}

export default DidContentCard;
