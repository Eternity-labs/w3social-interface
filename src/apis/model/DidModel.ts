interface DidBaseData {
  email?: string;
  age?: Array<number>;
  identify?: number;
  gender?: number;
}
export interface IDidReq extends DidBaseData {
  id: number;
  page: number;
  size: number;
}
export interface IDidResData extends DidBaseData {
  id: number;
  publickey: string;
  tag: Array<string>;
  address: string;
}
export interface IDidRes {
  records: Array<IDidResData>;
  totalElements: number;
  pageSize: number;
  currentPage: number;
}

export interface IDidInfoData extends DidBaseData {
  address: string;
  city: string;
  head_sculpture: string;
  id: number;
  nickname: string;
  introduce: string;
  tag: Array<string>;
  wishtag: Array<string>;
}
export interface IDidMomentData {
  useId: number;
  content: string;
  likes: number;
  img: string | null;
  pageView: number;
  createTime: string;
}

export interface IUserCenterInfo extends IDidInfoData {}
