import toast from 'react-hot-toast';

export const handleGeneralError = (errno: number, errmsg: string) => {
  if (errno === 401) {
    toast(errmsg);
  } else {
    toast(errmsg);
  }
  return true;
};
