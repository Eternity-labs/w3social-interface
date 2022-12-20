import ListContainer from '@components/Base/ListContainer';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import useDidList from '@hooks/useDidList';
import CommonPage from '@components/common/commonPage';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import DidService from '@apis/services/DidService';
import useStore from '@states/useStore';

function DidIndex() {
  // const { list, handleRefresh, handleLoadMore } = useDidList();
  const { userInfo } = useStore();
  const [page, setPage] = useState<number>(0);
  const [memoDidList, setMemoDidList] = useState<any>([]);
  const [isHasNextPage, setNextPageStatus] = useState<boolean>(false);
  const [totalElements, setTotal] = useState(0);
  const [filter, setFilter] = useState({});
  const DidListQuery = useQuery(
    ['DidList', page, filter],
    () =>
      DidService.getDidList({
        id: userInfo!.id,
        page,
        size: 10,
        filter,
      }),
    {
      enabled: !!userInfo?.id,
      onSuccess: data => {
        setTotal(data.totalElements);
        setMemoDidList(data.records);
      },
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
      return 180;
    }
    return 140;
  };

  const loadNextPage = () => {
    if (memoDidList.length < (DidListQuery?.data?.totalElements || 0)) {
      setPage(page + 1);
    }
  };

  const handleFilterChange = val => {
    setFilter(val);
  };

  return (
    <>
      <DidFilter onChange={handleFilterChange} />
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
            return (
              <DidCard
                classNames="mt-[12px]"
                key={memoDidList[index]?.updateTime}
                index={index}
                {...memoDidList[index]}
              />
            );
          }}
        </CommonPage>
      </div>
    </>
  );
}

export default DidIndex;
