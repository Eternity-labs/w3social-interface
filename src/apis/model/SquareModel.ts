import type { IResponse } from './common';

interface MomentData {
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
}
// 查看帖子
export type GetMomentByIdReq = {
  id: number;
};
export type GetMomentByIdRes = IResponse<MomentData>;
// 添加帖子
export type AddMomentReq = {
  title?: string;
  content: string;
  tags?: string;
  imgs?: string;
};
export type AddMomentRes = IResponse<MomentData>;
export interface TagInfo {
  id: number;
  label: string;
  checked?: boolean;
}
export type GetTagsRes = IResponse<Array<TagInfo>>;
