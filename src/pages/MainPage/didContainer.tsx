import * as React from 'react';

function DidContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="p-[16px] h-[calc(100vh-theme(height.headerHeight))] relative">{children}</div>
  );
}

export default DidContainer;
