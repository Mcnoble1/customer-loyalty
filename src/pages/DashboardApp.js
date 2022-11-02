// @mui
import { useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../index.main.mjs';

// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';
import { account } from '../layouts/utils';

const stdlib = loadStdlib('ALGO');

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [tokenBalance, setTokenBalance] = useState(0);

  const showBalance = async () => {
    const acc = await account();

    const fmt = (x) => stdlib.formatCurrency(x, 4);
    // eslint-disable-next-line no-return-await
    const getBal = async (who, tok) => (tok ? await stdlib.balanceOf(who, tok) : fmt(await stdlib.balanceOf(who)));

    const logBalance = async (acc, tok) => {
      const bal = await getBal(acc, tok);
      setTokenBalance(`${bal}`);
      // console.log(stdlib.formatCurrency(tokenBal));
      const unit = tok ? 'of LYC' : stdlib.standardUnit;
      return bal;
    };

    const bal = await logBalance(acc, { _hex: '0x072b9b07', _isBigNumber: true });
  };

  showBalance();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Token Points" total={tokenBalance} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Referrals" total={0} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Membership" total={1} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
