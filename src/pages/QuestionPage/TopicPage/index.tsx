import { useState, useEffect } from 'react';
import MuiButton from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useStore from '@states/useStore';
import UserService from '@apis/services/SingleuserService';
import { useQuery, useMutation } from 'react-query';
import { QuestionInfo } from '@apis/model/SingleuserModel';
import SelectBox from './selectBox';

function TopicPage() {
  const { userInfo } = useStore();
  const [questionList, setQuesitonList] = useState<Array<QuestionInfo>>([]);
  const [curItemInfo, setCurSelectInfo] = useState<QuestionInfo | null>(null);
  const [index, setIndex] = useState<any>(0);
  const navigate = useNavigate();
  let pos: number;

  useEffect(() => {
    console.log(curItemInfo);
  }, [curItemInfo]);

  useQuery('getQuestion', () => UserService.getQuestion({ id: userInfo?.id || 0 }), {
    enabled: !!userInfo?.id && !questionList.length,
    onSuccess: res => {
      setQuesitonList(res);
      setCurSelectInfo(res[0]);
    },
  });

  const postQuestionMutaion = useMutation(UserService.postQuestion, {
    onSuccess: () => {
      navigate('/finishquestion');
    },
  });

  const prev = () => {
    pos = index;
    if (pos > 0) {
      pos = index - 1;
      setIndex(pos);
      const info = questionList[pos];
      setCurSelectInfo(info);
    } else {
      navigate(-1);
    }
  };
  const next = () => {
    if (!questionList[index].value) {
      toast('请选择...');
      return;
    }
    if (index === questionList.length - 1) {
      // 提交数据
      const checkList = questionList.map(item => {
        return {
          questionId: item.questionId,
          choice: item.value as string,
        };
      });
      postQuestionMutaion.mutate({ userId: `${userInfo!.id}`, answer: checkList });
      return;
    }
    pos = index;
    if (pos < questionList.length - 1) {
      pos = index + 1;
      const info = questionList[pos];
      console.log('🍌🍌----》〉》', info);
      setCurSelectInfo({ ...info });
      setIndex(pos);
    }
  };

  const handleSelect = (value: any) => {
    const info = questionList[index];
    info.value = value;
    setCurSelectInfo({ ...info });
  };
  const baseButtonCss = 'w-[107px] h-[38px] mt-[52px] rounded-full bg-black text-[12px]';
  return (
    <div className=" h-full">
      <div className="h-[250px] bg-logoBg relative pl-[36px] pr-[33px]">
        <div className="flex font-black pt-[30px] pb-[30px]">
          <span className="text-[15px] text-[#515151]">问题</span>
          <div className="ml-[30px] text-black ">
            {index + 1}/{questionList.length}
          </div>
        </div>
        {curItemInfo && (
          <p className="font-medium text-[14px] leading-[22px]">{curItemInfo?.description}</p>
        )}
      </div>
      {curItemInfo && (
        <SelectBox value={curItemInfo} items={curItemInfo.choice} onChange={handleSelect} />
      )}
      <div className="flex pl-[60px] pr-[60px] mt-[60px] justify-between">
        <MuiButton variant="contained" className={baseButtonCss} onClick={prev}>
          {index === 0 ? '返回' : '上一题'}
        </MuiButton>
        <MuiButton variant="contained" className={baseButtonCss} onClick={next}>
          {index === questionList.length - 1 ? '完成' : '下一题'}
        </MuiButton>
      </div>
    </div>
  );
}
export default TopicPage;
