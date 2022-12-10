import UserActions from '@components/Base/UserActions';
import cn from 'classnames';
import SquareService from '@apis/services/SquareService';
import DidArticleCard from './DidArticleCard';
import type { DidBaseArticleCardProps } from './DidArticleCard';
// interface NeedCardProps extends DidBaseArticleCardProps {
//   entryDetail: () => void;
// }
interface NeedCardProps {
  id: number;
  onLike: () => void;
}
function NeedCard(props: DidBaseArticleCardProps & NeedCardProps) {
  const { content, avatar, userName, className, isLike, likes = 0, onLike, id } = props;
  const DidArticleCardProps = {
    content,
    avatar,
    userName,
    id,
  };
  const onComment = () => {};
  return (
    <DidArticleCard {...DidArticleCardProps} className={cn('bg-gray-200', className || '')}>
      <UserActions thumbCount={likes} onLike={onLike} onComment={onComment} isLike={!!isLike} />
    </DidArticleCard>
  );
}
export default NeedCard;
