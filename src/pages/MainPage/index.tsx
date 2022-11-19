import Header from '@components/Header';
import DidCard from '@components/DidCard';

function MainPage(): JSX.Element {
  return (
    <div className="bg-gray-100 p-2 h-screen">
      <Header />
      <DidCard />
    </div>
  );
}
export default MainPage;
