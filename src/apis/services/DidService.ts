// import axios from 'axios';

import request from '@apis/request';
import { GetAboutsRes, GetAgreementRes, GetPrivacyRes } from '@apis/model/DidModel';

const pre = process.env.NODE_ENV === 'development' ? '' : '';
class DidServices {
  static getAbouts(): Promise<GetAboutsRes> {
    return request.get(`${pre}/w3social/login/register`);
  }

  static getAgreement(): Promise<GetAboutsRes> {
    return request.get(`${pre}/w3social/did/getAgreement`);
  }

  static getPrivacy(): Promise<GetAboutsRes> {
    return request.get(`${pre}/w3social/did/getPrivacy`);
  }
}

export default DidServices;
