import type { ISearchList, ISearchID } from './common';

export interface MomentData {
  id: number;
  content: string;
  likes: number;
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
export type GetMomentByIdRes = MomentData;
// 添加帖子
export type AddMomentReq = {
  moment: {
    title?: string;
    content: string;
    tags?: Array<number | string>;
    imgs?: string;
  };
};
export type AddMomentRes = MomentData;
export interface TagInfo {
  id: number;
  tag: string;
  checked?: boolean;
}
export type GetTagsRes = Array<TagInfo>;

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
export type GetMomentRes = GetMomentResData;
export type LinkOrUnlikeMomentReq = ISearchID;
export type LinkOrUnlikeMomentRes = null | string;
export type UnLinkMomentRes = null | string;
