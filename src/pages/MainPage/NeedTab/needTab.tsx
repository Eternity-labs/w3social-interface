import NeedCard from '@components/Did/NeedCard';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { useState } from 'react';
import UseModal from '@hooks/useModal';
import type { ListChildComponentProps } from 'react-window';
import SquareService from '@apis/services/SquareService';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import HandleBoundary from '@components/common/HandleBoundary';
import type { GetMomentRes, MomentData } from '@apis/model/SquareModel';
import DragButton from './components/dragButton';
import PermissionsFailModal from './components/permissionsFailModal';

const PADDING_SIZE = 10;
function NeedPage() {
  const QueryClient = useQueryClient();
  const [page, setPage] = useState<number>(1);
  const { isOpen, handleOpen } = UseModal();
  const momentList = useQuery(
    ['needTab', page],
    // () => Promise.resolve({ data: { records: [{}], totalElements: 1 } })
    () => SquareService.getMomentList({ page, size: 10 })
  );
  console.log('🍌🍌render.....');
  const LikeComentMutation = useMutation(SquareService.likeMoment, {
    onSuccess: () => {
      console.log('🍌🍌onSuccess.....');
      QueryClient.invalidateQueries(['needTab', page]);
    },
  });
  const unLikeComentMutation = useMutation(SquareService.unLikeMoment, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['needTab', page]);
    },
  });
  // const data = {
  //   title: '【全职远程】UI/UX设计师/酒店管理+环保创新平酒店管理+环保创新平dfsdfhdjfhdjkfh',
  //   avatar: 'HH',
  //   userName: '二次元身份',
  // };
  const getItemList = (index: number): number => {
    return 120;
  };
  const handleLike = (data: MomentData, index: number) => {
    if (data.isLike) {
      console.log('🍌🍌isLike.....');

      unLikeComentMutation.mutate({ id: data.id });
    } else {
      LikeComentMutation.mutate({ id: data.id });
    }
  };
  return (
    <div className="h-full">
      <HandleBoundary query={momentList}>
        {data => (
          <AutoSizer>
            {({ height, width }) => (
              <List
                className="List"
                height={height}
                itemCount={data.data.totalElements}
                width={width}
                itemSize={getItemList}
                initialScrollOffset={20}
              >
                {({ index, style }: ListChildComponentProps<any>) => {
                  return (
                    <div
                      style={{
                        ...style,
                        top: `${parseFloat(style.top as string) + PADDING_SIZE}px`,
                      }}
                    >
                      <NeedCard
                        {...data.data.records[index]}
                        onLike={() => {
                          handleLike(data.data.records[index], index);
                        }}
                      />
                    </div>
                  );
                }}
              </List>
            )}
          </AutoSizer>
        )}
      </HandleBoundary>
      <DragButton onClick={handleOpen} />
      <PermissionsFailModal isOpen={isOpen} handleClose={handleOpen} />
    </div>
  );
}
NeedPage.whyDidYouRender = true;
export default NeedPage;
