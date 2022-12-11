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

class LoginServices {
  static register(params: IRegisterReq): Promise<IRegisterRes> {
    return axios.post(`/login/register`, params);
  }

  static sendCode(params: ISendCoderReq): Promise<ISendCoderRes> {
    return axios.post(`/login/sendCode`, params);
  }

  static login(params: ILoginReq): Promise<ILoginRes> {
    return axios.post(`/login/login`, params);
  }

  static changePassword(params: IchangePasswordReq): Promise<IchangePasswordRes> {
    return axios.post(`/login/changePassword`, params);
  }
}

export default LoginServices;
