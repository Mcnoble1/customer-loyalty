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
const enrollmentPoints = 10000;
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

  const Admin = Participant('Admin', {
    // Specify Alice's interact interface here
    getToken: platformToken,
    createProgram: Fun([], Null),
    seeUser: Fun([Bytes(64), Address], Null),
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
  const User = Participant('User', {
    // Specify Bob's interact interface here
    enroll: Fun(
      [],
      Object({
        firstName: Bytes(64),
        lastName: Bytes(64),
      })
    ),
    readBlog: Fun([], Null),
    answerQuestion: Fun([], Bytes(64)),
    referFriend: Fun(
      [],
      Object({
        friendName: Bytes(64),
        // account: Address,
      })
    ),
    playGame: Fun([], Null),
    buyNFT: Fun([], Null),
    upgradeToGold: Fun([], Null),
    upgradeToSilver: Fun([], Null),
    upgradeToBronze: Fun([], Null),
    upgradeToVIP: Fun([], Null),
    swapPoints: Fun([UInt], Null),
    checkin: Fun([], Null),
    seeAnniversary: Fun([], Null),
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

  assert(balance(token) == tokenAmount, 'balance of token points is wrong');

  // The second one to publish always attaches

  User.only(() => {
    const { firstName, lastName } = declassify(interact.enroll());
  });
  commit();
  User.publish(firstName, lastName);

  Admin.only(() => {
    interact.seeUser(firstName, User);
  });
  transfer(enrollmentPoints, token).to(User);
  // token.burn(enrollmentPoints);

  User.only(() => {
    const { friendName } = declassify(interact.referFriend());
  });
  commit();
  User.publish(friendName);

  Admin.interact.seeReferral(firstName, User);

  transfer(referralPoints, token).to(User);
  // transfer(referralPoints, token).to(ownAccount);
  // token.burn(2 * referralPoints);

  User.only(() => {
    interact.readBlog();
  });
  commit();
  User.publish();

  Admin.interact.seeRead(firstName, User);

  transfer(readTutorial, token).to(User);
  // token.burn(readTutorial);

  User.only(() => {
    const answer = declassify(interact.answerQuestion());
  });
  commit();
  User.publish(answer);

  Admin.interact.seeAnswer(firstName, User);

  transfer(answerQuiz, token).to(User);
  // token.burn(answerQuiz);

  User.only(() => {
    interact.playGame();
  });
  commit();
  User.publish();

  Admin.interact.seePlay(firstName, User);

  transfer(playGame, token).to(User);
  // token.burn(playGame);

  User.only(() => {
    const bronze = declassify(interact.upgradeToBronze());
  });
  commit();
  User.pay([[bronzeMembership, token]]);

  Admin.interact.seeBronzeUpgrade(firstName, User);

  User.only(() => {
    const silver = declassify(interact.upgradeToSilver());
  });
  commit();
  User.pay([[silverMembership, token]]);

  Admin.interact.seeSilverUpgrade(firstName, User);

  User.only(() => {
    const gold = declassify(interact.upgradeToGold());
  });
  commit();
  User.pay([[goldMembership, token]]);

  Admin.interact.seeGoldUpgrade(firstName, User);

  User.only(() => {
    const vip = declassify(interact.upgradeToVIP());
  });
  commit();
  User.pay([[vipMembership, token]]);

  Admin.interact.seeVipUpgrade(firstName, User);

  // User.only(() => {
  //   const point = declassify(interact.swapPoints(points));
  // });
  // Admin.publish(points);

  // transfer(points).to(User);

  // User.only(() => {
  //   const checkin = declassify(interact.checkin());
  // });
  // commit();
  // User.publish(checkin);

  // transfer(checkinPoints, token).to(User);
  // token.burn(checkinPoints);

  // User.only(() => {
  //   const anniversary = declassify(interact.seeAnniversary());
  // });
  // commit();
  // User.publish(anniversary);

  // transfer(anniversaryPoints, token).to(User);
  // token.burn(anniversaryPoints);

  transfer(balance(token), token).to(Admin);
  transfer(balance()).to(Admin);

  commit();

  exit();
});

// Pseudocode for Loyalty DApp

//  Users
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
// - → Retrieve their Username → Send Friend 5 points on new enrollment
// - Receive 5 points as well
// - Notify user and Admin about referral and points using reach views

// Games
//  RPS, Morra, Fortune Teling, etc.
// - User gets rewarded 1point for playing a game
// - User gets rewarded 5points if they win the game
// - User gets no point if they lose the game

// Blogs/Tutorials
// - Users earn tokens when they read web3 blogs/take tutorials and answer questions on our platform
// - User gets rewarded 1 point for reading a blog
// - User gets rewarded 5 points for answering a quiz correctly
//  Notify user and Admin about points using reach views

// Checkins and Anniversaries
// - Users receive tokens on anniversaries, say when some length in block time has elapsed
// - Users receive tokens each time they sign in into the platform
//  Notify user and Admin about points using reach views

// Token/Points redemption
// 1) Membership Levels
//   Users can use the points or token accumulated to buy higher membership levels.
//  VIP: 1000 points
//  Gold: 500 points
//  Silver: 100 points
//  Bronze: 10 points

// 2) Store/NFT marektplace
// - Users can buy NFTs/other products with their points
// - Users can sell NFTs for points

// 3) Swap Points for Network Tokens	(if posssible)
// - Users can swap their points for Testnet ALGOs
// - Withdraw from Contract
// - Award 5points on successful Withdrawal

//  Admin
// - See User's Information
// - View user's point balance
// - View User's events and activities
