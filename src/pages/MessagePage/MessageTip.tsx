import { Tooltip } from '@mui/material';
import UserService from '@apis/services/SingleuserService';
import { useMutation } from 'react-query';

type MessageTipProps = {
  children: JSX.Element;
  id: number;
  frizesid: number;
};
function MessageTip(props: MessageTipProps) {
  const { children, id, frizesid } = props;
  const MessageMutation = useMutation(UserService.handleMessage, {
    onSuccess: () => {},
  });
  const pass = () => {
    MessageMutation.mutate({ id, frizesid, result: '1' });
  };
  const refuse = () => {
    MessageMutation.mutate({ id, frizesid, result: '2' });
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
