import { initFilterState } from '@config/didConfig';
import { generateFilterLabel, isInitValue } from '@utils/index';
import { useEffect, useState } from 'react';
import { FilterActionType, FilterAction } from '@type/index';

type Props = {
  onChange?: () => void;
};

const useDidFilter = ({ onChange }: Props) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [filter, setFilter] = useState<any>(initFilterState);
  const [filterList, setFilterList] = useState<
    { name: string; value: number | number[]; label: string }[]
  >([]);
  const [filterLabel, setFilterLabel] = useState<string[]>([]);

  useEffect(() => {
    const list = [];
    const keys = Object.keys(filter);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (!isInitValue(filter[key]))
        list.push({
          name: key,
          value: filter[key],
          label: generateFilterLabel(key, filter[key]),
        });
    }
    setFilterList(list);
  }, [filter]);

  const handleFilterChange = (itemValue: FilterAction, type?: FilterActionType) => {
    if (type === 'CLEAR') {
      setFilter(initFilterState);
    } else if (type === 'DELETE') {
      const val = 'age' in itemValue ? { age: initFilterState.age } : itemValue;
      setFilter({
        ...filter,
        ...val,
      });
    } else {
      setFilter({
        ...filter,
        ...itemValue,
      });
    }
  };

  const handleCloseFilterModal = () => {
    const labels = [];
    for (let i = 0; i < filterList.length; i += 1) {
      const { label } = filterList[i];
      labels.push(label);
    }
    setFilterLabel(labels);
    setShowFilter(labels.length > 0);
    setShowDrawer(false);
    onChange?.(filter);
  };

  return {
    showFilter,
    setShowFilter,
    showDrawer,
    setShowDrawer,
    filter,
    handleFilterChange,
    filterList,
    handleCloseFilterModal,
    filterLabel,
  };
};

export default useDidFilter;
