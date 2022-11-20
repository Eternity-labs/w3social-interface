import * as React from 'react';

function DidContainer({ children }: React.PropsWithChildren) {
  return <div className="p-[16px]">{children}</div>;
}

export default DidContainer;
