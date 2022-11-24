import { useState, useEffect } from 'react';
import SelectBox from './selectBox';

function TopicPage() {
  const [topicList, setTopicList] = useState<any>([]);
  const [curItemInfo, setCurSelectInfo] = useState<any>({});
  // '化的字符串以及连接', '方法用于创建', '栏目收录该内容'
  const mockTopicList = [
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: 0,
      index: 1,
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: 0,
      index: 2,
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: 0,
      index: 3,
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: 0,
      index: 4,
    },
  ];

  useEffect(() => {
    setTopicList(mockTopicList);
    setCurSelectInfo(mockTopicList[0]);
  });

  return (
    <div className=" h-full">
      <div className="h-[300px] bg-logobg relative pl-[36px] pr-[33px]">
        <div className="flex font-black pt-[30px] pb-[30px]">
          <span className="text-[15px] text-[#515151]">问题</span>
          <div className="ml-[30px] text-black ">
            {curItemInfo.index}/{topicList.length}
          </div>
        </div>
        <p className="font-medium text-[14px] leading-[22px]">{curItemInfo.topicText}</p>
      </div>
      <SelectBox value={curItemInfo.value} items={curItemInfo.selectItems} />
    </div>
  );
}
export default TopicPage;
