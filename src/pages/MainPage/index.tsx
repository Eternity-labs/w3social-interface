import Header from '@components/Header';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import DidContainer from './didContainer';
import DidDetail from './didDetail';

function MainPage(): JSX.Element {
  return (
    <div className="bg-gray-100 box-border h-screen">
      <Header />
      <DidContainer>
        <DidFilter />
        <DidCard />
        <DidDetail />
      </DidContainer>
    </div>
  );
}
export default MainPage;
