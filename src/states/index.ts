import { atomWithImmer } from 'jotai-immer';
import type { UserInfo } from '@apis/model/UserModel';

const userInfo = atomWithImmer<UserInfo>(null);
export { userInfo };
