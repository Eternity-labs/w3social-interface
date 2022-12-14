import NeedCard from '@components/Did/NeedCard';
import CommonPage from '@components/common/commonPage';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import type { VariableSizeList, ListChildComponentProps } from 'react-window';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import UseModal from '@hooks/useModal';
import SquareService from '@apis/services/SquareService';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import type { GetMomentRes, MomentData } from '@apis/model/SquareModel';
import ReactPullToRefresh from 'react-pull-to-refresh';
import DragButton from './components/dragButton';
import PermissionsFailModal from './components/permissionsFailModal';
import './pullDown.css';

const PADDING_SIZE = 10;
function NeedPage() {
  const QueryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);
  const { isOpen, handleOpen } = UseModal();
  const [memoMomentList, setMemoMomentList] = useState<any>([]);
  const [isHasNextPage, setNextPageStatus] = useState<boolean>(false);
  // const listRef = useRef<VariableSizeList<any> | null>(null);
  // const listItemRefs = useRef<Array<HTMLDivElement>>([]);
  const [totalElements, setTotal] = useState(0);
  const SquarListMutaion = useMutation(SquareService.getMomentList, {
    onSuccess: res => {
      const newMemoList = [...memoMomentList, ...res.records];
      setMemoMomentList(newMemoList);
      setTotal(res.totalElements);
      if (newMemoList.length < res.totalElements) {
        setNextPageStatus(true);
      }
    },
  });
  // const getRef = (dom: HTMLDivElement, index: number) => {
  //   if (listItemRefs.current?.length === SquarListMutaion?.data?.totalElements) {
  //     return;
  //   }
  //   listItemRefs.current.push(dom);
  // };

  const LikeComentMutation = useMutation(SquareService.likeMoment, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['needTab', page]);
    },
  });
  const unLikeComentMutation = useMutation(SquareService.unLikeMoment, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['needTab', page]);
    },
  });
  const getItemList = (index: any): number => {
    if (index === totalElements - 1) {
      return 160;
    }
    return 120;
  };
  const handleLike = (data: MomentData, index: number) => {
    if (data.isLike) {
      unLikeComentMutation.mutate({ id: data.id });
    } else {
      LikeComentMutation.mutate({ id: data.id });
    }
  };

  const handleRefresh = async () => {
    let i = 100000;
    while (i < 0) {
      i--;
    }
    await Promise.resolve(111);
    // return Promise.resolve(11);
  };
  const loading = <div>heell</div>;

  const isItemLoaded = (index: number) => {
    return !isHasNextPage || index < memoMomentList.length;
  };
  const loadNextPage = () => {
    if (memoMomentList.length < (SquarListMutaion?.data?.totalElements || 0)) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    SquarListMutaion.mutate({ page, size: 10 });
  }, [page]);
  return (
    <div className="h-full squareRoot">
      <CommonPage
        hasNextPage={isHasNextPage}
        isNextPageLoading={SquarListMutaion?.isLoading}
        listData={memoMomentList}
        loadNextPage={loadNextPage}
        totalElements={totalElements}
        getItemList={getItemList}
      >
        {(index: number) => {
          return (
            <NeedCard
              {...memoMomentList[index]}
              onLike={() => {
                handleLike(memoMomentList[index], index);
              }}
            />
          );
        }}
      </CommonPage>
      <DragButton onClick={handleOpen} />
      <PermissionsFailModal isOpen={isOpen} handleClose={handleOpen} />
    </div>
  );
}
NeedPage.whyDidYouRender = true;
export default NeedPage;
