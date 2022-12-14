import Modal from '@components/Base/Modal';
import { useNavigate, Link } from 'react-router-dom';
import MuiButton from '@mui/material/Button';
import NoPerMissionImg from '@assets/images/noPermission.png';

type PermissionsFailModal = {
  isOpen: boolean;
  confirm?: () => void;
  handleClose?: () => void;
};
function permissionsFailModal(props: PermissionsFailModal) {
  const { handleClose } = props;

  const buyDid = () => {};
  return (
    <Modal {...props}>
      <img src={NoPerMissionImg} alt="noPermission" />
      <p className="mt-[25px] text-[14px] text-[#515151]">身份权限不够，请购买DID身份</p>
      <Link to="/publishNeed">
        <MuiButton
          onClick={buyDid}
          variant="contained"
          className="mt-[20px] w-[163px] h-[36px] rounded-full bg-black text-[12px] text-white"
        >
          开始吧
        </MuiButton>
      </Link>

      <div
        className="w-full mt-[10px] text-[10px] text-[#515151] py-[10px]  text-right"
        onClick={handleClose}
      >
        继续逛逛&nbsp;&gt;&gt;
      </div>
    </Modal>
  );
}
export default permissionsFailModal;
