/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'reach 0.1';

const platformToken = Token;

// const Enroll = Object({
//   firstName: Bytes(64),
//   lastName: Bytes(64),
// });
const enrollmentPoints = 100;
const referralPoints = 100;
const anniversaryPoints = 100;
const goldMembership = 100;
const silverMembership = 100;
const bronzeMembership = 100;
const vipMembership = 100;
const playGame = 100;
const winGame = 100;
const readTutorial = 100;
const answerQuiz = 100;
const checkinPoints = 100;

export const main = Reach.App(() => {
  setOptions({ autoTrackPublishedTokens: false });
  setOptions({ untrustworthyMaps: true });

  const Admin = Participant('Admin', {
    // Specify Admin's interact interface here
    getToken: platformToken,
    ready: Fun([], Null),
    seeCustomer: Fun([Address], Null),
    seeReferral: Fun([Address], Null),
    seeAnniversary: Fun([Address], Null),
    seeAnswer: Fun([Address], Null),
    seeCheckin: Fun([Address], Null),
    seePlay: Fun([Address], Null),
    seeWinner: Fun([Address], Null),
    seeRead: Fun([Address], Null),
    seeBronzeUpgrade: Fun([Address], Null),
    seeSilverUpgrade: Fun([Address], Null),
    seeGoldUpgrade: Fun([Address], Null),
    seeVipUpgrade: Fun([Address], Null),
    seePurchase: Fun([Address], Null),
  });
  const Customer = API('Customer', {
    // Specify Customers interact interface here
    enroll: Fun(
      [],
      Null
      // Object({
      //   firstName: Bytes(64),
      //   lastName: Bytes(64),
      // })
    ),
    readBlog: Fun([], Null),
    answerQuestion: Fun([], Null),
    referFriend: Fun(
      [],
      Null
      // Object({
      //   friendName: Bytes(64),
      //   // account: Address,
      // })
    ),
    playGame: Fun([], Null),
    // buyNFT: Fun([], Null),
    upgradeToGold: Fun([], Null),
    upgradeToSilver: Fun([], Null),
    upgradeToBronze: Fun([], Null),
    upgradeToVIP: Fun([], Null),
    // swapPoints: Fun([UInt], Null),
    // checkin: Fun([], Null),
    // seeAnniversary: Fun([], Null),
  });
  const Platform = View('Platform', {
    token: platformToken,
  });

  init();

  Admin.only(() => {
    const token = declassify(interact.getToken);
  });
  // The first one to publish deploys the contract
  Admin.publish(token);
  // const { token } = tokenId;
  Token.track(token);
  Platform.token.set(token);

  const tokenAmount = 100000;
  commit();
  Admin.pay([[tokenAmount, token]]); // pay the token into the contract

  assert(balance(token) == tokenAmount, 'Token points balance is wrong');

  Admin.interact.ready();

  // A set is used for storing addresses
  const pSet = new Set(); // same
  // const pMap = new Map(Address, Null);

  const [count] = parallelReduce([0])
    // .invariant(balance(token) == tokenAmount - count * enrollmentPoints)
    .invariant(balance(token) == tokenAmount)
    .invariant(pSet.Map.size() >= 0)
    .while(count < 3)
    .paySpec([token])
    .api_(Customer.enroll, () => {
      // CHECK EXPR -- assumptions about your program
      check(!pSet.member(this), 'Already enrolled into the loyalty program');
      check(this != Admin, 'You are the Admin');
      return [
        (ret) => {
          ret(null);
          pSet.insert(this);
          const who = this;
          Admin.interact.seeCustomer(who); // log to the front end
          transfer(enrollmentPoints, token).to(who);
          commit();
          Admin.pay([[enrollmentPoints, token]]);
          return [count + 1];
        },
      ];
    })
    .api_(Customer.referFriend, () => {
      return [
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeReferral(who);
          transfer(referralPoints, token).to(who);
          commit();
          Admin.pay([[referralPoints, token]]);
          return [count];
        },
      ];
    })
    .api_(Customer.readBlog, () => {
      return [
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeRead(who);
          transfer(readTutorial, token).to(who);
          commit();
          Admin.pay([[readTutorial, token]]);
          return [count];
        },
      ];
    })
    .api_(Customer.answerQuestion, () => {
      return [
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeAnswer(who);
          transfer(answerQuiz, token).to(who);
          commit();
          Admin.pay([[answerQuiz, token]]);
          return [count];
        },
      ];
    })
    .api_(Customer.playGame, () => {
      return [
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seePlay(who);
          transfer(playGame, token).to(who);
          commit();
          Admin.pay([[playGame, token]]);
          return [count];
        },
      ];
    })
    .api_(Customer.upgradeToGold, () => {
      return [
        [0, [goldMembership, token]],
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeGoldUpgrade(who);
          transfer(goldMembership, token).to(Admin);
          return [count];
        },
      ];
    })
    .api_(Customer.upgradeToSilver, () => {
      return [
        [0, [silverMembership, token]],
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeSilverUpgrade(who);
          transfer(silverMembership, token).to(Admin);
          return [count];
        },
      ];
    })
    .api_(Customer.upgradeToBronze, () => {
      return [
        [0, [bronzeMembership, token]],
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeBronzeUpgrade(who);
          transfer(bronzeMembership, token).to(Admin);
          return [count];
        },
      ];
    })
    .api_(Customer.upgradeToVIP, () => {
      return [
        [0, [vipMembership, token]],
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeVipUpgrade(who);
          transfer(vipMembership, token).to(Admin);
          return [count];
        },
      ];
    });

  // The second one to publish always attaches

  // Customer.only(() => {
  //   const { firstName, lastName } = declassify(interact.enroll());
  // });
  // commit();
  // Customer.publish(firstName, lastName);

  // Admin.only(() => {
  //   interact.seeCustomer(firstName, Customer);
  // });
  // token.burn(enrollmentPoints);

  // Customer.only(() => {
  //   const { friendName } = declassify(interact.referFriend());
  // });
  // commit();
  // Customer.publish(friendName);

  // Admin.interact.seeReferral(firstName, Customer);

  // transfer(referralPoints, token).to(Customer);
  // // transfer(referralPoints, token).to(ownAccount);
  // // token.burn(2 * referralPoints);

  // Customer.only(() => {
  //   interact.readBlog();
  // });
  // commit();
  // Customer.publish();

  // Admin.interact.seeRead(firstName, Customer);

  // transfer(readTutorial, token).to(Customer);
  // // token.burn(readTutorial);

  // Customer.only(() => {
  //   const answer = declassify(interact.answerQuestion());
  // });
  // commit();
  // Customer.publish(answer);

  // Admin.interact.seeAnswer(firstName, Customer);

  // transfer(answerQuiz, token).to(Customer);
  // // token.burn(answerQuiz);

  // Customer.only(() => {
  //   interact.playGame();
  // });
  // commit();
  // Customer.publish();

  // Admin.interact.seePlay(firstName, Customer);

  // transfer(playGame, token).to(Customer);
  // // token.burn(playGame);

  // Customer.only(() => {
  //   const bronze = declassify(interact.upgradeToBronze());
  // });
  // commit();
  // Customer.pay([[bronzeMembership, token]]);

  // Admin.interact.seeBronzeUpgrade(firstName, Customer);

  // Customer.only(() => {
  //   const silver = declassify(interact.upgradeToSilver());
  // });
  // commit();
  // Customer.pay([[silverMembership, token]]);

  // Admin.interact.seeSilverUpgrade(firstName, Customer);

  // Customer.only(() => {
  //   const gold = declassify(interact.upgradeToGold());
  // });
  // commit();
  // Customer.pay([[goldMembership, token]]);

  // Admin.interact.seeGoldUpgrade(firstName, Customer);

  // Customer.only(() => {
  //   const vip = declassify(interact.upgradeToVIP());
  // });
  // commit();
  // Customer.pay([[vipMembership, token]]);

  // Admin.interact.seeVipUpgrade(firstName, Customer);

  // Customer.only(() => {
  //   const point = declassify(interact.swapPoints(points));
  // });
  // Admin.publish(points);

  // transfer(points).to(Customer);

  // Customer.only(() => {
  //   const checkin = declassify(interact.checkin());
  // });
  // commit();
  // Customer.publish(checkin);

  // transfer(checkinPoints, token).to(Customer);
  // token.burn(checkinPoints);

  // Customer.only(() => {
  //   const anniversary = declassify(interact.seeAnniversary());
  // });
  // commit();
  // Customer.publish(anniversary);

  // transfer(anniversaryPoints, token).to(Customer);
  // token.burn(anniversaryPoints);

  transfer(balance(token), token).to(Admin);
  transfer(balance()).to(Admin);

  commit();

  exit();
});

