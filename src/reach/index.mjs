/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable no-sequences */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */

import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from '../index.main.mjs';

const stdlib = loadStdlib({ REACH_NO_WARN: 'Y' });

// const isAdmin = await ask.ask('Are you an Admin', ask.yesno);

// const who = isAdmin ? 'Admin' : 'Customer';

console.log(`Welcome to the Loycus App`);

const accAdmin = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
// const accCustomer = await stdlib.newTestAccount(stdlib.parseCurrency(1000));

const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(accAdmin)); // get the balance

const before = await getBalance();
console.log(`Your balance before is ${before} ${stdlib.standardUnit}`);

const fmt = (x) => stdlib.formatCurrency(x, 4);
// eslint-disable-next-line no-return-await
const getBal = async (who, tok) => (tok ? await stdlib.balanceOf(who, tok) : fmt(await stdlib.balanceOf(who)));

const logBalance = async (acc, tok) => {
  const bal = await getBal(acc, tok);
  const unit = tok ? 'of LYC' : stdlib.standardUnit;
  console.log(`${acc.getDebugLabel()} has ${bal} ${unit}.`);
  return bal;
};

let tokenParams = null;
// let acc = null;
// let ctc = null;

// if (isAdmin) {
console.log('Creating the Platform Token');
const loyToken = await stdlib.launchToken(accAdmin, 'Loycus', 'LYC', { supply: 500000 }); // Admin creates the NFT
console.log(`Launched token:`, loyToken.id.toString());
const tokenId = loyToken.id; // NFT id
console.log(tokenId);
console.log(tokenId.toNumber());
// const tokenPar = tokenId.toNumber();
tokenParams = tokenId; // params for the NFT
// } else {
// info = await ask.ask('Please paste the contract information: ', JSON.parse);
// const ctc = accCustomer.contract(backend, info);
// }
await logBalance(accAdmin, tokenId);

let done = false;
const customers = [];

const startEnrollment = async () => {
  const newCustomer = async (who) => {
    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
    acc.setDebugLabel(who);
    customers.push([who, acc]);
    const info = await ask.ask('Please paste the contract information: ', JSON.parse);
    const ctc = acc.contract(backend, info);
    const getBalance = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));

    const after = await getBalance();
    console.log(`Your balance is now ${after}`);

    if (stdlib.connector === 'ETH' || stdlib.connector === 'CFX') {
      const myGasLimit = 5000000;
      acc.setGasLimit(myGasLimit);
    } else if (stdlib.connector == 'ALGO') {
      console.log(`Demonstrating need to opt-in on ALGO`);
      console.log(`Opt-ing in on ALGO`);
      const id = await ctc.unsafeViews.Platform.token();
      console.log(id);
      await acc.tokenAccept(id);
      const bal = await logBalance(acc, tokenId);
      console.log(bal);
    }

    try {
      await ctc.apis.Customer.enroll();
      // const firstName = await ask.ask('Enter your First Name', (x) => x);
      // const lastName = await ask.ask('Enter your Last Name', (x) => x);
      // const enrollmentParams = { firstName, lastName };
      console.log(`You have enrolled into the Loyalty Program.`);
      await logBalance(acc, tokenId);
    } catch (e) {
      console.log(`${who} failed to join the Loyalty Program`);
    }
    console.log(`${who} balance after is ${await getBalance()}`);

    const refer = await ask.ask(`Would you like to refer a friend? (y/n)`, ask.yesno);
    if (refer) {
      try {
        await ctc.apis.Customer.referFriend();
        const friend = await ask.ask(`Enter your friend's name: `, (x) => x);
        console.log(`You have referred your friend ${friend} to the Loyalty Program.`);
        // return friend;
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You couldn't refer your friend to the Loyalty Program`);
      }
    }

    console.log(`${who} balance after is ${await getBalance()}`);

    const read = await ask.ask(`Would you like to read the tutorial? (y/n)`, ask.yesno);
    if (read) {
      try {
        await ctc.apis.Customer.readBlog();
        console.log(`You have read the tutorial.`);
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You have not read the tutorial.`);
      }
    }

    const answer = await ask.ask(`Would you like to answer the question? (y/n)`, ask.yesno);
    if (answer) {
      try {
        await ctc.apis.Customer.answerQuestion();
        // const question = await ask.ask(`Enter your answer: `, (x) => x);
        // const questionParams = { question };
        console.log(`You have answered the question.`);
        await logBalance(acc, tokenId);
        // return questionParams;
      } catch (e) {
        console.log(`You have not answered the question.`);
      }
    }

    const bronze = await ask.ask(`Would you like to upgrade to Bronze membership? [costs 250 tokens] (y/n)`, ask.yesno);
    if (bronze) {
      try {
        await ctc.apis.Customer.upgradeToBronze();
        console.log(`You are now a Bronze Member.`);
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You are not a Bronze Member.`);
      }
    } else {
      console.log(`You are maintaining your membership`);
    }

    const silver = await ask.ask(`Would you like to upgrade to Silver membership? [costs 500 tokens] (y/n)`, ask.yesno);
    if (silver) {
      try {
        await ctc.apis.Customer.upgradeToSilver();
        console.log(`You are now a Silver Member.`);
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You are not a Silver Member.`);
      }
    } else {
      console.log(`You are maintaining your membership`);
    }

    const gold = await ask.ask(`Would you like to upgrade to Gold membership? [costs 1000 tokens] (y/n)`, ask.yesno);
    if (gold) {
      try {
        await ctc.apis.Customer.upgradeToGold();
        console.log(`You are now a Gold Member.`);
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You are not a Gold Member.`);
      }
    } else {
      console.log(`You are maintaining your membership`);
    }

    const vip = await ask.ask(`Would you like to upgrade to VIP membership? [costs 2000 tokens] (y/n)`, ask.yesno);
    if (vip) {
      try {
        await ctc.apis.Customer.upgradeToVIP();
        console.log(`You are now a VIP Member.`);
        await logBalance(acc, tokenId);
      } catch (e) {
        console.log(`You are not a VIP Member.`);
      }
    } else {
      console.log(`You are maintaining your membership`);
    }

    // interact.playGame = async () => {
    //   const choice = await ask.ask(`Would you like to play the game? (y/n)`, ask.yesno);
    //   if (choice) {
    //     console.log(`You have played the game.`);
    //   }
    // };
  };
  await newCustomer('Customer1');
  await newCustomer('Customer2');
  await newCustomer('Customer3');
  // console.log(customers);
  while (!done) {
    await stdlib.wait(1);
  }
};

