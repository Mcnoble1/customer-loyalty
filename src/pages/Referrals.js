// @mui
import { Grid, Button, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Referrals() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Manage your Referrals
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Referrals" total={10} icon={'ant-design:user'} />
          </Grid>
        </Grid>
        <br />
        <Button href="#" target="_blank" variant="contained">
          Refer a Friend
        </Button>
      </Container>
    </Page>
  );
}
