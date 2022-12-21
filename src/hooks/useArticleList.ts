import { MomentData } from '@apis/model/SquareModel';
import SquareService from '@apis/services/SquareService';
import { PAGE_SIZE } from '@config/common';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const useArticleList = (id: string | number) => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<MomentData[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [total, setTotal] = useState(0);

  const articleListMutation = useMutation(SquareService.getMomentList, {
    onSuccess: ({ records, totalElements }) => {
      const dataList = [...list, ...records];
      setList(dataList);
      setTotal(totalElements);
      if (dataList.length < totalElements) {
        setHasNext(true);
      }
    },
  });

  const getItemHeight = (index: number): number => {
    if (index === total - 1) {
      return 140;
    }
    return 130;
  };

  const loadNextPage = () => {
    if (list.length < total) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    articleListMutation.mutate({
      page,
      userId: id,
      size: PAGE_SIZE,
    });
  }, [id, page]);

  return {
    articleListMutation,
    total,
    hasNext,
    list,
    getItemHeight,
    loadNextPage,
  };
};

export default useArticleList;
