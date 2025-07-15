import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LogIn from '../pages/auth/login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import History from '../pages/history/History';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
            {
        path: "/history",
        element: <History></History>,
      },
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