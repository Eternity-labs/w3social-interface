import useArticleList from '@hooks/useArticleList';
import CommonPage from './common/commonPage';
import DidArticleCard from './Did/DidArticleCard';

function ArticleList({ userId }: { userId: string }) {
  const { articleListMutation, total, hasNext, list, getItemHeight, loadNextPage } =
    useArticleList(userId);
  console.log('ArticleList', articleListMutation);
  if (articleListMutation?.isLoading) {
    return '';
  }

  if (!total) {
    return '暂无帖子...';
  }

  return (
    <CommonPage
      hasNextPage={hasNext}
      isNextPageLoading={articleListMutation?.isLoading}
      listData={list}
      loadNextPage={loadNextPage}
      totalElements={total}
      getItemList={getItemHeight}
    >
      {(index: number) => {
        const { id, title, content, nickname: userName } = list[index];
        return <DidArticleCard key={id} title={title} content={content} userName={userName} />;
      }}
    </CommonPage>
  );
}

export default ArticleList;
