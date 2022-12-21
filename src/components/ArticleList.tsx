import useArticleList from '@hooks/useArticleList';
import CommonPage from './common/commonPage';
import DidArticleCard from './Did/DidArticleCard';

function ArticleList({ userId }: { userId: string }) {
  const { articleListMutation, total, hasNext, list, getItemHeight, loadNextPage } =
    useArticleList(userId);
  console.log('ArticleList', articleListMutation);
  if (articleListMutation?.isLoading) {
    return <div>正在加载...</div>;
  }

  if (!total) {
    return <div>暂无帖子...</div>;
  }

  return (
    <CommonPage
      hasNextPage={hasNext}
      isNextPageLoading={articleListMutation?.isLoading}
      listData={list}
      loadNextPage={loadNextPage}
      totalElements={total}
      getItemList={getItemHeight}
      isShowBottomTip={false}
    >
      {(index: number) => {
        const { id, title, content, nickname: userName, headSculpture } = list[index];
        return (
          <DidArticleCard
            key={id}
            id={id}
            content={content}
            userName={userName}
            headSculpture={headSculpture}
            className="bg-faintGray"
          />
        );
      }}
    </CommonPage>
  );
}

export default ArticleList;
