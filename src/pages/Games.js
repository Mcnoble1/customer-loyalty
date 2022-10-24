// import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// import Iconify from '../components/Iconify';
import { BlogPostCard } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/games';

// ----------------------------------------------------------------------

export default function Games() {
  return (
    <Page title="Games">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Games
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
