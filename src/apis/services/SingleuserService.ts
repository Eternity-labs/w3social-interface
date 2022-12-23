import axios from 'axios';
import {
  TagInfo,
  QuestionInfo,
  PostQuestionReq,
  MessageInfo,
  HandleMessageReq,
} from '@apis/model/SingleuserModel';
import { ISearchID } from '@apis/model/common';
import { IDidInfoData } from '@apis/model/DidModel';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/w3social' : 'http://114.55.67.80:8081/w3social';

class UserService {
  static getTagList(): Promise<Array<TagInfo>> {
    return axios.get(`${baseURL}/square/moment/getTagList`);
  }

  static getPublicPermission(params: ISearchID): Promise<boolean> {
    return axios.get(`${baseURL}/did/pulishcheck`, { params });
  }

  static getQuestion(params: ISearchID): Promise<Array<QuestionInfo>> {
    return axios.get(`${baseURL}/did/getQuestion`, { params });
  }

  static postQuestion(params: PostQuestionReq): Promise<boolean> {
    return axios.post(`${baseURL}/did/postquestion`, params);
  }

  static getMessage(params: { userId: string }): Promise<Array<MessageInfo>> {
    return axios.post(`${baseURL}/did/frzsnews`, params);
  }

  static handleMessage(params: HandleMessageReq): Promise<boolean> {
    return axios.post(`${baseURL}/did/profrzsnews`, params);
  }

  // did 用户详情
  static getDidInfo(params: ISearchID): Promise<IDidInfoData> {
    return axios.post(`${baseURL}/did/info`, params);
  }

  // did 用户朋友
  static getFriends(params: ISearchID): Promise<IDidInfoData> {
    return axios.post(`${baseURL}/did/friendslist`, params);
  }
}

export default UserService;
