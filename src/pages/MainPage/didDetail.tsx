import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DidUserInfo from '@components/Did/DidUserInfo';
import useDidDetail from '@hooks/useDidDetail';
import LocalFooter from '@components/Base/LocalFooter';
import WishList from '@components/Did/WishList';
import ButtonActions from '@components/Did/BottomActions';
import DidArticleCard from '@components/Did/DidArticleCard';
import { CustomTabList, Tab, TabContext, TabPanel } from '@components/Base/CustomTabList';

function DidDetail() {
  const { tabIndex, handleTabIndexChange } = useDidDetail();

  return (
    <div className="p-[16px] pb-[60px] bg-green relative">
      <div className="flex justify-between items-center">
        <ArrowBackIosIcon />
        <span className="flex justify-center items-center rounded-full px-[6px] py-[3px] text-[8px] color-fSelect bg-white">
          DID #0897
        </span>
      </div>
      <DidUserInfo />
      <TabContext value={tabIndex}>
        <CustomTabList onChange={handleTabIndexChange} aria-label="lab API tabs example">
          <Tab className="pb-0 px-0 min-w-[40px]" label="自我介绍" value="1" />
          <Tab className="pb-0 px-0 min-w-[40px]" label="帖子" value="2" />
        </CustomTabList>
        <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="1">
          <div>
            内容填字符，栏收录该内容. 10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.
            String类的format()方法用于创建格式化的字符串以及连接多个字符串对象内容填字符，栏收录该内容.
            10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.
            String类的format()方法用于创建格式化的字符串以及连接多个字符串对象内容填字符，栏收录该内容.
            10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.
            String类的format()方法用于创建格式化的字符串以及连接多个字符串对象内容填字符，栏收录该内容.
            10 篇文章 2 订阅. 订阅专栏. 常规类型的格式化.
            String类的format()方法用于创建格式化的字符串以及连接多个字符串对象
          </div>
        </TabPanel>
        <TabPanel className="h-[180px] p-0 my-[12px] overflow-hidden overflow-y-auto" value="2">
          <DidArticleCard />
          <DidArticleCard />
          <DidArticleCard />
        </TabPanel>
      </TabContext>
      <LocalFooter />
      <WishList />
      <ButtonActions />
    </div>
  );
}

export default DidDetail;
