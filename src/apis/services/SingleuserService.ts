import axios from 'axios';
import {
  TagInfo,
  QuestionInfo,
  PostQuestionReq,
  MessageInfo,
  HandleMessageReq,
} from '@apis/model/SingleuserModel';
import { ISearchID } from '@apis/model/common';

const baseURL = process.env.NODE_ENV === 'development' ? '' : '';

class UserService {
  static getTagList(): Promise<Array<TagInfo>> {
    return axios.get(`${baseURL}/user/tag`);
  }

  static getPublicPermission(params: ISearchID): Promise<boolean> {
    return axios.get(`${baseURL}/user/pulishcheck`, { params });
  }

  static getQuestion(params: ISearchID): Promise<Array<QuestionInfo>> {
    return axios.get(`${baseURL}/user/getquestion`, { params });
  }

  static postQuestion(params: PostQuestionReq): Promise<boolean> {
    return axios.post(`${baseURL}/user/postquestion`, params);
  }

  static getMessage(params: { userId: string }): Promise<Array<MessageInfo>> {
    return axios.post(`${baseURL}/user/frzsnews`, params);
  }

  static handleMessage(params: HandleMessageReq): Promise<boolean> {
    return axios.post(`${baseURL}/user/profrzsnews`, params);
  }
}

export default UserService;
