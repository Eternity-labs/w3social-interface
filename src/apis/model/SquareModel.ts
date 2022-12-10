import type { IResponse, ISearchList, ISearchID } from './common';

export interface MomentData {
  id: number;
  content: string;
  linkes: number;
  tag: number;
  imgs: Array<string>;
  pageView: number;
  title: string | null;
  userId: number;
  nickname: string;
  headSculpture: string;
  [props: string]: string | number | unknown;
}
// 查看帖子
export type GetMomentByIdReq = {
  id: number;
};
export type GetMomentByIdRes = IResponse<MomentData>;
// 添加帖子
export type AddMomentReq = {
  moment: {
    title?: string;
    content: string;
    tags?: string;
    imgs?: string;
  };
};
export type AddMomentRes = IResponse<MomentData>;
export interface TagInfo {
  id: number;
  label: string;
  checked?: boolean;
}
export type GetTagsRes = IResponse<Array<TagInfo>>;

export interface GetMomentReq extends ISearchList {
  userId?: number;
  title?: string;
  tag?: string;
  avatar?: string;
  userName?: string;
}
type GetMomentResData = {
  records: Array<MomentData>;
  totalElements: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
};
export type GetMomentRes = IResponse<GetMomentResData>;
export type LinkOrUnlikeMomentReq = ISearchID;
export type LinkOrUnlikeMomentRes = IResponse<null | string>;
export type UnLinkMomentRes = IResponse<null | string>;
