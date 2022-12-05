import { Outlet } from 'react-router-dom';

function MainLayout(): JSX.Element {
  return (
    <section className="h-full">
      <Outlet />
    </section>
  );
}
export default MainLayout;
