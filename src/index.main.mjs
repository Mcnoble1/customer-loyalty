// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6,
  });
  const map0_ctc = ctc7;

  const NFT_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1576, v1577, v1578, v1587] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v1576, v1577, v1578, v1599] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1576, v1577, v1578, v1618, v1625, v1626] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v1576, v1577, v1578, v1618, v1626, v1894] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2251] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2609] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2957] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v1576, v1577, v1578, v1618, v1626, v3305] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v1576, v1577, v1578, v1618, v1626, v3653] = svs;
      return await (async () => {
        return v1578;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const Platform_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1576, v1577, v1578, v1587] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v1576, v1577, v1578, v1599] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1576, v1577, v1578, v1618, v1625, v1626] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v1576, v1577, v1578, v1618, v1626, v1894] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2251] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2609] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v1576, v1577, v1578, v1618, v1626, v2957] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v1576, v1577, v1578, v1618, v1626, v3305] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v1576, v1577, v1578, v1618, v1626, v3653] = svs;
      return await (async () => {
        return v1577;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  return {
    infos: {
      NFT: {
        token: {
          decode: NFT_token,
          dom: [],
          rng: ctc1,
        },
      },
      Platform: {
        token: {
          decode: Platform_token,
          dom: [],
          rng: ctc1,
        },
      },
    },
    views: {
      1: [ctc0, ctc1, ctc1, ctc5],
      2: [ctc0, ctc1, ctc1, ctc5],
      5: [ctc0, ctc1, ctc1, ctc2, ctc5, ctc2],
      6: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
      7: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
      8: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
      9: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
      10: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
      11: [ctc0, ctc1, ctc1, ctc2, ctc2, ctc5],
    },
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2,
  };
}
export async function Admin(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Admin expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc3,
    Customer_enroll0_96: ctc3,
    Customer_mintNFT0_96: ctc3,
    Customer_playGame0_96: ctc3,
    Customer_readBlog0_96: ctc3,
    Customer_referFriend0_96: ctc3,
    Customer_upgradeToBronze0_96: ctc3,
    Customer_upgradeToGold0_96: ctc3,
    Customer_upgradeToSilver0_96: ctc3,
  });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  });

  const v1565 = [
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    false,
  ];
  const v1566 = [v1565, v1565];
  const v1570 = stdlib.protect(ctc2, interact.getNFT, "for Admin's interact field getNFT");
  const v1571 = stdlib.protect(ctc2, interact.getToken, "for Admin's interact field getToken");

  const v1574 = stdlib.tokenEq(v1571, v1570);
  const v1575 = v1574 ? false : true;
  stdlib.assert(v1575, {
    at: './index.rsh:114:11:application',
    fs: ['at ./index.rsh:111:13:application call to [unknown function] (defined at: ./index.rsh:111:17:function exp)'],
    msg: null,
    who: 'Admin',
  });

  const txn1 = await ctc.sendrecv({
    args: [v1571, v1570],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:119:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:119:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1577, v1578],
        secs: v1580,
        time: v1579,
        didSend: v32,
        from: v1576,
      } = txn1;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1577,
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1578,
      });
      const v1581 = v1566[stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0')];
      const v1582 = stdlib.Array_set(
        v1581,
        '0',
        stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0')
      );
      const v1583 = stdlib.Array_set(
        v1566,
        stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0'),
        v1582
      );
      const v1585 = v1583[stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '1')];
      const v1586 = stdlib.Array_set(
        v1585,
        '0',
        stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '0')
      );
      const v1587 = stdlib.Array_set(
        v1583,
        stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '1'),
        v1586
      );
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2],
    waitIfNotPresent: false,
  });
  const {
    data: [v1577, v1578],
    secs: v1580,
    time: v1579,
    didSend: v32,
    from: v1576,
  } = txn1;
  const v1581 = v1566[stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0')];
  const v1582 = stdlib.Array_set(
    v1581,
    '0',
    stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0')
  );
  const v1583 = stdlib.Array_set(
    v1566,
    stdlib.checkedBigNumberify('./index.rsh:137:14:application', stdlib.UInt_max, '0'),
    v1582
  );
  const v1585 = v1583[stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '1')];
  const v1586 = stdlib.Array_set(
    v1585,
    '0',
    stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '0')
  );
  const v1587 = stdlib.Array_set(
    v1583,
    stdlib.checkedBigNumberify('./index.rsh:138:14:application', stdlib.UInt_max, '1'),
    v1586
  );
  const v1589 = stdlib.tokenEq(v1578, v1577);
  const v1590 = v1589 ? false : true;
  stdlib.assert(v1590, {
    at: './index.rsh:138:14:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin',
  });
  const txn2 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1587],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1579,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:143:23:decimal', stdlib.UInt_max, '100000'), v1577]],
    ],
    sim_p: async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [],
        secs: v1593,
        time: v1592,
        didSend: v41,
        from: v1591,
      } = txn2;

      const v1594 = v1587[stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0')];
      const v1595 = v1594[stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0')];
      const v1596 = stdlib.add(
        v1595,
        stdlib.checkedBigNumberify('./index.rsh:143:23:decimal', stdlib.UInt_max, '100000')
      );
      const v1598 = stdlib.Array_set(v1594, '0', v1596);
      const v1599 = stdlib.Array_set(
        v1587,
        stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0'),
        v1598
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:143:23:decimal', stdlib.UInt_max, '100000'),
        kind: 'to',
        tok: v1577,
      });
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v1593,
    time: v1592,
    didSend: v41,
    from: v1591,
  } = txn2;
  const v1594 = v1587[stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0')];
  const v1595 = v1594[stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0')];
  const v1596 = stdlib.add(v1595, stdlib.checkedBigNumberify('./index.rsh:143:23:decimal', stdlib.UInt_max, '100000'));
  const v1598 = stdlib.Array_set(v1594, '0', v1596);
  const v1599 = stdlib.Array_set(
    v1587,
    stdlib.checkedBigNumberify('./index.rsh:147:9:dot', stdlib.UInt_max, '0'),
    v1598
  );
  const v1600 = stdlib.addressEq(v1576, v1591);
  stdlib.assert(v1600, {
    at: './index.rsh:147:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin',
  });
  const txn3 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1599],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1592,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:144:18:decimal', stdlib.UInt_max, '1000'), v1578]],
    ],
    sim_p: async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [],
        secs: v1603,
        time: v1602,
        didSend: v48,
        from: v1601,
      } = txn3;

      const v1604 = v1599[stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '1')];
      const v1605 = v1604[stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '0')];
      const v1606 = stdlib.add(
        v1605,
        stdlib.checkedBigNumberify('./index.rsh:144:18:decimal', stdlib.UInt_max, '1000')
      );
      const v1608 = stdlib.Array_set(v1604, '0', v1606);
      const v1609 = stdlib.Array_set(
        v1599,
        stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '1'),
        v1608
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:144:18:decimal', stdlib.UInt_max, '1000'),
        kind: 'to',
        tok: v1578,
      });

      const v1618 = stdlib.checkedBigNumberify('./index.rsh:160:35:decimal', stdlib.UInt_max, '0');
      const v1619 = v1602;
      const v1625 = v1609;
      const v1626 = stdlib.checkedBigNumberify('./index.rsh:109:9:after expr stmt semicolon', stdlib.UInt_max, '0');

      if (
        await (async () => {
          const v1641 = stdlib.lt(
            v1618,
            stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
          );

          return v1641;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v4684 = stdlib.sub(v4678, v4678);
        const v4686 = stdlib.Array_set(v4677, '0', v4684);
        const v4687 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
          v4686
        );
        sim_r.txns.push({
          kind: 'from',
          to: v1576,
          tok: v1577,
        });
        const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
        const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1576,
          tok: v1578,
        });
        sim_r.txns.push({
          kind: 'from',
          to: v1576,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1578,
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1577,
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */,
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc2, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v1603,
    time: v1602,
    didSend: v48,
    from: v1601,
  } = txn3;
  const v1604 = v1599[stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '1')];
  const v1605 = v1604[stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '0')];
  const v1606 = stdlib.add(v1605, stdlib.checkedBigNumberify('./index.rsh:144:18:decimal', stdlib.UInt_max, '1000'));
  const v1608 = stdlib.Array_set(v1604, '0', v1606);
  const v1609 = stdlib.Array_set(
    v1599,
    stdlib.checkedBigNumberify('./index.rsh:149:9:dot', stdlib.UInt_max, '1'),
    v1608
  );
  const v1610 = stdlib.addressEq(v1576, v1601);
  stdlib.assert(v1610, {
    at: './index.rsh:149:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin',
  });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:154:23:application',
    fs: [
      'at ./index.rsh:154:23:application call to [unknown function] (defined at: ./index.rsh:154:23:function exp)',
      'at ./index.rsh:154:23:application call to "liftedInteract" (defined at: ./index.rsh:154:23:application)',
    ],
    msg: 'ready',
    who: 'Admin',
  });

  let v1618 = stdlib.checkedBigNumberify('./index.rsh:160:35:decimal', stdlib.UInt_max, '0');
  let v1619 = v1602;
  let v1625 = v1609;
  let v1626 = stdlib.checkedBigNumberify('./index.rsh:109:9:after expr stmt semicolon', stdlib.UInt_max, '0');

  let txn4 = txn3;
  while (
    await (async () => {
      const v1641 = stdlib.lt(v1618, stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3'));

      return v1641;
    })()
  ) {
    const txn5 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v1803],
      secs: v1805,
      time: v1804,
      didSend: v545,
      from: v1802,
    } = txn5;
    switch (v1803[0]) {
      case 'Customer_answerQuestion0_96': {
        const v1806 = v1803[1];
        undefined /* setApiDetails */;
        const v1872 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v1873 = v1872[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v1879 = null;
        await txn5.getOutput('Customer_answerQuestion', 'v1879', ctc0, v1879);
        stdlib.protect(ctc0, await interact.seeAnswer(v1802), {
          at: './index.rsh:215:35:application',
          fs: [
            'at ./index.rsh:215:35:application call to [unknown function] (defined at: ./index.rsh:215:35:function exp)',
            'at ./index.rsh:215:35:application call to "liftedInteract" (defined at: ./index.rsh:215:35:application)',
            'at ./index.rsh:212:15:application call to [unknown function] (defined at: ./index.rsh:212:15:function exp)',
          ],
          msg: 'seeAnswer',
          who: 'Admin',
        });

        const v1891 = stdlib.sub(v1873, stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10'));
        const v1893 = stdlib.Array_set(v1872, '0', v1891);
        const v1894 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:216:41:application', stdlib.UInt_max, '0'),
          v1893
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v1894],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10'), v1577]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v1897,
              time: v1896,
              didSend: v569,
              from: v1895,
            } = txn6;

            const v1898 = v1894[stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0')];
            const v1899 = v1898[stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0')];
            const v1900 = stdlib.add(
              v1899,
              stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10')
            );
            const v1902 = stdlib.Array_set(v1898, '0', v1900);
            const v1903 = stdlib.Array_set(
              v1894,
              stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0'),
              v1902
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1577,
            });
            const cv1618 = v1618;
            const cv1619 = v1896;
            const cv1625 = v1903;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v1897,
          time: v1896,
          didSend: v569,
          from: v1895,
        } = txn6;
        const v1898 = v1894[stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0')];
        const v1899 = v1898[stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0')];
        const v1900 = stdlib.add(v1899, stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10'));
        const v1902 = stdlib.Array_set(v1898, '0', v1900);
        const v1903 = stdlib.Array_set(
          v1894,
          stdlib.checkedBigNumberify('./index.rsh:218:17:dot', stdlib.UInt_max, '0'),
          v1902
        );
        const v1904 = stdlib.addressEq(v1576, v1895);
        stdlib.assert(v1904, {
          at: './index.rsh:218:17:dot',
          fs: [
            'at ./index.rsh:212:15:application call to [unknown function] (defined at: ./index.rsh:212:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1618 = v1618;
        const cv1619 = v1896;
        const cv1625 = v1903;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_enroll0_96': {
        const v2125 = v1803[1];
        undefined /* setApiDetails */;
        const v2191 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2192 = v2191[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1802), null);
        const v2228 = {
          None: 0,
          Some: 1,
        }[v2227[0]];
        const v2229 = stdlib.eq(
          v2228,
          stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
        );
        const v2230 = v2229 ? false : true;
        stdlib.assert(v2230, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
          ],
          msg: 'Already enrolled into the loyalty program',
          who: 'Admin',
        });
        const v2232 = stdlib.addressEq(v1802, v1576);
        const v2233 = v2232 ? false : true;
        stdlib.assert(v2233, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
          ],
          msg: 'You are the Admin',
          who: 'Admin',
        });
        const v2235 = null;
        await txn5.getOutput('Customer_enroll', 'v2235', ctc0, v2235);
        await stdlib.mapSet(map0, v1802, null);
        stdlib.protect(ctc0, await interact.seeCustomer(v1802), {
          at: './index.rsh:176:37:application',
          fs: [
            'at ./index.rsh:176:37:application call to [unknown function] (defined at: ./index.rsh:176:37:function exp)',
            'at ./index.rsh:176:37:application call to "liftedInteract" (defined at: ./index.rsh:176:37:application)',
            'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
          ],
          msg: 'seeCustomer',
          who: 'Admin',
        });

        const v2248 = stdlib.sub(v2192, stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10'));
        const v2250 = stdlib.Array_set(v2191, '0', v2248);
        const v2251 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:177:47:application', stdlib.UInt_max, '0'),
          v2250
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v2251],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10'), v1577]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2254,
              time: v2253,
              didSend: v635,
              from: v2252,
            } = txn6;

            const v2255 = v2251[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
            const v2256 = v2255[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
            const v2257 = stdlib.add(
              v2256,
              stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10')
            );
            const v2259 = stdlib.Array_set(v2255, '0', v2257);
            const v2260 = stdlib.Array_set(
              v2251,
              stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
              v2259
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1577,
            });
            const v2262 = stdlib.safeAdd(
              v1618,
              stdlib.checkedBigNumberify('./index.rsh:180:27:decimal', stdlib.UInt_max, '1')
            );
            const cv1618 = v2262;
            const cv1619 = v2253;
            const cv1625 = v2260;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2254,
          time: v2253,
          didSend: v635,
          from: v2252,
        } = txn6;
        const v2255 = v2251[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
        const v2256 = v2255[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
        const v2257 = stdlib.add(v2256, stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10'));
        const v2259 = stdlib.Array_set(v2255, '0', v2257);
        const v2260 = stdlib.Array_set(
          v2251,
          stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
          v2259
        );
        const v2261 = stdlib.addressEq(v1576, v2252);
        stdlib.assert(v2261, {
          at: './index.rsh:179:17:dot',
          fs: [
            'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const v2262 = stdlib.safeAdd(
          v1618,
          stdlib.checkedBigNumberify('./index.rsh:180:27:decimal', stdlib.UInt_max, '1')
        );
        const cv1618 = v2262;
        const cv1619 = v2253;
        const cv1625 = v2260;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_mintNFT0_96': {
        const v2444 = v1803[1];
        undefined /* setApiDetails */;
        const v2510 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2511 = v2510[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2512 = stdlib.add(v2511, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
        const v2514 = stdlib.Array_set(v2510, '0', v2512);
        const v2515 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
          v2514
        );
        const v2585 = null;
        await txn5.getOutput('Customer_mintNFT', 'v2585', ctc0, v2585);
        stdlib.protect(ctc0, await interact.seeMint(v1802), {
          at: './index.rsh:278:33:application',
          fs: [
            'at ./index.rsh:278:33:application call to [unknown function] (defined at: ./index.rsh:278:33:function exp)',
            'at ./index.rsh:278:33:application call to "liftedInteract" (defined at: ./index.rsh:278:33:application)',
            'at ./index.rsh:275:15:application call to [unknown function] (defined at: ./index.rsh:275:15:function exp)',
          ],
          msg: 'seeMint',
          who: 'Admin',
        });

        const v2592 = v2515[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
        const v2593 = v2592[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
        const v2597 = stdlib.sub(v2593, stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '20'));
        const v2599 = stdlib.Array_set(v2592, '0', v2597);
        const v2600 = stdlib.Array_set(
          v2515,
          stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0'),
          v2599
        );
        const v2601 = v2600[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1')];
        const v2602 = v2601[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '0')];
        const v2606 = stdlib.sub(v2602, stdlib.checkedBigNumberify('./index.rsh:280:20:decimal', stdlib.UInt_max, '1'));
        const v2608 = stdlib.Array_set(v2601, '0', v2606);
        const v2609 = stdlib.Array_set(
          v2600,
          stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1'),
          v2608
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v2609],
          evt_cnt: 0,
          funcNum: 7,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:282:23:decimal', stdlib.UInt_max, '1'), v1578]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2612,
              time: v2611,
              didSend: v665,
              from: v2610,
            } = txn6;

            const v2613 = v2609[stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '1')];
            const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '0')];
            const v2615 = stdlib.add(
              v2614,
              stdlib.checkedBigNumberify('./index.rsh:282:23:decimal', stdlib.UInt_max, '1')
            );
            const v2617 = stdlib.Array_set(v2613, '0', v2615);
            const v2618 = stdlib.Array_set(
              v2609,
              stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '1'),
              v2617
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:282:23:decimal', stdlib.UInt_max, '1'),
              kind: 'to',
              tok: v1578,
            });
            const cv1618 = v1618;
            const cv1619 = v2611;
            const cv1625 = v2618;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2612,
          time: v2611,
          didSend: v665,
          from: v2610,
        } = txn6;
        const v2613 = v2609[stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '1')];
        const v2614 = v2613[stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '0')];
        const v2615 = stdlib.add(v2614, stdlib.checkedBigNumberify('./index.rsh:282:23:decimal', stdlib.UInt_max, '1'));
        const v2617 = stdlib.Array_set(v2613, '0', v2615);
        const v2618 = stdlib.Array_set(
          v2609,
          stdlib.checkedBigNumberify('./index.rsh:282:17:dot', stdlib.UInt_max, '1'),
          v2617
        );
        const v2619 = stdlib.addressEq(v1576, v2610);
        stdlib.assert(v2619, {
          at: './index.rsh:282:17:dot',
          fs: [
            'at ./index.rsh:275:15:application call to [unknown function] (defined at: ./index.rsh:275:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1618 = v1618;
        const cv1619 = v2611;
        const cv1625 = v2618;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_playGame0_96': {
        const v2763 = v1803[1];
        undefined /* setApiDetails */;
        const v2829 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2830 = v2829[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v2942 = null;
        await txn5.getOutput('Customer_playGame', 'v2942', ctc0, v2942);
        stdlib.protect(ctc0, await interact.seePlay(v1802), {
          at: './index.rsh:228:33:application',
          fs: [
            'at ./index.rsh:228:33:application call to [unknown function] (defined at: ./index.rsh:228:33:function exp)',
            'at ./index.rsh:228:33:application call to "liftedInteract" (defined at: ./index.rsh:228:33:application)',
            'at ./index.rsh:225:15:application call to [unknown function] (defined at: ./index.rsh:225:15:function exp)',
          ],
          msg: 'seePlay',
          who: 'Admin',
        });

        const v2954 = stdlib.sub(v2830, stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10'));
        const v2956 = stdlib.Array_set(v2829, '0', v2954);
        const v2957 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:229:39:application', stdlib.UInt_max, '0'),
          v2956
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v2957],
          evt_cnt: 0,
          funcNum: 8,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10'), v1577]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2960,
              time: v2959,
              didSend: v690,
              from: v2958,
            } = txn6;

            const v2961 = v2957[stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0')];
            const v2962 = v2961[stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0')];
            const v2963 = stdlib.add(
              v2962,
              stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10')
            );
            const v2965 = stdlib.Array_set(v2961, '0', v2963);
            const v2966 = stdlib.Array_set(
              v2957,
              stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0'),
              v2965
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1577,
            });
            const cv1618 = v1618;
            const cv1619 = v2959;
            const cv1625 = v2966;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2960,
          time: v2959,
          didSend: v690,
          from: v2958,
        } = txn6;
        const v2961 = v2957[stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0')];
        const v2962 = v2961[stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0')];
        const v2963 = stdlib.add(v2962, stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10'));
        const v2965 = stdlib.Array_set(v2961, '0', v2963);
        const v2966 = stdlib.Array_set(
          v2957,
          stdlib.checkedBigNumberify('./index.rsh:231:17:dot', stdlib.UInt_max, '0'),
          v2965
        );
        const v2967 = stdlib.addressEq(v1576, v2958);
        stdlib.assert(v2967, {
          at: './index.rsh:231:17:dot',
          fs: [
            'at ./index.rsh:225:15:application call to [unknown function] (defined at: ./index.rsh:225:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1618 = v1618;
        const cv1619 = v2959;
        const cv1625 = v2966;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_readBlog0_96': {
        const v3082 = v1803[1];
        undefined /* setApiDetails */;
        const v3148 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3290 = null;
        await txn5.getOutput('Customer_readBlog', 'v3290', ctc0, v3290);
        stdlib.protect(ctc0, await interact.seeRead(v1802), {
          at: './index.rsh:202:33:application',
          fs: [
            'at ./index.rsh:202:33:application call to [unknown function] (defined at: ./index.rsh:202:33:function exp)',
            'at ./index.rsh:202:33:application call to "liftedInteract" (defined at: ./index.rsh:202:33:application)',
            'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)',
          ],
          msg: 'seeRead',
          who: 'Admin',
        });

        const v3302 = stdlib.sub(v3149, stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10'));
        const v3304 = stdlib.Array_set(v3148, '0', v3302);
        const v3305 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:203:43:application', stdlib.UInt_max, '0'),
          v3304
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v3305],
          evt_cnt: 0,
          funcNum: 9,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10'), v1577]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v3308,
              time: v3307,
              didSend: v715,
              from: v3306,
            } = txn6;

            const v3309 = v3305[stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0')];
            const v3310 = v3309[stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0')];
            const v3311 = stdlib.add(
              v3310,
              stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10')
            );
            const v3313 = stdlib.Array_set(v3309, '0', v3311);
            const v3314 = stdlib.Array_set(
              v3305,
              stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0'),
              v3313
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1577,
            });
            const cv1618 = v1618;
            const cv1619 = v3307;
            const cv1625 = v3314;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v3308,
          time: v3307,
          didSend: v715,
          from: v3306,
        } = txn6;
        const v3309 = v3305[stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0')];
        const v3310 = v3309[stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0')];
        const v3311 = stdlib.add(v3310, stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10'));
        const v3313 = stdlib.Array_set(v3309, '0', v3311);
        const v3314 = stdlib.Array_set(
          v3305,
          stdlib.checkedBigNumberify('./index.rsh:205:17:dot', stdlib.UInt_max, '0'),
          v3313
        );
        const v3315 = stdlib.addressEq(v1576, v3306);
        stdlib.assert(v3315, {
          at: './index.rsh:205:17:dot',
          fs: [
            'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1618 = v1618;
        const cv1619 = v3307;
        const cv1625 = v3314;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_referFriend0_96': {
        const v3401 = v1803[1];
        undefined /* setApiDetails */;
        const v3467 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3468 = v3467[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3638 = null;
        await txn5.getOutput('Customer_referFriend', 'v3638', ctc0, v3638);
        stdlib.protect(ctc0, await interact.seeReferral(v1802), {
          at: './index.rsh:189:37:application',
          fs: [
            'at ./index.rsh:189:37:application call to [unknown function] (defined at: ./index.rsh:189:37:function exp)',
            'at ./index.rsh:189:37:application call to "liftedInteract" (defined at: ./index.rsh:189:37:application)',
            'at ./index.rsh:186:15:application call to [unknown function] (defined at: ./index.rsh:186:15:function exp)',
          ],
          msg: 'seeReferral',
          who: 'Admin',
        });

        const v3650 = stdlib.sub(v3468, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10'));
        const v3652 = stdlib.Array_set(v3467, '0', v3650);
        const v3653 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:190:45:application', stdlib.UInt_max, '0'),
          v3652
        );
        const txn6 = await ctc.sendrecv({
          args: [v1576, v1577, v1578, v1618, v1626, v3653],
          evt_cnt: 0,
          funcNum: 10,
          lct: v1804,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10'), v1577]],
          ],
          sim_p: async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v3656,
              time: v3655,
              didSend: v740,
              from: v3654,
            } = txn6;

            const v3657 = v3653[stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0')];
            const v3658 = v3657[stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0')];
            const v3659 = stdlib.add(
              v3658,
              stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10')
            );
            const v3661 = stdlib.Array_set(v3657, '0', v3659);
            const v3662 = stdlib.Array_set(
              v3653,
              stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0'),
              v3661
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1577,
            });
            const cv1618 = v1618;
            const cv1619 = v3655;
            const cv1625 = v3662;
            const cv1626 = v1626;

            await (async () => {
              const v1618 = cv1618;
              const v1619 = cv1619;
              const v1625 = cv1625;
              const v1626 = cv1626;

              if (
                await (async () => {
                  const v1641 = stdlib.lt(
                    v1618,
                    stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1641;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
                const v4684 = stdlib.sub(v4678, v4678);
                const v4686 = stdlib.Array_set(v4677, '0', v4684);
                const v4687 = stdlib.Array_set(
                  v1625,
                  stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
                  v4686
                );
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1577,
                });
                const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
                const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1576,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1578,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1577,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */,
                });
                sim_r.isHalt = true;
              }
            })();
            return sim_r;
          },
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc2, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v3656,
          time: v3655,
          didSend: v740,
          from: v3654,
        } = txn6;
        const v3657 = v3653[stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0')];
        const v3658 = v3657[stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0')];
        const v3659 = stdlib.add(v3658, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10'));
        const v3661 = stdlib.Array_set(v3657, '0', v3659);
        const v3662 = stdlib.Array_set(
          v3653,
          stdlib.checkedBigNumberify('./index.rsh:192:17:dot', stdlib.UInt_max, '0'),
          v3661
        );
        const v3663 = stdlib.addressEq(v1576, v3654);
        stdlib.assert(v3663, {
          at: './index.rsh:192:17:dot',
          fs: [
            'at ./index.rsh:186:15:application call to [unknown function] (defined at: ./index.rsh:186:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1618 = v1618;
        const cv1619 = v3655;
        const cv1625 = v3662;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn6;
        continue;

        break;
      }
      case 'Customer_upgradeToBronze0_96': {
        const v3720 = v1803[1];
        undefined /* setApiDetails */;
        const v3786 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3787 = v3786[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v3788 = stdlib.add(v3787, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
        const v3790 = stdlib.Array_set(v3786, '0', v3788);
        const v3791 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
          v3790
        );
        const v3986 = null;
        await txn5.getOutput('Customer_upgradeToBronze', 'v3986', ctc0, v3986);
        stdlib.protect(ctc0, await interact.seeBronzeUpgrade(v1802), {
          at: './index.rsh:266:42:application',
          fs: [
            'at ./index.rsh:266:42:application call to [unknown function] (defined at: ./index.rsh:266:42:function exp)',
            'at ./index.rsh:266:42:application call to "liftedInteract" (defined at: ./index.rsh:266:42:application)',
            'at ./index.rsh:263:15:application call to [unknown function] (defined at: ./index.rsh:263:15:function exp)',
          ],
          msg: 'seeBronzeUpgrade',
          who: 'Admin',
        });

        const v3993 = v3791[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
        const v3994 = v3993[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
        const v3998 = stdlib.sub(v3994, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, '10'));
        const v4000 = stdlib.Array_set(v3993, '0', v3998);
        const v4001 = stdlib.Array_set(
          v3791,
          stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0'),
          v4000
        );
        const cv1618 = v1618;
        const cv1619 = v1804;
        const cv1625 = v4001;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn5;
        continue;
        break;
      }
      case 'Customer_upgradeToGold0_96': {
        const v4039 = v1803[1];
        undefined /* setApiDetails */;
        const v4105 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v4106 = v4105[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v4107 = stdlib.add(v4106, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
        const v4109 = stdlib.Array_set(v4105, '0', v4107);
        const v4110 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
          v4109
        );
        const v4323 = null;
        await txn5.getOutput('Customer_upgradeToGold', 'v4323', ctc0, v4323);
        stdlib.protect(ctc0, await interact.seeGoldUpgrade(v1802), {
          at: './index.rsh:242:40:application',
          fs: [
            'at ./index.rsh:242:40:application call to [unknown function] (defined at: ./index.rsh:242:40:function exp)',
            'at ./index.rsh:242:40:application call to "liftedInteract" (defined at: ./index.rsh:242:40:application)',
            'at ./index.rsh:239:15:application call to [unknown function] (defined at: ./index.rsh:239:15:function exp)',
          ],
          msg: 'seeGoldUpgrade',
          who: 'Admin',
        });

        const v4330 = v4110[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
        const v4331 = v4330[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
        const v4335 = stdlib.sub(v4331, stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '30'));
        const v4337 = stdlib.Array_set(v4330, '0', v4335);
        const v4338 = stdlib.Array_set(
          v4110,
          stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0'),
          v4337
        );
        const cv1618 = v1618;
        const cv1619 = v1804;
        const cv1625 = v4338;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn5;
        continue;
        break;
      }
      case 'Customer_upgradeToSilver0_96': {
        const v4358 = v1803[1];
        undefined /* setApiDetails */;
        const v4424 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v4425 = v4424[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
        const v4426 = stdlib.add(v4425, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
        const v4428 = stdlib.Array_set(v4424, '0', v4426);
        const v4429 = stdlib.Array_set(
          v1625,
          stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
          v4428
        );
        const v4660 = null;
        await txn5.getOutput('Customer_upgradeToSilver', 'v4660', ctc0, v4660);
        stdlib.protect(ctc0, await interact.seeSilverUpgrade(v1802), {
          at: './index.rsh:254:42:application',
          fs: [
            'at ./index.rsh:254:42:application call to [unknown function] (defined at: ./index.rsh:254:42:function exp)',
            'at ./index.rsh:254:42:application call to "liftedInteract" (defined at: ./index.rsh:254:42:application)',
            'at ./index.rsh:251:15:application call to [unknown function] (defined at: ./index.rsh:251:15:function exp)',
          ],
          msg: 'seeSilverUpgrade',
          who: 'Admin',
        });

        const v4667 = v4429[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
        const v4668 = v4667[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
        const v4672 = stdlib.sub(v4668, stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '20'));
        const v4674 = stdlib.Array_set(v4667, '0', v4672);
        const v4675 = stdlib.Array_set(
          v4429,
          stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0'),
          v4674
        );
        const cv1618 = v1618;
        const cv1619 = v1804;
        const cv1625 = v4675;
        const cv1626 = v1626;

        v1618 = cv1618;
        v1619 = cv1619;
        v1625 = cv1625;
        v1626 = cv1626;

        txn4 = txn5;
        continue;
        break;
      }
    }
  }
  const v4677 = v1625[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
  const v4678 = v4677[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
  const v4684 = stdlib.sub(v4678, v4678);
  const v4686 = stdlib.Array_set(v4677, '0', v4684);
  const v4687 = stdlib.Array_set(
    v1625,
    stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
    v4686
  );
  const v4688 = v4687[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
  const v4689 = v4688[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
  return;
}
export async function _Customer_answerQuestion5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_answerQuestion5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_answerQuestion5 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1676 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:210:39:application call to [unknown function] (defined at: ./index.rsh:210:39:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_answerQuestion0_96" (defined at: ./index.rsh:210:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_answerQuestion',
  });
  const v1680 = ['Customer_answerQuestion0_96', v1676];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1680],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:210:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:166:14:decimal', stdlib.UInt_max, '0'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_answerQuestion',
          });
          const v1872 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v1873 = v1872[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v1879 = null;
          const v1880 = await txn1.getOutput('Customer_answerQuestion', 'v1879', ctc0, v1879);

          const v1891 = stdlib.sub(
            v1873,
            stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10')
          );
          const v1893 = stdlib.Array_set(v1872, '0', v1891);
          const v1894 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:216:41:application', stdlib.UInt_max, '0'),
            v1893
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1577,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      undefined /* setApiDetails */;
      const v1872 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v1873 = v1872[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v1879 = null;
      const v1880 = await txn1.getOutput('Customer_answerQuestion', 'v1879', ctc0, v1879);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v1806, v1880), {
          at: './index.rsh:210:11:application',
          fs: [
            'at ./index.rsh:210:11:application call to [unknown function] (defined at: ./index.rsh:210:11:function exp)',
            'at ./index.rsh:213:14:application call to "ret" (defined at: ./index.rsh:212:15:function exp)',
            'at ./index.rsh:212:15:application call to [unknown function] (defined at: ./index.rsh:212:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_answerQuestion',
        });
      } else {
      }

      const v1891 = stdlib.sub(v1873, stdlib.checkedBigNumberify('./index.rsh:45:20:decimal', stdlib.UInt_max, '10'));
      const v1893 = stdlib.Array_set(v1872, '0', v1891);
      const v1894 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:216:41:application', stdlib.UInt_max, '0'),
        v1893
      );
      return;

      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_enroll5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_enroll5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_enroll5 expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1642 = ctc.selfAddress();
  const v1644 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:167:31:application call to [unknown function] (defined at: ./index.rsh:167:31:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_enroll0_96" (defined at: ./index.rsh:167:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_enroll',
  });
  const v1645 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1642), null);
  const v1646 = {
    None: 0,
    Some: 1,
  }[v1645[0]];
  const v1647 = stdlib.eq(
    v1646,
    stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
  );
  const v1648 = v1647 ? false : true;
  stdlib.assert(v1648, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:167:31:application call to [unknown function] (defined at: ./index.rsh:167:31:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_enroll0_96" (defined at: ./index.rsh:167:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'Already enrolled into the loyalty program',
    who: 'Customer_enroll',
  });
  const v1650 = stdlib.addressEq(v1642, v1576);
  const v1651 = v1650 ? false : true;
  stdlib.assert(v1651, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:167:31:application call to [unknown function] (defined at: ./index.rsh:167:31:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_enroll0_96" (defined at: ./index.rsh:167:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'You are the Admin',
    who: 'Customer_enroll',
  });
  const v1656 = ['Customer_enroll0_96', v1644];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1656],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:167:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:166:14:decimal', stdlib.UInt_max, '0'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_enroll',
          });
          const v2191 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v2192 = v2191[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1802), null);
          const v2235 = null;
          const v2236 = await txn1.getOutput('Customer_enroll', 'v2235', ctc0, v2235);

          await stdlib.simMapSet(sim_r, 0, v1802, null);
          const v2248 = stdlib.sub(
            v2192,
            stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10')
          );
          const v2250 = stdlib.Array_set(v2191, '0', v2248);
          const v2251 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:177:47:application', stdlib.UInt_max, '0'),
            v2250
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1577,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      undefined /* setApiDetails */;
      const v2191 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2192 = v2191[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2227 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1802), null);
      const v2228 = {
        None: 0,
        Some: 1,
      }[v2227[0]];
      const v2229 = stdlib.eq(
        v2228,
        stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
      );
      const v2230 = v2229 ? false : true;
      stdlib.assert(v2230, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
        ],
        msg: 'Already enrolled into the loyalty program',
        who: 'Customer_enroll',
      });
      const v2232 = stdlib.addressEq(v1802, v1576);
      const v2233 = v2232 ? false : true;
      stdlib.assert(v2233, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
        ],
        msg: 'You are the Admin',
        who: 'Customer_enroll',
      });
      const v2235 = null;
      const v2236 = await txn1.getOutput('Customer_enroll', 'v2235', ctc0, v2235);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v2125, v2236), {
          at: './index.rsh:167:11:application',
          fs: [
            'at ./index.rsh:167:11:application call to [unknown function] (defined at: ./index.rsh:167:11:function exp)',
            'at ./index.rsh:173:14:application call to "ret" (defined at: ./index.rsh:172:15:function exp)',
            'at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_enroll',
        });
      } else {
      }

      await stdlib.mapSet(map0, v1802, null);
      const v2248 = stdlib.sub(v2192, stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, '10'));
      const v2250 = stdlib.Array_set(v2191, '0', v2248);
      const v2251 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:177:47:application', stdlib.UInt_max, '0'),
        v2250
      );
      return;

      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_mintNFT5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_mintNFT5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_mintNFT5 expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1716 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:272:32:application call to [unknown function] (defined at: ./index.rsh:272:32:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_mintNFT0_96" (defined at: ./index.rsh:272:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_mintNFT',
  });
  const v1720 = ['Customer_mintNFT0_96', v1716];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1720],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:274:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '20'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_mintNFT',
          });
          const v2510 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v2511 = v2510[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v2512 = stdlib.add(v2511, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
          const v2514 = stdlib.Array_set(v2510, '0', v2512);
          const v2515 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
            v2514
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'),
            kind: 'to',
            tok: v1577,
          });
          const v2585 = null;
          const v2586 = await txn1.getOutput('Customer_mintNFT', 'v2585', ctc0, v2585);

          const v2592 = v2515[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
          const v2593 = v2592[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
          const v2597 = stdlib.sub(
            v2593,
            stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '20')
          );
          const v2599 = stdlib.Array_set(v2592, '0', v2597);
          const v2600 = stdlib.Array_set(
            v2515,
            stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0'),
            v2599
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1576,
            tok: v1577,
          });
          const v2601 = v2600[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1')];
          const v2602 = v2601[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '0')];
          const v2606 = stdlib.sub(
            v2602,
            stdlib.checkedBigNumberify('./index.rsh:280:20:decimal', stdlib.UInt_max, '1')
          );
          const v2608 = stdlib.Array_set(v2601, '0', v2606);
          const v2609 = stdlib.Array_set(
            v2600,
            stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1'),
            v2608
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1578,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      undefined /* setApiDetails */;
      const v2510 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2511 = v2510[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2512 = stdlib.add(v2511, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
      const v2514 = stdlib.Array_set(v2510, '0', v2512);
      const v2515 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
        v2514
      );
      const v2585 = null;
      const v2586 = await txn1.getOutput('Customer_mintNFT', 'v2585', ctc0, v2585);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v2444, v2586), {
          at: './index.rsh:272:11:application',
          fs: [
            'at ./index.rsh:272:11:application call to [unknown function] (defined at: ./index.rsh:272:11:function exp)',
            'at ./index.rsh:276:14:application call to "ret" (defined at: ./index.rsh:275:15:function exp)',
            'at ./index.rsh:275:15:application call to [unknown function] (defined at: ./index.rsh:275:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_mintNFT',
        });
      } else {
      }

      const v2592 = v2515[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
      const v2593 = v2592[stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0')];
      const v2597 = stdlib.sub(v2593, stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '20'));
      const v2599 = stdlib.Array_set(v2592, '0', v2597);
      const v2600 = stdlib.Array_set(
        v2515,
        stdlib.checkedBigNumberify('./index.rsh:279:39:application', stdlib.UInt_max, '0'),
        v2599
      );
      const v2601 = v2600[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1')];
      const v2602 = v2601[stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '0')];
      const v2606 = stdlib.sub(v2602, stdlib.checkedBigNumberify('./index.rsh:280:20:decimal', stdlib.UInt_max, '1'));
      const v2608 = stdlib.Array_set(v2601, '0', v2606);
      const v2609 = stdlib.Array_set(
        v2600,
        stdlib.checkedBigNumberify('./index.rsh:280:32:application', stdlib.UInt_max, '1'),
        v2608
      );
      return;

      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_playGame5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_playGame5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_playGame5 expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1684 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:223:33:application call to [unknown function] (defined at: ./index.rsh:223:33:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_playGame0_96" (defined at: ./index.rsh:223:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_playGame',
  });
  const v1688 = ['Customer_playGame0_96', v1684];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1688],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:223:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:166:14:decimal', stdlib.UInt_max, '0'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_playGame',
          });
          const v2829 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v2830 = v2829[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v2942 = null;
          const v2943 = await txn1.getOutput('Customer_playGame', 'v2942', ctc0, v2942);

          const v2954 = stdlib.sub(
            v2830,
            stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10')
          );
          const v2956 = stdlib.Array_set(v2829, '0', v2954);
          const v2957 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:229:39:application', stdlib.UInt_max, '0'),
            v2956
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1577,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      undefined /* setApiDetails */;
      const v2829 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2830 = v2829[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v2942 = null;
      const v2943 = await txn1.getOutput('Customer_playGame', 'v2942', ctc0, v2942);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v2763, v2943), {
          at: './index.rsh:223:11:application',
          fs: [
            'at ./index.rsh:223:11:application call to [unknown function] (defined at: ./index.rsh:223:11:function exp)',
            'at ./index.rsh:226:14:application call to "ret" (defined at: ./index.rsh:225:15:function exp)',
            'at ./index.rsh:225:15:application call to [unknown function] (defined at: ./index.rsh:225:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_playGame',
        });
      } else {
      }

      const v2954 = stdlib.sub(v2830, stdlib.checkedBigNumberify('./index.rsh:42:18:decimal', stdlib.UInt_max, '10'));
      const v2956 = stdlib.Array_set(v2829, '0', v2954);
      const v2957 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:229:39:application', stdlib.UInt_max, '0'),
        v2956
      );
      return;

      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_readBlog5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_readBlog5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_readBlog5 expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1668 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:197:33:application call to [unknown function] (defined at: ./index.rsh:197:33:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_readBlog0_96" (defined at: ./index.rsh:197:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_readBlog',
  });
  const v1672 = ['Customer_readBlog0_96', v1668];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1672],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:197:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:166:14:decimal', stdlib.UInt_max, '0'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_readBlog',
          });
          const v3148 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3290 = null;
          const v3291 = await txn1.getOutput('Customer_readBlog', 'v3290', ctc0, v3290);

          const v3302 = stdlib.sub(
            v3149,
            stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10')
          );
          const v3304 = stdlib.Array_set(v3148, '0', v3302);
          const v3305 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:203:43:application', stdlib.UInt_max, '0'),
            v3304
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1577,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      undefined /* setApiDetails */;
      const v3148 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3149 = v3148[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3290 = null;
      const v3291 = await txn1.getOutput('Customer_readBlog', 'v3290', ctc0, v3290);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v3082, v3291), {
          at: './index.rsh:197:11:application',
          fs: [
            'at ./index.rsh:197:11:application call to [unknown function] (defined at: ./index.rsh:197:11:function exp)',
            'at ./index.rsh:200:14:application call to "ret" (defined at: ./index.rsh:199:15:function exp)',
            'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_readBlog',
        });
      } else {
      }

      const v3302 = stdlib.sub(v3149, stdlib.checkedBigNumberify('./index.rsh:44:22:decimal', stdlib.UInt_max, '10'));
      const v3304 = stdlib.Array_set(v3148, '0', v3302);
      const v3305 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:203:43:application', stdlib.UInt_max, '0'),
        v3304
      );
      return;

      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_referFriend5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_referFriend5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_referFriend5 expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1660 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:184:36:application call to [unknown function] (defined at: ./index.rsh:184:36:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_referFriend0_96" (defined at: ./index.rsh:184:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_referFriend',
  });
  const v1664 = ['Customer_referFriend0_96', v1660];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1664],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:184:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:166:14:decimal', stdlib.UInt_max, '0'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_referFriend',
          });
          const v3467 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3468 = v3467[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3638 = null;
          const v3639 = await txn1.getOutput('Customer_referFriend', 'v3638', ctc0, v3638);

          const v3650 = stdlib.sub(
            v3468,
            stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10')
          );
          const v3652 = stdlib.Array_set(v3467, '0', v3650);
          const v3653 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:190:45:application', stdlib.UInt_max, '0'),
            v3652
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1802,
            tok: v1577,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      undefined /* setApiDetails */;
      const v3467 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3468 = v3467[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3638 = null;
      const v3639 = await txn1.getOutput('Customer_referFriend', 'v3638', ctc0, v3638);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v3401, v3639), {
          at: './index.rsh:184:11:application',
          fs: [
            'at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)',
            'at ./index.rsh:187:14:application call to "ret" (defined at: ./index.rsh:186:15:function exp)',
            'at ./index.rsh:186:15:application call to [unknown function] (defined at: ./index.rsh:186:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_referFriend',
        });
      } else {
      }

      const v3650 = stdlib.sub(v3468, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '10'));
      const v3652 = stdlib.Array_set(v3467, '0', v3650);
      const v3653 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:190:45:application', stdlib.UInt_max, '0'),
        v3652
      );
      return;

      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToBronze5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToBronze5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToBronze5 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1708 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:260:40:application call to [unknown function] (defined at: ./index.rsh:260:40:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_upgradeToBronze0_96" (defined at: ./index.rsh:260:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToBronze',
  });
  const v1712 = ['Customer_upgradeToBronze0_96', v1708];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1712],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:262:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, '10'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToBronze',
          });
          const v3786 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3787 = v3786[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v3788 = stdlib.add(v3787, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
          const v3790 = stdlib.Array_set(v3786, '0', v3788);
          const v3791 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
            v3790
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'),
            kind: 'to',
            tok: v1577,
          });
          const v3986 = null;
          const v3987 = await txn1.getOutput('Customer_upgradeToBronze', 'v3986', ctc0, v3986);

          const v3993 = v3791[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
          const v3994 = v3993[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
          const v3998 = stdlib.sub(
            v3994,
            stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, '10')
          );
          const v4000 = stdlib.Array_set(v3993, '0', v3998);
          const v4001 = stdlib.Array_set(
            v3791,
            stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0'),
            v4000
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1576,
            tok: v1577,
          });
          const v13649 = v1618;
          const v13651 = v4001;
          const v13652 = v1626;
          const v13653 = stdlib.lt(
            v1618,
            stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
          );
          if (v13653) {
            sim_r.isHalt = false;
          } else {
            const v13654 = v4001[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13655 = v13654[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13656 = stdlib.sub(v13655, v13655);
            const v13657 = stdlib.Array_set(v13654, '0', v13656);
            const v13658 = stdlib.Array_set(
              v4001,
              stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
              v13657
            );
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1577,
            });
            const v13659 = v13658[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
            const v13660 = v13659[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1577,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      undefined /* setApiDetails */;
      const v3786 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3787 = v3786[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v3788 = stdlib.add(v3787, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
      const v3790 = stdlib.Array_set(v3786, '0', v3788);
      const v3791 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
        v3790
      );
      const v3986 = null;
      const v3987 = await txn1.getOutput('Customer_upgradeToBronze', 'v3986', ctc0, v3986);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v3720, v3987), {
          at: './index.rsh:260:11:application',
          fs: [
            'at ./index.rsh:260:11:application call to [unknown function] (defined at: ./index.rsh:260:11:function exp)',
            'at ./index.rsh:264:14:application call to "ret" (defined at: ./index.rsh:263:15:function exp)',
            'at ./index.rsh:263:15:application call to [unknown function] (defined at: ./index.rsh:263:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToBronze',
        });
      } else {
      }

      const v3993 = v3791[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
      const v3994 = v3993[stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0')];
      const v3998 = stdlib.sub(v3994, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, '10'));
      const v4000 = stdlib.Array_set(v3993, '0', v3998);
      const v4001 = stdlib.Array_set(
        v3791,
        stdlib.checkedBigNumberify('./index.rsh:267:47:application', stdlib.UInt_max, '0'),
        v4000
      );
      const v13649 = v1618;
      const v13651 = v4001;
      const v13652 = v1626;
      const v13653 = stdlib.lt(v1618, stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3'));
      if (v13653) {
        return;
      } else {
        const v13654 = v4001[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13655 = v13654[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13656 = stdlib.sub(v13655, v13655);
        const v13657 = stdlib.Array_set(v13654, '0', v13656);
        const v13658 = stdlib.Array_set(
          v4001,
          stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
          v13657
        );
        const v13659 = v13658[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
        const v13660 = v13659[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToGold5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToGold5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToGold5 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1692 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:236:38:application call to [unknown function] (defined at: ./index.rsh:236:38:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_upgradeToGold0_96" (defined at: ./index.rsh:236:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToGold',
  });
  const v1696 = ['Customer_upgradeToGold0_96', v1692];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1696],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:238:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '30'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToGold',
          });
          const v4105 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v4106 = v4105[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v4107 = stdlib.add(v4106, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
          const v4109 = stdlib.Array_set(v4105, '0', v4107);
          const v4110 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
            v4109
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'),
            kind: 'to',
            tok: v1577,
          });
          const v4323 = null;
          const v4324 = await txn1.getOutput('Customer_upgradeToGold', 'v4323', ctc0, v4323);

          const v4330 = v4110[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
          const v4331 = v4330[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
          const v4335 = stdlib.sub(
            v4331,
            stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '30')
          );
          const v4337 = stdlib.Array_set(v4330, '0', v4335);
          const v4338 = stdlib.Array_set(
            v4110,
            stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0'),
            v4337
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1576,
            tok: v1577,
          });
          const v13697 = v1618;
          const v13699 = v4338;
          const v13700 = v1626;
          const v13701 = stdlib.lt(
            v1618,
            stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
          );
          if (v13701) {
            sim_r.isHalt = false;
          } else {
            const v13702 = v4338[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13703 = v13702[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13704 = stdlib.sub(v13703, v13703);
            const v13705 = stdlib.Array_set(v13702, '0', v13704);
            const v13706 = stdlib.Array_set(
              v4338,
              stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
              v13705
            );
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1577,
            });
            const v13707 = v13706[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
            const v13708 = v13707[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1577,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      undefined /* setApiDetails */;
      const v4105 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v4106 = v4105[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v4107 = stdlib.add(v4106, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
      const v4109 = stdlib.Array_set(v4105, '0', v4107);
      const v4110 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
        v4109
      );
      const v4323 = null;
      const v4324 = await txn1.getOutput('Customer_upgradeToGold', 'v4323', ctc0, v4323);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v4039, v4324), {
          at: './index.rsh:236:11:application',
          fs: [
            'at ./index.rsh:236:11:application call to [unknown function] (defined at: ./index.rsh:236:11:function exp)',
            'at ./index.rsh:240:14:application call to "ret" (defined at: ./index.rsh:239:15:function exp)',
            'at ./index.rsh:239:15:application call to [unknown function] (defined at: ./index.rsh:239:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToGold',
        });
      } else {
      }

      const v4330 = v4110[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
      const v4331 = v4330[stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0')];
      const v4335 = stdlib.sub(v4331, stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '30'));
      const v4337 = stdlib.Array_set(v4330, '0', v4335);
      const v4338 = stdlib.Array_set(
        v4110,
        stdlib.checkedBigNumberify('./index.rsh:243:45:application', stdlib.UInt_max, '0'),
        v4337
      );
      const v13697 = v1618;
      const v13699 = v4338;
      const v13700 = v1626;
      const v13701 = stdlib.lt(v1618, stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3'));
      if (v13701) {
        return;
      } else {
        const v13702 = v4338[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13703 = v13702[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13704 = stdlib.sub(v13703, v13703);
        const v13705 = stdlib.Array_set(v13702, '0', v13704);
        const v13706 = stdlib.Array_set(
          v4338,
          stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
          v13705
        );
        const v13707 = v13706[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
        const v13708 = v13707[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToSilver5(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToSilver5 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToSilver5 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0,
  });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_96: ctc8,
    Customer_enroll0_96: ctc8,
    Customer_mintNFT0_96: ctc8,
    Customer_playGame0_96: ctc8,
    Customer_readBlog0_96: ctc8,
    Customer_referFriend0_96: ctc8,
    Customer_upgradeToBronze0_96: ctc8,
    Customer_upgradeToGold0_96: ctc8,
    Customer_upgradeToSilver0_96: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1576, v1577, v1578, v1618, v1625, v1626] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'),
    [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4]
  );
  const v1700 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:248:40:application call to [unknown function] (defined at: ./index.rsh:248:40:function exp)',
      'at ./index.rsh:160:33:application call to "runCustomer_upgradeToSilver0_96" (defined at: ./index.rsh:248:10:function exp)',
      'at ./index.rsh:160:33:application call to [unknown function] (defined at: ./index.rsh:160:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToSilver',
  });
  const v1704 = ['Customer_upgradeToSilver0_96', v1700];

  const txn1 = await ctc.sendrecv({
    args: [v1576, v1577, v1578, v1618, v1625, v1626, v1704],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:250:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '20'), v1577]],
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1803],
        secs: v1805,
        time: v1804,
        didSend: v545,
        from: v1802,
      } = txn1;

      switch (v1803[0]) {
        case 'Customer_answerQuestion0_96': {
          const v1806 = v1803[1];

          break;
        }
        case 'Customer_enroll0_96': {
          const v2125 = v1803[1];

          break;
        }
        case 'Customer_mintNFT0_96': {
          const v2444 = v1803[1];

          break;
        }
        case 'Customer_playGame0_96': {
          const v2763 = v1803[1];

          break;
        }
        case 'Customer_readBlog0_96': {
          const v3082 = v1803[1];

          break;
        }
        case 'Customer_referFriend0_96': {
          const v3401 = v1803[1];

          break;
        }
        case 'Customer_upgradeToBronze0_96': {
          const v3720 = v1803[1];

          break;
        }
        case 'Customer_upgradeToGold0_96': {
          const v4039 = v1803[1];

          break;
        }
        case 'Customer_upgradeToSilver0_96': {
          const v4358 = v1803[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToSilver',
          });
          const v4424 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v4425 = v4424[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
          const v4426 = stdlib.add(v4425, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
          const v4428 = stdlib.Array_set(v4424, '0', v4426);
          const v4429 = stdlib.Array_set(
            v1625,
            stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
            v4428
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'),
            kind: 'to',
            tok: v1577,
          });
          const v4660 = null;
          const v4661 = await txn1.getOutput('Customer_upgradeToSilver', 'v4660', ctc0, v4660);

          const v4667 = v4429[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
          const v4668 = v4667[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
          const v4672 = stdlib.sub(
            v4668,
            stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '20')
          );
          const v4674 = stdlib.Array_set(v4667, '0', v4672);
          const v4675 = stdlib.Array_set(
            v4429,
            stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0'),
            v4674
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1576,
            tok: v1577,
          });
          const v13745 = v1618;
          const v13747 = v4675;
          const v13748 = v1626;
          const v13749 = stdlib.lt(
            v1618,
            stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3')
          );
          if (v13749) {
            sim_r.isHalt = false;
          } else {
            const v13750 = v4675[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13751 = v13750[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
            const v13752 = stdlib.sub(v13751, v13751);
            const v13753 = stdlib.Array_set(v13750, '0', v13752);
            const v13754 = stdlib.Array_set(
              v4675,
              stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
              v13753
            );
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1577,
            });
            const v13755 = v13754[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
            const v13756 = v13755[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1576,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1578,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1577,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1803],
    secs: v1805,
    time: v1804,
    didSend: v545,
    from: v1802,
  } = txn1;
  switch (v1803[0]) {
    case 'Customer_answerQuestion0_96': {
      const v1806 = v1803[1];
      return;
      break;
    }
    case 'Customer_enroll0_96': {
      const v2125 = v1803[1];
      return;
      break;
    }
    case 'Customer_mintNFT0_96': {
      const v2444 = v1803[1];
      return;
      break;
    }
    case 'Customer_playGame0_96': {
      const v2763 = v1803[1];
      return;
      break;
    }
    case 'Customer_readBlog0_96': {
      const v3082 = v1803[1];
      return;
      break;
    }
    case 'Customer_referFriend0_96': {
      const v3401 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_96': {
      const v3720 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_96': {
      const v4039 = v1803[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_96': {
      const v4358 = v1803[1];
      undefined /* setApiDetails */;
      const v4424 = v1625[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v4425 = v4424[stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0')];
      const v4426 = stdlib.add(v4425, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
      const v4428 = stdlib.Array_set(v4424, '0', v4426);
      const v4429 = stdlib.Array_set(
        v1625,
        stdlib.checkedBigNumberify('./index.rsh:160:33:dot', stdlib.UInt_max, '0'),
        v4428
      );
      const v4660 = null;
      const v4661 = await txn1.getOutput('Customer_upgradeToSilver', 'v4660', ctc0, v4660);
      if (v545) {
        stdlib.protect(ctc0, await interact.out(v4358, v4661), {
          at: './index.rsh:248:11:application',
          fs: [
            'at ./index.rsh:248:11:application call to [unknown function] (defined at: ./index.rsh:248:11:function exp)',
            'at ./index.rsh:252:14:application call to "ret" (defined at: ./index.rsh:251:15:function exp)',
            'at ./index.rsh:251:15:application call to [unknown function] (defined at: ./index.rsh:251:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToSilver',
        });
      } else {
      }

      const v4667 = v4429[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
      const v4668 = v4667[stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0')];
      const v4672 = stdlib.sub(v4668, stdlib.checkedBigNumberify('./index.rsh:40:26:decimal', stdlib.UInt_max, '20'));
      const v4674 = stdlib.Array_set(v4667, '0', v4672);
      const v4675 = stdlib.Array_set(
        v4429,
        stdlib.checkedBigNumberify('./index.rsh:255:47:application', stdlib.UInt_max, '0'),
        v4674
      );
      const v13745 = v1618;
      const v13747 = v4675;
      const v13748 = v1626;
      const v13749 = stdlib.lt(v1618, stdlib.checkedBigNumberify('./index.rsh:165:20:decimal', stdlib.UInt_max, '3'));
      if (v13749) {
        return;
      } else {
        const v13750 = v4675[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13751 = v13750[stdlib.checkedBigNumberify('./index.rsh:288:19:application', stdlib.UInt_max, '0')];
        const v13752 = stdlib.sub(v13751, v13751);
        const v13753 = stdlib.Array_set(v13750, '0', v13752);
        const v13754 = stdlib.Array_set(
          v4675,
          stdlib.checkedBigNumberify('./index.rsh:288:37:application', stdlib.UInt_max, '0'),
          v13753
        );
        const v13755 = v13754[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '1')];
        const v13756 = v13755[stdlib.checkedBigNumberify('./index.rsh:289:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
  }
}
export async function Customer_answerQuestion(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_answerQuestion expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_answerQuestion expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_answerQuestion5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_enroll(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_enroll expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_enroll expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_enroll5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_mintNFT(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_mintNFT expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_mintNFT expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_mintNFT5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_playGame(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_playGame expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_playGame expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_playGame5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_readBlog(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_readBlog expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_readBlog expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_readBlog5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_referFriend(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_referFriend expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_referFriend expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_referFriend5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_upgradeToBronze(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToBronze expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for Customer_upgradeToBronze expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_upgradeToBronze5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_upgradeToGold(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToGold expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToGold expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_upgradeToGold5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_upgradeToSilver(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToSilver expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for Customer_upgradeToSilver expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 5) {
    return _Customer_upgradeToSilver5(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `Customer_answerQuestion()byte[0]`,
      `Customer_enroll()byte[0]`,
      `Customer_mintNFT()byte[0]`,
      `Customer_playGame()byte[0]`,
      `Customer_readBlog()byte[0]`,
      `Customer_referFriend()byte[0]`,
      `Customer_upgradeToBronze()byte[0]`,
      `Customer_upgradeToGold()byte[0]`,
      `Customer_upgradeToSilver()byte[0]`,
    ],
    pure: [`NFT_token()uint64`, `Platform_token()uint64`],
    sigs: [
      `Customer_answerQuestion()byte[0]`,
      `Customer_enroll()byte[0]`,
      `Customer_mintNFT()byte[0]`,
      `Customer_playGame()byte[0]`,
      `Customer_readBlog()byte[0]`,
      `Customer_referFriend()byte[0]`,
      `Customer_upgradeToBronze()byte[0]`,
      `Customer_upgradeToGold()byte[0]`,
      `Customer_upgradeToSilver()byte[0]`,
      `NFT_token()uint64`,
      `Platform_token()uint64`,
    ],
  },
  appApproval: `ByAeAAoBBAgCICgUBTAHCwY4CaCNBh6ypr/lC4+jvqcNm8eupQ75iLTmDrbH7JQM+7Dw1QyttfrXA9DHmLEF4KST6QmX26f9AgPoByYDAQAAAQEiNQAxGEEMOSlkSSJbNQEhBFs1AjEZJBJBAAgxACgoZkIMBzYaABdJQQJiIjUEJDUGSSESDEABNkkhEwxAAD5JIRQMQAAnSSEVDEAAECEVEkQpNf+AAQg0/1BCBOchFBJEKTX/gAEGNP9QQgTXIRMSRCk1/4ABBTT/UEIEx0khFgxAACdJIRcMQAAQIRcSRCk1/4ABAjT/UEIEqSEWEkQpNf+AAQQ0/1BCBJkhEhJENAFJIQsMQABkSSEPDEAAOkkjDEAAJkkhDAxAABEhDBJEKGRJNQNXKAg1B0ILXEgoZEk1A1coCDUHQgtOSChkSTUDVygINQdCC0BJIQQMQAAOSChkSTUDVygINQdCCytIKGRJNQNXKAg1B0ILHUkhCQxAACNJIQ0MQAAOSChkSTUDVygINQdCCwFIKGRJNQNXKAg1B0IK80khBQxAABEhBRJEKGRJNQNXKAg1B0IK2yQSRChkSTUDVygINQdCCstJIRgMQADvSSEZDEAA2EkhGgxAAMMhGhJENAFJIQsMQABkSSEPDEAAOkkjDEAAJkkhDAxAABEhDBJEKGRJNQNXIAg1B0IKhEgoZEk1A1cgCDUHQgp2SChkSTUDVyAINQdCCmhJIQQMQAAOSChkSTUDVyAINQdCClNIKGRJNQNXIAg1B0IKRUkhCQxAACNJIQ0MQAAOSChkSTUDVyAINQdCCilIKGRJNQNXIAg1B0IKG0khBQxAABEhBRJEKGRJNQNXIAg1B0IKAyQSRChkSTUDVyAINQdCCfMhGRJEKTX/KDT/UEIC8CEYEkQpNf+AAQc0/1BCAuBJIRsMQAAQIRsSRCk1/4ABAzT/UEICyYH82vzKARJEKTX/KjT/UEICtzYaAhc1BDYaAzYaARdJIQ0MQAImSSEEDEABRkkhDwxAANdJIwxAAGojEkQhDDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+V0AiNf2ABNNEcyOwNP1XABE1/CM0/ogJkTT/MQASRDT/NP40AyEHWzQDIQpbMgY0/TT8SSJbIwgWXABcADQDIQ5bQggPSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/ldAIjX9gASiBWaOsDT9VwARNfwjNP6ICSo0/zEAEkQ0/zT+NAMhB1s0AyEKWzIGNP00/EkiWyMIFlwAXAA0AyEOW0IHqEghDzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+V0AiNf2ABBf82y6wNP1XABE1/CM0/ogIwjT/MQASRDT/NP40AyEHWzQDIQpbMgY0/TT8SSJbIwgWXABcADQDIQ5bQgdASSELDEAAaEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEHWzX+V0AiNf2ABOIbs6mwNP1XERE1/CQ0/ogIUzT/MQASRDT/NAMhBls0/jQDIQpbMgY0/TT8SSJbJAgWXABcETQDIQ5bQgbRSCELNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf5XQCI1/YAEYbSsDLA0/VcAETX8IzT+iAfrNP8xABJENP80/jQDIQdbNAMhClskCDIGNP00/EkiWyMIFlwAXAA0AyEOW0IGZ0khBQxABTRJJQxABMlJIQkMQABoSCENNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf5XQCI1/YAEzJmSXLA0/VcAETX8IzT+iAdtNP8xABJENP80/jQDIQdbNAMhClsyBjT9NPxJIlsjCBZcAFwANAMhDltCBetIIQk0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQZbNf4hB1s1/SEKWzX8VzgiNfuBWls1+kk1BTX5gASue9QGNPlQsDT5IlVJJQxAAhFJIQ0MQAFCSSELDEAA2EkhBAxAAGohBBJENPtXABE1+DT7NPhJIlshCAgWXABcADX3IQg0/ogGuIAIAAAAAAAAEjSwKTUHNPdXABE19rEisgEhCLISJbIQNP+yFDT+shGzNP80/jT9NPwyBjT3NPZJIlshCAkWXABcADT6QgUbSDT7VwARNfg0+zT4SSJbIREIFlwAXAA19yERNP6IBlGACAAAAAAAABDjsCk1BzT3VwARNfaxIrIBIRGyEiWyEDT/shQ0/rIRszT/NP40/TT8MgY09zT2SSJbIREJFlwAXAA0+kIEtEg0+1cAETX4NPs0+EkiWyMIFlwAXAA19yM0/ogF7IAIAAAAAAAAD5KwKTUHNPdXABE19rEisgEjshIlshA0/7IUNP6yEbM0/zT+NP00/DIGNPc09kkiWyMJFlwAXAA0+kIEUUkhCQxAAGFINPtXABE1+IAIAAAAAAAADjawKTUHNPs0+EkiWyMJFlwAXAA197EisgEjshIlshAxALIUNP6yEbM0/zT+FlA0/RZQNPwWUDT6FlA091AoSwFXAGJnSCEMNQEyBjUCQgTISDT7VwARNfiACAAAAAAAAAzasCk1BzT7NPhJIlsjCRZcAFwANfexIrIBI7ISJbIQMQCyFDT+shGzNP80/hZQNP0WUDT8FlA0+hZQNPdQKEsBVwBiZ0gjNQEyBjUCQgRoSSEFDEABFEkhHAxAAGFINPtXABE1+IAIAAAAAAAAC36wKTUHNPs0+EkiWyMJFlwAXAA197EisgEjshIlshAxALIUNP6yEbM0/zT+FlA0/RZQNPwWUDT6FlA091AoSwFXAGJnSCEPNQEyBjUCQgP5SDT7VwARNfg0+zT4SSJbIQgIFlwAXAA19yEINP6IBFCACAAAAAAAAAoZsCk1BzT3VwARNfY09zT2SSJbIQgJFlwAXAA19bEisgEhCLISJbIQNP+yFDT+shGzNPVXERE19DT1NPRJIlskCRZcAFwRNfOxIrIBJLISJbIQMQCyFDT9shGzNP80/hZQNP0WUDT8FlA0+hZQNPNQKEsBVwBiZ0ghBDUBMgY1AkIDTUkkDEAAdkg0+1cAETX4MQCIA4wiVSQTRDEANP8TRIAIAAAAAAAACLuwKTUHMQAoKmY0+zT4SSJbIwkWXABcADX3sSKyASOyEiWyEDEAshQ0/rIRszT/NP4WUDT9FlA0/BZQNPoWUDT3UChLAVcAYmdIIQs1ATIGNQJCAtFINPtXABE1+IAIAAAAAAAAB1ewKTUHNPs0+EkiWyMJFlwAXAA197EisgEjshIlshAxALIUNP6yEbM0/zT+FlA0/RZQNPwWUDT6FlA091AoSwFXAGJnSCENNQEyBjUCQgJwIQUSRCEFNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQdbNf5XMCI1/YAEQbFATbA0/VcRETX8IR00/ogCpzT/MQASRDT/NAMhBls0/iIyBjT9NPxJIlshHQgWXABcESJCASxJJAxAAHhIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEGWzX+IQdbNf1XMCI1/IAEmouRdLA0/FcAETX7NPw0+0kiWyEQCBZcAFwANfohEDT+iAIqNP8xABJENP80/hZQNP0WUDT6UChLAVcAUmdIIQU1ATIGNQJCAY1IIRCIAeYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBFs1/oAErNEfwzT/FlA0/hZQsIERr0k1/UlQNfwhEIgBq7EisgEishIlshAyCrIUNP+yEbMhEIgBk7EisgEishIlshAyCrIUNP6yEbM0/ElXABEhBK9cAFwASTX7SVcRESEEr1wAXBE1+jT+NP8TRDEANP8WUDT+FlA0+lAoSwFXAFJnSCQ1ATIGNQJCAN81/zX+Nf01/DX7Nfo1+TT8IRwMQQAoNPk0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwBiZ0ghCTUBMgY1AkIAoTT+VwARSTX4Ils197EisgE097ISJbIQNPmyFDT6shGzsSKyATT+NPg090kJFlwAXABXEREiW7ISJbIQNPmyFDT7shGzsSKyATT/sggkshA0+bIHs7EisgEishIlshAyCbIVMgqyFDT7shGzsSKyASKyEiWyEDIJshUyCrIUNPqyEbNCAAAxGSEJEkSxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yIxNBJEIQUxNRJEIjE2EkQkMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKJAg1ADgHMgoSRDgQJBJEOAgSRIk0AElKSSQINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 98,
  unsupported: [],
  version: 11,
  warnings: [],
};
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1577",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1578",
                "type": "address"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1577",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1578",
                "type": "address"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_answerQuestion0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_enroll0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_mintNFT0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_playGame0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_readBlog0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_referFriend0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToBronze0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToGold0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToSilver0_96",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1803",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1879",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2235",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2585",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2942",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3290",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3638",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3986",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4323",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4660",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Customer_answerQuestion",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_enroll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_mintNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_playGame",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_readBlog",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_referFriend",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_upgradeToBronze",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_upgradeToGold",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Customer_upgradeToSilver",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_token",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Platform_token",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T20",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_answerQuestion0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_enroll0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_mintNFT0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_playGame0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_readBlog0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_referFriend0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToBronze0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToGold0_96",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToSilver0_96",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T20",
                "name": "v1803",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162004127380380620041278339810160408190526200002691620004b2565b600080554360035562000038620002ea565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a180516000908190528151602090810182905282516040019190915281518183018051919091528251905190910152620000d0341560096200023d565b6200014281602001516000604051806060016040528060008152602001856020015160006002811062000107576200010762000527565b602002015160200151815260200185602001516000600281106200012f576200012f62000527565b6020020151604001511515905262000267565b604082810182815281516060810183526000815281516020908101518101519082015290516200017c93926001929190820190836200012f565b60608201526020808301518051910151620001b7916001600160a01b03918216911614620001ac576001620001af565b60005b600a6200023d565b620001c162000340565b33815260208084018051516001600160a01b03908116838501529051820151166040808401919091526060808501519084015260016000819055439055516200020d918391016200053d565b60405160208183030381529060405260029080519060200190620002339291906200036b565b5050505062000620565b81620002635760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b62000271620003fa565b60005b6002811015620002c75784816002811062000293576200029362000527565b6020020151828260028110620002ad57620002ad62000527565b602002015280620002be81620005b9565b91505062000274565b5081818460028110620002de57620002de62000527565b60200201529392505050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200031d620003fa565b81526020016200032c620003fa565b81526020016200033b620003fa565b905290565b6040805160808101825260008082526020820181905291810191909152606081016200033b620003fa565b8280546200037990620005e3565b90600052602060002090601f0160209004810192826200039d5760008555620003e8565b82601f10620003b857805160ff1916838001178555620003e8565b82800160010185558215620003e8579182015b82811115620003e8578251825591602001919060010190620003cb565b50620003f692915062000447565b5090565b60405180604001604052806002905b62000430604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620004095790505090565b5b80821115620003f6576000815560010162000448565b604080519081016001600160401b03811182821017156200048f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004ad57600080fd5b919050565b60008183036060811215620004c657600080fd5b620004d06200045e565b835181526040601f1983011215620004e757600080fd5b620004f16200045e565b9150620005016020850162000495565b8252620005116040850162000495565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151821681840152604080850151909216828401526060808501516101208501939192919083860160005b6002811015620005ad57825180518352858101518684015284015115158483015291840191908501906001016200057b565b50505050505092915050565b6000600019821415620005dc57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680620005f857607f821691505b602082108114156200061a57634e487b7160e01b600052602260045260246000fd5b50919050565b613af780620006306000396000f3fe6080604052600436106101425760003560e01c80637eea518c116100b0578063c79800371161006c578063c7980037146102b2578063de736998146102c5578063e00acef1146102d8578063e533a29d146102eb578063e570ab7e146102fe578063ed1927e11461031157005b80637eea518c14610239578063832307571461024c5780638e31476914610261578063ab53f2c614610274578063b2b24ed114610297578063bf2c5b241461029f57005b80633bc5b7bf116100ff5780633bc5b7bf146101b25780636a215fc1146101df57806370e483671461020c57806377047cd61461021457806377c05a97146102295780637da0b94b1461023157005b8062060f321461014b578063091ddfba1461016857806312605326146101705780631e93b0f1146101785780632c10a1591461019757806331df50cb146101aa57005b3661014957005b005b610153610319565b60405190151581526020015b60405180910390f35b610153610328565b610153610332565b34801561018457600080fd5b506003545b60405190815260200161015f565b6101496101a5366004613231565b61033c565b610153610360565b3480156101be57600080fd5b506101d26101cd36600461325e565b61036a565b60405161015f9190613291565b3480156101eb57600080fd5b506101f4610396565b6040516001600160a01b03909116815260200161015f565b6101536103a8565b34801561022057600080fd5b506101f46103b2565b6101536103be565b6101536103c8565b610149610247366004613231565b6103d2565b34801561025857600080fd5b50600154610189565b61014961026f366004613231565b6103f2565b34801561028057600080fd5b50610289610412565b60405161015f9291906132f6565b6101536104af565b6101496102ad366004613231565b6104b9565b6101496102c0366004613231565b6104d9565b6101496102d3366004613231565b6104f9565b6101496102e6366004613231565b610519565b6101496102f9366004613231565b610539565b61014961030c366004613330565b610559565b610153610579565b6000610323610583565b905090565b60006103236105b3565b60006103236105e3565b610344612e91565b61035c61035636849003840184613428565b82610613565b5050565b6000610323610873565b6040805160608101825260008082526020820181905291810191909152610390826108a3565b92915050565b6000806103a28161097c565b91505090565b6000610323610c32565b6000806103a281610c62565b6000610323610f18565b6000610323610f48565b6103da612e91565b61035c6103ec36849003840184613428565b82610f78565b6103fa612e91565b61035c61040c36849003840184613428565b82611169565b60006060600054600280805461042790613460565b80601f016020809104026020016040519081016040528092919081815260200182805461045390613460565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b50505050509050915091509091565b600061032361138d565b6104c1612e91565b61035c6104d336849003840184613428565b826113be565b6104e1612e91565b61035c6104f336849003840184613428565b8261158f565b610501612e91565b61035c61051336849003840184613428565b82611751565b610521612e91565b61035c61053336849003840184613428565b82611898565b610541612e91565b61035c61055336849003840184613428565b826119df565b610561612e91565b61035c610573368490038401846134a4565b82611b26565b600061032361299a565b600061058d612edd565b6020810151516003905261059f612e91565b6105a98282611b26565b6060015192915050565b60006105bd612edd565b602081015151600590526105cf612e91565b6105d98282611b26565b60a0015192915050565b60006105ed612edd565b602081015151600790526105ff612e91565b6106098282611b26565b60e0015192915050565b610623600160005414600e6129c7565b815161063e90158061063757508251600154145b600f6129c7565b60008080556002805461065090613460565b80601f016020809104026020016040519081016040528092919081815260200182805461067c90613460565b80156106c95780601f1061069e576101008083540402835291602001916106c9565b820191906000526020600020905b8154815290600101906020018083116106ac57829003601f168201915b50505050508060200190518101906106e191906136b8565b90506106eb612f50565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338560405161071c9291906136d5565b60405180910390a16107303415600b6129c7565b6107c082606001516000604051806060016040528061076d876060015160006002811061075f5761075f6136fd565b602002015151620186a00190565b81526020018660600151600060028110610789576107896136fd565b602002015160200151815260200186606001516000600281106107ae576107ae6136fd565b602002015160400151151590526129ed565b815260208201516107e1906107da903390620186a0612a61565b600c6129c7565b81516107f9906001600160a01b03163314600d6129c7565b610801612f63565b82516001600160a01b0390811682526020808501518216818401526040808601519092168284015283516060840152600260005543600155905161084791839101613751565b6040516020818303038152906040526002908051906020019061086b929190612f8c565b505050505050565b600061087d612edd565b6020810151516006905261088f612e91565b6108998282611b26565b60c0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156108ef576108ef61327b565b141561096c576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff1660018111156109305761093061327b565b60018111156109415761094161327b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b600060016000541415610a345760006002805461099890613460565b80601f01602080910402602001604051908101604052809291908181526020018280546109c490613460565b8015610a115780601f106109e657610100808354040283529160200191610a11565b820191906000526020600020905b8154815290600101906020018083116109f457829003601f168201915b5050505050806020019051810190610a2991906136b8565b602001519392505050565b60026000541415610a4e5760006002805461099890613460565b60056000541415610af957600060028054610a6890613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9490613460565b8015610ae15780601f10610ab657610100808354040283529160200191610ae1565b820191906000526020600020905b815481529060010190602001808311610ac457829003601f168201915b5050505050806020019051810190610a299190613798565b60066000541415610ba457600060028054610b1390613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3f90613460565b8015610b8c5780601f10610b6157610100808354040283529160200191610b8c565b820191906000526020600020905b815481529060010190602001808311610b6f57829003601f168201915b5050505050806020019051810190610a299190613893565b60076000541415610bbe57600060028054610b1390613460565b60086000541415610bd857600060028054610b1390613460565b60096000541415610bf257600060028054610b1390613460565b600a6000541415610c0c57600060028054610b1390613460565b600b6000541415610c2657600060028054610b1390613460565b610977600060086129c7565b6000610c3c612edd565b60208101515160049052610c4e612e91565b610c588282611b26565b6080015192915050565b600060016000541415610d1a57600060028054610c7e90613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610caa90613460565b8015610cf75780601f10610ccc57610100808354040283529160200191610cf7565b820191906000526020600020905b815481529060010190602001808311610cda57829003601f168201915b5050505050806020019051810190610d0f91906136b8565b604001519392505050565b60026000541415610d3457600060028054610c7e90613460565b60056000541415610ddf57600060028054610d4e90613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7a90613460565b8015610dc75780601f10610d9c57610100808354040283529160200191610dc7565b820191906000526020600020905b815481529060010190602001808311610daa57829003601f168201915b5050505050806020019051810190610d0f9190613798565b60066000541415610e8a57600060028054610df990613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2590613460565b8015610e725780601f10610e4757610100808354040283529160200191610e72565b820191906000526020600020905b815481529060010190602001808311610e5557829003601f168201915b5050505050806020019051810190610d0f9190613893565b60076000541415610ea457600060028054610df990613460565b60086000541415610ebe57600060028054610df990613460565b60096000541415610ed857600060028054610df990613460565b600a6000541415610ef257600060028054610df990613460565b600b6000541415610f0c57600060028054610df990613460565b610977600060076129c7565b6000610f22612edd565b60208101515160019052610f34612e91565b610f3e8282611b26565b6020015192915050565b6000610f52612edd565b60208101515160029052610f64612e91565b610f6e8282611b26565b6040015192915050565b610f8860026000541460136129c7565b8151610fa3901580610f9c57508251600154145b60146129c7565b600080805560028054610fb590613460565b80601f0160208091040260200160405190810160405280929190818152602001828054610fe190613460565b801561102e5780601f106110035761010080835404028352916020019161102e565b820191906000526020600020905b81548152906001019060200180831161101157829003601f168201915b505050505080602001905181019061104691906136b8565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033846040516110799291906136d5565b60405180910390a161108d341560106129c7565b6110a86110a13383604001516103e8612a61565b60116129c7565b80516110c0906001600160a01b0316331460126129c7565b6110c8613010565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845193169281019290925280830180516000905251439082015260608085018051845192830185528151840151516103e801835281518401518401519383019390935251611144936001929190820190836107ae565b6020820180516040019190915251600060609091015261116381612a79565b50505050565b611179600660005414602e6129c7565b815161119490158061118d57508251600154145b602f6129c7565b6000808055600280546111a690613460565b80601f01602080910402602001604051908101604052809291908181526020018280546111d290613460565b801561121f5780601f106111f45761010080835404028352916020019161121f565b820191906000526020600020905b81548152906001019060200180831161120257829003601f168201915b50505050508060200190518101906112379190613893565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338460405161126a9291906136d5565b60405180910390a161127e3415602b6129c7565b611298611291338360200151600a612a61565b602c6129c7565b80516112b0906001600160a01b03163314602d6129c7565b6112b8613010565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451931692810192909252606080850151828501805191909152514392019190915260a08401805183519283019093525161136c9291600091819061132b90845b602002015151600a0190565b81526020018660a00151600060028110611347576113476136fd565b60200201516020015181526020018660a001516000600281106107ae576107ae6136fd565b60208201805160400191909152608083015190516060015261116381612a79565b6000611397612edd565b602081015151600890526113a9612e91565b6113b38282611b26565b610100015192915050565b6113ce60086000541460386129c7565b81516113e99015806113e257508251600154145b60396129c7565b6000808055600280546113fb90613460565b80601f016020809104026020016040519081016040528092919081815260200182805461142790613460565b80156114745780601f1061144957610100808354040283529160200191611474565b820191906000526020600020905b81548152906001019060200180831161145757829003601f168201915b505050505080602001905181019061148c9190613893565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33846040516114bf9291906136d5565b60405180910390a16114d3341560356129c7565b6114ed6114e63383604001516001612a61565b60366129c7565b8051611505906001600160a01b0316331460376129c7565b61150d613010565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845193169281019290925260608085015182850180519190915251439083015260a0850180518451928301855281518401515160019081018452825185015185015194840194909452905161136c9491939291820190836107ae565b61159f60076000541460336129c7565b81516115ba9015806115b357508251600154145b60346129c7565b6000808055600280546115cc90613460565b80601f01602080910402602001604051908101604052809291908181526020018280546115f890613460565b80156116455780601f1061161a57610100808354040283529160200191611645565b820191906000526020600020905b81548152906001019060200180831161162857829003601f168201915b505050505080602001905181019061165d9190613893565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae33846040516116909291906136d5565b60405180910390a16116a4341560306129c7565b6116be6116b7338360200151600a612a61565b60316129c7565b80516116d6906001600160a01b0316331460326129c7565b6116de613010565b815181516001600160a01b039182169052602080840151835190831691015260408084015183519216910152606082015161171a906001612c4a565b602080830180519290925290514391015260a0820180516040805160608101909152915161136c92600091819061132b908461131f565b611761600a6000541460426129c7565b815161177c90158061177557508251600154145b60436129c7565b60008080556002805461178e90613460565b80601f01602080910402602001604051908101604052809291908181526020018280546117ba90613460565b80156118075780601f106117dc57610100808354040283529160200191611807565b820191906000526020600020905b8154815290600101906020018083116117ea57829003601f168201915b505050505080602001905181019061181f9190613893565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516118529291906136d5565b60405180910390a16118663415603f6129c7565b611880611879338360200151600a612a61565b60406129c7565b80516112b0906001600160a01b0316331460416129c7565b6118a8600b6000541460476129c7565b81516118c39015806118bc57508251600154145b60486129c7565b6000808055600280546118d590613460565b80601f016020809104026020016040519081016040528092919081815260200182805461190190613460565b801561194e5780601f106119235761010080835404028352916020019161194e565b820191906000526020600020905b81548152906001019060200180831161193157829003601f168201915b50505050508060200190518101906119669190613893565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a33846040516119999291906136d5565b60405180910390a16119ad341560446129c7565b6119c76119c0338360200151600a612a61565b60456129c7565b80516112b0906001600160a01b0316331460466129c7565b6119ef600960005414603d6129c7565b8151611a0a901580611a0357508251600154145b603e6129c7565b600080805560028054611a1c90613460565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4890613460565b8015611a955780601f10611a6a57610100808354040283529160200191611a95565b820191906000526020600020905b815481529060010190602001808311611a7857829003601f168201915b5050505050806020019051810190611aad9190613893565b90507f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb607763384604051611ae09291906136d5565b60405180910390a1611af43415603a6129c7565b611b0e611b07338360200151600a612a61565b603b6129c7565b80516112b0906001600160a01b03163314603c6129c7565b611b3660056000541460296129c7565b8151611b51901580611b4a57508251600154145b602a6129c7565b600080805560028054611b6390613460565b80601f0160208091040260200160405190810160405280929190818152602001828054611b8f90613460565b8015611bdc5780601f10611bb157610100808354040283529160200191611bdc565b820191906000526020600020905b815481529060010190602001808311611bbf57829003601f168201915b5050505050806020019051810190611bf49190613798565b9050611bfe613040565b7fb8377d892d72f3fd66ebdb2287c2231d5ad2a9f308065e23a65cb7d2dbcc83d83385604051611c2f9291906138c4565b60405180910390a16000602085015151516008811115611c5157611c5161327b565b1415611dc657611c63341560156129c7565b611c7d611c763384602001516000612a61565b60166129c7565b604051600081527ff1d994ac6c511d3375470326e219763eca96dc894175272a7266496351ea81ac9060200160405180910390a1600080845260808301805160408051606081019091529151611d26939192908190611ce590845b6020020151516009190190565b81526020018660800151600060028110611d0157611d016136fd565b602002015160200151815260200186608001516000600281106107ae576107ae6136fd565b81526020820151611d399033600a612c97565b611d416130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a08086015160808501528451908401526006600055436001559051611d9b918391016139d4565b60405160208183030381529060405260029080519060200190611dbf929190612f8c565b5050611163565b6001602085015151516008811115611de057611de061327b565b1415611f5f57611df2341560176129c7565b611e0c611e053384602001516000612a61565b60186129c7565b611e426001611e1a336108a3565b516001811115611e2c57611e2c61327b565b14611e38576001611e3b565b60005b60196129c7565b8151611e68906001600160a01b03163314611e5e576001611e61565b60005b601a6129c7565b604051600081527fcfdfaf5454abb9a220115fbdd6932261f96bc36b48c82dcab39b5531aae979129060200160405180910390a160006020848101829052338252600490526040808220805462ff00ff191660011790556080840180518251606081019093529051611ee3939192908190611ce59084611cd8565b8160200181905250611efb826020015133600a612c97565b611f036130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608085015284820151908401526007600055436001559051611d9b918391016139d4565b6002602085015151516008811115611f7957611f7961327b565b14156121a557611f8b3415601b6129c7565b611fc6826080015160006040518060600160405280611ce58760800151600060028110611fba57611fba6136fd565b60200201515160140190565b8160400181905250611fe8611fe13384602001516014612a61565b601c6129c7565b604051600081527fbc2f3f1ceb950265784e910d2f20d550119deab8d365aff69081c6a113ec61bd9060200160405180910390a1600060408085018290528281018051825160608101909352905161209393919290819061205290845b6020020151516013190190565b8152602001856040015160006002811061206e5761206e6136fd565b602002015160200151815260200185604001516000600281106107ae576107ae6136fd565b6060820152602082015182516120ab91906014612c97565b6121288160600151600160405180606001604052806120e786606001516001600281106120da576120da6136fd565b6020020151516000190190565b81526020018560600151600160028110612103576121036136fd565b602002015160200151815260200185606001516001600281106107ae576107ae6136fd565b6080820152604082015161213e90336001612c97565b6121466130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608080860191909152850151908401526008600055436001559051611d9b918391016139d4565b60036020850151515160088111156121bf576121bf61327b565b14156122c7576121d13415601d6129c7565b6121eb6121e43384602001516000612a61565b601e6129c7565b604051600081527fc4d0b8094bac2964c688c40d0187fdb06b9348940c4171c297fc107e756433b09060200160405180910390a160006060808501829052608084018051604080519384019052905161224d939192908190611ce59084611cd8565b60a082015260208201516122639033600a612c97565b61226b6130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608085015284810151908401526009600055436001559051611d9b918391016139d4565b60046020850151515160088111156122e1576122e161327b565b14156123ea576122f33415601f6129c7565b61230d6123063384602001516000612a61565b60206129c7565b604051600081527f11d8c9dac6980971dab75dcfee433981b265c72373fa2aa92c8cf5b25723b51a9060200160405180910390a160006080808501829052830180516040805160608101909152915161236f939192908190611ce59084611cd8565b60c082015260208201516123859033600a612c97565b61238d6130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608085015260c085015190840152600a600055436001559051611d9b918391016139d4565b60056020850151515160088111156124045761240461327b565b141561250e57612416341560216129c7565b6124306124293384602001516000612a61565b60226129c7565b604051600081527f59aa14f4ada6021dbb9a3c6c516b35f735c0ecf90b57a60223dfdc4946f6eac49060200160405180910390a1600060a0840181905260808301805160408051606081019091529151612493939192908190611ce59084611cd8565b60e082015260208201516124a99033600a612c97565b6124b16130d6565b82516001600160a01b039081168252602080850151821681840152604080860151909216828401526060808601519084015260a080860151608085015260e085015190840152600b600055436001559051611d9b918391016139d4565b60066020850151515160088111156125285761252861327b565b14156126b85761253a341560236129c7565b612569826080015160006040518060600160405280611ce5876080015160006002811061131f5761131f6136fd565b81610100018190525061258c612585338460200151600a612a61565b60246129c7565b604051600081527fdc092695c66d03ab294e7c8e9575c5e57e8e352135544814038e9079e62a97c09060200160405180910390a1600060c0840152602082015182516125da9190600a612c97565b6125e2613010565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518285018051919091525143920191909152610100840180518351928301909352516126919291600091819061264e9084611cd8565b815260200186610100015160006002811061266b5761266b6136fd565b60200201516020015181526020018661010001516000600281106107ae576107ae6136fd565b6020820180516040019190915260a08401519051606001526126b281612a79565b50611163565b60076020850151515160088111156126d2576126d261327b565b1415612816576126e4341560256129c7565b61271f826080015160006040518060600160405280611ce58760800151600060028110612713576127136136fd565b602002015151601e0190565b81610120018190525061274261273b338460200151601e612a61565b60266129c7565b604051600081527fcc50367a4cfd90612e049e003a2fcc338778d63edd8d1163c37fd3ed72e199c19060200160405180910390a1600060e0840152602082015182516127909190601e612c97565b612798613010565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151828501805191909152514390830152610120850180518451928301855281515151601d190183528151518401519383019390935251612691936000929190820190836107ae565b60086020850151515160088111156128305761283061327b565b141561116357612842341560276129c7565b612871826080015160006040518060600160405280611ce58760800151600060028110611fba57611fba6136fd565b81610140018190525061289461288d3384602001516014612a61565b60286129c7565b604051600081527f1fbd87413d0a66f08ff8931658333bf42ef2d3863b37db01cbb5d895872fe7b69060200160405180910390a16000610100840152602082015182516128e391906014612c97565b6128eb613010565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151828501805191909152514392019190915261014084018051835192830190935251612691929160009181906129579084612045565b8152602001866101400151600060028110612974576129746136fd565b60200201516020015181526020018661014001516000600281106107ae576107ae6136fd565b60006129a4612edd565b602081015151600090526129b6612e91565b6129c08282611b26565b5192915050565b8161035c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6129f5613123565b60005b6002811015612a4157848160028110612a1357612a136136fd565b6020020151828260028110612a2a57612a2a6136fd565b602002015280612a39816139f9565b9150506129f8565b5081818460028110612a5557612a556136fd565b60200201529392505050565b6000612a6f83853085612cab565b90505b9392505050565b60208101515160031115612b1e57612a8f61316e565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152808401805151606080860191909152815184015160808601529051015160a08401526005600055436001559051612af591839101613a14565b60405160208183030381529060405260029080519060200190612b19929190612f8c565b505050565b805160208082015191519083015160400151612b4492919060005b602002015151612c97565b612bee816000015160400151826000015160000151612be784602001516040015160006040518060600160405280612bbf896020015160400151600060028110612b9057612b906136fd565b6020020151600001518a6020015160400151600060028110612bb457612bb46136fd565b602002015151900390565b81526020898101805160409081015151830151928401929092525181015191019060006107ae565b6001612b39565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612c30573d6000803e3d6000fd5b5060008080556001819055612c47906002906131c5565b50565b600082612c578382613a70565b91508110156103905760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016129e4565b612ca2838383612d85565b612b1957600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612d1291613a88565b60006040518083038185875af1925050503d8060008114612d4f576040519150601f19603f3d011682016040523d82523d6000602084013e612d54565b606091505b5091509150612d6582826001612e56565b5080806020019051810190612d7a9190613aa4565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612de491613a88565b60006040518083038185875af1925050503d8060008114612e21576040519150601f19603f3d011682016040523d82523d6000602084013e612e26565b606091505b5091509150612e3782826002612e56565b5080806020019051810190612e4c9190613aa4565b9695505050505050565b60608315612e65575081612a72565b825115612e755782518084602001fd5b60405163100960cb60e01b8152600481018390526024016129e4565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b604051806040016040528060008152602001612f4b6040805161016081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082015290815290565b905290565b6040518060200160405280612f4b613123565b604080516080810182526000808252602082018190529181019190915260608101612f4b613123565b828054612f9890613460565b90600052602060002090601f016020900481019282612fba5760008555613000565b82601f10612fd357805160ff1916838001178555613000565b82800160010185558215613000579182015b82811115613000578251825591602001919060010190612fe5565b5061300c9291506131fb565b5090565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101612f4b613210565b604051806101600160405280613054613123565b8152602001613061613123565b815260200161306e613123565b815260200161307b613123565b8152602001613088613123565b8152602001613095613123565b81526020016130a2613123565b81526020016130af613123565b81526020016130bc613123565b81526020016130c9613123565b8152602001612f4b613123565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001612f4b5b60405180604001604052806002905b613158604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816131325790505090565b6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016131b8613123565b8152602001600081525090565b5080546131d190613460565b6000825580601f106131e1575050565b601f016020900490600052602060002090810190612c4791905b5b8082111561300c57600081556001016131fc565b604051806080016040528060008152602001600081526020016131b8613123565b60006040828403121561324357600080fd5b50919050565b6001600160a01b0381168114612c4757600080fd5b60006020828403121561327057600080fd5b8135612a7281613249565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106132a8576132a861327b565b8083525060208301511515602083015260408301511515604083015292915050565b60005b838110156132e55781810151838201526020016132cd565b838111156111635750506000910152565b828152604060208201526000825180604084015261331b8160608501602087016132ca565b601f01601f1916919091016060019392505050565b6000610160828403121561324357600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561337c5761337c613343565b60405290565b6040516020810167ffffffffffffffff8111828210171561337c5761337c613343565b604051610140810167ffffffffffffffff8111828210171561337c5761337c613343565b6040516060810167ffffffffffffffff8111828210171561337c5761337c613343565b60405160c0810167ffffffffffffffff8111828210171561337c5761337c613343565b8015158114612c4757600080fd5b80356109778161340f565b60006040828403121561343a57600080fd5b613442613359565b8235815260208301356134548161340f565b60208201529392505050565b600181811c9082168061347457607f821691505b6020821081141561324357634e487b7160e01b600052602260045260246000fd5b80356009811061097757600080fd5b60008183036101608112156134b857600080fd5b6134c0613359565b8335815261014080601f19840112156134d857600080fd5b6134e0613382565b92506134ea6133a5565b6134f660208701613495565b81526135046040870161341d565b60208201526135156060870161341d565b60408201526135266080870161341d565b606082015261353760a0870161341d565b608082015261354860c0870161341d565b60a082015261355960e0870161341d565b60c082015261010061356c81880161341d565b60e083015261012061357f81890161341d565b8284015261358e84890161341d565b908301525083525060208101919091529392505050565b600082601f8301126135b657600080fd5b6135be613359565b8060c08401858111156135d057600080fd5b845b8181101561362357606081880312156135eb5760008081fd5b6135f36133c9565b81518152602080830151818301526040808401516136108161340f565b90830152908552909301926060016135d2565b509095945050505050565b6000610120828403121561364157600080fd5b6040516080810181811067ffffffffffffffff8211171561366457613664613343565b8060405250809150825161367781613249565b8152602083015161368781613249565b6020820152604083015161369a81613249565b60408201526136ac84606085016135a5565b60608201525092915050565b600061012082840312156136cb57600080fd5b612a72838361362e565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b6002811015611163578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613717565b81516001600160a01b0390811682526020808401518216908301526040808401519091169082015260608083015161012083019161379190840182613713565b5092915050565b600061016082840312156137ab57600080fd5b6137b36133ec565b82516137be81613249565b815260208301516137ce81613249565b602082015260408301516137e181613249565b6040820152606083810151908201526137fd84608085016135a5565b6080820152610140929092015160a083015250919050565b6000610160828403121561382857600080fd5b6138306133ec565b9050815161383d81613249565b8152602082015161384d81613249565b6020820152604082015161386081613249565b8060408301525060608201516060820152608082015160808201526138888360a084016135a5565b60a082015292915050565b600061016082840312156138a657600080fd5b612a728383613815565b600981106138c0576138c061327b565b9052565b60006101808201905060018060a01b0384168252825160208301526020830151516138f36040840182516138b0565b60208101518015156060850152506040810151801515608085015250606081015180151560a085015250608081015180151560c08501525060a081015180151560e08501525060c081015161010061394e8186018315159052565b60e083015191506101206139658187018415159052565b908301511515610140860152909101518015156101608501529050509392505050565b60018060a01b0380825116835280602083015116602084015280604083015116604084015250606081015160608301526080810151608083015260a0810151612b1960a0840182613713565b61016081016103908284613988565b634e487b7160e01b600052601160045260246000fd5b6000600019821415613a0d57613a0d6139e3565b5060010190565b81516001600160a01b0390811682526020808401518216908301526040808401519091169082015260608083015190820152608080830151610160830191613a5e90840182613713565b5060a083015161014083015292915050565b60008219821115613a8357613a836139e3565b500190565b60008251613a9a8184602087016132ca565b9190910192915050565b600060208284031215613ab657600080fd5b8151612a728161340f56fea26469706673582212207b76fd48cd1bdb752d28a96624b749c20d9fe6191f19b012748c77b6c97e40a864736f6c634300080c0033`,
  BytecodeLen: 16679,
  Which: `oD`,
  version: 8,
  views: {
    NFT: {
      token: `NFT_token`,
    },
    Platform: {
      token: `Platform_token`,
    },
  },
};
export const _stateSourceMap = {
  1: {
    at: './index.rsh:146:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  2: {
    at: './index.rsh:148:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:292:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  5: {
    at: './index.rsh:160:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  6: {
    at: './index.rsh:217:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:212:15:application call to [unknown function] (defined at: ./index.rsh:212:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  7: {
    at: './index.rsh:178:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:172:15:application call to [unknown function] (defined at: ./index.rsh:172:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  8: {
    at: './index.rsh:281:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:275:15:application call to [unknown function] (defined at: ./index.rsh:275:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  9: {
    at: './index.rsh:230:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:225:15:application call to [unknown function] (defined at: ./index.rsh:225:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  10: {
    at: './index.rsh:204:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  11: {
    at: './index.rsh:191:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:186:15:application call to [unknown function] (defined at: ./index.rsh:186:15:function exp)'],
    msg: null,
    who: 'Module',
  },
};
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH,
};
export const _Participants = {
  Admin: Admin,
  Customer_answerQuestion: Customer_answerQuestion,
  Customer_enroll: Customer_enroll,
  Customer_mintNFT: Customer_mintNFT,
  Customer_playGame: Customer_playGame,
  Customer_readBlog: Customer_readBlog,
  Customer_referFriend: Customer_referFriend,
  Customer_upgradeToBronze: Customer_upgradeToBronze,
  Customer_upgradeToGold: Customer_upgradeToGold,
  Customer_upgradeToSilver: Customer_upgradeToSilver,
};
export const _APIs = {
  Customer: {
    answerQuestion: Customer_answerQuestion,
    enroll: Customer_enroll,
    mintNFT: Customer_mintNFT,
    playGame: Customer_playGame,
    readBlog: Customer_readBlog,
    referFriend: Customer_referFriend,
    upgradeToBronze: Customer_upgradeToBronze,
    upgradeToGold: Customer_upgradeToGold,
    upgradeToSilver: Customer_upgradeToSilver,
  },
};
