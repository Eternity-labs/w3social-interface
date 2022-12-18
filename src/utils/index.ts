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

export const calcDays = (dateStr?: string) => {
  if (!dateStr) return '今天';
  const prevDate = new Date(dateStr);
  const diff = new Date().getTime() - prevDate.getTime();
  const realDiff = parseInt(diff / 1000 / 86400, 10);
  if (realDiff > 14) {
    return '两周前';
  }
  if (realDiff > 7) {
    return '一周前';
  }
  if (realDiff > 0) {
    return `${realDiff}天前`;
  }
  return '今天';
};
