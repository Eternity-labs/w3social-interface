/* eslint-disable react/require-default-props */
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import cn from 'classnames';
import { ListItem } from 'src/types';

interface Props {
  label: string;
  name: string;
  value?: string | number[];
  list?: ListItem[];
  onChange: (value: any) => void;
}

function Radios({ list = [], value, name, onChange }: Omit<Props, 'label'>) {
  const [current, setCurrent] = React.useState(0);

  const handleClick = (val: number) => {
    setCurrent(val);
    onChange({ [name]: val });
  };

  const getStyle = (isCheck: boolean) => {
    const base = `flex h-[20px] m-w-[36px] items-center px-[8px] py-[4px] rounded-[20px] border-[1px] border-solid ml-[12px] text-[10px] border-[currentColor]`;
    return cn(base, isCheck ? 'text-fSelect' : 'text-grey');
  };

  return (
    <div className="flex items-center justify-center">
      {list.map(({ label, value: val }, index) => (
        <span
          key={val}
          className={getStyle(val === current)}
          aria-hidden="true"
          onClick={() => handleClick(val as number)}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function RangeSlider({ value: defaultVal, onChange, name }: Omit<Props, 'label'>) {
  const [value, setValue] = React.useState<number[]>(
    defaultVal ? (defaultVal as number[]) : [16, 65]
  );

  React.useEffect(() => {
    setValue(defaultVal as number[]);
  }, [defaultVal]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleCommitted = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onChange({
      [name]: newValue,
    });
  };

  const valuetext = (val: number) => {
    return `${val}`;
  };

  return (
    <Box className="flex-1 flex">
      <Slider
        className="flex-1 mx-[12px] text-fSelect"
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleCommitted}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        size="small"
        max={65}
        min={16}
      />
      <span className="w-[60px] flex items-center justify-center box-border mx-[20px]">
        {value[0]} - {value[1]}
      </span>
    </Box>
  );
}

function FilterItem({ list, label, name, value, onChange }: Props) {
  return (
    <div className="flex items-center mt-[16px]">
      <span className="font-semibold text-[12px] w-[48px]">{label}</span>
      {list ? (
        <Radios list={list} name={name} value={value} onChange={onChange} />
      ) : (
        <RangeSlider name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
}

export default FilterItem;
