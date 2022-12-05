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
import request from '@apis/request';

const pre = process.env.NODE_ENV === 'development' ? '/mock' : '';
class LoginServices {
  static register(params: IRegisterReq): Promise<IRegisterRes> {
    return request.post(`${pre}/w3social/login/register`, { data: params });
  }

  static sendCode(params: ISendCoderReq): Promise<ISendCoderRes> {
    return request.post(`${pre}/w3social/login/sendCode`, params);
  }

  static login(params: ILoginReq): Promise<ILoginRes> {
    return request.post(`${pre}/w3social/login/sendCode`, params);
  }

  static changePassword(params: IchangePasswordReq): Promise<IchangePasswordRes> {
    return request.post(`${pre}/w3social/login/changePassword`, params);
  }
}

export default LoginServices;
