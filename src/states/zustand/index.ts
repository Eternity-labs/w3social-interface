import create from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer';

const DEFAULT_STATE = {
  yideng: '京程一灯',
  age: 20,
  //   arr: ['201603'],
};
const store = create(immer<typeof DEFAULT_STATE>(set => ({ ...DEFAULT_STATE })));
const { getState, setState, subscribe, destroy } = store;
subscribe(state => {
  console.log('状态发生变化', state);
});
function changeState() {
  console.log('🚗22');
  store.setState(state => {
    state.yideng = '我kk投了一票';
  });
}
export { store, changeState, getState, subscribe, destroy };
