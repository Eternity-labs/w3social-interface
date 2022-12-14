import { atomWithImmer } from 'jotai-immer';
import type { UserInfo } from '@apis/model/UserModel';
import type { TagInfo } from '@apis/model/SquareModel';

const userInfoAtom = atomWithImmer<UserInfo>(null);
const TagListAtom = atomWithImmer<Array<TagInfo>>([]);
export { userInfoAtom, TagListAtom };
