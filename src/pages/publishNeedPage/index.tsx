import useDidFilter from '@hooks/useDidFilter';
import MainButton from '@components/Base/MainButton';
import FilterList from './filter';
import ChipList from './chipList';
import Header from './Header';
import PreChildren from './preChipList';
import Edit from './edit';

function PublishNeedPage() {
  const { showDrawer, setShowDrawer } = useDidFilter();
  const rightButton = <MainButton text="发布" className="w-[56px] h-[23px] text-[12px]" />;
  const addlabel = () => {
    setShowDrawer(true);
  };
  return (
    <>
      <Header title="DID推送" right={rightButton} />
      <div className="px-[30px]">
        <div className="pt-[88px]">
          <ChipList preChip={<PreChildren addLabel={addlabel} />} />
          <Edit />
        </div>
        <FilterList isOpen={showDrawer} closeDrawModal={setShowDrawer} />
      </div>
    </>
  );
}
export default PublishNeedPage;
