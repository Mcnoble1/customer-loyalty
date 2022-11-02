import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// material
import { loadStdlib } from '@reach-sh/stdlib';

import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button } from '@mui/material';

//
import DashboardNavbar from '../layouts/Navbar';

import { account } from '../layouts/utils';
import * as backend from '../index.main.mjs';

import { FormProvider, RHFTextField } from '../components/hook-form';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const stdlib = loadStdlib('ALGO');

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState('');
  const [referral, setReferral] = useState('');
  const [read, setRead] = useState('');
  const [play, setPlay] = useState('');
  const [answer, setAnswer] = useState('');
  const [bronze, setBronze] = useState('');
  const [silver, setSilver] = useState('');
  const [gold, setGold] = useState('');

  const methods = useForm({});

  const [ctcInfoStr, setCtcInfoStr] = useState('');

  async function deploy() {
    try {
      const acc = await account();

      const loyToken = await stdlib.launchToken(acc, 'Loycus', 'LYC', { supply: 500000, decimals: 0 }); // Admin creates the NFT
      console.log(`Launched token:`, loyToken.id.toString());
      const tokenId = loyToken.id; // token id
      console.log(tokenId);
      console.log(tokenId.toNumber());

      const nftToken = await stdlib.launchToken(acc, 'LoyNFT', 'LYFT', { supply: 500000, decimals: 0 }); // Admin creates the NFT
      console.log(`Launched NFT token:`, loyToken.id.toString());
      const nftId = nftToken.id; // NFT id
      console.log(nftId);
      console.log(nftId.toNumber());

      const ctc = acc.contract(backend);
      const interact = {
        deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[stdlib.connector],
        getToken: tokenId,
        getNFT: nftId,

        ready: () => {
          console.log('The event is ready to start accepting customers.');
        },
        seeCustomer: async (who) => {
          console.log(`${stdlib.formatAddress(who)} has enrolled`);
          setCustomer(stdlib.formatAddress(who));
        },

        seeReferral: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} referred a friend`);
          setReferral(stdlib.formatAddress(who));
        },

        seeRead: async (who) => {
          console.log(`Admin saw that  ${stdlib.formatAddress(who)} has read the blog post`);
          setRead(stdlib.formatAddress(who));
        },

        seePlay: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has played the game`);
          setPlay(stdlib.formatAddress(who));
        },

        seeAnswer: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has answered the question`);
          setAnswer(stdlib.formatAddress(who));
        },

        seeBronzeUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Bronze`);
          setBronze(stdlib.formatAddress(who));
        },

        seeSilverUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Silver`);
          setSilver(stdlib.formatAddress(who));
        },

        seeGoldUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Gold`);
          setGold(stdlib.formatAddress(who));
        },
      };
      backend.Admin(ctc, interact);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      console.log(`Your contract is deployed as = ${ctcInfoStr}`);
      setCtcInfoStr(ctcInfoStr);

      localStorage.setItem('info', ctcInfoStr);

      navigate('/admindash/user', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RootStyle>
      <DashboardNavbar />
      <Container maxWidth="sm">
        <ContentStyle>
          <Typography variant="h4" gutterBottom>
            Fill in the program details
          </Typography>
          <FormProvider methods={methods} onSubmit={deploy()}>
            {/* <Stack spacing={3}>
              <RHFTextField name="name" required label="Name" />

              <RHFTextField name="info" label="Contract Info" required type="text" />
            </Stack> */}

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }} />

            <Button fullWidth size="large" type="submit" variant="contained">
              Deploy
            </Button>
          </FormProvider>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
