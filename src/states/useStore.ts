import UserService from '@apis/services/UserService';
import { useMutation, useQuery } from 'react-query';
import { useAtom } from 'jotai';
import { userInfoAtom } from './index';

function useStore() {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  // 这里请求发送了两次，后期要做处理，只能发送一次请求
  const GetUserInfoQuery = useQuery('getUserInfo', UserService.getUserInfo, {
    onSuccess: res => {
      if (res?.id) {
        setUserInfo(draft => {
          draft = res;
          return draft;
        });
      }
    },
    enabled: !userInfo?.id,
  });
  // const getUserInfo = () => {
  //   return UserInfoMutation.mutate();
  // };
  return { userInfo, GetUserInfoQuery };
}
export default useStore;
