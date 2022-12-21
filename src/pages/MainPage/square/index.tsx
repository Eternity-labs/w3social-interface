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
import UserService from '@apis/services/SingleuserService';
import useStore from '@states/useStore';
import DidContentCard from '@components/Did/DidContentCard';
import { useNavigate } from 'react-router-dom';
import DragButton from './components/dragButton';
import PermissionsFailModal from './components/permissionsFailModal';

import './pullDown.css';

const PADDING_SIZE = 10;
function NeedPage() {
  const QueryClient = useQueryClient();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const { isOpen, handleOpen } = UseModal();
  const [memoMomentList, setMemoMomentList] = useState<Array<MomentData>>([]);
  const [isHasNextPage, setNextPageStatus] = useState<boolean>(false);
  // const [userId, setUserId] = useState<number | null>(null);
  // const listRef = useRef<VariableSizeList<any> | null>(null);
  // const listItemRefs = useRef<Array<HTMLDivElement>>([]);
  const [totalElements, setTotal] = useState(0);
  const { userInfo } = useStore();

  const MomentListQuery = useQuery(
    ['getMomentList', page],
    () => SquareService.getMomentList({ page, size: 10 }),
    {
      onSuccess: res => {
        const newMemoList = [...memoMomentList, ...res.records];
        setMemoMomentList(newMemoList);
        setTotal(res.totalElements);
        if (newMemoList.length < res.totalElements) {
          setNextPageStatus(true);
        }
      },
    }
  );
  const PublicPermissionMutaion = useMutation(UserService.getPublicPermission, {
    onSuccess: res => {
      if (!res) {
        handleOpen();
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
      return 260;
    }
    return 220;
  };
  const handleLike = (data: MomentData, index: number) => {
    if (data.isLike) {
      const newData = JSON.parse(JSON.stringify(memoMomentList));
      newData[index].isLike = false;
      newData[index].likes = --newData[index].likes;
      setMemoMomentList(newData);
      unLikeComentMutation.mutate({ id: data.id });
    } else {
      const newData = JSON.parse(JSON.stringify(memoMomentList));
      newData[index].isLike = true;
      newData[index].likes = ++newData[index].likes;
      setMemoMomentList(newData);
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
  const isItemLoaded = (index: number) => {
    return !isHasNextPage || index < memoMomentList.length;
  };
  const loadNextPage = () => {
    if (
      memoMomentList.length &&
      memoMomentList.length < (MomentListQuery?.data?.totalElements || 0)
    ) {
      setPage(page + 1);
    }
  };
  const getPublicPermission = () => {
    navigate('/publishNeed');
  };
  return (
    <div className="h-full squareRoot">
      <CommonPage
        hasNextPage={isHasNextPage}
        isNextPageLoading={MomentListQuery?.isLoading}
        listData={memoMomentList}
        loadNextPage={loadNextPage}
        totalElements={totalElements}
        getItemList={getItemList}
      >
        {(index: number) => {
          return (
            // <NeedCard
            //   {...memoMomentList[index]}
            // onLike={() => {
            //   handleLike(memoMomentList[index], index);
            // }}
            // />
            <DidContentCard
              {...memoMomentList[index]}
              onLike={() => {
                handleLike(memoMomentList[index], index);
              }}
              onComment={() => {}}
            />
          );
        }}
      </CommonPage>
      <DragButton onClick={getPublicPermission} />
      <PermissionsFailModal isOpen={isOpen} handleClose={handleOpen} />
    </div>
  );
}
NeedPage.whyDidYouRender = true;
export default NeedPage;
