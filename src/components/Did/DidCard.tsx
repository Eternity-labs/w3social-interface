import Card from '@mui/material/Card';
import Labels from '@components/Base/Labels';
import useDidCard from '@hooks/useDidCard';
import cn from 'classnames';
import Skeleton from '@mui/material/Skeleton';
import { calcDays } from '@utils/index';
import { GRADIENTS } from '@config/common';
import UserInfo from '../Base/UserInfo';

function DidCard({ classNames, id, index, ...rest }: any) {
  const { tag, nickname, identity, headSculpture, updateTime } = rest;
  const { jumpToDetail, loading } = useDidCard();

  const cls = cn(
    'p-4 h-[120px] shadow-none rounded-[12px] bg-gradient-to-r',
    GRADIENTS.from[index % GRADIENTS.from.length],
    GRADIENTS.to[index % GRADIENTS.to.length],
    classNames
  );
  if (loading) {
    return <Skeleton className={classNames} variant="rounded" height={140} />;
  }
  return (
    <Card onClick={() => jumpToDetail(id)} className={cls}>
      <UserInfo showDid={false} name={nickname} identity={identity} headSculpture={headSculpture} />
      <div className="flex justify-between items-center mt-[32px]">
        <Labels labels={tag} />
        <span className="text-[10px] text-gray-700">{calcDays(updateTime)}</span>
      </div>
    </Card>
  );
}

export default DidCard;
