import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { loadStdlib } from '@reach-sh/stdlib';

// material
import { Card, Stack, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import { account } from '../layouts/utils';
import * as backend from '../index.main.mjs';

const stdlib = loadStdlib('ALGO');

// ----------------------------------------------------------------------

export default function User() {
  const [customer, setCustomer] = useState('');
  const [referral, setReferral] = useState('');
  const [read, setRead] = useState('');
  const [play, setPlay] = useState('');
  const [answer, setAnswer] = useState('');
  const [bronze, setBronze] = useState('');
  const [silver, setSilver] = useState('');
  const [gold, setGold] = useState('');
  const [vip, setVip] = useState('');

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
      // setCtcInfoStr(ctcInfoStr);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Customers Realtime Notifications
          </Typography>
        </Stack>

        <Card />
      </Container>
    </Page>
  );
}
