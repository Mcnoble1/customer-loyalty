/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable no-sequences */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */

import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib({ REACH_NO_WARN: 'Y' });

const isAdmin = await ask.ask('Are you an Admin', ask.yesno);

const who = isAdmin ? 'Admin' : 'User';

console.log(`Welcome to the Loycus App as ${who}`);

const users = [];

let acc = null;
const createAcc = await ask.ask(`Would you like to create an account? (only possible on devnet)`, ask.yesno);

if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(10));
} else {
  const secret = await ask.ask('Enter your secret key', (x) => x);
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAdmin) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask('Please paste the contract information: ', JSON.parse);
  ctc = acc.contract(backend, info);
  users.push(acc);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance before is ${before} ${stdlib.standardUnit}`);

const balOf = async (acc, tok) => stdlib.balanceOf(acc, tok);

const interact = { ...stdlib.hasRandom };

let tokenParams = null;

if (isAdmin) {
  console.log('Creating the Platform Token');
  const loyToken = await stdlib.launchToken(acc, 'Loycus', 'LYC', { supply: 500000 }); // Admin creates the NFT
  console.log(`Launched token:`, loyToken.id.toString());
  const tokenId = loyToken.id; // NFT id
  console.log(tokenId);
  console.log(tokenId.toNumber());
  // const tokenPar = tokenId.toNumber();
  tokenParams = tokenId; // params for the NFT

  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
}

// if (!isAdmin) {
//   acc.setDebugLabel('User'); // set the debug label
//   await acc.tokenAccept(tokenParams); // accept the NFT from the creator
//   // const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(accUser)); // get the balance
// }

console.log('Starting backends...');

(interact.getToken = tokenParams),
  // console.log(`Admin sets the token parameter: `, tokenParams);
  // const bal = await balOf(acc, tokenParams);
  // console.log(bal.toString());
  (interact.enroll = async () => {
    const firstName = await ask.ask('Enter your First Name', (x) => x);
    const lastName = await ask.ask('Enter your Last Name', (x) => x);
    const enrollmentParams = { firstName, lastName };
    console.log(`You have enrolled into the Loyalty Program.`);

    const after = await getBalance();
    console.log(`Your balance is now ${after}`);

    if (stdlib.connector === 'ETH' || stdlib.connector === 'CFX') {
      const myGasLimit = 5000000;
      acc.setGasLimit(myGasLimit);
    } else if (stdlib.connector == 'ALGO') {
      console.log(`Demonstrating need to opt-in on ALGO`);
      // await shouldFail(async () => await zorkmid.mint(accAlice, startingBalance));
      console.log(`Opt-ing in on ALGO`);
      const id = await ctc.unsafeViews.Info.details();
      console.log(id);
      await acc.tokenAccept(id);
    }

    // const bal = await balOf(acc, tokenParams);
    // console.log(bal.toString());
    console.log(acc);
    return enrollmentParams;
  }),
  (interact.seeUser = async (name, who) => {
    console.log(`Admin saw that ${name} with the address ${stdlib.formatAddress(who)} has enrolled`);
  }),
  (interact.referFriend = async () => {
    const friendName = await ask.ask("Enter your friend's name", (x) => x);
    // const friendAddress = await ask.ask("Enter your friend's address", (x) => x);
    const friendParams = { friendName };
    console.log(`You have referred your friend ${friendName} to the Loyalty Program.`);
    // console.log(await acc.balanceOf());
    console.log(await stdlib.balancesOf(acc, [null, tokenParams]));

    return friendParams;
  }),
  (interact.readBlog = async () => {
    console.log(`You have read the blog post.`);
  }),
  (interact.seeBlog = async (name, who) => {
    console.log(`Admin saw that ${name} with the address ${stdlib.formatAddress(who)} has read the blog post`);
  });
// (interact.answerQuestion = async () => {
//   console.log(`You have answered the question.`);
//   return 'Yes';
// });
// (interact.seeAnswer = (who) => {
//   console.log(`Admin saw that with the address ${stdlib.formatAddress(who)} has answered the question`);
// });

// implement User's interact object here

const part = isAdmin ? ctc.p.Admin : ctc.p.User;
await part(interact);

// const after = await getBalance();
const after = await getBalance();
console.log(`Your balance is now ${after}`);

const balAfter = await balOf(acc, tokenParams);
console.log(balAfter.toString());

for (const account of users) {
  // for each bidder
  const [amt, amtToken] = await stdlib.balancesOf(account, [null, tokenParams]); // get the balance
  console.log(`user has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtToken} of the NFT.`); // log the balance
}

console.log('Goodbye, Admin and User!');
ask.done();
