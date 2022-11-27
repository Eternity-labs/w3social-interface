import Snackbar from '@mui/material/Snackbar';
import { useAtom } from 'jotai';
import { GolbalToastAtom } from '@states/index';
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

type ToastProps = {
  isOpen: boolean;
  severity?: 'info';
  message: string;
};
const MuiSnackbar = styled(Snackbar)({
  bottom: '50%',
  justifyContent: 'center',
});
function GlobalToast() {
  const [value, setValue] = useAtom<ToastProps>(GolbalToastAtom);
  const handleClose = () => {
    setValue({
      isOpen: false,
      message: '',
    });
  };
  return (
    <MuiSnackbar
      open={value.isOpen}
      autoHideDuration={100000}
      onClose={handleClose}
      message={value.message}
    />
  );
}
export default GlobalToast;
