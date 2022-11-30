import Card from '@mui/material/Card';
import Labels from '@components/Base/Labels';
import useDidCard from '@hooks/useDidCard';
import cn from 'classnames';
import UserInfo from '../Base/UserInfo';

function DidCard({ classNames }: any) {
  const { jumpToDetail } = useDidCard();
  const cls = cn(
    'p-4 h-120px shadow-none rounded-[12px] bg-gradient-to-r from-green-400 to-blue-500',
    classNames
  );
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
