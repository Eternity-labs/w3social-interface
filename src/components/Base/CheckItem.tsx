import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import cn from 'classnames';

interface CheckItemProps {
  id: number;
  checked: boolean;
  label: string;
  index?: number;
  onChange: (value: boolean, index?: number) => void;
}
const CusFormControlLabel = styled(FormControlLabel)({
  marginRight: '0px',
  marginLeft: '0px',
  paddingLeft: '6px',
  paddingRight: '6px',
  '& .MuiTypography-root': {
    fontSize: '9px',
  },
});
function CheckItem(props: CheckItemProps) {
  const { checked = false, onChange, label, index = 0 } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked, index);
  };
  return (
    <CusFormControlLabel
      label={label}
      className={cn(
        'text-[#494949] text-[9px] border border-solid rounded-full border-[#494949]',
        checked ? 'border-[#0DCE71] text-[#0DCE71]' : ''
      )}
      control={
        <Checkbox
          checked={checked}
          style={{ display: 'none' }}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
    />
  );
}
export default CheckItem;
