import { FilterProps } from '@type/index';

export const allFilters: FilterProps[] = [
  {
    label: '身份',
    name: 'identify',
    items: [
      {
        label: 'builder',
        value: 1,
      },
      {
        label: '投资人',
        value: 2,
      },
    ],
  },
  {
    label: '性别',
    name: 'sex',
    items: [
      {
        label: '女性',
        value: 1,
      },
      {
        label: '男性',
        value: 2,
      },
    ],
  },
  {
    label: '时间',
    name: 'time',
    items: [
      {
        label: '近一周',
        value: 1,
      },
      {
        label: '近一月',
        value: 2,
      },
    ],
  },
  {
    label: '标签',
    name: 'label',
    items: [
      {
        label: 'web3er',
        value: 1,
      },
      {
        label: '开发者',
        value: 2,
      },
    ],
  },
  {
    label: '年龄',
    name: 'age',
  },
];

export const initFilterState = {
  identify: 0,
  sex: 0,
  time: 0,
  label: 0,
  age: [16, 65]
}