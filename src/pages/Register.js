// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { RegisterForm } from '../sections/auth/register';
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
  return (
    <Page title="Register">
      <RootStyle>
        <Container>
          <ContentStyle>
            <RegisterForm />
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
