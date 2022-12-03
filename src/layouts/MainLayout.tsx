import { Outlet } from 'react-router-dom';

function MainLayout(): JSX.Element {
  return (
    <section>
      <Outlet />
    </section>
  );
}
export default MainLayout;
