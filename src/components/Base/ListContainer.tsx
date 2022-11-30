import * as React from 'react';
import PullToRefresh from 'rmc-pull-updown-to-refresh';

function ListContainer({ children, ...props }: any) {
  console.log(props);
  return (
    <PullToRefresh
      className="h-[calc(100%-20px)] box-border"
      loadingClassName="bg-transparent"
      {...props}
    >
      {children}
    </PullToRefresh>
  );
}

export default ListContainer;
