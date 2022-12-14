import axios, { AxiosResponse } from 'axios';
import type { IResponse } from '@apis/model/common';
import { handleGeneralError } from './tools';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  if (config.headers) config.headers.Authorization = localStorage.getItem('w3SocialToken') || '';

  return config;
});

axios.interceptors.response.use(
  ({ data }: AxiosResponse<IResponse<any>>) => {
    if (data.code !== 200) {
      handleGeneralError(data.code, data.message || '');
      // } else if (tokenUrl.indexOf(res.config.url || '') > 0) {
      //   localStorage.setItem('w3SocialThoen', data?.token);
      // }
      return Promise.reject(new Error(data.message));
    }
    return data.data;
  },
  error => {
    if (error?.response?.status === 401) {
      window.location.replace('/login');
    }
    return Promise.reject(error);
  }
);
