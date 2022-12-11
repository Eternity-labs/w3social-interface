// import axios from 'axios';
import {
  IGetUserInfoRes,
  IUpdateUserInfoReq,
  IUpdateUserInfoRes,
  ILayoutRes,
} from '@apis/model/UserModel';
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '/w3socialLogin' : '/w3socialLogin';

class UserServices {
  static getUserInfo(): Promise<IGetUserInfoRes> {
    return axios.get(`${baseURL}/user/getUserInfo`);
  }

  static updateUserInfo(params: IUpdateUserInfoReq): Promise<IUpdateUserInfoRes> {
    return axios.post(`${baseURL}/user/updateUserInfo`, params);
  }

  static logout(): Promise<ILayoutRes> {
    return axios.get(`${baseURL}/user/logout`);
  }
}

export default UserServices;
