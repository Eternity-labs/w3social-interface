import axios from 'axios';
// import { message } from 'antd';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleGeneralError } from './tools';

const tokenUrl = [
  '/w3social/login/register',
  '/w3social/login/changePassword',
  '/w3social/login/login',
];
class Request {
  public instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 前置拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        const token = localStorage.getItem('w3SocialThoen');
        if (token) {
          res.headers = {
            Authorization: token,
          };
        }
        return res;
      },
      (err: any) => {
        return Promise.reject(err);
      }
    );
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        const { data, code, message } = res.data;
        if (code !== 200) {
          handleGeneralError(code, message);
        }
        if (tokenUrl.indexOf(res.config.url || '') > 0) {
          localStorage.setItem('w3SocialThoen', data.token);
        }
        return res.data;
      },
      (err: any) => {
        Promise.reject(err);
      }
    );
  }
}
const baseUrl = process.env.NODE_ENV === 'development' ? '' : 'w3social.chat';
const RequsetIns = new Request({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true,
});
export default RequsetIns.instance;
