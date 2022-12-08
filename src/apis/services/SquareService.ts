// import axios from 'axios';

import request from '@apis/request';
import {
  AddMomentReq,
  AddMomentRes,
  GetMomentByIdReq,
  GetMomentByIdRes,
  GetTagsRes,
} from '@apis/model/SquareModel';

const pre = process.env.NODE_ENV === 'development' ? '/mock' : '';
class SquareService {
  static addMoment(params: AddMomentReq): Promise<AddMomentRes> {
    return request.get(`${pre}/w3social/square/moment/addMoment`);
  }

  static getMomentById(params: GetMomentByIdReq): Promise<GetMomentByIdRes> {
    return request.get(`${pre}/w3social/square/moment/getMomentById`);
  }

  static getTagList(): Promise<GetTagsRes> {
    return request.get(`${pre}/w3social/square/moment/getTagList`);
  }

  // 点赞
  static likeMoment(): Promise<GetTagsRes> {
    return request.get(`${pre}/w3social/square/moment/like`);
  }

  // 取消点赞
  static unLikeMoment(): Promise<GetTagsRes> {
    return request.get(`${pre}/w3social/square/moment/unLike`);
  }

  // 分页查询
  static getMoment(): Promise<GetTagsRes> {
    return request.get(`${pre}/w3social/square/moment/getMoment`);
  }
}

export default SquareService;
