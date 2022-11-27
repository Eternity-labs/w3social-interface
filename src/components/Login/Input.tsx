import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';

const MuiTextFiled = styled(TextField)({
  width: '250px',
  height: '38px',
  background: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  borderRadius: '19px',
  paddingLeft: '16px',
  paddingRight: '16px',
  '& .MuiOutlinedInput-notchedOutline': {
    boderWidth: 0,
  },
  '& .MuiOutlinedInput-root': {
    height: '100%',
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
  },
  '& .MuiOutlinedInput-root fieldset': {
    border: 'none',
  },
  '& .MuiInputBase-root .MuiOutlinedInput-input': {
    boxSizing: 'border-box',
    padding: '0',
    fontSize: '12px',
  },
});
type InputComProps = {
  variant?: 'variant';
  children?: JSX.Element;
  placeholder?: string;
  className?: string;
  endAdornmentCom?: any;
  InputRef: any;
};
function InputCom(props: InputComProps): JSX.Element {
  const {
    variant,
    children,
    placeholder = '请输入',
    className = '',
    endAdornmentCom = <div />,
    InputRef,
  } = props;
  return (
    <MuiTextFiled
      id="input-with-icon-textfield"
      placeholder={placeholder}
      className={className}
      variant={variant}
      inputRef={InputRef}
      InputProps={{
        startAdornment: <InputAdornment position="start">{children}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{endAdornmentCom}</InputAdornment>,
      }}
    />
  );
}
export default InputCom;
