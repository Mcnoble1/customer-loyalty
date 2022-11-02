// import PropTypes from 'prop-types';
import { useState } from 'react';

import { loadStdlib } from '@reach-sh/stdlib';

// material
import { alpha, styled } from '@mui/material/styles';
import { Button, Box, Stack, AppBar, Toolbar } from '@mui/material';

import { account } from '../utils';

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
  const stdlib = loadStdlib('ALGO');

  const [accountBal, setAccountBal] = useState(0);
  const [accountAddress, setAccountAddress] = useState('Show Account');

  const connectWithMyAlgoWallet = async () => {
    try {
      await getAccount();
      await getBalance();
    } catch (err) {
      console.log(err);
    }
  };

  const getAccount = async () => {
    try {
      const acc = await account();
      setAccountAddress(acc.networkAccount.addr);
    } catch (err) {
      console.log(err);
    }
  };

  const getBalance = async () => {
    try {
      const acc = await account();
      const rawBalance = await stdlib.balanceOf(acc);
      const balance = stdlib.formatCurrency(rawBalance, 4);
      setAccountBal(balance);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <RootStyle>
      <ToolbarStyle>
        <Button variant="contained" onClick={connectWithMyAlgoWallet}>
          {accountAddress} {accountBal}
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }} />
      </ToolbarStyle>
    </RootStyle>
  );
}
