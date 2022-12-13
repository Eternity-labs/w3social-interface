import { ReactElement } from 'react';
import { UseQueryResult } from 'react-query';
import cn from 'classnames';
import { Button } from '@mui/material';
import Loading from '../../stories/Loading';
import errorImage from '@/assets/error.png';

interface IResponse<T> {
  code: number;
  success?: boolean;
  message?: string;
  data: T;
}
export interface HandleBoundaryProps<T> {
  /**
   * 传入函数，参数data 为响应结果
   */
  children: (data: T) => ReactElement;

  /**
   * useQuery 返回值
   */
  query: UseQueryResult<T>;

  /**
   * loading 状态组件，默认为 stories/Loading
   */
  loadingComponent?: ReactElement;
}

function HandleBoundary<T extends unknown>({
  children,
  query,
  loadingComponent = <Loading />,
}: HandleBoundaryProps<T>) {
  if (query.isLoading || query.isIdle) return loadingComponent;
  if (query.isSuccess) return children(query.data);
  return (
    <div className={cn('h-full w-full', 'flex flex-col items-center justify-center')}>
      <img className="w-[200px]" src={errorImage} alt="error_image" />
      <p className="my-4 text-primary">请求发生错误😳 ，请重试</p>
      <Button onClick={() => query.refetch()} variant="outlined">
        点击重试
      </Button>
    </div>
  );
}

export default HandleBoundary;
