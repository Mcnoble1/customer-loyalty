// import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Stack, AppBar, Toolbar } from '@mui/material';
// components
//
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.neutral, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

// DashboardNavbar.propTypes = {
//   onOpenSidebar: PropTypes.func,
// };

export default function DashboardNavbar() {
  return (
    <RootStyle>
      <ToolbarStyle>
        <Button variant="contained">Connect Wallet</Button>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <NotificationsPopover />
          <AccountPopover /> */}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
