import useDidFilter from '@hooks/useDidFilter';
import MainButton from '@components/Base/MainButton';
import { useQuery, useQueryClient } from 'react-query';
import SquareService from '@apis/services/SquareService';
import UserService from '@apis/services/user';

import { TagList } from '@states/index';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import FilterList from './components/filter';
import ChipList from './components/chipList';
import Header from './components/Header';
import PreChildren from './components/preChipList';
import Edit, { quill as quillInstance } from './components/edit';

function PublishNeedPage() {
  const queryClient = useQueryClient();
  const [tagList, setTagList] = useAtom(TagList);
  const [quillText, setQuillText] = useState<string>('');
  const { status, data } = useQuery('getTagList', () => UserService.getTagList(), {
    enabled: !(tagList.length > 0),
  });
  const AddMoment = useQuery('AddMoment', () =>
    SquareService.addMoment({
      moment: {
        title: 'kkk的测试',
        content: '看看坎坎坷坷的策四content<br/>dsfdsfdfd',
      },
    })
  );
  const { showDrawer, setShowDrawer } = useDidFilter();

  const addlabel = () => {
    setShowDrawer(true);
  };
  useEffect(() => {
    console.log('🚗🚗render');
    setTagList(draft => {
      const newData = data?.data || [];
      draft = [...newData];
      return draft;
    });
  }, [data]);
  const handleChange = (value: boolean, index: number) => {
    const originValue = tagList[index].checked;
    if (originValue === value) {
      return;
    }
    setTagList(draft => {
      draft[index].checked = value;
      return draft;
    });
  };
  const handleDelete = (isAll: boolean, index?: number) => {
    if (isAll) {
      setTagList(draft => {
        draft.forEach(item => {
          item.checked = false;
        });
        return draft;
      });
    } else {
      setTagList(draft => {
        draft[index as number].checked = false;
        return draft;
      });
    }
  };
  const publish = () => {
    const a = quillInstance.getText();
    setQuillText(a);
    queryClient.invalidateQueries('AddMoment');
  };
  const rightButton = (
    <MainButton text="发布" className="w-[56px] h-[23px] text-[12px]" onClick={publish} />
  );
  return (
    <>
      <Header title="DID推送" right={rightButton} />
      <div className="px-[30px] h-full">
        <div className="pt-[74px]  pb-[30px] h-full">
          <ChipList
            tagList={tagList}
            handleDelete={handleDelete}
            preChip={<PreChildren addLabel={addlabel} />}
          />
          <Edit />
        </div>
        <FilterList
          isOpen={showDrawer}
          tagList={tagList}
          closeDrawModal={() => setShowDrawer(false)}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}
export default PublishNeedPage;
