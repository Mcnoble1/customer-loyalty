import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

//
import DashboardNavbar from '../layouts/Navbar';
import Register from './Register';
import Offers from './Offers';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <RootStyle>
      <DashboardNavbar />
      <MainStyle>
        <Outlet />
        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
          Get rewarded for every action at Loycus.
        </Typography>
        <img alt="register" src="/static/illustrations/illustration_register.png" />
        <Offers />
        <Register />
      </MainStyle>
    </RootStyle>
  );
}
