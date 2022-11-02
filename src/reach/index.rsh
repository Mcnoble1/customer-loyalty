/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'reach 0.1';

const platformToken = Token;
const nftToken = Token;

// const rewards = Object({
//   enrollmentPoints: UInt,
//   referralPoints: UInt,
//   anniversaryPoints: UInt,
//   bronzeMembership: UInt,
//   silverMembership: UInt,
//   goldMembership: UInt,
//   vipMembership: UInt,
//   playGame: UInt,
//   winGame: UInt,
//   readTutorial: UInt,
//   answerQuiz: UInt,
//   checkinPoints: UInt,
//   nftPrice: UInt,
// });

// const Enroll = Object({
//   firstName: Bytes(64),
//   lastName: Bytes(64),
// });
const enrollmentPoints = 10;
const referralPoints = 10;
const anniversaryPoints = 10;
const goldMembership = 30;
const silverMembership = 20;
const bronzeMembership = 10;
const playGame = 10;
const winGame = 10;
const readTutorial = 10;
const answerQuiz = 10;
const checkinPoints = 5;
const nftPrice = 20;

export const main = Reach.App(() => {
  setOptions({ autoTrackPublishedTokens: false });
  setOptions({ untrustworthyMaps: true });

  const Admin = Participant('Admin', {
    // Specify Admin's interact interface here
    getToken: platformToken,
    getNFT: nftToken,
    //  getRewards: rewards,
    ready: Fun([], Null),
    seeCustomer: Fun([Address], Null),
    seeReferral: Fun([Address], Null),
    seeAnniversary: Fun([Address], Null),
    seeAnswer: Fun([Address], Null),
    seeCheckin: Fun([Address], Null),
    seeMint: Fun([Address], Null),
    seePlay: Fun([Address], Null),
    seeWinner: Fun([Address], Null),
    seeRead: Fun([Address], Null),
    seeBronzeUpgrade: Fun([Address], Null),
    seeSilverUpgrade: Fun([Address], Null),
    seeGoldUpgrade: Fun([Address], Null),
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
    mintNFT: Fun([], Null),
    upgradeToGold: Fun([], Null),
    upgradeToSilver: Fun([], Null),
    upgradeToBronze: Fun([], Null),
    // swapPoints: Fun([UInt], Null),
    // checkin: Fun([], Null),
    // seeAnniversary: Fun([], Null),
  });
  const Platform = View('Platform', {
    token: platformToken,
  });
  const NFT = View('NFT', {
    token: nftToken,
  });

  init();

  Admin.only(() => {
    const token = declassify(interact.getToken);
    const nftID = declassify(interact.getNFT);
    assume(token != nftID);
    // const rewardList = declassify(interact.getRewards);
  });

  // The first one to publish deploys the contract
  Admin.publish(token, nftID);

  // const { token } = tokenId;
  //   // const {
  //   //   enrollmentPoints,
  //   //   referralPoints,
  //   //   anniversaryPoints,
  //   //   bronzeMembership,
  //   //   silverMembership,
  //   //   goldMembership,
  //   //   vipMembership,
  //   //   playGame,
  //   //   winGame,
  //   //   readTutorial,
  //   //   answerQuiz,
  //   //   checkinPoints,
  //   //   nftPrice,
  //   // } = rewardList;
  Token.track(token);
  Token.track(nftID);

  Platform.token.set(token);
  NFT.token.set(nftID);

  const tokenAmount = 100000;
  const supply = 1000;

  commit();
  Admin.pay([[tokenAmount, token]]); // pay the token into the contract
  commit();
  Admin.pay([[supply, nftID]]); // pay the token into the contract

  assert(balance(token) == tokenAmount, 'Token points balance is wrong');
  assert(balance(nftID) == supply, 'NFT supply is wrong');

  Admin.interact.ready();

  // A set is used for storing addresses
  const pSet = new Set(); // same
  // const pMap = new Map(Address, Null);

  const [count] = parallelReduce([0])
    // .invariant(balance(token) == tokenAmount - count * enrollmentPoints)
    .invariant(balance(token) == tokenAmount)
    .invariant(balance(nftID) == supply)
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
    .api_(Customer.mintNFT, () => {
      return [
        [0, [nftPrice, token]],
        (ret) => {
          ret(null);
          const who = this;
          Admin.interact.seeMint(who);
          transfer(nftPrice, token).to(Admin);
          transfer(1, nftID).to(who);
          commit();
          Admin.pay([[1, nftID]]);
          return [count];
        },
      ];
    });

  transfer(balance(token), token).to(Admin);
  transfer(balance(nftID), nftID).to(Admin);
  transfer(balance()).to(Admin);

  commit();

  exit();
});
