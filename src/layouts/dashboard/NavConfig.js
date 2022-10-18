// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'membership',
    path: '/dashboard/membership',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'referrals',
    path: '/dashboard/referrals',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'marketplace',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'games',
    path: '/dashboard/games',
    icon: getIcon('eva:tv-fill'),
  },
  {
    title: 'learn',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'swap tokens',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
];

export default navConfig;
