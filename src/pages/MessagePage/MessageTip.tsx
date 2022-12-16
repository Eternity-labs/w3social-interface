import { Tooltip } from '@mui/material';
import UserService from '@apis/services/SingleuserService';
import { useMutation } from 'react-query';

type MessageTipProps = {
  children: JSX.Element;
  id: number;
  friendsid: number;
};
function MessageTip(props: MessageTipProps) {
  const { children, id, friendsid } = props;
  const MessageMutation = useMutation(UserService.handleMessage, {
    onSuccess: () => {},
  });
  const pass = () => {
    MessageMutation.mutate({ id, friendsid, result: 1 });
  };
  const refuse = () => {
    MessageMutation.mutate({ id, friendsid, result: 2 });
  };

  return (
    <Tooltip
      className="pt-[5px]"
      open
      title={
        <div className="px-[5px] text-[12px]">
          <p onClick={pass}>通过</p>
          <p className="mt-[3px]" onClick={refuse}>
            拒绝
          </p>
        </div>
      }
    >
      <div className="pt-[10px]"> {children}</div>
    </Tooltip>
  );
}
export default MessageTip;
