import DrawModal from '@components/Base/DrawModal';
import MultiCheck from '@components/Base/multiCheck';
import type { BaseDrawProps } from '@components/Base/DrawModal';
import { useEffect, useState } from 'react';
import { TagInfo } from '@apis/model/SquareModel';

export type CheckItemData = {
  id: number;
  label: string;
  checked?: boolean;
};

interface IFilterDraw extends BaseDrawProps {
  closeDrawModal: (data: any) => void;
  tagList: Array<TagInfo>;
  handleChange: (value: boolean, index: number) => void;
}

function FilterDraw(props: IFilterDraw) {
  const { tagList, handleChange, closeDrawModal } = props;

  return (
    <DrawModal {...props} closeDrawModal={closeDrawModal}>
      <MultiCheck
        selectList={tagList}
        onChange={handleChange}
        className="flex flex-wrap px-[30px] pb-[30px]"
      />
    </DrawModal>
  );
}
export default FilterDraw;
