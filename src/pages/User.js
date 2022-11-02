import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { loadStdlib } from '@reach-sh/stdlib';
import './textarea.css';

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
  const [ctcInfoStr, setCtcInfoStr] = useState('');

  const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

  // const reservations = (event) => {
  //   for (const rsvp of RSVPs) {
  //     event.currentTarget.insertAdjacentHTML(
  //       'afterend',
  //       `<p className="rsvp">${rsvp} made a reservation for the event.</p>`
  //     );
  //     // sleep(5000);
  //     // event.currentTarget.adjacentHTML.remove()
  //     // = `<p className="rsvp">See Reservations</p>`
  //   }
  // };

  async function copyToClipboard(button) {
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

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
      console.log(localStorage.getItem('info'));
      setCtcInfoStr(localStorage.getItem('info'));
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
        <h4 className="text-center card-plain">Copy your Event Information</h4>
        <textarea value={ctcInfoStr} className="textarea" />
        <button
          className="btn-wrapper mt-3 mr-3 mb-3 btn-simple btn-success"
          onClick={(e) => copyToClipboard(e.currentTarget)}
        >
          Copy to clipboard
        </button>
        {/* <button className="btn-wrapper mt-3 mb-3 btn-simple btn-success" onClick={reservations}>
          See Reservations
        </button>
        <button className="btn-wrapper mt-3 mb-3 btn-simple btn-success" onClick={checkins}>
          See Checkins
        </button> */}
        <p>{customer} has enrolled</p>
        <p>{referral} referred a friend</p>
        <p>{read} has read the blog post</p>
        <p>{play} has played the game</p>
        <p>{answer} has answered the question</p>
        <p>{bronze} has upgraded to Bronze</p>
        <p>{silver} has upgraded to Silver</p>
        <p>{gold} has upgraded to Gold</p>
        <Card />
      </Container>
    </Page>
  );
}
