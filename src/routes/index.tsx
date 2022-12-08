import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Loading from '@components/Loading';
import MainLayout from '@layouts/MainLayout';

const LoginPage = lazy(() => import('@pages/LoginPage'));

const RegisterPage = lazy(() => import('@pages/RegisterPage'));

const ResetPassPage = lazy(() => import('@pages/ResetPassPage/index'));

const WelcomePage = lazy(() => import('@pages/WelcomePage'));

const IntroducePage = lazy(() => import('@pages/QuestionPage/IntroducePage'));

const FinishPage = lazy(() => import('@pages/QuestionPage/FinishPage'));

const QuestionPage = lazy(() => import('@pages/QuestionPage/TopicPage/index'));

const UnlockUserPage = lazy(() => import('@pages/UnlockUserPage'));

const NeedTab = lazy(() => import('@pages/MainPage/needTab'));

const NeedDetailPage = lazy(() => import('@pages/NeedDetailPage/index'));

const DidList = lazy(() => import('@pages/MainPage/didList'));

const DidDetail = lazy(() => import('@pages/MainPage/didDetail'));

const MessagePage = lazy(() => import('@pages/MessagePage'));

const Square = lazy(() => import('@pages/MainPage/square'));

const PublishNeedPage = lazy(() => import('@pages/publishNeedPage'));

const MainPage = lazy(() => import('@pages/MainPage'));

const UserInfoDetail = lazy(() => import('@pages/User'));

const About = lazy(() => import('@pages/User/about'));

const Setting = lazy(() => import('@pages/User/setting'));

const UserDetail = lazy(() => import('@pages/User/detail'));

const Wallet = lazy(() => import('@pages/Wallet/index'));

function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout />
    </Suspense>
  );
}
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/needTab',
        element: <NeedTab />,
      },
      {
        path: '/publishNeed',
        element: <PublishNeedPage />,
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
        path: '/message',
        element: <MessagePage />,
      },
      {
        path: '/main',
        element: <MainPage />,
        children: [
          {
            index: true,
            element: <DidList />,
          },
          {
            path: 'detail/:id',
            element: <DidDetail />,
          },
          {
            path: 'square',
            element: <Square />,
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
      {
        path: '/needDetail',
        element: <NeedDetailPage />,
      },
      {
        path: '/user',
        element: <UserInfoDetail />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/setting',
        element: <Setting />,
      },
      {
        path: '/userDetail',
        element: <UserDetail />,
      },
      {
        path: '/wallet',
        element: <Wallet />,
      },
    ],
  },
];
const AppRoutes = () => useRoutes(routes);
export default AppRoutes;
