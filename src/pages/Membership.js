// @mui
import { loadStdlib } from '@reach-sh/stdlib';

import { Grid, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';
import * as backend from '../index.main.mjs';
import { account } from '../layouts/utils';

// ----------------------------------------------------------------------

export default function Membership() {
  const inf = localStorage.getItem('info');
  const info = JSON.parse(inf);
  console.log(info);

  const silverM = (event) => {
    event.preventDefault();
    silver();
  };

  const bronzeM = (event) => {
    event.preventDefault();
    bronze();
  };

  const goldM = (event) => {
    event.preventDefault();
    gold();
  };

  const vipM = (event) => {
    event.preventDefault();
    vip();
  };

  async function bronze() {
    try {
      const acc = await account();
      const ctc = acc.contract(backend, JSON.parse(info));
      await ctc.apis.Customer.upgradeToBronze();
    } catch (e) {
      console.log(e);
    }
  }

  async function silver() {
    try {
      const acc = await account();
      const ctc = acc.contract(backend, JSON.parse(info));
      await ctc.apis.Customer.upgradeToSilver();
    } catch (e) {
      console.log(e);
    }
  }

  async function gold() {
    try {
      const acc = await account();
      const ctc = acc.contract(backend, JSON.parse(info));
      await ctc.apis.Customer.upgradeToGold();
    } catch (e) {
      console.log(e);
    }
  }

  async function vip() {
    try {
      const acc = await account();
      const ctc = acc.contract(backend, JSON.parse(info));
      await ctc.apis.Customer.upgradeToVIP();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Upgrade your Membership
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bronze" total={50} icon={'ant-design:android-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained" onClick={bronzeM}>
              Upgrade to Bronze
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Silver" total={100} color="info" icon={'ant-design:apple-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained" onClick={silverM}>
              Upgrade to Silver
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Gold" total={150} color="warning" icon={'ant-design:windows-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained" onClick={goldM}>
              Upgrade to Gold
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="VIP" total={200} color="error" icon={'ant-design:bug-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained" onClick={vipM}>
              Upgrade to VIP
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
