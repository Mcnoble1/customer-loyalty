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
// let tokenBalance = 0;
const enrollmentPoints = 2;
const referralPoints = 50000;
const anniversaryPoints = 10;
const goldMembership = 10000;
const silverMembership = 5000;
const bronzeMembership = 2500;
const vipMembership = 20000;
const playGame = 5000;
const winGame = 20;
const readTutorial = 10000;
const answerQuiz = 20000;
const checkinPoints = 5;

export const main = Reach.App(() => {
  setOptions({ autoTrackPublishedTokens: false });
  setOptions({ untrustworthyMaps: true });

  const Admin = Participant('Admin', {
    // Specify Alice's interact interface here
    getToken: platformToken,
    ready: Fun([], Null),
    seeCustomer: Fun([Address], Null),
    seeReferral: Fun([Bytes(64), Address], Null),
    seeAnniversary: Fun([Bytes(64), Address], Null),
    seeAnswer: Fun([Bytes(64), Address], Null),
    seeCheckin: Fun([Bytes(64), Address], Null),
    seePlay: Fun([Bytes(64), Address], Null),
    seeWinner: Fun([Bytes(64), Address], Null),
    seeRead: Fun([Bytes(64), Address], Null),
    seeBronzeUpgrade: Fun([Bytes(64), Address], Null),
    seeSilverUpgrade: Fun([Bytes(64), Address], Null),
    seeGoldUpgrade: Fun([Bytes(64), Address], Null),
    seeVipUpgrade: Fun([Bytes(64), Address], Null),
    seePurchase: Fun([Bytes(64), Address], Null),
  });
  const Customer = API('Customer', {
    // Specify Bob's interact interface here
    enroll: Fun(
      [],
      Null
      // Object({
      //   firstName: Bytes(64),
      //   lastName: Bytes(64),
      // })
    ),
    // readBlog: Fun([], Null),
    // answerQuestion: Fun([], Bytes(64)),
    // referFriend: Fun(
    //   [],
    //   Object({
    //     friendName: Bytes(64),
    //     // account: Address,
    //   })
    // ),
    // playGame: Fun([], Null),
    // buyNFT: Fun([], Null),
    // upgradeToGold: Fun([], Null),
    // upgradeToSilver: Fun([], Null),
    // upgradeToBronze: Fun([], Null),
    // upgradeToVIP: Fun([], Null),
    // swapPoints: Fun([UInt], Null),
    // checkin: Fun([], Null),
    // seeAnniversary: Fun([], Null),
  });
  const Info = View('Info', {
    details: platformToken,
  });

  init();

  Admin.only(() => {
    const token = declassify(interact.getToken);
  });
  // The first one to publish deploys the contract
  Admin.publish(token);
  // const { token } = tokenId;
  Token.track(token);
  Info.details.set(token);

  const tokenAmount = 500000;
  commit();
  Admin.pay([[tokenAmount, token]]); // pay the token into the contract

  assert(balance(token) == tokenAmount, 'Token points balance is wrong');

  Admin.interact.ready();

  // A set is used for storing addresses
  const pSet = new Set(); // same
  // const pMap = new Map(Address, Null);

  const [count] = parallelReduce([0])
    .invariant(balance(token) == tokenAmount - count * enrollmentPoints && balance() >= 0)
    .invariant(pSet.Map.size() >= 0)
    .while(count < 5)
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
          return [count + 1];
        },
      ];
    });
  // .api_(Customer.readBlog, () => {
  //   return [ (ret) => {
  //     ret(null);
  //     const who = this;
  //     done = false;
  //     Admin.interact.confirmGuest(who);
  //     transfer(enrollmentPoints, token).to(who);
  //     return [ done ];
  //   } ];
  // }),
  // .api_(Customer.answerQuestion, () => {

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
