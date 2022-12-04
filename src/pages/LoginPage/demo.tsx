import { store, changeState } from '@states/zustand';
import create from 'zustand';
import { useImmer } from '@hooks/common/useImmer';

const useStore = create(store);
function Demo() {
  const [data, setData] = useImmer({ test: '测试数据' });
  const { yideng } = useStore();
  console.log('我是demo👮‍♀️，我检查是否更新');
  // const { yideng } = getState();

  const changTest = () => {
    setData(draft => {
      draft.test = '11111';
    });
  };
  return (
    <>
      <div onClick={changeState}>从zustand获取的状态:{yideng}</div>
      <div onClick={changTest}>{data.test}</div>
    </>
  );
}
export default Demo;
