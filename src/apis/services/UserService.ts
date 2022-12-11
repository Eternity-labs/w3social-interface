// import axios from 'axios';
import {
  IGetUserInfoRes,
  IUpdateUserInfoReq,
  IUpdateUserInfoRes,
  ILayoutRes,
} from '@apis/model/UserModel';
import axios from 'axios';

class UserServices {
  static getUserInfo(): Promise<IGetUserInfoRes> {
    return axios.get(`/user/getUserInfo`);
  }

  static updateUserInfo(params: IUpdateUserInfoReq): Promise<IUpdateUserInfoRes> {
    return axios.post(`/user/updateUserInfo`, params);
  }

  static logout(): Promise<ILayoutRes> {
    return axios.get(`/user/logout`);
  }
}

export default UserServices;
