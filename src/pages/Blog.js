// import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// import Iconify from '../components/Iconify';
import { Academy } from '../sections/@dashboard/academy';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Academy
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <Academy key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
