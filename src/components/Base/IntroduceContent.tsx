import * as React from 'react';

function IntroduceContent() {
  return (
    <div className="bg-oMainColor overflow-hidden rounded-[8px] py-[6px] pl-[14px] pr-[14px] relative">
      <div className="absolute top-[8px] bottom-[8px] left-[12px] rounded-[4px] w-[4px] bg-black" />
      <div className="ml-[14px]">
        内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.
        String类的format()方法用于创建格式化的字符串以及连接多个字符串对象
      </div>
    </div>
  );
}

export default IntroduceContent;
