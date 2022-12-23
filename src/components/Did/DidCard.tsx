import Card from '@mui/material/Card';
import Labels from '@components/Base/Labels';
import useDidCard from '@hooks/useDidCard';
import cn from 'classnames';
import Skeleton from '@mui/material/Skeleton';
import { calcDays } from '@utils/index';
import { GRADIENTS } from '@config/common';
import logo from '@assets/images/defaultLogo.png';
import UserInfo from '../Base/UserInfo';
import '@assets/styles/backgroundStyle.css';

const bgColor = ['didCardBg1', 'didCardBg2', 'didCardBg3', 'didCardBg4', 'didCardBg5'];

function DidCard({ classNames, id, index = 0, needJump = true, ...rest }: any) {
  const { tag, nickname, identity, headSculpture, updateTime } = rest;
  const { jumpToDetail, loading } = useDidCard();
  // const cls = cn(
  //   'p-4 h-[120px] shadow-none rounded-[12px] bg-gradient-to-r',
  //   GRADIENTS.from[index % GRADIENTS.from.length],
  //   GRADIENTS.to[index % GRADIENTS.to.length],
  //   classNames
  // );
  const bg = bgColor[index % 5];
  const cls = cn('p-4 h-[120px] shadow-none rounded-[12px]', classNames, bg);

  if (loading) {
    return <Skeleton className={classNames} variant="rounded" height={140} />;
  }
  return (
    <Card onClick={() => needJump && jumpToDetail(id)} className={cls}>
      <UserInfo
        showDid={false}
        name={nickname}
        identity={identity}
        headSculpture={headSculpture || logo}
      />
      <div className="flex justify-between items-center mt-[32px]">
        <Labels labels={tag ?? []} />
        <span className="text-[10px] text-gray-700">{calcDays(updateTime)}</span>
      </div>
    </Card>
  );
}

export default DidCard;
