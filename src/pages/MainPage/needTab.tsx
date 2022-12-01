import NeedCard from '@components/Did/NeedCard';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList as List } from 'react-window';
import { forwardRef } from 'react';
import UseModal from '@hooks/useModal';
import type { ListChildComponentProps } from 'react-window';
import DragButton from './dragButton';
import PermissionsFailModal from './permissionsFailModal';

const PADDING_SIZE = 10;
function needPage() {
  const { isOpen, handleOpen } = UseModal();
  const data = {
    title: '【全职远程】UI/UX设计师/酒店管理+环保创新平酒店管理+环保创新平dfsdfhdjfhdjkfh',
    avatar: 'HH',
    userName: '二次元身份',
  };
  function Item({ index, style }: ListChildComponentProps<any>) {
    return (
      <div style={{ ...style, top: `${parseFloat(style.top as string) + PADDING_SIZE}px` }}>
        <NeedCard {...data} />
      </div>
    );
  }
  const getItemList = (index: number): number => {
    return 120;
  };
  return (
    <div className="h-full">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={100}
            width={width}
            itemSize={getItemList}
            initialScrollOffset={20}
          >
            {Item}
          </List>
        )}
      </AutoSizer>
      <DragButton onClick={handleOpen} />
      <PermissionsFailModal isOpen={isOpen} handleClose={handleOpen} />
    </div>
  );
}
export default needPage;