// Pseudocode for Loyalty DApp

//  Customers
// Connect Wallet
// - Get wallet address
// - keep track of Wallet balance

// Enroll into Reward Program
// - Enter name or username,
// - Attach to the contract info
// - → Receive 10 Points on enrollment
//  Notify user and Admin about enrollment and points using reach views

// Referral System
// - Get a Friend to enroll and receive referral bonus
// - → Retrieve their Customername → Send Friend 5 points on new enrollment
// - Receive 5 points as well
// - Notify user and Admin about referral and points using reach views

// Games
//  RPS, Morra, Fortune Teling, etc.
// - Customer gets rewarded 1point for playing a game
// - Customer gets rewarded 5points if they win the game
// - Customer gets no point if they lose the game

// Blogs/Tutorials
// - Customers earn tokens when they read web3 blogs/take tutorials and answer questions on our platform
// - Customer gets rewarded 1 point for reading a blog
// - Customer gets rewarded 5 points for answering a quiz correctly
//  Notify user and Admin about points using reach views

// Checkins and Anniversaries
// - Customers receive tokens on anniversaries, say when some length in block time has elapsed
// - Customers receive tokens each time they sign in into the platform
//  Notify user and Admin about points using reach views

// Token/Points redemption
// 1) Membership Levels
//   Customers can use the points or token accumulated to buy higher membership levels.
//  VIP: 1000 points
//  Gold: 500 points
//  Silver: 100 points
//  Bronze: 10 points

// 2) Store/NFT marektplace
// - Customers can buy NFTs/other products with their points
// - Customers can sell NFTs for points

// 3) Swap Points for Network Tokens	(if posssible)
// - Customers can swap their points for Testnet ALGOs
// - Withdraw from Contract
// - Award 5points on successful Withdrawal

//  Admin
// - See Customer's Information
// - View user's point balance
// - View Customer's events and activities
