import { allFilters, initFilterState } from '@config/didConfig';

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

export const isInitValue = (value: any): boolean => {
  if (value === 0) return true;
  if (value[0] === initFilterState.age[0] && value[1] === initFilterState.age[1]) return true;
  return false;
};
