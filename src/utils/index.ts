import { DAY_MINIONS } from '@config/common';
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
  const realDiff = Math.floor(diff / 1000);
  if (realDiff >= DAY_MINIONS) {
    const dayDiff = Math.floor(realDiff / DAY_MINIONS);
    if (dayDiff >= 14) {
      return '两周前';
    }
    if (dayDiff >= 7) {
      return '一周前';
    }
    if (dayDiff > 0) {
      return `${dayDiff}天前`;
    }
    return '今天';
  }
  const hDiff = Math.floor(realDiff / 3600);
  if (hDiff > 0) {
    return `${hDiff}小时前`;
  }
  if (Math.floor(realDiff / 60) > 0) {
    return `${Math.floor(realDiff / 60)}分钟前`;
  }
  return '刚刚';
};
