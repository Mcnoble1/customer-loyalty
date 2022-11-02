// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'users',
    path: '/admindash/user',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'rewards',
    path: '/admindash/rewards',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
];

export default navConfig;
