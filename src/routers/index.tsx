import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layouts/AppLayout';
import { loginRedirect } from '@/routers/loaders/loginRedirect';

const Login = lazy(() => import('@/pages/Login'));
const LoginQuick = lazy(() => import('@/pages/LoginQuick'));
const Register = lazy(() => import('@/pages/Register'));
const Main = lazy(() => import('@/pages/Main'));
const ProfileEdit = lazy(() => import('@/pages/ProfileEdit'));
const Profile = lazy(() => import('@/pages/Profile'));
const CreatePost = lazy(() => import('@/pages/CreatePost'));

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/profile/:username',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: loginRedirect,
  },
  {
    path: '/login-quick',
    element: <LoginQuick />,
    loader: loginRedirect,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile-edit',
    element: <ProfileEdit />,
  },
  {
    path: '/post/create/style',
    element: <CreatePost />,
  },
]);
