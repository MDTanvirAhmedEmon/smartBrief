import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LogIn from '../pages/auth/login';
import Register from '../pages/auth/Register';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <Dashboard></Dashboard>,
      // },
    ]
  },
  {
    path: "/auth/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/auth/register",
    element: <Register></Register>,
  }
]);

export default router;