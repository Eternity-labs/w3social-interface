import Card from '@mui/material/Card';
import Labels from '@components/Base/Labels';
import useDidCard from '@hooks/useDidCard';
import cn from 'classnames';
import Skeleton from '@mui/material/Skeleton';
import UserInfo from '../Base/UserInfo';

function DidCard({ classNames, id }: any) {
  const { jumpToDetail, loading } = useDidCard();
  const cls = cn(
    'p-4 h-120px shadow-none rounded-[12px] bg-gradient-to-r from-green-400 to-blue-500',
    classNames
  );
  if (loading) {
    return <Skeleton className={classNames} variant="rounded" height={120} />;
  }
  return (
    <Card onClick={() => jumpToDetail()} className={cls}>
      <UserInfo />
      <div className="flex justify-between items-center mt-[32px]">
        <Labels labels={['asdf', 'sdhof']} />
        <span className="text-[10px] text-gray-700">两周前</span>
      </div>
    </Card>
  );
}

export default DidCard;
