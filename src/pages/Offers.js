// @mui
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { OfferSummary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function Membership() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Our Offers
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary title="Earn Token on Enrollment" color="success" icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary title="Get rewarded for Referrals" color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary
              title="Get rewarded for completing tutorials"
              color="primary"
              icon={'ant-design:windows-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary
              title="Upgrade Membership using Tokens earned"
              color="secondary"
              icon={'ant-design:bug-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary title="Buy NFTs using Tokens earned" color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <OfferSummary title="Play Games and Earn Tokens" color="error" icon={'ant-design:bug-filled'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
