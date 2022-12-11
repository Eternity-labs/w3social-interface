import axios from 'axios';
import { IDidReq, IDidResData, IDidMomentData, IDidInfoData } from '@apis/model/DidModel';
import { ISearchID } from '@apis/model/common';

const baseURL = process.env.NODE_ENV === 'development' ? '/w3social' : '/w3social';

class DidServices {
  static getAbouts(): Promise<string> {
    return axios.get(`${baseURL}/login/register`);
  }

  static getAgreement(): Promise<string> {
    return axios.get(`${baseURL}/did/getAgreement`);
  }

  static getPrivacy(): Promise<string> {
    return axios.get(`${baseURL}/did/getPrivacy`);
  }

  // 推送
  static getDidList(params: IDidReq): Promise<IDidResData> {
    return axios.post(`${baseURL}/did/did`, params);
  }

  // did 用户详情
  static getDidInfo(params: ISearchID): Promise<IDidInfoData> {
    return axios.post(`${baseURL}/did/did`, params);
  }

  // did 帖子动态
  static getDidMoment(params: ISearchID): Promise<Array<IDidMomentData>> {
    return axios.post(`${baseURL}/did/moment`, params);
  }
}

export default DidServices;
