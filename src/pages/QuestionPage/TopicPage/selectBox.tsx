import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { ChoiceItem, QuestionInfo } from '@apis/model/SingleuserModel';

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
  const { value = '' } = props;
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
  value: QuestionInfo;
  items: Array<ChoiceItem>;
  onChange?: (value: string) => void;
};
function SelectBox(props: SelectBoxprops) {
  const { value, items = [], onChange } = props;
  const [selectedValue, setValue] = useState('');
  const hanleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  useEffect(() => {
    if (value?.value) {
      setValue(value?.value);
    } else {
      setValue('');
    }
  }, [value?.questionId]);
  return (
    <MuiRadioGroup
      name="use-radio-group"
      className="mt-[30px]"
      value={selectedValue || ''}
      onChange={hanleChange}
    >
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={cn(
              'flex',
              'pl-[100px] text-black text-[14px] font-medium',
              index > 0 ? 'mt-[20px]' : ''
            )}
          >
            <p className="mr-[16px]">{item.value}.</p>
            <MyFormControlLabel value={item.value} label={item.label} control={<Radio />} />
          </div>
        );
      })}
    </MuiRadioGroup>
  );
}
export default SelectBox;
