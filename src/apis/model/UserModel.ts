import type { IResponse } from './common';

export type UserInfo = {
  email: string;
  phone: string;
  loginId: number;
  nickname: string;
  birthday: null;
  wechat: string;
  city: string;
  education: string;
  [props: string]: any;
} | null;
export type IGetUserInfoRes = IResponse<UserInfo>;
export type IUpdateUserInfoReq = {
  userInfo: UserInfo;
};
export type IUpdateUserInfoRes = IResponse<String>;
export type ILayoutRes = IResponse<String>;
