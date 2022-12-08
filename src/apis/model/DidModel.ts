import type { IResponse } from './common';

interface AboutsData {
  abouts: string;
}
interface AgreementData {
  useragreement: string;
}
interface PrivacyData {
  useragreement: string;
}
export type GetAboutsRes = IResponse<AboutsData>;
export type GetAgreementRes = IResponse<AgreementData>;
export type GetPrivacyRes = IResponse<PrivacyData>;
