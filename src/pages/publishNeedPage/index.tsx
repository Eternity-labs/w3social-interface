import useDidFilter from '@hooks/useDidFilter';
import MainButton from '@components/Base/MainButton';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import SquareService from '@apis/services/SquareService';
import UserService from '@apis/services/SingleuserService';

import { TagListAtom } from '@states/index';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Modal from '@components/Base/Modal';
import toast from 'react-hot-toast';
import useModal from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';
import FilterList from './components/filter';
import ChipList from './components/chipList';
import Header from './components/Header';
import PreChildren from './components/preChipList';
import Edit, { quill as quillInstance } from './components/edit';

function PublishNeedPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [tagList, setTagList] = useAtom(TagListAtom);
  const { isOpen, handleOpen } = useModal();
  const [quillText, setQuillText] = useState<string>('');
  const getTagListQuery = useQuery('getTagList', () => UserService.getTagList(), {
    onSuccess: res => {
      console.log('🚗🚗22222---》〉》', res);
      setTagList(draft => {
        draft = res;
        return draft;
      });
    },
    enabled: !(tagList.length > 0),
  });
  const AddMomentMutation = useMutation(SquareService.addMoment, {
    onSuccess: () => {
      handleOpen();
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    },
  });

  const { showDrawer, setShowDrawer } = useDidFilter({});

  const addlabel = () => {
    setShowDrawer(true);
  };
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
    const text = quillInstance.getText();
    setQuillText(text);
    // eslint-disable-next-line consistent-return, array-callback-return
    const tags: Array<number> = [];
    tagList.forEach(item => {
      if (item.checked) {
        tags.push(item.id);
      }
    });
    if (text.replace(/(^\s*)|(\s*$)/g, '').length === 0) {
      toast('文本内容为空');
      return;
    }
    AddMomentMutation.mutate({
      moment: {
        content: text,
        tags,
      },
    });
  };
  const rightButton = (
    <MainButton text="发布" className="w-[56px] h-[23px] text-[12px]" onClick={publish} />
  );
  return (
    <>
      <Header title="发布需求" right={rightButton} />
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
      {isOpen && (
        <Modal isOpen={isOpen} isShowExit={false}>
          发布成功，回到上一页面...
        </Modal>
      )}
    </>
  );
}
export default PublishNeedPage;
