// @mui
import { Grid, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Membership() {
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
            <Button href="#" target="_blank" variant="contained">
              Upgrade to Bronze
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Silver" total={100} color="info" icon={'ant-design:apple-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained">
              Upgrade to Silver
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Gold" total={150} color="warning" icon={'ant-design:windows-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained">
              Upgrade to Gold
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="VIP" total={200} color="error" icon={'ant-design:bug-filled'} />
            <br />
            <Button href="#" target="_blank" variant="contained">
              Upgrade to VIP
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
