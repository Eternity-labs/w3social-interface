import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const MuiRadioGroup = styled(RadioGroup)({
  '& .MuiFormControlLabel-root': {
    'margin-left': '0',
  },
  '& .MuiButtonBase-root': {
    width: 0,
    padding: 0,
    overflow: 'hidden',
  },
});
function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();
  const { value } = props;
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <FormControlLabel
      checked={checked}
      {...props}
      className={checked ? 'text-[#72F9B8]' : 'text-black'}
    />
  );
}
type SelectBoxprops = {
  value: 'string';
  items: Array<any>;
  onChange?: () => void;
};
function SelectBox(props: SelectBoxprops) {
  const { value, items = [], onChange } = props;
  const [selectValue, setValue] = useState<String>('');
  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <MuiRadioGroup name="use-radio-group" defaultValue={selectValue} onChange={onChange}>
      {items.map(item => {
        return <MyFormControlLabel value={item.value} label={item.label} control={<Radio />} />;
      })}
    </MuiRadioGroup>
  );
}
export default SelectBox;
