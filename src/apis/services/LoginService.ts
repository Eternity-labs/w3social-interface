// import axios from 'axios';
import {
  IRegisterReq,
  IRegisterRes,
  ISendCoderReq,
  ISendCoderRes,
  ILoginReq,
  ILoginRes,
  IchangePasswordReq,
  IchangePasswordRes,
} from '@apis/model/LoginModel';
import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/w3social' : 'http://114.55.67.80:8081/w3social';

class LoginServices {
  static register(params: IRegisterReq): Promise<IRegisterRes> {
    return axios.post(`${baseURL}/login/register`, params);
  }

  static sendCode(params: ISendCoderReq): Promise<ISendCoderRes> {
    return axios.post(`${baseURL}/login/sendCode`, params);
  }

  static login(params: ILoginReq): Promise<IRegisterRes> {
    return axios.post(`${baseURL}/login/login`, params);
  }

  static changePassword(params: IchangePasswordReq): Promise<IchangePasswordRes> {
    return axios.post(`${baseURL}/login/changePassword`, params);
  }
}

export default LoginServices;
