import axios from 'axios';
import { IDidReq, IDidResData, IDidMomentData, IDidInfoData } from '@apis/model/DidModel';
import { ISearchID } from '@apis/model/common';

const baseURL = process.env.NODE_ENV === 'development' ? '' : '';

class UserService {
  static getTagList(): Promise<string> {
    return axios.get(`${baseURL}/user/tag`);
  }

  static getPublicPermission(params: ISearchID): Promise<boolean> {
    return axios.get(`${baseURL}/user/pulishcheck`);
  }
}

export default UserService;
