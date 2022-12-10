// import axios from 'axios';

import request from '@apis/request';
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

const pre = process.env.NODE_ENV === 'development' ? '' : '';
class SquareService {
  static addMoment(params: AddMomentReq): Promise<AddMomentRes> {
    return request.post(`${pre}/w3social/square/moment/addMoment`, params);
  }

  static getMomentById(params: GetMomentByIdReq): Promise<GetMomentByIdRes> {
    return request.get(`${pre}/w3social/square/moment/getMomentById`, { params });
  }

  static getTagList(): Promise<GetTagsRes> {
    return request.get(`${pre}/w3social/square/moment/getTagList`);
  }

  // 点赞
  static likeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return request.get(`${pre}/w3social/square/moment/like`, { params });
  }

  // 取消点赞
  static unLikeMoment(params: LinkOrUnlikeMomentReq): Promise<LinkOrUnlikeMomentRes> {
    return request.get(`${pre}/w3social/square/moment/unLike`, { params });
  }

  // 分页查询
  static getMomentList(params: GetMomentReq): Promise<GetMomentRes> {
    return request.post(`${pre}/w3social/square/moment/getMoment`, params);
  }
}

export default SquareService;
