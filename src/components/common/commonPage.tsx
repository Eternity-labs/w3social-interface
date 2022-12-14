import { useMemo } from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { VariableSizeList as List } from 'react-window';
import type { VariableSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

type CommonPageProps<T> = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  listData: Array<T>;
  loadNextPage: () => void;
  totalElements: number;
  children: (index: number) => React.ReactNode;
  getItemList: (index: number) => number;
};
function CommonPage<T>(props: CommonPageProps<T>) {
  const {
    hasNextPage,
    isNextPageLoading,
    listData,
    loadNextPage,
    totalElements,
    children,
    getItemList,
  } = props;
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  // const itemCount = hasNextPage ? listData.length + 1 : listData.length;
  const itemCount = useMemo(() => {
    return hasNextPage ? listData.length + 1 : listData.length;
  }, [listData, hasNextPage]);

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => {
    return !hasNextPage || index < listData.length;
  };

  // Render an item or a loading indicator.
  // function Item({ index, style }) {
  //   if (!isItemLoaded(index)) {
  //     return <div>loading....</div>;
  //   }
  //   return <div style={style}>{content}</div>;
  // }

  return (
    <AutoSizer>
      {({ height, width }) => (
        // <ReactPullToRefresh onRefresh={handleRefresh} loading={loading}>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              className="List"
              height={height}
              itemCount={listData.length}
              width={width}
              itemSize={getItemList}
              ref={ref}
              onItemsRendered={onItemsRendered}
              initialScrollOffset={20}
            >
              {({ index, style }: ListChildComponentProps<any>) => {
                return (
                  <div
                    style={{
                      ...style,
                      // top: `${parseFloat(style.top as string) + PADDING_SIZE}px`,
                    }}
                  >
                    {!isItemLoaded(index) ? (
                      <div>loading....</div>
                    ) : (
                      <>
                        {children(index)}
                        {index === totalElements - 1 && (
                          <div className="text-center pt-[10px]">到底了....</div>
                        )}
                      </>
                    )}
                  </div>
                );
              }}
            </List>
          )}
        </InfiniteLoader>
        // </ReactPullToRefresh>
      )}
    </AutoSizer>
  );
}
export default CommonPage;
