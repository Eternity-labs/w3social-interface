// import axios from 'axios';

import { GetAboutsRes, GetAgreementRes, GetPrivacyRes } from '@apis/model/DidModel';
import axios from 'axios';

class DidServices {
  static getAbouts(): Promise<GetAboutsRes> {
    return axios.get(`/login/register`);
  }

  static getAgreement(): Promise<GetAboutsRes> {
    return axios.get(`/did/getAgreement`);
  }

  static getPrivacy(): Promise<GetAboutsRes> {
    return axios.get(`/did/getPrivacy`);
  }
}

export default DidServices;
