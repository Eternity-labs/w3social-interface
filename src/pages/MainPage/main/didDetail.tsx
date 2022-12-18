import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DidUserInfo from '@components/Did/DidUserInfo';
import useDidDetail from '@hooks/useDidDetail';
import LocalFooter from '@components/Base/LocalFooter';
import WishList from '@components/Did/WishList';
import ButtonActions from '@components/Did/BottomActions';
import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';
import useButtonActions from '@hooks/useBottomActions';
import NotifyDialog from '@components/NotifyDialog';
import ArticleList from '@components/ArticleList';

function DidDetail() {
  const {
    tabIndex,
    handleTabIndexChange,
    handleBack,
    userData = {},
    isLoading,
    id,
  } = useDidDetail();
  const { modelProps, handleCheckArticle, handleGetUserInfo } = useButtonActions();

  if (isLoading) return null;

  const { wishtag, city, introduce, nickname } = userData;

  return (
    <div className="p-[16px] pb-[60px] h-full box-border bg-green relative">
      <div className="flex justify-between items-center">
        <ArrowBackIosIcon onClick={() => handleBack()} />
        <span className="flex justify-center items-center rounded-full px-[6px] py-[3px] text-[8px] color-fSelect bg-white">
          DID #0897
        </span>
      </div>
      <DidUserInfo nickname={nickname} />
      <TabContext value={tabIndex}>
        <CustomTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
          <Tab className="pb-0 px-0 min-w-[40px]" label="自我介绍" value="1" />
          <Tab className="pb-0 px-0 min-w-[40px]" label="帖子" value="2" />
        </CustomTabList>
        <TabPanel
          className="h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto"
          value="1"
        >
          <div>{introduce}</div>
        </TabPanel>
        <TabPanel
          className="h-[240px] p-0 my-[12px] overflow-hidden overscroll-contain overflow-y-auto"
          value="2"
        >
          <ArticleList userId={id} />
        </TabPanel>
      </TabContext>
      <LocalFooter city={city} />
      <WishList tags={wishtag} />
      <ButtonActions onArticle={handleCheckArticle} onUserName={handleGetUserInfo} />
      <NotifyDialog {...modelProps} />
    </div>
  );
}

export default DidDetail;
