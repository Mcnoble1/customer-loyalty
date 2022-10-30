import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Button, Stack } from '@mui/material';
// components
import Page from '../components/Page';
// sections
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: '50%',
  margin: 'auto',
  minHeight: '30vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(0, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const navigate = useNavigate();

  const enroll = async () => {
    navigate('/enroll', { replace: true });
  };

  const admin = async () => {
    navigate('/admin', { replace: true });
  };

  return (
    <Page title="Register">
      <RootStyle>
        <Container>
          <ContentStyle>
            <Stack spacing={3}>
              <Button fullWidth size="large" onClick={admin} variant="contained">
                Deploy the Loyalty Program
              </Button>
              <Button fullWidth size="large" onClick={enroll} variant="contained">
                Enroll into the Loyalty Program
              </Button>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
