import NeedCard from '@components/Did/NeedCard';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { forwardRef } from 'react';

const PADDING_SIZE = 10;
const needPage = () => {
  const data = {
    title: '【全职远程】UI/UX设计师/酒店管理+环保创新平酒店管理+环保创新平dfsdfhdjfhdjkfh',
    avatar: 'HH',
    userName: '二次元身份',
  };
  function Item(index: any, style: any) {
    return (
      <div style={{ ...style, top: `${parseFloat(style!.top) + PADDING_SIZE}px` }}>
        <NeedCard {...data} />
      </div>
    );
  }
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={100}
          itemSize={14}
          width={width}
          initialScrollOffset={20}
        >
          {Item}
        </List>
      )}
    </AutoSizer>
  );
};
export default needPage;
