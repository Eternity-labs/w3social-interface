import { atom } from 'jotai';

const GolbalToastAtom = atom({
  isOpen: false,
  message: '',
});
export { GolbalToastAtom };
