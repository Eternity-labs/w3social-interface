import Header from '@components/Header';
import DidCard from '@components/Did/DidCard';
import DidFilter from '@components/Did/DidFilter';
import DidContentCard from '@components/Did/DidContentCard';
import DidContainer from './didContainer';

function MainPage(): JSX.Element {
  return (
    <div className="bg-gray-100 box-border h-screen">
      <Header />
      <DidContainer>
        <DidFilter />
        <DidCard />
        <DidContentCard />
      </DidContainer>
    </div>
  );
}
export default MainPage;
