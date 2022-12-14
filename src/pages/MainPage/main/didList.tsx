import ListContainer from '@components/Base/ListContainer';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import useDidList from '@hooks/useDidList';
import CommonPage from '@components/common/commonPage';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import DidService from '@apis/services/DidService';
import UserService from '@apis/services/UserService';

function DidIndex() {
  const { list, handleRefresh, handleLoadMore } = useDidList();
  const [page, setPage] = useState<number>(1);
  const [memoDidList, setMemoDidList] = useState<any>([]);
  const [isHasNextPage, setNextPageStatus] = useState<boolean>(false);
  const [totalElements, setTotal] = useState(0);
  // const getDidListMutaion = useMutation(DidService.getDidList, {
  //   onSuccess: res => {
  //     console.log('🍌🍌---》〉》', res);
  //     // const newMemoList = [...memoDidList, ...res.records];
  //     // setMemoMomentList(newMemoList);
  //     // setTotal(res.totalElements);
  //     // if (newMemoList.length < res.totalElements) {
  //     //   setNextPageStatus(true);
  //     // }
  //   },
  // });
  const { data } = useQuery('GetUserInfo', () => UserService.getUserInfo());
  const userId = data?.id;
  const DidListQuery = useQuery(
    ['DidList', page],
    () =>
      DidService.getDidList({
        id: userId as number,
        page,
        size: 10,
      }),
    {
      enabled: !!userId,
    }
  );
  // const getRef = (dom: HTMLDivElement, index: number) => {
  //   if (listItemRefs.current?.length === SquarListMutaion?.data?.totalElements) {
  //     return;
  //   }
  //   listItemRefs.current.push(dom);
  // };

  const getItemList = (index: any): number => {
    if (index === totalElements - 1) {
      return 160;
    }
    return 120;
  };

  const loadNextPage = () => {
    if (memoDidList.length < (DidListQuery?.data?.totalElements || 0)) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <DidFilter />
      <div className="h-[calc(100%-20px)] box-border overflow-hidden overflow-y-auto">
        {/* <ListContainer onPullDown={handleRefresh} onPullUp={handleLoadMore}>
          {list.map((item, idx) => {
            return <DidCard classNames="mt-[12px]" key={item} />;
          })}
        </ListContainer> */}
        <CommonPage
          hasNextPage={isHasNextPage}
          isNextPageLoading={DidListQuery?.isLoading}
          listData={memoDidList}
          loadNextPage={loadNextPage}
          totalElements={totalElements}
          getItemList={getItemList}
        >
          {(index: number) => {
            return <DidCard classNames="mt-[12px]" key={memoDidList[index]} />;
          }}
        </CommonPage>
      </div>
    </>
  );
}

export default DidIndex;
