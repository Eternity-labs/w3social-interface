import { useState, useEffect } from 'react';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SelectBox from './selectBox';

function TopicPage() {
  const [topicList, setTopicList] = useState<any>([]);
  const [curItemInfo, setCurSelectInfo] = useState<any>({});
  const [index, setIndex] = useState<any>(0);
  const navigate = useNavigate();
  let pos: number;
  // '化的字符串以及连接', '方法用于创建', '栏目收录该内容'
  const mockTopicList = [
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format11' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: '',
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format22' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: '',
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format33' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: '',
    },
    {
      hasCheck: false,
      topicText:
        'f内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.创建格式化的字符串以及连接多个字符串对象？',
      selectItems: [
        { value: 'A', label: 'String类的format44' },
        { value: 'B', label: '化的字符串以及连接' },
        { value: 'C', label: '方法用于创建' },
        { value: 'D', label: '栏目收录该内容' },
      ],
      value: '',
    },
  ];

  useEffect(() => {
    setTopicList(mockTopicList);
    setCurSelectInfo(mockTopicList[0]);
  }, []);
  const baseButtonCss = 'w-[107px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]';
  const prev = () => {
    pos = index;
    if (pos > 0) {
      pos = index - 1;
      setIndex(pos);
      const info = topicList[pos];
      setCurSelectInfo(info);
    }
  };
  const next = () => {
    if (!topicList[index].value) {
      toast('请选择...');
      return;
    }
    if (index === topicList.length - 1) {
      // 提交数据
      navigate('/main');
      return;
    }
    pos = index;
    if (pos < topicList.length - 1) {
      pos = index + 1;
      setIndex(pos);
      const info = topicList[pos];
      setCurSelectInfo(info);
    }
  };

  const handleSelect = (value: any) => {
    const info = topicList[index];
    info.value = value;
    setCurSelectInfo(info);
  };

  return (
    <div className=" h-full">
      <div className="h-[250px] bg-logoBg relative pl-[36px] pr-[33px]">
        <div className="flex font-black pt-[30px] pb-[30px]">
          <span className="text-[15px] text-[#515151]">问题</span>
          <div className="ml-[30px] text-black ">
            {index + 1}/{topicList.length}
          </div>
        </div>
        <p className="font-medium text-[14px] leading-[22px]">{curItemInfo.topicText}</p>
      </div>
      {/* <SelectBox
        value={curItemInfo.value}
        items={curItemInfo.selectItems}
        onChange={handleSelect}
      /> */}
      <SelectBox value={curItemInfo} items={curItemInfo.selectItems} onChange={handleSelect} />
      <div className="flex pl-[60px] pr-[60px] mt-[60px] justify-between">
        <MuiButton variant="contained" className={baseButtonCss} onClick={prev}>
          {index === 0 ? '返回' : '上一题'}
        </MuiButton>
        <MuiButton variant="contained" className={baseButtonCss} onClick={next}>
          {index === topicList.length - 1 ? '完成' : '下一题'}
        </MuiButton>
      </div>
    </div>
  );
}
export default TopicPage;
