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
}

export default SquareService;
