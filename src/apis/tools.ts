import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';

type ErrorCodeMapType = {
  20001: () => void;
  20002: () => void;
  500: string;
  [props: number]: string | Function;
};
const ErrorCodeMap: ErrorCodeMapType = {
  20001: () => {
    redirect('/');
  },
  20002: () => {
    redirect('/');
  },
  500: '发生了小意外，请稍后重试...',
};
export const handleGeneralError = (code: keyof ErrorCodeMapType, errmsg: string) => {
  const codeMap = ErrorCodeMap[code];
  if (codeMap) {
    if (typeof codeMap === 'function') {
      codeMap();
    } else {
      toast(codeMap, { id: 'requestError' });
    }
  } else {
    toast(errmsg, { id: 'requestError' });
  }
};
