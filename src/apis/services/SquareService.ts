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

class SquareService {
  static addMoment(params: AddMomentReq): Promise<AddMomentRes> {
    return axios.post(`/square/moment/addMoment`, params);
  }

  static getMomentById(params: GetMomentByIdReq): Promise<GetMomentByIdRes> {
    return axios.get(`/square/moment/getMomentById`, { params });
  }

  static getTagList(): Promise<GetTagsRes> {
    return axios.get(`/square/moment/getTagList`);
  }

  // 点赞
  static likeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return axios.get(`/square/moment/like`, { params });
  }

  // 取消点赞
  static unLikeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return axios.get(`/square/moment/unLike`, { params });
  }

  // 分页查询
  static getMomentList(params: GetMomentReq): Promise<GetMomentRes> {
    return axios.post(`/square/moment/getMoment`, params);
  }
}

export default SquareService;
