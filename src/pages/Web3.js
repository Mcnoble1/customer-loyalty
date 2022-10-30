// import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// mock

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Learn: Web3">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Web 3 Glossary
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
