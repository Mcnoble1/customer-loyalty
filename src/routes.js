import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Home from './pages/Home';
import Admin from './pages/Admin';
import Enroll from './pages/Enroll';
import Blog from './pages/Blog';
import Reach from './pages/Reach';
import Algorand from './pages/Algorand';
import Web3 from './pages/Web3';
import User from './pages/User';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Membership from './pages/Membership';
import Games from './pages/Games';
import Referral from './pages/Referrals';
import Rewards from './pages/Rewards';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'algorand', element: <Algorand /> },
        { path: 'reach', element: <Reach /> },
        { path: 'web3', element: <Web3 /> },
        { path: 'membership', element: <Membership /> },
        { path: 'games', element: <Games /> },
        { path: 'referrals', element: <Referral /> },
      ],
    },
    {
      path: '/admindash',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'rewards', element: <Rewards /> },
      ],
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
      path: 'admin',
      element: <Admin />,
    },
    {
      path: 'enroll',
      element: <Enroll />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: '*', element: <Navigate to="/home" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/home" replace />,
    },
  ]);
}
