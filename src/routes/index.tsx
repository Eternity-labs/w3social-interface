import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import ResetPassPage from '@pages/ResetPassPage';

import WelcomePage from '@pages/WelcomePage';

const routes: RouteObject[] = [
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/resetPass',
    element: <ResetPassPage />,
  },
  {
    path: '/main',
    element: <MainPage />,
  },
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: '/',
  //       element: <HomePage />,
  //     },
  //     {
  //       path: '/aboutus',
  //       element: <AboutUsPage />,
  //     },
  //     {
  //       path: '*',
  //       element: <NotFoundPage />,
  //     },
  //   ],
  // },
];
const AppRoutes = () => useRoutes(routes);
export default AppRoutes;
