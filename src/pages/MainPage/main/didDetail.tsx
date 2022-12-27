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
import '@assets/styles/backgroundStyle.css';

function DidDetail(props: any = {}) {
  const {
    tabIndex,
    handleTabIndexChange,
    handleBack,
    userData = {},
    isLoading,
    id,
  } = useDidDetail(props);
  const { modelProps, handleCheckArticle, handleGetUserInfo } = useButtonActions();

  if (isLoading) return null;
  const { userId } = props;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { wishtag, city, introduce, nickname, identity, head_sculpture, tag, did } = userData;

  return (
    <div className="p-[16px] pb-[60px] h-full box-border relative backgroundIndex1 rounded-[13px]">
      <div className="flex justify-between items-center">
        {!userId && <ArrowBackIosIcon onClick={() => handleBack()} />}
        {did && (
          <span className="flex justify-center items-center rounded-full px-[6px] py-[3px] text-[8px] color-fSelect bg-white">
            {did}
          </span>
        )}
      </div>
      <DidUserInfo nickname={nickname} tag={tag} identity={identity} img={head_sculpture} />
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
      <LocalFooter city={city} identity={identity} />
      <WishList tags={wishtag} />
      <ButtonActions onArticle={handleCheckArticle} onUserName={handleGetUserInfo} />
      <NotifyDialog {...modelProps} />
    </div>
  );
}

export default DidDetail;
