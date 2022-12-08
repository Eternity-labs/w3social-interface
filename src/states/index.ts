import { atomWithImmer } from 'jotai-immer';
import type { UserInfo } from '@apis/model/UserModel';
import type { TagInfo } from '@apis/model/SquareModel';

const userInfo = atomWithImmer<UserInfo>(null);
const TagList = atomWithImmer<Array<TagInfo>>([]);
export { userInfo, TagList };
