import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import MainContainer from '@components/Base/MainContainer';
import DidRoutes from '@routes/didRoute';

function MainPage(): JSX.Element {
  return (
    <div className="bg-gray-100 box-border h-screen">
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </div>
  );
}
export default MainPage;
