import { store, changeState } from '@states/zustand';
import create from 'zustand';
import { useImmer } from '@hooks/common/useImmer';
import { useState, memo } from 'react';

const useStore = create(store);
function Demo() {
  const [data, setData] = useImmer({ test: '测试数据' });
  const [testName, setTest] = useState({ test: '测试数据' });

  const { yideng } = useStore();
  console.log('我是demo👮‍♀️，我检查是否更新');
  // const { yideng } = getState();

  const changTest = () => {
    setData(draft => {
      draft.test = '11111';
    });
  };
  const changeTest = () => {
    setTest({
      ...testName,
      test: '测试数据',
    });
  };
  return (
    <>
      <div onClick={changeState}>从zustand获取的状态:{yideng}</div>
      <div onClick={changTest}>{data.test}</div>
      <div>{testName.test}</div>
      <div onClick={changeTest}>测试</div>
    </>
  );
}
Demo.whyDidYouRender = true;
export default memo(Demo);
