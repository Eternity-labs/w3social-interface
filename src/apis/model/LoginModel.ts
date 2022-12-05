import { IntSupportOption } from 'prettier';
import type { IResponse } from './common';

interface ILoginInfo {
  email: string;
  password: string;
}
interface IRegiterData {
  token: string;
}
// 注册
export interface IRegisterReq {
  loginInfo: ILoginInfo;
  code: string;
}
export type IRegisterRes = IResponse<IRegiterData>;

// 发送验证码
export interface ISendCoderReq extends Omit<ILoginInfo, 'password'> {
  type: number;
}
// 发送验证码
export type ISendCoderRes = IResponse<string>;

// 登陆
export interface ILoginReq {
  loginInfo: ILoginInfo;
}
export type ILoginRes = IResponse<string>;

// 修改密码
export type IchangePasswordReq = IRegisterReq;
export type IchangePasswordRes = ILoginRes;
