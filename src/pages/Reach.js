// import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// import Iconify from '../components/Iconify';
// mock

// ----------------------------------------------------------------------

export default function Reach() {
  return (
    <Page title="Learn: Reach">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            The Reach Platform
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
