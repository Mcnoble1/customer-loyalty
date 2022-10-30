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

  const methods = useForm({});

  const [ctcInfoStr, setCtcInfoStr] = useState('');

  //   const reservations = (event) => {
  //     for (const rsvp of RSVPs) {
  //       event.currentTarget.insertAdjacentHTML(
  //         'afterend',
  //         `<p className="rsvp">${rsvp} made a reservation for the event.</p>`
  //       );
  //       // sleep(5000);
  //       // event.currentTarget.adjacentHTML.remove()
  //       // = `<p className="rsvp">See Reservations</p>`
  //     }
  //   };

  //   async function copyToClipboard(button) {
  //     navigator.clipboard.writeText(ctcInfoStr);
  //     const origInnerHTML = button.innerHTML;
  //     button.innerHTML = 'Copied!';
  //     button.disabled = true;
  //     await sleep(1000);
  //     button.innerHTML = origInnerHTML;
  //     button.disabled = false;
  //   }

  async function deploy() {
    try {
      const acc = await account();

      const loyToken = await stdlib.launchToken(acc, 'Loycus', 'LYC', { supply: 500000, decimals: 0 }); // Admin creates the NFT
      console.log(`Launched token:`, loyToken.id.toString());
      const tokenId = loyToken.id; // NFT id
      console.log(tokenId);
      console.log(tokenId.toNumber());

      const ctc = acc.contract(backend);
      const interact = {
        deadline: { ETH: 10, ALGO: 100, CFX: 1000 }[stdlib.connector],
        getToken: tokenId,

        // seeRSVP: (who) => {
        //   setAddress(stdlib.formatAddress(who));
        //   setRSVPs((RSVPs) => [...RSVPs, stdlib.formatAddress(who)]);
        // },
        ready: () => {
          console.log('The event is ready to start accepting customers.');
        },

        seeCustomer: async (who) => {
          console.log(`${stdlib.formatAddress(who)} has enrolled`);
        },

        seeReferral: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} referred a friend`);
        },

        seeRead: async (who) => {
          console.log(`Admin saw that  ${stdlib.formatAddress(who)} has read the blog post`);
        },

        seePlay: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has played the game`);
        },

        seeAnswer: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has answered the question`);
        },

        seeBronzeUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Bronze`);
        },

        seeSilverUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Silver`);
        },

        seeGoldUpgrade: async (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to Gold`);
        },

        seeVipUpgrade: (who) => {
          console.log(` ${stdlib.formatAddress(who)} has upgraded to VIP`);
        },
      };
      backend.Admin(ctc, interact);
      const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
      console.log(`Your contract is deployed as = ${ctcInfoStr}`);
      setCtcInfoStr(ctcInfoStr);

      navigate('/dashboard/user', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

  //   const deploy = async () => {
  //     navigate('/dashboard/user', { replace: true });
  //   };

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
