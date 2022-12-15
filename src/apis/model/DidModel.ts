interface DidBaseData {
  email?: string;
  age?: Array<number>;
  identify?: number;
  gender?: number;
}
export interface IDidReq extends DidBaseData {
  id: string;
  page: number;
  size: number;
}
export interface IDidResData extends DidBaseData {
  id: number;
  publickey: string;
  tag: Array<string>;
  address: string;
}

export interface IDidInfoData extends DidBaseData {
  introduce: string;
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
