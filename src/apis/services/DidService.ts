import axios from 'axios';
import {
  IDidReq,
  IDidResData,
  IDidMomentData,
  IDidRes,
  IUserCenterInfo,
} from '@apis/model/DidModel';
import { ISearchID } from '@apis/model/common';

const baseURL =
  process.env.NODE_ENV === 'development' ? '/w3social' : 'http://114.55.67.80:8081/w3social';

class DidServices {
  static getAbouts(): Promise<string> {
    return axios.get(`${baseURL}/did/getAbouts`);
  }

  static getAgreement(): Promise<string> {
    return axios.get(`${baseURL}/did/getAgreement`);
  }

  static getPrivacy(): Promise<string> {
    return axios.get(`${baseURL}/did/getPrivacy`);
  }

  // 推送
  static getDidList(params: IDidReq & { filter: any }): Promise<IDidRes> {
    return axios.post(`${baseURL}/did/did`, params);
  }

  // did 帖子动态
  static getDidMoment(params: ISearchID): Promise<Array<IDidMomentData>> {
    return axios.post(`${baseURL}/did/moment`, params);
  }

  static getUserCenterInfo(params: ISearchID): Promise<IUserCenterInfo> {
    return axios.post(`${baseURL}/did/profile`, params);
  }

  static checkquestion(params: { userId: number }): Promise<boolean> {
    return axios.post(`${baseURL}/did/checkquestion`, params);
  }
}

export default DidServices;
