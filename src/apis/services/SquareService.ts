// import axios from 'axios';

import {
  AddMomentReq,
  AddMomentRes,
  GetMomentByIdReq,
  GetMomentByIdRes,
  GetTagsRes,
  GetMomentReq,
  GetMomentRes,
  LinkOrUnlikeMomentReq,
  LinkOrUnlikeMomentRes,
} from '@apis/model/SquareModel';
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '/w3social' : '/w3social';

class SquareService {
  static addMoment(params: AddMomentReq): Promise<AddMomentRes> {
    return axios.post(`${baseURL}/square/moment/addMoment`, params);
  }

  static getMomentById(params: GetMomentByIdReq): Promise<GetMomentByIdRes> {
    return axios.get(`${baseURL}/square/moment/getMomentById`, { params });
  }

  static getTagList(): Promise<GetTagsRes> {
    return axios.get(`${baseURL}/square/moment/getTagList`);
  }

  // 点赞
  static likeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return axios.get(`${baseURL}/square/moment/like`, { params });
  }

  // 取消点赞
  static unLikeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return axios.get(`${baseURL}/square/moment/unLike`, { params });
  }

  // 分页查询
  static getMomentList(params: GetMomentReq): Promise<GetMomentRes> {
    let i = 100000000;
    while (i < 0) {
      i--;
    }
    return axios.post(`${baseURL}/square/moment/getMoment`, params);
  }
}

export default SquareService;
