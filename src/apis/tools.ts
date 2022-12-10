import toast from 'react-hot-toast';
import type { AxiosInstance } from 'axios';
import type { IRegiterData } from '@apis/model/LoginModel';

export const handleGeneralError = (errno: number, errmsg: string) => {
  if (errno === 401) {
    toast(errmsg);
  } else {
    toast(errmsg, { id: 'requestError' });
  }
  return true;
};
