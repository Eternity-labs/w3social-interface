import type { ISearchList, ISearchID } from './common';

export interface HandleMessageReq {
  friendsid: number;
  result: number;
  id: number;
}
export interface GetMessageReq {
  userid?: number;
}
export interface TagInfo {
  id: number;
  tag: string;
}
export interface ChoiceItem {
  value: string;
  label: string;
}
export interface QuestionInfo {
  questionId: number;
  description: string;
  choice: Array<ChoiceItem>;
  value?: string;
  checked?: boolean;
}
export type PostQuestionReq = {
  userId: string;
  answer: Array<{
    questionId: number;
    choice: string;
  }>;
};
export interface MessageInfo {
  id: number;
  friendsid: number;
  createTime: string;
  content?: string;
  headSculpture: string;
  nickname: string;
  tag: Array<string>;
  identity: string;
}
