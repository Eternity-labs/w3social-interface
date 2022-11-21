import { allFilters } from '@config/didConfig';

export const generateFilterLabel = (curName: string, curValue: number | number[]): string => {
  if (Array.isArray(curValue)) {
    return `${curValue[0]} - ${curValue[1]}`;
  }
  let res = '';
  for (let i = 0; i < allFilters.length; i += 1) {
    const { name, items = [] } = allFilters[i];
    if (curName === name) {
      for (let j = 0; j < items.length; j += 1) {
        const { label, value } = items[j];
        if (value === curValue) {
          res = label;
          break;
        }
      }
    }
  }
  return res;
};

export const add = (a: number, b: number) => {
  return a + b;
};
