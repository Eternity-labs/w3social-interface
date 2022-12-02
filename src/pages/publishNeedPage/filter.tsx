import DrawModal from '@components/Base/DrawModal';
import MultiCheck from '@components/Base/multiCheck';
import type { BaseDrawProps } from '@components/Base/DrawModal';
import { useEffect, useState } from 'react';

export type CheckItemData = {
  id: number;
  label: string;
  checked: boolean;
};

interface IFilterDraw extends BaseDrawProps {
  closeDrawModal: (data: any) => void;
}

function FilterDraw(props: IFilterDraw) {
  const [selectList, setSelectList] = useState<any>([]);

  const mockselectList = [
    {
      id: 1,
      label: 'token',
      checked: true,
    },
    {
      id: 1,
      label: 'web3人类',
      checked: true,
    },
    {
      id: 1,
      label: 'web3人类',
      checked: true,
    },
  ];
  useEffect(() => {
    setSelectList(mockselectList);
  }, []);

  const handleChange = (value: boolean, index: number = 0) => {
    const originValue = selectList[index].value;
    if (originValue === value) {
      return;
    }
    console.log(value, index);

    selectList[index].checked = value;
    setSelectList([...selectList]);
  };
  const closeDrawModal = () => {};
  return (
    <DrawModal {...props} closeDrawModal={closeDrawModal}>
      <MultiCheck selectList={selectList} onChange={handleChange} className="flex flex-wrap" />
    </DrawModal>
  );
}
export default FilterDraw;