console.log('Starting backends...');

const ctcAdmin = accAdmin.contract(backend);
ctcAdmin.getInfo().then((info) => {
  console.log(`Your contract is deployed as = ${JSON.stringify(info)}`);
  // ctcinfo = info;
});
await ctcAdmin.participants.Admin({
  ...stdlib.hasRandom,
  getToken: tokenParams,

  // console.log(`Admin sets the token parameter: `, tokenParams);

  ready: () => {
    console.log('The event is ready to start accepting customers.');
    startEnrollment();
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
});

const after = await getBalance();
console.log(`Your balance is now ${after}`);

for (const account of customers) {
  // for each bidder
  const [amt, amtToken] = await stdlib.balancesOf(account, [null, tokenParams]); // get the balance
  console.log(`user has ${stdlib.formatCurrency(amt)} ${stdlib.standardUnit} and ${amtToken} of LYC.`); // log the balance
}

console.log(await logBalance(accAdmin, tokenId));

console.log(`You have completed the Loyalty Program tutorial.`);

ask.done();

done = true;

// const refer = await ask.ask(`Would you like to refer a friend? (y/n)`, ask.yesno);
//     if (!refer) {
//       return;
//     } else {
//       const friend = await ask.ask(`Enter your friend's name: `, (x) => x);
//       const friendAcc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
//       friendAcc.setDebugLabel();
//       Customers.push([friend, friendAcc]);
//       const friendInfo = await ask.ask(
//         'Please paste the contract information: ',
//         JSON.parse
//       );
//       const friendCtc = friendAcc.contract(backend, friendInfo);
//       const friendBalance = await getBalance();
//       console.log(`${friend}'s balance before is ${friendBalance}`);
//       try {
//         await friendCtc.apis.Customer.enroll();
//         console.log(`${friend} has enrolled into the Loyalty Program`);
//       } catch (e) {
//         console.log(`${friend} failed to join the Loyalty Program`);
//       }
//       console.log(`${friend}'s balance after is ${await getBalance()}`);
//     }
//   };

// const getAccountsList = async (ctc) => {
//   let prov = await stdlib.getProvider();
//   let ctcAddr = stdlib.formatAddress(await ctc.getContractAddress());
//   const ctcInfo = await getCtcInfo();

//   const a = await prov.indexer.searchAccounts().applicationID(stdlib.bigNumberToNumber(ctcInfo)).do();

//   let accounts = [];
//   for (x in a.accounts) {
//     accounts.push(a.accounts[x].address);
//   }

//   return accounts;
// };
