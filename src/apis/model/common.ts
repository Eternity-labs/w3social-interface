export interface IResponse<T> {
  code: number;
  success?: boolean;
  message?: string;
  data: T;
}
export interface ISearchList {
  page: number;
  size: number;
}
export interface ISearchID {
  id: number | string;
}
