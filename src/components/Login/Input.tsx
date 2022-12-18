import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

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
  defaultValue?: string;
  type?: 'text' | 'password' | 'number';
};

function InputCom(props: InputComProps): JSX.Element {
  const {
    variant,
    children,
    placeholder = '请输入',
    className = '',
    endAdornmentCom = <div />,
    InputRef,
    defaultValue,
    type,
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const PasswordEnd = (
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      edge="end"
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );
  return (
    <MuiTextFiled
      // id="input-with-icon-textfield"
      placeholder={placeholder}
      className={className}
      variant={variant}
      inputRef={InputRef}
      defaultValue={defaultValue || ''}
      type={showPassword ? 'text' : type}
      InputProps={{
        startAdornment: <InputAdornment position="start">{children}</InputAdornment>,
        endAdornment: (
          <InputAdornment position="end">
            {type === 'password' ? PasswordEnd : endAdornmentCom}
          </InputAdornment>
        ),
      }}
    />
  );
}
export default InputCom;
