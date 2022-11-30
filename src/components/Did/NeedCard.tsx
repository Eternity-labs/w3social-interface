import UserActions from '@components/Base/UserActions';
import cn from 'classnames';
import DidArticleCard from './DidArticleCard';
import type { DidBaseArticleCardProps } from './DidArticleCard';
// interface NeedCardProps extends DidBaseArticleCardProps {
//   entryDetail: () => void;
// }

function NeedCard(props: DidBaseArticleCardProps) {
  const { title, avatar, userName, className } = props;
  const DidArticleCardProps = {
    title,
    avatar,
    userName,
  };
  const onLike = () => {
    // eslint-disable-next-line no-alert
    alert('点赞');
  };
  const onComment = () => {};
  return (
    <DidArticleCard {...DidArticleCardProps} className={cn('bg-gray-200', className || '')}>
      <UserActions thumbCount={1} onLike={onLike} onComment={onComment} />
    </DidArticleCard>
  );
}
export default NeedCard;
