import ListContainer from '@components/Base/ListContainer';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import useDidList from '@hooks/useDidList';

function DidIndex() {
  const { list, handleRefresh, handleLoadMore } = useDidList();
  return (
    <>
      <DidFilter />
      <div className="h-[calc(100%-20px)] box-border overflow-hidden overflow-y-auto">
        <ListContainer onPullDown={handleRefresh} onPullUp={handleLoadMore}>
          {list.map((item, idx) => {
            return <DidCard classNames="mt-[12px]" key={item} />;
          })}
        </ListContainer>
      </div>
    </>
  );
}

export default DidIndex;
