import * as React from 'react';

function MainContainer({ children }: React.PropsWithChildren) {
  // h-[calc(100vh-theme(height.headerHeight))]
  return <div className="p-[16px]  relative  flex-1">{children}</div>;
}

export default MainContainer;
