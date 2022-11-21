import { generateFilterLabel } from '@utils/index';
import { useEffect, useState } from 'react';
import { ListItem } from 'src/types';

const useDidFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);
  const [filter, setFilter] = useState<any>({});
  const [filterList, setFilterList] = useState<
    { name: string; value: number | number[]; label: string }[]
  >([]);

  const handleFilterChange = (itemValue: ListItem) => {
    setFilter({
      ...filter,
      ...itemValue,
    });
  };

  useEffect(() => {
    const list = [];
    const keys = Object.keys(filter);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      list.push({
        name: key,
        value: filter[key],
        label: generateFilterLabel(key, filter[key]),
      });
    }
    setFilterList(list);
  }, [filter]);

  return {
    showFilter,
    setShowFilter,
    showDrawer,
    setShowDrawer,
    filter,
    handleFilterChange,
    filterList,
  };
};

export default useDidFilter;
