import * as React from 'react';

type Props = { content: string };

function IntroduceContent({ content }: Props) {
  return (
    <div className="bg-oMainColor overflow-hidden rounded-[8px] py-[6px] pl-[14px] pr-[14px] relative">
      <div className="absolute top-[8px] bottom-[8px] left-[12px] rounded-[4px] w-[4px] bg-black" />
      <div className="ml-[14px] h-[72px] overflow-clip line-clamp-3 text-ellipsis">{content}</div>
    </div>
  );
}

export default IntroduceContent;
