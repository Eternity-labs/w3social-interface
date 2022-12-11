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
export type IGetUserInfoRes = UserInfo;
export type IUpdateUserInfoReq = {
  userInfo: UserInfo;
};
export type IUpdateUserInfoRes = string;
export type ILayoutRes = string;
