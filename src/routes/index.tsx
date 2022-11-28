import { RouteObject, useRoutes } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import ResetPassPage from '@pages/ResetPassPage';

import WelcomePage from '@pages/WelcomePage';
import IntroducePage from '@pages/QuestionPage/IntroducePage';
import FinishPage from '@pages/QuestionPage/FinishPage';
import QuestionPage from '@pages/QuestionPage/TopicPage/index';
import UnlockUserPage from '@pages/UnlockUserPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
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
