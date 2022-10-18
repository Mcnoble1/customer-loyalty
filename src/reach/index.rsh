/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'reach 0.1';

const Enroll = Object({
  firstName: Bytes(64),
  lastName: Bytes(64),
});

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    // Specify Alice's interact interface here
    seeUser: Fun([Address], Null),
    createProgram: Fun([], Null),
  });
  const User = Participant('User', {
    // Specify Bob's interact interface here
    enroll: Fun([Bytes(64), Bytes(64)], Null),
    readBlog: Fun([], Null),
    writeBlog: Fun([Bytes(64)], Null),
    answerQuestion: Fun([Bytes(64)], Null),
    submitQuestion: Fun([Bytes(64)], Null),
    referFriend: Fun([Address], Null),
    playGame: Fun([], Null),
    redeemPoints: Fun([], Null),
    swapPoints: Fun([UInt], Null),
    checkin: Fun([], Null),
    seeAnniversary: Fun([], Null),
  });

  const Info = View('Info', {
    details: Enroll,
  });

  init();

  User.only(() => {
    const { firstName, lastName } = declassify(interact.enroll);
  });
  // The first one to publish deploys the contract
  User.publish(firstName, lastName);

  commit();

  // The second one to publish always attaches

  Deployer.only(() => {
    const seeUser = declassify(interact.seeUser(User));
  });
  Deployer.publish(seeUser);

  commit();
  // write your program here
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
