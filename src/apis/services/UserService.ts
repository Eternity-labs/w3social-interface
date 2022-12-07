// import axios from 'axios';
import {
  IGetUserInfoRes,
  IUpdateUserInfoReq,
  IUpdateUserInfoRes,
  ILayoutRes,
} from '@apis/model/UserModel';
import request from '@apis/request';

const pre = process.env.NODE_ENV === 'development' ? '/mock' : '';
class UserServices {
  static getUserInfo(): Promise<IGetUserInfoRes> {
    return request.get(`${pre}/w3socialLogin/user/getUserInfo`);
  }

  static updateUserInfo(params: IUpdateUserInfoReq): Promise<IUpdateUserInfoRes> {
    return request.post(`${pre}/w3socialLogin/user/updateUserInfo`, params);
  }

  static logout(): Promise<ILayoutRes> {
    return request.get(`${pre}/w3socialLogin/user/logout`);
  }
}

export default UserServices;
