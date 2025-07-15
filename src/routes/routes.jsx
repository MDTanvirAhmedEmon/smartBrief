import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LogIn from '../pages/auth/login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import History from '../pages/history/History';
import SingleSummary from '../pages/SingleSummary/SingleSummary';
import UserManagement from '../pages/userManagement/UserManagement';
import AllSummaries from '../pages/allSummaries/AllSummaries';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute><MainLayout /></PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/all-summaries",
        element: <AllSummaries></AllSummaries>,
      },
      {
        path: "/:id",
        element: <SingleSummary></SingleSummary>,
      },
      {
        path: "/user-management",
        element: <UserManagement></UserManagement>,
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