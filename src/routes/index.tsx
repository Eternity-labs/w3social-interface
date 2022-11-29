import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import ResetPassPage from '@pages/ResetPassPage/index';

import WelcomePage from '@pages/WelcomePage';
import IntroducePage from '@pages/QuestionPage/IntroducePage';
import FinishPage from '@pages/QuestionPage/FinishPage';
import QuestionPage from '@pages/QuestionPage/TopicPage/index';
import UnlockUserPage from '@pages/UnlockUserPage';
import NeedTab from '@pages/MainPage/needTab';
import DidList from '@pages/MainPage/didList';
import DidDetail from '@pages/MainPage/didDetail';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/needTab',
    element: <NeedTab />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
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
    children: [
      {
        path: '',
        element: <DidList />,
      },
      {
        path: 'detail/:id',
        element: <DidDetail />,
      },
    ],
  },
  {
    path: '/startquestion',
    element: <IntroducePage />,
  },
  {
    path: '/finishquestion',
    element: <FinishPage />,
  },
  {
    path: '/question',
    element: <QuestionPage />,
  },
  {
    path: '/unlock',
    element: <UnlockUserPage />,
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
