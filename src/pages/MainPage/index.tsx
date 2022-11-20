import Header from '@components/Header';
import DidCard from '@components/DidCard';
import DidFilter from '@components/DidFilter';
import DidContainer from './didContainer';

function MainPage(): JSX.Element {
  return (
    <div className="bg-gray-100 p-[4px] box-border h-screen">
      <Header />
      <DidContainer>
        <DidFilter />
        <DidCard />
      </DidContainer>
    </div>
  );
}
export default MainPage;
