import Modal from '@components/Base/Modal';
import { useCountDown } from 'ahooks';
import { useNavigate } from 'react-router-dom';

type RenderModalProps = {
  isOpen: boolean;
  confirm?: () => void;
};
function ModifyModal(props: RenderModalProps) {
  const { confirm } = props;
  const navigate = useNavigate();
  const onEnd = () => {
    if (confirm) {
      confirm();
    }
  };
  const [countdown] = useCountDown({ leftTime: 3 * 1000, onEnd });
  const ModalContent = (
    <div>
      将在<span className="text-[#1FD47D]">{Math.round(countdown / 1000)}s</span>
      后跳转到登陆页面&gt;&gt;
    </div>
  );
  const options = {
    title: '已成功修改密码',
    content: ModalContent,
    buttonText: '去登陆',
  };

  return <Modal {...props} options={options} isShowExit={false} />;
}
export default ModifyModal;
