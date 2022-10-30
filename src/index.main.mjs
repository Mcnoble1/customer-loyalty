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
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6,
  });
  const map0_ctc = ctc7;

  const Platform_token = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1438, v1439, v1444] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1438, v1439, v1460, v1467, v1468] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1438, v1439, v1460, v1468, v1733] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v1438, v1439, v1460, v1468, v2070] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v1438, v1439, v1460, v1468, v2399] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1438, v1439, v1460, v1468, v2727] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v1438, v1439, v1460, v1468, v3055] = svs;
      return await (async () => {
        return v1439;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  return {
    infos: {
      Platform: {
        token: {
          decode: Platform_token,
          dom: [],
          rng: ctc1,
        },
      },
    },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc5],
      6: [ctc0, ctc1, ctc2, ctc2, ctc5],
      7: [ctc0, ctc1, ctc2, ctc2, ctc5],
      8: [ctc0, ctc1, ctc2, ctc2, ctc5],
      9: [ctc0, ctc1, ctc2, ctc2, ctc5],
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
    Customer_answerQuestion0_77: ctc3,
    Customer_enroll0_77: ctc3,
    Customer_playGame0_77: ctc3,
    Customer_readBlog0_77: ctc3,
    Customer_referFriend0_77: ctc3,
    Customer_upgradeToBronze0_77: ctc3,
    Customer_upgradeToGold0_77: ctc3,
    Customer_upgradeToSilver0_77: ctc3,
    Customer_upgradeToVIP0_77: ctc3,
  });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_UInt;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc6, ctc6, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc,
  });

  const v1430 = [
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    false,
  ];
  const v1431 = [v1430];
  const v1435 = stdlib.protect(ctc2, interact.getToken, "for Admin's interact field getToken");

  const txn1 = await ctc.sendrecv({
    args: [v1435],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:92:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1439],
        secs: v1441,
        time: v1440,
        didSend: v27,
        from: v1438,
      } = txn1;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1439,
      });
      const v1442 = v1431[stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0')];
      const v1443 = stdlib.Array_set(
        v1442,
        '0',
        stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0')
      );
      const v1444 = stdlib.Array_set(
        v1431,
        stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0'),
        v1443
      );
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false,
  });
  const {
    data: [v1439],
    secs: v1441,
    time: v1440,
    didSend: v27,
    from: v1438,
  } = txn1;
  const v1442 = v1431[stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0')];
  const v1443 = stdlib.Array_set(
    v1442,
    '0',
    stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0')
  );
  const v1444 = stdlib.Array_set(
    v1431,
    stdlib.checkedBigNumberify('./index.rsh:94:14:application', stdlib.UInt_max, '0'),
    v1443
  );
  const txn2 = await ctc.sendrecv({
    args: [v1438, v1439, v1444],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1440,
    onlyIf: true,
    out_tys: [],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:97:23:decimal', stdlib.UInt_max, '100000'), v1439]],
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
        secs: v1448,
        time: v1447,
        didSend: v34,
        from: v1446,
      } = txn2;

      const v1449 = v1444[stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0')];
      const v1450 = v1449[stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0')];
      const v1451 = stdlib.add(
        v1450,
        stdlib.checkedBigNumberify('./index.rsh:97:23:decimal', stdlib.UInt_max, '100000')
      );
      const v1453 = stdlib.Array_set(v1449, '0', v1451);
      const v1454 = stdlib.Array_set(
        v1444,
        stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0'),
        v1453
      );
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:97:23:decimal', stdlib.UInt_max, '100000'),
        kind: 'to',
        tok: v1439,
      });

      const v1460 = stdlib.checkedBigNumberify('./index.rsh:109:35:decimal', stdlib.UInt_max, '0');
      const v1461 = v1447;
      const v1467 = v1454;
      const v1468 = stdlib.checkedBigNumberify('./index.rsh:86:9:after expr stmt semicolon', stdlib.UInt_max, '0');

      if (
        await (async () => {
          const v1480 = stdlib.lt(
            v1460,
            stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
          );

          return v1480;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1438,
          tok: v1439,
        });
        sim_r.txns.push({
          kind: 'from',
          to: v1438,
          tok: undefined /* Nothing */,
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1439,
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
    tys: [ctc5, ctc2, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [],
    secs: v1448,
    time: v1447,
    didSend: v34,
    from: v1446,
  } = txn2;
  const v1449 = v1444[stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0')];
  const v1450 = v1449[stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0')];
  const v1451 = stdlib.add(v1450, stdlib.checkedBigNumberify('./index.rsh:97:23:decimal', stdlib.UInt_max, '100000'));
  const v1453 = stdlib.Array_set(v1449, '0', v1451);
  const v1454 = stdlib.Array_set(
    v1444,
    stdlib.checkedBigNumberify('./index.rsh:99:9:dot', stdlib.UInt_max, '0'),
    v1453
  );
  const v1455 = stdlib.addressEq(v1438, v1446);
  stdlib.assert(v1455, {
    at: './index.rsh:99:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin',
  });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:103:23:application',
    fs: [
      'at ./index.rsh:103:23:application call to [unknown function] (defined at: ./index.rsh:103:23:function exp)',
      'at ./index.rsh:103:23:application call to "liftedInteract" (defined at: ./index.rsh:103:23:application)',
    ],
    msg: 'ready',
    who: 'Admin',
  });

  let v1460 = stdlib.checkedBigNumberify('./index.rsh:109:35:decimal', stdlib.UInt_max, '0');
  let v1461 = v1447;
  let v1467 = v1454;
  let v1468 = stdlib.checkedBigNumberify('./index.rsh:86:9:after expr stmt semicolon', stdlib.UInt_max, '0');

  let txn3 = txn2;
  while (
    await (async () => {
      const v1480 = stdlib.lt(v1460, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3'));

      return v1480;
    })()
  ) {
    const txn4 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false,
    });
    const {
      data: [v1642],
      secs: v1644,
      time: v1643,
      didSend: v526,
      from: v1641,
    } = txn4;
    switch (v1642[0]) {
      case 'Customer_answerQuestion0_77': {
        const v1645 = v1642[1];
        undefined /* setApiDetails */;
        const v1711 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v1712 = v1711[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v1718 = null;
        await txn4.getOutput('Customer_answerQuestion', 'v1718', ctc0, v1718);
        stdlib.protect(ctc0, await interact.seeAnswer(v1641), {
          at: './index.rsh:163:35:application',
          fs: [
            'at ./index.rsh:163:35:application call to [unknown function] (defined at: ./index.rsh:163:35:function exp)',
            'at ./index.rsh:163:35:application call to "liftedInteract" (defined at: ./index.rsh:163:35:application)',
            'at ./index.rsh:160:15:application call to [unknown function] (defined at: ./index.rsh:160:15:function exp)',
          ],
          msg: 'seeAnswer',
          who: 'Admin',
        });

        const v1730 = stdlib.sub(
          v1712,
          stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100')
        );
        const v1732 = stdlib.Array_set(v1711, '0', v1730);
        const v1733 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:164:41:application', stdlib.UInt_max, '0'),
          v1732
        );
        const txn5 = await ctc.sendrecv({
          args: [v1438, v1439, v1460, v1468, v1733],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1643,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100'), v1439]],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v1736,
              time: v1735,
              didSend: v550,
              from: v1734,
            } = txn5;

            const v1737 = v1733[stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0')];
            const v1738 = v1737[stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0')];
            const v1739 = stdlib.add(
              v1738,
              stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100')
            );
            const v1741 = stdlib.Array_set(v1737, '0', v1739);
            const v1742 = stdlib.Array_set(
              v1733,
              stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0'),
              v1741
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100'),
              kind: 'to',
              tok: v1439,
            });
            const cv1460 = v1460;
            const cv1461 = v1735;
            const cv1467 = v1742;
            const cv1468 = v1468;

            await (async () => {
              const v1460 = cv1460;
              const v1461 = cv1461;
              const v1467 = cv1467;
              const v1468 = cv1468;

              if (
                await (async () => {
                  const v1480 = stdlib.lt(
                    v1460,
                    stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1480;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: v1439,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1439,
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
          tys: [ctc5, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v1736,
          time: v1735,
          didSend: v550,
          from: v1734,
        } = txn5;
        const v1737 = v1733[stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0')];
        const v1738 = v1737[stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0')];
        const v1739 = stdlib.add(
          v1738,
          stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100')
        );
        const v1741 = stdlib.Array_set(v1737, '0', v1739);
        const v1742 = stdlib.Array_set(
          v1733,
          stdlib.checkedBigNumberify('./index.rsh:166:17:dot', stdlib.UInt_max, '0'),
          v1741
        );
        const v1743 = stdlib.addressEq(v1438, v1734);
        stdlib.assert(v1743, {
          at: './index.rsh:166:17:dot',
          fs: [
            'at ./index.rsh:160:15:application call to [unknown function] (defined at: ./index.rsh:160:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1460 = v1460;
        const cv1461 = v1735;
        const cv1467 = v1742;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn5;
        continue;

        break;
      }
      case 'Customer_enroll0_77': {
        const v1944 = v1642[1];
        undefined /* setApiDetails */;
        const v2010 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2011 = v2010[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2046 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1641), null);
        const v2047 = {
          None: 0,
          Some: 1,
        }[v2046[0]];
        const v2048 = stdlib.eq(
          v2047,
          stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
        );
        const v2049 = v2048 ? false : true;
        stdlib.assert(v2049, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
          ],
          msg: 'Already enrolled into the loyalty program',
          who: 'Admin',
        });
        const v2051 = stdlib.addressEq(v1641, v1438);
        const v2052 = v2051 ? false : true;
        stdlib.assert(v2052, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
          ],
          msg: 'You are the Admin',
          who: 'Admin',
        });
        const v2054 = null;
        await txn4.getOutput('Customer_enroll', 'v2054', ctc0, v2054);
        await stdlib.mapSet(map0, v1641, null);
        stdlib.protect(ctc0, await interact.seeCustomer(v1641), {
          at: './index.rsh:124:37:application',
          fs: [
            'at ./index.rsh:124:37:application call to [unknown function] (defined at: ./index.rsh:124:37:function exp)',
            'at ./index.rsh:124:37:application call to "liftedInteract" (defined at: ./index.rsh:124:37:application)',
            'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
          ],
          msg: 'seeCustomer',
          who: 'Admin',
        });

        const v2067 = stdlib.sub(
          v2011,
          stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100')
        );
        const v2069 = stdlib.Array_set(v2010, '0', v2067);
        const v2070 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:125:47:application', stdlib.UInt_max, '0'),
          v2069
        );
        const txn5 = await ctc.sendrecv({
          args: [v1438, v1439, v1460, v1468, v2070],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1643,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100'), v1439]],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2073,
              time: v2072,
              didSend: v616,
              from: v2071,
            } = txn5;

            const v2074 = v2070[stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0')];
            const v2075 = v2074[stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0')];
            const v2076 = stdlib.add(
              v2075,
              stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100')
            );
            const v2078 = stdlib.Array_set(v2074, '0', v2076);
            const v2079 = stdlib.Array_set(
              v2070,
              stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0'),
              v2078
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100'),
              kind: 'to',
              tok: v1439,
            });
            const v2081 = stdlib.safeAdd(
              v1460,
              stdlib.checkedBigNumberify('./index.rsh:128:27:decimal', stdlib.UInt_max, '1')
            );
            const cv1460 = v2081;
            const cv1461 = v2072;
            const cv1467 = v2079;
            const cv1468 = v1468;

            await (async () => {
              const v1460 = cv1460;
              const v1461 = cv1461;
              const v1467 = cv1467;
              const v1468 = cv1468;

              if (
                await (async () => {
                  const v1480 = stdlib.lt(
                    v1460,
                    stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1480;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: v1439,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1439,
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
          tys: [ctc5, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2073,
          time: v2072,
          didSend: v616,
          from: v2071,
        } = txn5;
        const v2074 = v2070[stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0')];
        const v2075 = v2074[stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0')];
        const v2076 = stdlib.add(
          v2075,
          stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100')
        );
        const v2078 = stdlib.Array_set(v2074, '0', v2076);
        const v2079 = stdlib.Array_set(
          v2070,
          stdlib.checkedBigNumberify('./index.rsh:127:17:dot', stdlib.UInt_max, '0'),
          v2078
        );
        const v2080 = stdlib.addressEq(v1438, v2071);
        stdlib.assert(v2080, {
          at: './index.rsh:127:17:dot',
          fs: [
            'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const v2081 = stdlib.safeAdd(
          v1460,
          stdlib.checkedBigNumberify('./index.rsh:128:27:decimal', stdlib.UInt_max, '1')
        );
        const cv1460 = v2081;
        const cv1461 = v2072;
        const cv1467 = v2079;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn5;
        continue;

        break;
      }
      case 'Customer_playGame0_77': {
        const v2243 = v1642[1];
        undefined /* setApiDetails */;
        const v2309 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2310 = v2309[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2384 = null;
        await txn4.getOutput('Customer_playGame', 'v2384', ctc0, v2384);
        stdlib.protect(ctc0, await interact.seePlay(v1641), {
          at: './index.rsh:176:33:application',
          fs: [
            'at ./index.rsh:176:33:application call to [unknown function] (defined at: ./index.rsh:176:33:function exp)',
            'at ./index.rsh:176:33:application call to "liftedInteract" (defined at: ./index.rsh:176:33:application)',
            'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)',
          ],
          msg: 'seePlay',
          who: 'Admin',
        });

        const v2396 = stdlib.sub(
          v2310,
          stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100')
        );
        const v2398 = stdlib.Array_set(v2309, '0', v2396);
        const v2399 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:177:39:application', stdlib.UInt_max, '0'),
          v2398
        );
        const txn5 = await ctc.sendrecv({
          args: [v1438, v1439, v1460, v1468, v2399],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1643,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100'), v1439]],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2402,
              time: v2401,
              didSend: v642,
              from: v2400,
            } = txn5;

            const v2403 = v2399[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
            const v2404 = v2403[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
            const v2405 = stdlib.add(
              v2404,
              stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100')
            );
            const v2407 = stdlib.Array_set(v2403, '0', v2405);
            const v2408 = stdlib.Array_set(
              v2399,
              stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
              v2407
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100'),
              kind: 'to',
              tok: v1439,
            });
            const cv1460 = v1460;
            const cv1461 = v2401;
            const cv1467 = v2408;
            const cv1468 = v1468;

            await (async () => {
              const v1460 = cv1460;
              const v1461 = cv1461;
              const v1467 = cv1467;
              const v1468 = cv1468;

              if (
                await (async () => {
                  const v1480 = stdlib.lt(
                    v1460,
                    stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1480;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: v1439,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1439,
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
          tys: [ctc5, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2402,
          time: v2401,
          didSend: v642,
          from: v2400,
        } = txn5;
        const v2403 = v2399[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
        const v2404 = v2403[stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0')];
        const v2405 = stdlib.add(
          v2404,
          stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100')
        );
        const v2407 = stdlib.Array_set(v2403, '0', v2405);
        const v2408 = stdlib.Array_set(
          v2399,
          stdlib.checkedBigNumberify('./index.rsh:179:17:dot', stdlib.UInt_max, '0'),
          v2407
        );
        const v2409 = stdlib.addressEq(v1438, v2400);
        stdlib.assert(v2409, {
          at: './index.rsh:179:17:dot',
          fs: [
            'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1460 = v1460;
        const cv1461 = v2401;
        const cv1467 = v2408;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn5;
        continue;

        break;
      }
      case 'Customer_readBlog0_77': {
        const v2542 = v1642[1];
        undefined /* setApiDetails */;
        const v2608 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2609 = v2608[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2712 = null;
        await txn4.getOutput('Customer_readBlog', 'v2712', ctc0, v2712);
        stdlib.protect(ctc0, await interact.seeRead(v1641), {
          at: './index.rsh:150:33:application',
          fs: [
            'at ./index.rsh:150:33:application call to [unknown function] (defined at: ./index.rsh:150:33:function exp)',
            'at ./index.rsh:150:33:application call to "liftedInteract" (defined at: ./index.rsh:150:33:application)',
            'at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:15:function exp)',
          ],
          msg: 'seeRead',
          who: 'Admin',
        });

        const v2724 = stdlib.sub(
          v2609,
          stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100')
        );
        const v2726 = stdlib.Array_set(v2608, '0', v2724);
        const v2727 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:151:43:application', stdlib.UInt_max, '0'),
          v2726
        );
        const txn5 = await ctc.sendrecv({
          args: [v1438, v1439, v1460, v1468, v2727],
          evt_cnt: 0,
          funcNum: 7,
          lct: v1643,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100'), v1439]],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v2730,
              time: v2729,
              didSend: v667,
              from: v2728,
            } = txn5;

            const v2731 = v2727[stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0')];
            const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0')];
            const v2733 = stdlib.add(
              v2732,
              stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100')
            );
            const v2735 = stdlib.Array_set(v2731, '0', v2733);
            const v2736 = stdlib.Array_set(
              v2727,
              stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0'),
              v2735
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100'),
              kind: 'to',
              tok: v1439,
            });
            const cv1460 = v1460;
            const cv1461 = v2729;
            const cv1467 = v2736;
            const cv1468 = v1468;

            await (async () => {
              const v1460 = cv1460;
              const v1461 = cv1461;
              const v1467 = cv1467;
              const v1468 = cv1468;

              if (
                await (async () => {
                  const v1480 = stdlib.lt(
                    v1460,
                    stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1480;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: v1439,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1439,
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
          tys: [ctc5, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v2730,
          time: v2729,
          didSend: v667,
          from: v2728,
        } = txn5;
        const v2731 = v2727[stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0')];
        const v2732 = v2731[stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0')];
        const v2733 = stdlib.add(
          v2732,
          stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100')
        );
        const v2735 = stdlib.Array_set(v2731, '0', v2733);
        const v2736 = stdlib.Array_set(
          v2727,
          stdlib.checkedBigNumberify('./index.rsh:153:17:dot', stdlib.UInt_max, '0'),
          v2735
        );
        const v2737 = stdlib.addressEq(v1438, v2728);
        stdlib.assert(v2737, {
          at: './index.rsh:153:17:dot',
          fs: [
            'at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1460 = v1460;
        const cv1461 = v2729;
        const cv1467 = v2736;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn5;
        continue;

        break;
      }
      case 'Customer_referFriend0_77': {
        const v2841 = v1642[1];
        undefined /* setApiDetails */;
        const v2907 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v2908 = v2907[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3040 = null;
        await txn4.getOutput('Customer_referFriend', 'v3040', ctc0, v3040);
        stdlib.protect(ctc0, await interact.seeReferral(v1641), {
          at: './index.rsh:137:37:application',
          fs: [
            'at ./index.rsh:137:37:application call to [unknown function] (defined at: ./index.rsh:137:37:function exp)',
            'at ./index.rsh:137:37:application call to "liftedInteract" (defined at: ./index.rsh:137:37:application)',
            'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)',
          ],
          msg: 'seeReferral',
          who: 'Admin',
        });

        const v3052 = stdlib.sub(
          v2908,
          stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100')
        );
        const v3054 = stdlib.Array_set(v2907, '0', v3052);
        const v3055 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:138:45:application', stdlib.UInt_max, '0'),
          v3054
        );
        const txn5 = await ctc.sendrecv({
          args: [v1438, v1439, v1460, v1468, v3055],
          evt_cnt: 0,
          funcNum: 8,
          lct: v1643,
          onlyIf: true,
          out_tys: [],
          pay: [
            stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0'),
            [[stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100'), v1439]],
          ],
          sim_p: async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => {
              sim_txn_ctr = sim_txn_ctr.sub(1);
              return sim_txn_ctr;
            };

            stdlib.simMapDupe(sim_r, 0, map0);

            const {
              data: [],
              secs: v3058,
              time: v3057,
              didSend: v692,
              from: v3056,
            } = txn5;

            const v3059 = v3055[stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0')];
            const v3060 = v3059[stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0')];
            const v3061 = stdlib.add(
              v3060,
              stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100')
            );
            const v3063 = stdlib.Array_set(v3059, '0', v3061);
            const v3064 = stdlib.Array_set(
              v3055,
              stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0'),
              v3063
            );
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100'),
              kind: 'to',
              tok: v1439,
            });
            const cv1460 = v1460;
            const cv1461 = v3057;
            const cv1467 = v3064;
            const cv1468 = v1468;

            await (async () => {
              const v1460 = cv1460;
              const v1461 = cv1461;
              const v1467 = cv1467;
              const v1468 = cv1468;

              if (
                await (async () => {
                  const v1480 = stdlib.lt(
                    v1460,
                    stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
                  );

                  return v1480;
                })()
              ) {
                sim_r.isHalt = false;
              } else {
                const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: v1439,
                });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1438,
                  tok: undefined /* Nothing */,
                });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1439,
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
          tys: [ctc5, ctc2, ctc6, ctc6, ctc9],
          waitIfNotPresent: false,
        });
        const {
          data: [],
          secs: v3058,
          time: v3057,
          didSend: v692,
          from: v3056,
        } = txn5;
        const v3059 = v3055[stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0')];
        const v3060 = v3059[stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0')];
        const v3061 = stdlib.add(
          v3060,
          stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100')
        );
        const v3063 = stdlib.Array_set(v3059, '0', v3061);
        const v3064 = stdlib.Array_set(
          v3055,
          stdlib.checkedBigNumberify('./index.rsh:140:17:dot', stdlib.UInt_max, '0'),
          v3063
        );
        const v3065 = stdlib.addressEq(v1438, v3056);
        stdlib.assert(v3065, {
          at: './index.rsh:140:17:dot',
          fs: [
            'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)',
          ],
          msg: 'sender correct',
          who: 'Admin',
        });
        const cv1460 = v1460;
        const cv1461 = v3057;
        const cv1467 = v3064;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn5;
        continue;

        break;
      }
      case 'Customer_upgradeToBronze0_77': {
        const v3140 = v1642[1];
        undefined /* setApiDetails */;
        const v3206 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3207 = v3206[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3208 = stdlib.add(v3207, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
        const v3210 = stdlib.Array_set(v3206, '0', v3208);
        const v3211 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
          v3210
        );
        const v3368 = null;
        await txn4.getOutput('Customer_upgradeToBronze', 'v3368', ctc0, v3368);
        stdlib.protect(ctc0, await interact.seeBronzeUpgrade(v1641), {
          at: './index.rsh:214:42:application',
          fs: [
            'at ./index.rsh:214:42:application call to [unknown function] (defined at: ./index.rsh:214:42:function exp)',
            'at ./index.rsh:214:42:application call to "liftedInteract" (defined at: ./index.rsh:214:42:application)',
            'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)',
          ],
          msg: 'seeBronzeUpgrade',
          who: 'Admin',
        });

        const v3375 = v3211[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
        const v3376 = v3375[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
        const v3380 = stdlib.sub(
          v3376,
          stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '100')
        );
        const v3382 = stdlib.Array_set(v3375, '0', v3380);
        const v3383 = stdlib.Array_set(
          v3211,
          stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0'),
          v3382
        );
        const cv1460 = v1460;
        const cv1461 = v1643;
        const cv1467 = v3383;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn4;
        continue;
        break;
      }
      case 'Customer_upgradeToGold0_77': {
        const v3439 = v1642[1];
        undefined /* setApiDetails */;
        const v3505 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3506 = v3505[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3507 = stdlib.add(v3506, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
        const v3509 = stdlib.Array_set(v3505, '0', v3507);
        const v3510 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
          v3509
        );
        const v3685 = null;
        await txn4.getOutput('Customer_upgradeToGold', 'v3685', ctc0, v3685);
        stdlib.protect(ctc0, await interact.seeGoldUpgrade(v1641), {
          at: './index.rsh:190:40:application',
          fs: [
            'at ./index.rsh:190:40:application call to [unknown function] (defined at: ./index.rsh:190:40:function exp)',
            'at ./index.rsh:190:40:application call to "liftedInteract" (defined at: ./index.rsh:190:40:application)',
            'at ./index.rsh:187:15:application call to [unknown function] (defined at: ./index.rsh:187:15:function exp)',
          ],
          msg: 'seeGoldUpgrade',
          who: 'Admin',
        });

        const v3692 = v3510[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
        const v3693 = v3692[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
        const v3697 = stdlib.sub(
          v3693,
          stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '100')
        );
        const v3699 = stdlib.Array_set(v3692, '0', v3697);
        const v3700 = stdlib.Array_set(
          v3510,
          stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0'),
          v3699
        );
        const cv1460 = v1460;
        const cv1461 = v1643;
        const cv1467 = v3700;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn4;
        continue;
        break;
      }
      case 'Customer_upgradeToSilver0_77': {
        const v3738 = v1642[1];
        undefined /* setApiDetails */;
        const v3804 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3805 = v3804[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v3806 = stdlib.add(v3805, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
        const v3808 = stdlib.Array_set(v3804, '0', v3806);
        const v3809 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
          v3808
        );
        const v4002 = null;
        await txn4.getOutput('Customer_upgradeToSilver', 'v4002', ctc0, v4002);
        stdlib.protect(ctc0, await interact.seeSilverUpgrade(v1641), {
          at: './index.rsh:202:42:application',
          fs: [
            'at ./index.rsh:202:42:application call to [unknown function] (defined at: ./index.rsh:202:42:function exp)',
            'at ./index.rsh:202:42:application call to "liftedInteract" (defined at: ./index.rsh:202:42:application)',
            'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)',
          ],
          msg: 'seeSilverUpgrade',
          who: 'Admin',
        });

        const v4009 = v3809[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
        const v4010 = v4009[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
        const v4014 = stdlib.sub(
          v4010,
          stdlib.checkedBigNumberify('./index.rsh:21:26:decimal', stdlib.UInt_max, '100')
        );
        const v4016 = stdlib.Array_set(v4009, '0', v4014);
        const v4017 = stdlib.Array_set(
          v3809,
          stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0'),
          v4016
        );
        const cv1460 = v1460;
        const cv1461 = v1643;
        const cv1467 = v4017;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn4;
        continue;
        break;
      }
      case 'Customer_upgradeToVIP0_77': {
        const v4037 = v1642[1];
        undefined /* setApiDetails */;
        const v4103 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v4104 = v4103[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
        const v4105 = stdlib.add(v4104, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
        const v4107 = stdlib.Array_set(v4103, '0', v4105);
        const v4108 = stdlib.Array_set(
          v1467,
          stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
          v4107
        );
        const v4319 = null;
        await txn4.getOutput('Customer_upgradeToVIP', 'v4319', ctc0, v4319);
        stdlib.protect(ctc0, await interact.seeVipUpgrade(v1641), {
          at: './index.rsh:226:39:application',
          fs: [
            'at ./index.rsh:226:39:application call to [unknown function] (defined at: ./index.rsh:226:39:function exp)',
            'at ./index.rsh:226:39:application call to "liftedInteract" (defined at: ./index.rsh:226:39:application)',
            'at ./index.rsh:223:15:application call to [unknown function] (defined at: ./index.rsh:223:15:function exp)',
          ],
          msg: 'seeVipUpgrade',
          who: 'Admin',
        });

        const v4326 = v4108[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
        const v4327 = v4326[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
        const v4331 = stdlib.sub(
          v4327,
          stdlib.checkedBigNumberify('./index.rsh:23:23:decimal', stdlib.UInt_max, '100')
        );
        const v4333 = stdlib.Array_set(v4326, '0', v4331);
        const v4334 = stdlib.Array_set(
          v4108,
          stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0'),
          v4333
        );
        const cv1460 = v1460;
        const cv1461 = v1643;
        const cv1467 = v4334;
        const cv1468 = v1468;

        v1460 = cv1460;
        v1461 = cv1461;
        v1467 = cv1467;
        v1468 = cv1468;

        txn3 = txn4;
        continue;
        break;
      }
    }
  }
  const v4336 = v1467[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
  const v4337 = v4336[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
  return;
}
export async function _Customer_answerQuestion4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_answerQuestion4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_answerQuestion4 expects to receive an interact object as its second argument.`
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1515 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:158:39:application call to [unknown function] (defined at: ./index.rsh:158:39:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_answerQuestion0_77" (defined at: ./index.rsh:158:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_answerQuestion',
  });
  const v1519 = ['Customer_answerQuestion0_77', v1515];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1519],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:158:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_answerQuestion',
          });
          const v1711 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v1712 = v1711[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v1718 = null;
          const v1719 = await txn1.getOutput('Customer_answerQuestion', 'v1718', ctc0, v1718);

          const v1730 = stdlib.sub(
            v1712,
            stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100')
          );
          const v1732 = stdlib.Array_set(v1711, '0', v1730);
          const v1733 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:164:41:application', stdlib.UInt_max, '0'),
            v1732
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1641,
            tok: v1439,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      undefined /* setApiDetails */;
      const v1711 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v1712 = v1711[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v1718 = null;
      const v1719 = await txn1.getOutput('Customer_answerQuestion', 'v1718', ctc0, v1718);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v1645, v1719), {
          at: './index.rsh:158:11:application',
          fs: [
            'at ./index.rsh:158:11:application call to [unknown function] (defined at: ./index.rsh:158:11:function exp)',
            'at ./index.rsh:161:14:application call to "ret" (defined at: ./index.rsh:160:15:function exp)',
            'at ./index.rsh:160:15:application call to [unknown function] (defined at: ./index.rsh:160:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_answerQuestion',
        });
      } else {
      }

      const v1730 = stdlib.sub(v1712, stdlib.checkedBigNumberify('./index.rsh:27:20:decimal', stdlib.UInt_max, '100'));
      const v1732 = stdlib.Array_set(v1711, '0', v1730);
      const v1733 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:164:41:application', stdlib.UInt_max, '0'),
        v1732
      );
      return;

      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_enroll4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_enroll4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_enroll4 expects to receive an interact object as its second argument.`)
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1481 = ctc.selfAddress();
  const v1483 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:115:31:application call to [unknown function] (defined at: ./index.rsh:115:31:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:115:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_enroll',
  });
  const v1484 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1481), null);
  const v1485 = {
    None: 0,
    Some: 1,
  }[v1484[0]];
  const v1486 = stdlib.eq(
    v1485,
    stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
  );
  const v1487 = v1486 ? false : true;
  stdlib.assert(v1487, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:115:31:application call to [unknown function] (defined at: ./index.rsh:115:31:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:115:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'Already enrolled into the loyalty program',
    who: 'Customer_enroll',
  });
  const v1489 = stdlib.addressEq(v1481, v1438);
  const v1490 = v1489 ? false : true;
  stdlib.assert(v1490, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./index.rsh:115:31:application call to [unknown function] (defined at: ./index.rsh:115:31:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:115:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'You are the Admin',
    who: 'Customer_enroll',
  });
  const v1495 = ['Customer_enroll0_77', v1483];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1495],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:115:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_enroll',
          });
          const v2010 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2011 = v2010[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1641), null);
          const v2054 = null;
          const v2055 = await txn1.getOutput('Customer_enroll', 'v2054', ctc0, v2054);

          await stdlib.simMapSet(sim_r, 0, v1641, null);
          const v2067 = stdlib.sub(
            v2011,
            stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100')
          );
          const v2069 = stdlib.Array_set(v2010, '0', v2067);
          const v2070 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:125:47:application', stdlib.UInt_max, '0'),
            v2069
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1641,
            tok: v1439,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      undefined /* setApiDetails */;
      const v2010 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2011 = v2010[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2046 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1641), null);
      const v2047 = {
        None: 0,
        Some: 1,
      }[v2046[0]];
      const v2048 = stdlib.eq(
        v2047,
        stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
      );
      const v2049 = v2048 ? false : true;
      stdlib.assert(v2049, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
        ],
        msg: 'Already enrolled into the loyalty program',
        who: 'Customer_enroll',
      });
      const v2051 = stdlib.addressEq(v1641, v1438);
      const v2052 = v2051 ? false : true;
      stdlib.assert(v2052, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
        ],
        msg: 'You are the Admin',
        who: 'Customer_enroll',
      });
      const v2054 = null;
      const v2055 = await txn1.getOutput('Customer_enroll', 'v2054', ctc0, v2054);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v1944, v2055), {
          at: './index.rsh:115:11:application',
          fs: [
            'at ./index.rsh:115:11:application call to [unknown function] (defined at: ./index.rsh:115:11:function exp)',
            'at ./index.rsh:121:14:application call to "ret" (defined at: ./index.rsh:120:15:function exp)',
            'at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_enroll',
        });
      } else {
      }

      await stdlib.mapSet(map0, v1641, null);
      const v2067 = stdlib.sub(v2011, stdlib.checkedBigNumberify('./index.rsh:17:26:decimal', stdlib.UInt_max, '100'));
      const v2069 = stdlib.Array_set(v2010, '0', v2067);
      const v2070 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:125:47:application', stdlib.UInt_max, '0'),
        v2069
      );
      return;

      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_playGame4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_playGame4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_playGame4 expects to receive an interact object as its second argument.`)
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1523 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:171:33:application call to [unknown function] (defined at: ./index.rsh:171:33:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_playGame0_77" (defined at: ./index.rsh:171:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_playGame',
  });
  const v1527 = ['Customer_playGame0_77', v1523];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1527],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:171:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_playGame',
          });
          const v2309 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2310 = v2309[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2384 = null;
          const v2385 = await txn1.getOutput('Customer_playGame', 'v2384', ctc0, v2384);

          const v2396 = stdlib.sub(
            v2310,
            stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100')
          );
          const v2398 = stdlib.Array_set(v2309, '0', v2396);
          const v2399 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:177:39:application', stdlib.UInt_max, '0'),
            v2398
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1641,
            tok: v1439,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      undefined /* setApiDetails */;
      const v2309 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2310 = v2309[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2384 = null;
      const v2385 = await txn1.getOutput('Customer_playGame', 'v2384', ctc0, v2384);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v2243, v2385), {
          at: './index.rsh:171:11:application',
          fs: [
            'at ./index.rsh:171:11:application call to [unknown function] (defined at: ./index.rsh:171:11:function exp)',
            'at ./index.rsh:174:14:application call to "ret" (defined at: ./index.rsh:173:15:function exp)',
            'at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_playGame',
        });
      } else {
      }

      const v2396 = stdlib.sub(v2310, stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, '100'));
      const v2398 = stdlib.Array_set(v2309, '0', v2396);
      const v2399 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:177:39:application', stdlib.UInt_max, '0'),
        v2398
      );
      return;

      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_readBlog4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_readBlog4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_readBlog4 expects to receive an interact object as its second argument.`)
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1507 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:145:33:application call to [unknown function] (defined at: ./index.rsh:145:33:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_readBlog0_77" (defined at: ./index.rsh:145:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_readBlog',
  });
  const v1511 = ['Customer_readBlog0_77', v1507];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1511],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:145:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_readBlog',
          });
          const v2608 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2609 = v2608[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2712 = null;
          const v2713 = await txn1.getOutput('Customer_readBlog', 'v2712', ctc0, v2712);

          const v2724 = stdlib.sub(
            v2609,
            stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100')
          );
          const v2726 = stdlib.Array_set(v2608, '0', v2724);
          const v2727 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:151:43:application', stdlib.UInt_max, '0'),
            v2726
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1641,
            tok: v1439,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      undefined /* setApiDetails */;
      const v2608 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2609 = v2608[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2712 = null;
      const v2713 = await txn1.getOutput('Customer_readBlog', 'v2712', ctc0, v2712);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v2542, v2713), {
          at: './index.rsh:145:11:application',
          fs: [
            'at ./index.rsh:145:11:application call to [unknown function] (defined at: ./index.rsh:145:11:function exp)',
            'at ./index.rsh:148:14:application call to "ret" (defined at: ./index.rsh:147:15:function exp)',
            'at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_readBlog',
        });
      } else {
      }

      const v2724 = stdlib.sub(v2609, stdlib.checkedBigNumberify('./index.rsh:26:22:decimal', stdlib.UInt_max, '100'));
      const v2726 = stdlib.Array_set(v2608, '0', v2724);
      const v2727 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:151:43:application', stdlib.UInt_max, '0'),
        v2726
      );
      return;

      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_referFriend4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_referFriend4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_referFriend4 expects to receive an interact object as its second argument.`)
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1499 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:132:36:application call to [unknown function] (defined at: ./index.rsh:132:36:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_referFriend0_77" (defined at: ./index.rsh:132:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_referFriend',
  });
  const v1503 = ['Customer_referFriend0_77', v1499];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1503],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:132:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:114:14:decimal', stdlib.UInt_max, '0'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_referFriend',
          });
          const v2907 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v2908 = v2907[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3040 = null;
          const v3041 = await txn1.getOutput('Customer_referFriend', 'v3040', ctc0, v3040);

          const v3052 = stdlib.sub(
            v2908,
            stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100')
          );
          const v3054 = stdlib.Array_set(v2907, '0', v3052);
          const v3055 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:138:45:application', stdlib.UInt_max, '0'),
            v3054
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1641,
            tok: v1439,
          });
          sim_r.isHalt = false;

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      undefined /* setApiDetails */;
      const v2907 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v2908 = v2907[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3040 = null;
      const v3041 = await txn1.getOutput('Customer_referFriend', 'v3040', ctc0, v3040);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v2841, v3041), {
          at: './index.rsh:132:11:application',
          fs: [
            'at ./index.rsh:132:11:application call to [unknown function] (defined at: ./index.rsh:132:11:function exp)',
            'at ./index.rsh:135:14:application call to "ret" (defined at: ./index.rsh:134:15:function exp)',
            'at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_referFriend',
        });
      } else {
      }

      const v3052 = stdlib.sub(v2908, stdlib.checkedBigNumberify('./index.rsh:18:24:decimal', stdlib.UInt_max, '100'));
      const v3054 = stdlib.Array_set(v2907, '0', v3052);
      const v3055 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:138:45:application', stdlib.UInt_max, '0'),
        v3054
      );
      return;

      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToBronze4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToBronze4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToBronze4 expects to receive an interact object as its second argument.`
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1547 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:208:40:application call to [unknown function] (defined at: ./index.rsh:208:40:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_upgradeToBronze0_77" (defined at: ./index.rsh:208:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToBronze',
  });
  const v1551 = ['Customer_upgradeToBronze0_77', v1547];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1551],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:210:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '100'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToBronze',
          });
          const v3206 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3207 = v3206[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3208 = stdlib.add(v3207, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
          const v3210 = stdlib.Array_set(v3206, '0', v3208);
          const v3211 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
            v3210
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'),
            kind: 'to',
            tok: v1439,
          });
          const v3368 = null;
          const v3369 = await txn1.getOutput('Customer_upgradeToBronze', 'v3368', ctc0, v3368);

          const v3375 = v3211[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
          const v3376 = v3375[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
          const v3380 = stdlib.sub(
            v3376,
            stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '100')
          );
          const v3382 = stdlib.Array_set(v3375, '0', v3380);
          const v3383 = stdlib.Array_set(
            v3211,
            stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0'),
            v3382
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1438,
            tok: v1439,
          });
          const v10974 = v1460;
          const v10976 = v3383;
          const v10977 = v1468;
          const v10978 = stdlib.lt(
            v1460,
            stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
          );
          if (v10978) {
            sim_r.isHalt = false;
          } else {
            const v10979 = v3383[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            const v10980 = v10979[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      undefined /* setApiDetails */;
      const v3206 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3207 = v3206[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3208 = stdlib.add(v3207, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
      const v3210 = stdlib.Array_set(v3206, '0', v3208);
      const v3211 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
        v3210
      );
      const v3368 = null;
      const v3369 = await txn1.getOutput('Customer_upgradeToBronze', 'v3368', ctc0, v3368);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v3140, v3369), {
          at: './index.rsh:208:11:application',
          fs: [
            'at ./index.rsh:208:11:application call to [unknown function] (defined at: ./index.rsh:208:11:function exp)',
            'at ./index.rsh:212:14:application call to "ret" (defined at: ./index.rsh:211:15:function exp)',
            'at ./index.rsh:211:15:application call to [unknown function] (defined at: ./index.rsh:211:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToBronze',
        });
      } else {
      }

      const v3375 = v3211[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
      const v3376 = v3375[stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0')];
      const v3380 = stdlib.sub(v3376, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '100'));
      const v3382 = stdlib.Array_set(v3375, '0', v3380);
      const v3383 = stdlib.Array_set(
        v3211,
        stdlib.checkedBigNumberify('./index.rsh:215:47:application', stdlib.UInt_max, '0'),
        v3382
      );
      const v10974 = v1460;
      const v10976 = v3383;
      const v10977 = v1468;
      const v10978 = stdlib.lt(v1460, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3'));
      if (v10978) {
        return;
      } else {
        const v10979 = v3383[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        const v10980 = v10979[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToGold4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToGold4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToGold4 expects to receive an interact object as its second argument.`
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1531 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:184:38:application call to [unknown function] (defined at: ./index.rsh:184:38:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_upgradeToGold0_77" (defined at: ./index.rsh:184:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToGold',
  });
  const v1535 = ['Customer_upgradeToGold0_77', v1531];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1535],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:186:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '100'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToGold',
          });
          const v3505 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3506 = v3505[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3507 = stdlib.add(v3506, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
          const v3509 = stdlib.Array_set(v3505, '0', v3507);
          const v3510 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
            v3509
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'),
            kind: 'to',
            tok: v1439,
          });
          const v3685 = null;
          const v3686 = await txn1.getOutput('Customer_upgradeToGold', 'v3685', ctc0, v3685);

          const v3692 = v3510[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
          const v3693 = v3692[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
          const v3697 = stdlib.sub(
            v3693,
            stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '100')
          );
          const v3699 = stdlib.Array_set(v3692, '0', v3697);
          const v3700 = stdlib.Array_set(
            v3510,
            stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0'),
            v3699
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1438,
            tok: v1439,
          });
          const v11009 = v1460;
          const v11011 = v3700;
          const v11012 = v1468;
          const v11013 = stdlib.lt(
            v1460,
            stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
          );
          if (v11013) {
            sim_r.isHalt = false;
          } else {
            const v11014 = v3700[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            const v11015 = v11014[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      undefined /* setApiDetails */;
      const v3505 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3506 = v3505[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3507 = stdlib.add(v3506, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
      const v3509 = stdlib.Array_set(v3505, '0', v3507);
      const v3510 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
        v3509
      );
      const v3685 = null;
      const v3686 = await txn1.getOutput('Customer_upgradeToGold', 'v3685', ctc0, v3685);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v3439, v3686), {
          at: './index.rsh:184:11:application',
          fs: [
            'at ./index.rsh:184:11:application call to [unknown function] (defined at: ./index.rsh:184:11:function exp)',
            'at ./index.rsh:188:14:application call to "ret" (defined at: ./index.rsh:187:15:function exp)',
            'at ./index.rsh:187:15:application call to [unknown function] (defined at: ./index.rsh:187:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToGold',
        });
      } else {
      }

      const v3692 = v3510[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
      const v3693 = v3692[stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0')];
      const v3697 = stdlib.sub(v3693, stdlib.checkedBigNumberify('./index.rsh:20:24:decimal', stdlib.UInt_max, '100'));
      const v3699 = stdlib.Array_set(v3692, '0', v3697);
      const v3700 = stdlib.Array_set(
        v3510,
        stdlib.checkedBigNumberify('./index.rsh:191:45:application', stdlib.UInt_max, '0'),
        v3699
      );
      const v11009 = v1460;
      const v11011 = v3700;
      const v11012 = v1468;
      const v11013 = stdlib.lt(v1460, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3'));
      if (v11013) {
        return;
      } else {
        const v11014 = v3700[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        const v11015 = v11014[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToSilver4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToSilver4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _Customer_upgradeToSilver4 expects to receive an interact object as its second argument.`
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1539 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:196:40:application call to [unknown function] (defined at: ./index.rsh:196:40:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_upgradeToSilver0_77" (defined at: ./index.rsh:196:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToSilver',
  });
  const v1543 = ['Customer_upgradeToSilver0_77', v1539];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1543],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:198:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:21:26:decimal', stdlib.UInt_max, '100'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToSilver',
          });
          const v3804 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3805 = v3804[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v3806 = stdlib.add(v3805, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
          const v3808 = stdlib.Array_set(v3804, '0', v3806);
          const v3809 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
            v3808
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'),
            kind: 'to',
            tok: v1439,
          });
          const v4002 = null;
          const v4003 = await txn1.getOutput('Customer_upgradeToSilver', 'v4002', ctc0, v4002);

          const v4009 = v3809[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
          const v4010 = v4009[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
          const v4014 = stdlib.sub(
            v4010,
            stdlib.checkedBigNumberify('./index.rsh:21:26:decimal', stdlib.UInt_max, '100')
          );
          const v4016 = stdlib.Array_set(v4009, '0', v4014);
          const v4017 = stdlib.Array_set(
            v3809,
            stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0'),
            v4016
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1438,
            tok: v1439,
          });
          const v11044 = v1460;
          const v11046 = v4017;
          const v11047 = v1468;
          const v11048 = stdlib.lt(
            v1460,
            stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
          );
          if (v11048) {
            sim_r.isHalt = false;
          } else {
            const v11049 = v4017[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            const v11050 = v11049[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */,
            });
            sim_r.isHalt = true;
          }
          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      undefined /* setApiDetails */;
      const v3804 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3805 = v3804[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v3806 = stdlib.add(v3805, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
      const v3808 = stdlib.Array_set(v3804, '0', v3806);
      const v3809 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
        v3808
      );
      const v4002 = null;
      const v4003 = await txn1.getOutput('Customer_upgradeToSilver', 'v4002', ctc0, v4002);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v3738, v4003), {
          at: './index.rsh:196:11:application',
          fs: [
            'at ./index.rsh:196:11:application call to [unknown function] (defined at: ./index.rsh:196:11:function exp)',
            'at ./index.rsh:200:14:application call to "ret" (defined at: ./index.rsh:199:15:function exp)',
            'at ./index.rsh:199:15:application call to [unknown function] (defined at: ./index.rsh:199:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToSilver',
        });
      } else {
      }

      const v4009 = v3809[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
      const v4010 = v4009[stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0')];
      const v4014 = stdlib.sub(v4010, stdlib.checkedBigNumberify('./index.rsh:21:26:decimal', stdlib.UInt_max, '100'));
      const v4016 = stdlib.Array_set(v4009, '0', v4014);
      const v4017 = stdlib.Array_set(
        v3809,
        stdlib.checkedBigNumberify('./index.rsh:203:47:application', stdlib.UInt_max, '0'),
        v4016
      );
      const v11044 = v1460;
      const v11046 = v4017;
      const v11047 = v1468;
      const v11048 = stdlib.lt(v1460, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3'));
      if (v11048) {
        return;
      } else {
        const v11049 = v4017[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        const v11050 = v11049[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        return;
      }
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      return;
      break;
    }
  }
}
export async function _Customer_upgradeToVIP4(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToVIP4 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for _Customer_upgradeToVIP4 expects to receive an interact object as its second argument.`)
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
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8,
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc,
  });

  const [v1438, v1439, v1460, v1467, v1468] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
    [ctc2, ctc3, ctc4, ctc7, ctc4]
  );
  const v1555 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: [
      'at ./index.rsh:220:37:application call to [unknown function] (defined at: ./index.rsh:220:37:function exp)',
      'at ./index.rsh:109:33:application call to "runCustomer_upgradeToVIP0_77" (defined at: ./index.rsh:220:10:function exp)',
      'at ./index.rsh:109:33:application call to [unknown function] (defined at: ./index.rsh:109:33:function exp)',
    ],
    msg: 'in',
    who: 'Customer_upgradeToVIP',
  });
  const v1559 = ['Customer_upgradeToVIP0_77', v1555];

  const txn1 = await ctc.sendrecv({
    args: [v1438, v1439, v1460, v1467, v1468, v1559],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [
      stdlib.checkedBigNumberify('./index.rsh:222:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./index.rsh:23:23:decimal', stdlib.UInt_max, '100'), v1439]],
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
        data: [v1642],
        secs: v1644,
        time: v1643,
        didSend: v526,
        from: v1641,
      } = txn1;

      switch (v1642[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1645 = v1642[1];

          break;
        }
        case 'Customer_enroll0_77': {
          const v1944 = v1642[1];

          break;
        }
        case 'Customer_playGame0_77': {
          const v2243 = v1642[1];

          break;
        }
        case 'Customer_readBlog0_77': {
          const v2542 = v1642[1];

          break;
        }
        case 'Customer_referFriend0_77': {
          const v2841 = v1642[1];

          break;
        }
        case 'Customer_upgradeToBronze0_77': {
          const v3140 = v1642[1];

          break;
        }
        case 'Customer_upgradeToGold0_77': {
          const v3439 = v1642[1];

          break;
        }
        case 'Customer_upgradeToSilver0_77': {
          const v3738 = v1642[1];

          break;
        }
        case 'Customer_upgradeToVIP0_77': {
          const v4037 = v1642[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'Customer_upgradeToVIP',
          });
          const v4103 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v4104 = v4103[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
          const v4105 = stdlib.add(v4104, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
          const v4107 = stdlib.Array_set(v4103, '0', v4105);
          const v4108 = stdlib.Array_set(
            v1467,
            stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
            v4107
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'),
            kind: 'to',
            tok: v1439,
          });
          const v4319 = null;
          const v4320 = await txn1.getOutput('Customer_upgradeToVIP', 'v4319', ctc0, v4319);

          const v4326 = v4108[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
          const v4327 = v4326[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
          const v4331 = stdlib.sub(
            v4327,
            stdlib.checkedBigNumberify('./index.rsh:23:23:decimal', stdlib.UInt_max, '100')
          );
          const v4333 = stdlib.Array_set(v4326, '0', v4331);
          const v4334 = stdlib.Array_set(
            v4108,
            stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0'),
            v4333
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1438,
            tok: v1439,
          });
          const v11079 = v1460;
          const v11081 = v4334;
          const v11082 = v1468;
          const v11083 = stdlib.lt(
            v1460,
            stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3')
          );
          if (v11083) {
            sim_r.isHalt = false;
          } else {
            const v11084 = v4334[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            const v11085 = v11084[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: v1439,
            });
            sim_r.txns.push({
              kind: 'from',
              to: v1438,
              tok: undefined /* Nothing */,
            });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1439,
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
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc9],
    waitIfNotPresent: false,
  });
  const {
    data: [v1642],
    secs: v1644,
    time: v1643,
    didSend: v526,
    from: v1641,
  } = txn1;
  switch (v1642[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1645 = v1642[1];
      return;
      break;
    }
    case 'Customer_enroll0_77': {
      const v1944 = v1642[1];
      return;
      break;
    }
    case 'Customer_playGame0_77': {
      const v2243 = v1642[1];
      return;
      break;
    }
    case 'Customer_readBlog0_77': {
      const v2542 = v1642[1];
      return;
      break;
    }
    case 'Customer_referFriend0_77': {
      const v2841 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToBronze0_77': {
      const v3140 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToGold0_77': {
      const v3439 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToSilver0_77': {
      const v3738 = v1642[1];
      return;
      break;
    }
    case 'Customer_upgradeToVIP0_77': {
      const v4037 = v1642[1];
      undefined /* setApiDetails */;
      const v4103 = v1467[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v4104 = v4103[stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0')];
      const v4105 = stdlib.add(v4104, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '100'));
      const v4107 = stdlib.Array_set(v4103, '0', v4105);
      const v4108 = stdlib.Array_set(
        v1467,
        stdlib.checkedBigNumberify('./index.rsh:109:33:dot', stdlib.UInt_max, '0'),
        v4107
      );
      const v4319 = null;
      const v4320 = await txn1.getOutput('Customer_upgradeToVIP', 'v4319', ctc0, v4319);
      if (v526) {
        stdlib.protect(ctc0, await interact.out(v4037, v4320), {
          at: './index.rsh:220:11:application',
          fs: [
            'at ./index.rsh:220:11:application call to [unknown function] (defined at: ./index.rsh:220:11:function exp)',
            'at ./index.rsh:224:14:application call to "ret" (defined at: ./index.rsh:223:15:function exp)',
            'at ./index.rsh:223:15:application call to [unknown function] (defined at: ./index.rsh:223:15:function exp)',
          ],
          msg: 'out',
          who: 'Customer_upgradeToVIP',
        });
      } else {
      }

      const v4326 = v4108[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
      const v4327 = v4326[stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0')];
      const v4331 = stdlib.sub(v4327, stdlib.checkedBigNumberify('./index.rsh:23:23:decimal', stdlib.UInt_max, '100'));
      const v4333 = stdlib.Array_set(v4326, '0', v4331);
      const v4334 = stdlib.Array_set(
        v4108,
        stdlib.checkedBigNumberify('./index.rsh:227:44:application', stdlib.UInt_max, '0'),
        v4333
      );
      const v11079 = v1460;
      const v11081 = v4334;
      const v11082 = v1468;
      const v11083 = stdlib.lt(v1460, stdlib.checkedBigNumberify('./index.rsh:113:20:decimal', stdlib.UInt_max, '3'));
      if (v11083) {
        return;
      } else {
        const v11084 = v4334[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
        const v11085 = v11084[stdlib.checkedBigNumberify('./index.rsh:348:19:application', stdlib.UInt_max, '0')];
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
  if (step == 4) {
    return _Customer_answerQuestion4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_enroll4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_playGame4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_readBlog4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_referFriend4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_upgradeToBronze4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_upgradeToGold4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
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
  if (step == 4) {
    return _Customer_upgradeToSilver4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function Customer_upgradeToVIP(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToVIP expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(`The backend for Customer_upgradeToVIP expects to receive an interact object as its second argument.`)
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 4) {
    return _Customer_upgradeToVIP4(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
const _ALGO = {
  ABI: {
    impure: [
      `Customer_answerQuestion()byte[0]`,
      `Customer_enroll()byte[0]`,
      `Customer_playGame()byte[0]`,
      `Customer_readBlog()byte[0]`,
      `Customer_referFriend()byte[0]`,
      `Customer_upgradeToBronze()byte[0]`,
      `Customer_upgradeToGold()byte[0]`,
      `Customer_upgradeToSilver()byte[0]`,
      `Customer_upgradeToVIP()byte[0]`,
    ],
    pure: [`Platform_token()uint64`],
    sigs: [
      `Customer_answerQuestion()byte[0]`,
      `Customer_enroll()byte[0]`,
      `Customer_playGame()byte[0]`,
      `Customer_readBlog()byte[0]`,
      `Customer_referFriend()byte[0]`,
      `Customer_upgradeToBronze()byte[0]`,
      `Customer_upgradeToGold()byte[0]`,
      `Customer_upgradeToSilver()byte[0]`,
      `Customer_upgradeToVIP()byte[0]`,
      `Platform_token()uint64`,
    ],
  },
  appApproval: `ByAYAGQBBAggBSgGBzAJoI0GA9XbgP0Jj6O+pw2bx66lDvmItOYOtsfslAyttfrXA9DHmLEF4KST6QmX26f9AgImAwEAAAEBIjUAMRhBCTwpZEkiWzUBIQRbNQIxGSQSQQAIMQAoKGZCCQo2GgAXSUEBayI1BCQ1BkkhDgxAAGxJIQ8MQAA+SSEQDEAAJ0khEQxAABAhERJEKTX/gAEHNP9QQgNkIRASRCk1/4ABBTT/UEIDVCEPEkQpNf+AAQQ0/1BCA0RJIRIMQAAQIRISRCk1/4ABAzT/UEIDLSEOEkQpNf+AAQg0/1BCAx1JIRMMQADCSSEUDEAAq0khFQxAAJYhFRJENAFJIQgMQABQSSEEDEAAJkkhCwxAABEhCxJEKGRJNQNXIAg1B0IIV0goZEk1A1cgCDUHQghJSSEJDEAADkgoZEk1A1cgCDUHQgg0SChkSTUDVyAINQdCCCZJJQxAACNJIQYMQAAOSChkSTUDVyAINQdCCAtIKGRJNQNXIAg1B0IH/SQSRChkSTUDVyAINQdCB+0hFBJEKTX/KDT/UEICZCETEkQpNf+AAQY0/1BCAlRJIRYMQAAQIRYSRCk1/4ABAjT/UEICPYH82vzKARJEKTX/KjT/UEICKzYaAhc1BDYaAzYaARdJIQYMQAGmSSEJDEAA0EkhBAxAAGYhBBJEIQs0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/lc4ETX9gAQX/NsusDT9VwARNfwjNP6IB5A0/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlsjCBZcAFwANAMhCltCBlxIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/lc4ETX9gATiG7OpsDT9VwARNfwjNP6IBy00/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlsjCBZcAFwANAMhCltCBflJIQgMQABjSCEJNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XOBE1/YAEYbSsDLA0/VcAETX8IzT+iAbDNP8xABJENP80/jQDIQdbMgY0/TT8SSJbIwgWXABcADQDIQpbQgWPSCEINAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XOBE1/YAEzJmSXLA0/VcAETX8IzT+iAZgNP8xABJENP80/jQDIQdbJAgyBjT9NPxJIlsjCBZcAFwANAMhCltCBSpJIQ0MQARRSSUMQABjSCEGNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf5XOBE1/YAEkSc087A0/VcAETX8IzT+iAXuNP8xABJENP80/jQDIQdbMgY0/TT8SSJbIwgWXABcADQDIQpbQgS6SCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hB1s1/VcwETX8gUFbNftJNQU1+oAELkXGATT6ULA0+iJVSSUMQAIASSEIDEABNEkhCQxAAMxJIQQMQABkIQQSRDT8VwARNfk0/DT5SSJbIwgWXABcADX4IzT+iAVGgAgAAAAAAAAQ37ApNQc0+FcAETX3sSKyASOyEiWyEDT/shQ0/rIRszT/NP40/TIGNPg090kiWyMJFlwAXAA0+0ID9kg0/FcAETX5NPw0+UkiWyMIFlwAXAA1+CM0/ogE5YAIAAAAAAAAD6KwKTUHNPhXABE197EisgEjshIlshA0/7IUNP6yEbM0/zT+NP0yBjT4NPdJIlsjCRZcAFwANPtCA5VINPxXABE1+TT8NPlJIlsjCBZcAFwANfgjNP6IBISACAAAAAAAAA5lsCk1BzT4VwARNfexIrIBI7ISJbIQNP+yFDT+shGzNP80/jT9MgY0+DT3SSJbIwkWXABcADT7QgM0SSEGDEAAYUg0/FcAETX5NPw0+UkiWyMIFlwAXAA1+CM0/ogEHIAIAAAAAAAADSiwKTUHNPhXABE197EisgEjshIlshA0/7IUNP6yEbM0/zT+NP0yBjT4NPdJIlsjCRZcAFwANPtCAsxINPxXABE1+YAIAAAAAAAAC+CwKTUHNPw0+UkiWyMJFlwAXAA1+LEisgEjshIlshAxALIUNP6yEbM0/zT+FlA0/RZQNPsWUDT4UChLAVcASWdIIQs1ATIGNQJCAwVJIRcMQADBSSENDEAAXUg0/FcAETX5gAgAAAAAAAAKmLApNQc0/DT5SSJbIwkWXABcADX4sSKyASOyEiWyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0ghBDUBMgY1AkICmkg0/FcAETX5gAgAAAAAAAAJULApNQc0/DT5SSJbIwkWXABcADX4sSKyASOyEiWyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0ghCTUBMgY1AkICPUkkDEAAckg0/FcAETX5MQCIAnwiVSQTRDEANP8TRIAIAAAAAAAACAawKTUHMQAoKmY0/DT5SSJbIwkWXABcADX4sSKyASOyEiWyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0ghCDUBMgY1AkIBxUg0/FcAETX5gAgAAAAAAAAGtrApNQc0/DT5SSJbIwkWXABcADX4sSKyASOyEiWyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0ghBjUBMgY1AkIBaEkkDEAAXiQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/lcoETX9gASai5F0sDT9VwARNfwhDDT+iAGbNP8xABJENP80/iIyBjT9NPxJIlshDAgWXABcACJCAG5IIQyIAV0iNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBEa81/iEMiAEysSKyASKyEiWyEDIKshQ0/7IRszT+SVcAESEEr1wAXAA1/TEANP8WUDT9UChLAVcAOWdIJDUBMgY1AkIAljX/Nf41/TX8Nfs1+jT8IQ0MQQAjNPo0+xZQNPwWUDT+UDT/FlAoSwFXAElnSCU1ATIGNQJCAF+xIrIBNP5XABEiW7ISJbIQNPqyFDT7shGzsSKyATT/sggkshA0+rIHs7EisgEishIlshAyCbIVMgqyFDT7shGzQgAAMRkhBhJEsSKyASKyCCSyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJAgyBBJEMRYSRCRDMRkiEkRC/98iMTQSRCEXMTUSRCIxNhJEJDE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJNABJSkkkCDUAOBQyChJEOBAlEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 73,
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
                "name": "v1439",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "name": "v1439",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
        "internalType": "struct T17",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_answerQuestion0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_enroll0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_playGame0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_readBlog0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_referFriend0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToBronze0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToGold0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToSilver0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToVIP0_77",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1642",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1718",
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
    "name": "_reach_oe_v2054",
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
    "name": "_reach_oe_v2384",
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
    "name": "_reach_oe_v2712",
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
    "name": "_reach_oe_v3040",
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
    "name": "_reach_oe_v3368",
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
    "name": "_reach_oe_v3685",
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
    "name": "_reach_oe_v4002",
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
    "name": "_reach_oe_v4319",
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
    "name": "Customer_upgradeToVIP",
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
        "internalType": "struct T17",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_answerQuestion0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_enroll0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_playGame0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_readBlog0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_referFriend0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToBronze0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToGold0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToSilver0_77",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Customer_upgradeToVIP0_77",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1642",
                "type": "tuple"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
        "internalType": "struct T17",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003563380380620035638339810160408190526200002691620003aa565b6000805543600355620000386200024f565b604080513381528351602080830191909152840151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000b734156008620001a2565b62000129816020015160006040518060600160405280600081526020018560200151600060018110620000ee57620000ee62000468565b6020020151602001518152602001856020015160006001811062000116576200011662000468565b60200201516040015115159052620001cc565b60408201526200013862000296565b338152602080840151516001600160a01b03168183015260408084015181840152600160008190554390555162000172918391016200047e565b6040516020818303038152906040526002908051906020019062000198929190620002b7565b5050505062000552565b81620001c85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001d662000346565b60005b60018110156200022c57848160018110620001f857620001f862000468565b602002015182826001811062000212576200021262000468565b6020020152806200022381620004eb565b915050620001d9565b508181846001811062000243576200024362000468565b60200201529392505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200028262000346565b81526020016200029162000346565b905290565b60408051606081018252600080825260208201529081016200029162000346565b828054620002c59062000515565b90600052602060002090601f016020900481019282620002e9576000855562000334565b82601f106200030457805160ff191683800117855562000334565b8280016001018555821562000334579182015b828111156200033457825182559160200191906001019062000317565b506200034292915062000393565b5090565b60405180602001604052806001905b6200037c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003555790505090565b5b8082111562000342576000815560010162000394565b6000818303604080821215620003bf57600080fd5b80518082016001600160401b038082118383101715620003ef57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200040957600080fd5b8351945060208501915084821081831117156200043657634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200045657600080fd5b90825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b6001811015620004e057825180518352848101518584015285015115158583015291830191606090910190600101620004ac565b505050505092915050565b60006000198214156200050e57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200052a57607f821691505b602082108114156200054c57634e487b7160e01b600052602260045260246000fd5b50919050565b61300180620005626000396000f3fe6080604052600436106101215760003560e01c806370e48367116100a5578063ab53f2c61161006c578063ab53f2c614610251578063b2b24ed114610274578063bf2c5b241461027c578063c79800371461028f578063e533a29d146102a2578063ed1927e1146102b557005b806370e483671461020657806377c05a971461020e57806383230757146102165780638e3147691461022b578063a7661d541461023e57005b806331df50cb116100e957806331df50cb146101895780633bc5b7bf146101915780634d8ffbe2146101be57806366b81cd7146101c65780636a215fc1146101d957005b8062060f321461012a578063091ddfba14610147578063126053261461014f5780631e93b0f1146101575780632c10a1591461017657005b3661012857005b005b6101326102bd565b60405190151581526020015b60405180910390f35b6101326102cc565b6101326102d6565b34801561016357600080fd5b506003545b60405190815260200161013e565b6101286101843660046127fd565b6102e0565b610132610304565b34801561019d57600080fd5b506101b16101ac36600461282a565b61030e565b60405161013e919061285d565b61013261033a565b6101286101d4366004612896565b610344565b3480156101e557600080fd5b506101ee610364565b6040516001600160a01b03909116815260200161013e565b610132610376565b610132610380565b34801561022257600080fd5b50600154610168565b6101286102393660046127fd565b61038a565b61012861024c3660046127fd565b6103aa565b34801561025d57600080fd5b506102666103ca565b60405161013e9291906128d5565b610132610467565b61012861028a3660046127fd565b610471565b61012861029d3660046127fd565b610491565b6101286102b03660046127fd565b6104b1565b6101326104d1565b60006102c76104db565b905090565b60006102c761050b565b60006102c761053b565b6102e86124d2565b6103006102fa368490038401846129f4565b8261056b565b5050565b60006102c761075c565b60408051606081018252600080825260208201819052918101919091526103348261078c565b92915050565b60006102c7610865565b61034c6124d2565b61030061035e36849003840184612a59565b82610896565b600080610370816115ed565b91505090565b60006102c761186f565b60006102c761189f565b6103926124d2565b6103006103a4368490038401846129f4565b826118cf565b6103b26124d2565b6103006103c4368490038401846129f4565b82611ae4565b6000606060005460028080546103df90612b5a565b80601f016020809104026020016040519081016040528092919081815260200182805461040b90612b5a565b80156104585780601f1061042d57610100808354040283529160200191610458565b820191906000526020600020905b81548152906001019060200180831161043b57829003601f168201915b50505050509050915091509091565b60006102c7611c90565b6104796124d2565b61030061048b368490038401846129f4565b82611cc0565b6104996124d2565b6103006104ab368490038401846129f4565b82611e07565b6104b96124d2565b6103006104cb368490038401846129f4565b82611f4e565b60006102c7612095565b60006104e561251e565b602081015151600290526104f76124d2565b6105018282610896565b6040015192915050565b600061051561251e565b602081015151600490526105276124d2565b6105318282610896565b6080015192915050565b600061054561251e565b602081015151600690526105576124d2565b6105618282610896565b60c0015192915050565b61057b600160005414600c6120c2565b815161059690158061058f57508251600154145b600d6120c2565b6000808055600280546105a890612b5a565b80601f01602080910402602001604051908101604052809291908181526020018280546105d490612b5a565b80156106215780601f106105f657610100808354040283529160200191610621565b820191906000526020600020905b81548152906001019060200180831161060457829003601f168201915b50505050508060200190518101906106399190612c18565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161066c929190612c6b565b60405180910390a1610680341560096120c2565b61069c610695338360200151620186a06120e8565b600a6120c2565b80516106b4906001600160a01b03163314600b6120c2565b6106bc612591565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516000908190529051439083015260408085018051825160608101845282515151620186a001815282515186015195810195909552905161073794919392820190835b60200201516040015115159052612100565b6020820180516040019190915251600060609091015261075681612174565b50505050565b600061076661251e565b602081015151600590526107786124d2565b6107828282610896565b60a0015192915050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156107d8576107d8612847565b1415610855576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561081957610819612847565b600181111561082a5761082a612847565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b600061086f61251e565b602081015151600890526108816124d2565b61088b8282610896565b610100015192915050565b6108a660046000541460226120c2565b81516108c19015806108ba57508251600154145b60236120c2565b6000808055600280546108d390612b5a565b80601f01602080910402602001604051908101604052809291908181526020018280546108ff90612b5a565b801561094c5780601f106109215761010080835404028352916020019161094c565b820191906000526020600020905b81548152906001019060200180831161092f57829003601f168201915b50505050508060200190518101906109649190612ca9565b905061096e6125ba565b7f6670848b62a6387b6b13cda87985b8f25959ea917413ce05b83eccf698f07c52338560405161099f929190612d25565b60405180910390a160006020850151515160088111156109c1576109c1612847565b1415610b28576109d33415600e6120c2565b6109ed6109e633846020015160006120e8565b600f6120c2565b604051600081527f8d24b16e5ff062faf8e1ea774f651f156132dbea70dda3a6804baf6282c2d7e99060200160405180910390a16000808452606080840180516040805193840190529051610a95939192908190610a5490845b6020020151516063190190565b81526020018660600151600060018110610a7057610a70612c93565b6020020151602001518152602001866060015160006001811061072557610725612c93565b81526020820151610aa89033606461228b565b610ab0612636565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152608080860151606085015284519084015260056000554360015551610afd91839101612e67565b60405160208183030381529060405260029080519060200190610b21929190612677565b5050610756565b6001602085015151516008811115610b4257610b42612847565b1415610cb257610b54341560106120c2565b610b6e610b6733846020015160006120e8565b60116120c2565b610ba46001610b7c3361078c565b516001811115610b8e57610b8e612847565b14610b9a576001610b9d565b60005b60126120c2565b8151610bca906001600160a01b03163314610bc0576001610bc3565b60005b60136120c2565b604051600081527f073f10185f8a16fd5ea9f3fbcf381a7afac5102f4bb2a46407e73337a5a4c82e9060200160405180910390a160006020848101829052338252600490526040808220805462ff00ff1916600117905560608481018051835192830190935251610c439391908190610a549084610a47565b8160200181905250610c5b826020015133606461228b565b610c63612636565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526080808601516060850152848301519084015260066000554360015551610afd91839101612e67565b6002602085015151516008811115610ccc57610ccc612847565b1415610dc557610cde341560146120c2565b610cf8610cf133846020015160006120e8565b60156120c2565b604051600081527f841c7bee770b5c89e0ce7496442fa61d98a7d89b78b23e2e7329898082e2d20d9060200160405180910390a16000604080850182905260608085018051835192830190935251610d589391908190610a549084610a47565b60408201526020820151610d6e9033606461228b565b610d76612636565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526080808601516060850152848201519084015260076000554360015551610afd91839101612e67565b6003602085015151516008811115610ddf57610ddf612847565b1415610edc57610df1341560166120c2565b610e0b610e0433846020015160006120e8565b60176120c2565b604051600081527f5e5bfb49becff2c0b157043df3fb53bad5841f79e65800c9cef05500f837331a9060200160405180910390a16000606080850182905283810180516040805193840190529051610e6c939192908190610a549084610a47565b60608201526020820151610e829033606461228b565b610e8a612636565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526080808601516060808601919091528501519084015260086000554360015551610afd91839101612e67565b6004602085015151516008811115610ef657610ef6612847565b1415610ff157610f08341560186120c2565b610f22610f1b33846020015160006120e8565b60196120c2565b604051600081527f999dc00d51b27c94d42d03d8bff4e74c24751cf04b824ad368f5940930e3453d9060200160405180910390a1600060808401819052606080840180516040805193840190529051610f84939192908190610a549084610a47565b60808201526020820151610f9a9033606461228b565b610fa2612636565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526080808601516060850152848101519084015260096000554360015551610afd91839101612e67565b600560208501515151600881111561100b5761100b612847565b14156111955761101d3415601a6120c2565b611058826060015160006040518060600160405280610a54876060015160006001811061104c5761104c612c93565b60200201515160640190565b8160a0018190525061107a61107333846020015160646120e8565b601b6120c2565b604051600081527f067e5edb3060e092bf7f9672f5ff2a68dda9b5a01c3eeee865bb5b4e372beef79060200160405180910390a1600060a0840152602082015182516110c89190606461228b565b6110d0612591565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152514392019190915260a083018051825160608101909352905161116e92600091819061112d9084610a47565b81526020018660a0015160006001811061114957611149612c93565b60200201516020015181526020018660a0015160006001811061072557610725612c93565b60208201805160400191909152608084015190516060015261118f81612174565b50610756565b60066020850151515160088111156111af576111af612847565b1415611306576111c13415601c6120c2565b6111f0826060015160006040518060600160405280610a54876060015160006001811061104c5761104c612c93565b8160c0018190525061121261120b33846020015160646120e8565b601d6120c2565b604051600081527fd363ce249d9e968a195949e2207fdcd27aac927c4607d871fa7e3b516983d31f9060200160405180910390a1600060c0840152602082015182516112609190606461228b565b611268612591565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152514392019190915260c083018051825160608101909352905161116e9260009181906112c59084610a47565b81526020018660c001516000600181106112e1576112e1612c93565b60200201516020015181526020018660c0015160006001811061072557610725612c93565b600760208501515151600881111561132057611320612847565b1415611477576113323415601e6120c2565b611361826060015160006040518060600160405280610a54876060015160006001811061104c5761104c612c93565b8160e0018190525061138361137c33846020015160646120e8565b601f6120c2565b604051600081527fa5de003b2ba0d437c5061b4eea66167a7a4699edfbf105570f3b20a9286fa44a9060200160405180910390a1600060e0840152602082015182516113d19190606461228b565b6113d9612591565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152514392019190915260e083018051825160608101909352905161116e9260009181906114369084610a47565b81526020018660e0015160006001811061145257611452612c93565b60200201516020015181526020018660e0015160006001811061072557610725612c93565b600860208501515151600881111561149157611491612847565b1415610756576114a3341560206120c2565b6114d2826060015160006040518060600160405280610a54876060015160006001811061104c5761104c612c93565b8161010001819052506114f56114ee33846020015160646120e8565b60216120c2565b604051600081527fdb33828e954f6aa27b14f09cbcf16dd5d1e5caff2390f00d645cadfee966296f9060200160405180910390a16000610100840152602082015182516115449190606461228b565b61154c612591565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151828401805191909152514392019190915261010083018051825160608101909352905161116e9260009181906115aa9084610a47565b81526020018661010001516000600181106115c7576115c7612c93565b602002015160200151815260200186610100015160006001811061072557610725612c93565b6000600160005414156116a55760006002805461160990612b5a565b80601f016020809104026020016040519081016040528092919081815260200182805461163590612b5a565b80156116825780601f1061165757610100808354040283529160200191611682565b820191906000526020600020905b81548152906001019060200180831161166557829003601f168201915b505050505080602001905181019061169a9190612c18565b602001519392505050565b60046000541415611750576000600280546116bf90612b5a565b80601f01602080910402602001604051908101604052809291908181526020018280546116eb90612b5a565b80156117385780601f1061170d57610100808354040283529160200191611738565b820191906000526020600020905b81548152906001019060200180831161171b57829003601f168201915b505050505080602001905181019061169a9190612ca9565b600560005414156117fb5760006002805461176a90612b5a565b80601f016020809104026020016040519081016040528092919081815260200182805461179690612b5a565b80156117e35780601f106117b8576101008083540402835291602001916117e3565b820191906000526020600020905b8154815290600101906020018083116117c657829003601f168201915b505050505080602001905181019061169a9190612edf565b600660005414156118155760006002805461176a90612b5a565b6007600054141561182f5760006002805461176a90612b5a565b600860005414156118495760006002805461176a90612b5a565b600960005414156118635760006002805461176a90612b5a565b610860600060076120c2565b600061187961251e565b6020810151516003905261188b6124d2565b6118958282610896565b6060015192915050565b60006118a961251e565b602081015151600190526118bb6124d2565b6118c58282610896565b6020015192915050565b6118df600660005414602c6120c2565b81516118fa9015806118f357508251600154145b602d6120c2565b60008080556002805461190c90612b5a565b80601f016020809104026020016040519081016040528092919081815260200182805461193890612b5a565b80156119855780601f1061195a57610100808354040283529160200191611985565b820191906000526020600020905b81548152906001019060200180831161196857829003601f168201915b505050505080602001905181019061199d9190612edf565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33846040516119d0929190612c6b565b60405180910390a16119e4341560296120c2565b6119fe6119f733836020015160646120e8565b602a6120c2565b8051611a16906001600160a01b03163314602b6120c2565b611a1e612591565b815181516001600160a01b039182169052602080840151835192169101526040820151611a4c90600161229f565b602080830180519290925290514391015260808201805160408051606081019091529151611ac4926000918190611a83908461104c565b81526020018660800151600060018110611a9f57611a9f612c93565b6020020151602001518152602001866080015160006001811061072557610725612c93565b602082018051604001919091526060808401519151015261075681612174565b611af460056000541460276120c2565b8151611b0f901580611b0857508251600154145b60286120c2565b600080805560028054611b2190612b5a565b80601f0160208091040260200160405190810160405280929190818152602001828054611b4d90612b5a565b8015611b9a5780601f10611b6f57610100808354040283529160200191611b9a565b820191906000526020600020905b815481529060010190602001808311611b7d57829003601f168201915b5050505050806020019051810190611bb29190612edf565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051611be5929190612c6b565b60405180910390a1611bf9341560246120c2565b611c13611c0c33836020015160646120e8565b60256120c2565b8051611c2b906001600160a01b0316331460266120c2565b611c33612591565b815181516001600160a01b039182169052602080840151835192169181019190915260408084015182840180519190915251439201919091526080830180518251606081019093529051611ac4926000918190611a83908461104c565b6000611c9a61251e565b60208101515160079052611cac6124d2565b611cb68282610896565b60e0015192915050565b611cd060086000541460366120c2565b8151611ceb901580611ce457508251600154145b60376120c2565b600080805560028054611cfd90612b5a565b80601f0160208091040260200160405190810160405280929190818152602001828054611d2990612b5a565b8015611d765780601f10611d4b57610100808354040283529160200191611d76565b820191906000526020600020905b815481529060010190602001808311611d5957829003601f168201915b5050505050806020019051810190611d8e9190612edf565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051611dc1929190612c6b565b60405180910390a1611dd5341560336120c2565b611def611de833836020015160646120e8565b60346120c2565b8051611c2b906001600160a01b0316331460356120c2565b611e1760076000541460316120c2565b8151611e32901580611e2b57508251600154145b60326120c2565b600080805560028054611e4490612b5a565b80601f0160208091040260200160405190810160405280929190818152602001828054611e7090612b5a565b8015611ebd5780601f10611e9257610100808354040283529160200191611ebd565b820191906000526020600020905b815481529060010190602001808311611ea057829003601f168201915b5050505050806020019051810190611ed59190612edf565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3384604051611f08929190612c6b565b60405180910390a1611f1c3415602e6120c2565b611f36611f2f33836020015160646120e8565b602f6120c2565b8051611c2b906001600160a01b0316331460306120c2565b611f5e600960005414603b6120c2565b8151611f79901580611f7257508251600154145b603c6120c2565b600080805560028054611f8b90612b5a565b80601f0160208091040260200160405190810160405280929190818152602001828054611fb790612b5a565b80156120045780601f10611fd957610100808354040283529160200191612004565b820191906000526020600020905b815481529060010190602001808311611fe757829003601f168201915b505050505080602001905181019061201c9190612edf565b90507f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338460405161204f929190612c6b565b60405180910390a1612063341560386120c2565b61207d61207633836020015160646120e8565b60396120c2565b8051611c2b906001600160a01b03163314603a6120c2565b600061209f61251e565b602081015151600090526120b16124d2565b6120bb8282610896565b5192915050565b816103005760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006120f6838530856122ec565b90505b9392505050565b6121086126fb565b60005b60018110156121545784816001811061212657612126612c93565b602002015182826001811061213d5761213d612c93565b60200201528061214c81612f11565b91505061210b565b508181846001811061216857612168612c93565b60200201529392505050565b602081015151600311156122105761218a612746565b8151516001600160a01b03908116825282516020908101519091168183015280830180515160408085019190915281518101516060808601919091529151909101516080840152600460005543600155516121e791839101612f2c565b6040516020818303038152906040526002908051906020019061220b929190612677565b505050565b805160208082015191519083015160400151515161222f92919061228b565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612271573d6000803e3d6000fd5b50600080805560018190556122889060029061278d565b50565b6122968383836123c6565b61220b57600080fd5b6000826122ac8382612f7a565b91508110156103345760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016120df565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161235391612f92565b60006040518083038185875af1925050503d8060008114612390576040519150601f19603f3d011682016040523d82523d6000602084013e612395565b606091505b50915091506123a682826001612497565b50808060200190518101906123bb9190612fae565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161242591612f92565b60006040518083038185875af1925050503d8060008114612462576040519150601f19603f3d011682016040523d82523d6000602084013e612467565b606091505b509150915061247882826002612497565b508080602001905181019061248d9190612fae565b9695505050505050565b606083156124a65750816120f9565b8251156124b65782518084602001fd5b60405163100960cb60e01b8152600481018390526024016120df565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b60405180604001604052806000815260200161258c6040805161016081018252600060208201818152928201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082015290815290565b905290565b60408051608081018252600091810182815260608201929092529081526020810161258c6127c7565b6040518061012001604052806125ce6126fb565b81526020016125db6126fb565b81526020016125e86126fb565b81526020016125f56126fb565b81526020016126026126fb565b815260200161260f6126fb565b815260200161261c6126fb565b81526020016126296126fb565b815260200161258c6126fb565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200161258c6126fb565b82805461268390612b5a565b90600052602060002090601f0160209004810192826126a557600085556126eb565b82601f106126be57805160ff19168380011785556126eb565b828001600101855582156126eb579182015b828111156126eb5782518255916020019190600101906126d0565b506126f79291506127e8565b5090565b60405180602001604052806001905b612730604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161270a5790505090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016127806126fb565b8152602001600081525090565b50805461279990612b5a565b6000825580601f106127a9575050565b601f01602090049060005260206000209081019061228891906127e8565b604051806080016040528060008152602001600081526020016127806126fb565b5b808211156126f757600081556001016127e9565b60006040828403121561280f57600080fd5b50919050565b6001600160a01b038116811461228857600080fd5b60006020828403121561283c57600080fd5b81356120f981612815565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061287457612874612847565b8083525060208301511515602083015260408301511515604083015292915050565b6000610160828403121561280f57600080fd5b60005b838110156128c45781810151838201526020016128ac565b838111156107565750506000910152565b82815260406020820152600082518060408401526128fa8160608501602087016128a9565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156129485761294861290f565b60405290565b6040516020810167ffffffffffffffff811182821017156129485761294861290f565b604051610140810167ffffffffffffffff811182821017156129485761294861290f565b6040516060810167ffffffffffffffff811182821017156129485761294861290f565b60405160a0810167ffffffffffffffff811182821017156129485761294861290f565b801515811461228857600080fd5b8035610860816129db565b600060408284031215612a0657600080fd5b6040516040810181811067ffffffffffffffff82111715612a2957612a2961290f565b604052823581526020830135612a3e816129db565b60208201529392505050565b80356009811061086057600080fd5b6000818303610160811215612a6d57600080fd5b612a75612925565b8335815261014080601f1984011215612a8d57600080fd5b612a9561294e565b9250612a9f612971565b612aab60208701612a4a565b8152612ab9604087016129e9565b6020820152612aca606087016129e9565b6040820152612adb608087016129e9565b6060820152612aec60a087016129e9565b6080820152612afd60c087016129e9565b60a0820152612b0e60e087016129e9565b60c0820152610100612b218188016129e9565b60e0830152610120612b348189016129e9565b82840152612b438489016129e9565b908301525083525060208101919091529392505050565b600181811c90821680612b6e57607f821691505b6020821081141561280f57634e487b7160e01b600052602260045260246000fd5b600082601f830112612ba057600080fd5b612ba861294e565b80606080850186811115612bbb57600080fd5b855b81811015612c0c57828189031215612bd55760008081fd5b612bdd612995565b8151815260208083015181830152604080840151612bfa816129db565b90830152908652909401938201612bbd565b50919695505050505050565b600060a08284031215612c2a57600080fd5b612c32612995565b8251612c3d81612815565b81526020830151612c4d81612815565b6020820152612c5f8460408501612b8f565b60408201529392505050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060e08284031215612cbb57600080fd5b612cc36129b8565b8251612cce81612815565b81526020830151612cde81612815565b602082015260408381015190820152612cfa8460608501612b8f565b606082015260c09290920151608083015250919050565b60098110612d2157612d21612847565b9052565b60006101808201905060018060a01b038416825282516020830152602083015151612d54604084018251612d11565b60208101518015156060850152506040810151801515608085015250606081015180151560a085015250608081015180151560c08501525060a081015180151560e08501525060c0810151610100612daf8186018315159052565b60e08301519150610120612dc68187018415159052565b908301511515610140860152909101518015156101608501529050509392505050565b8060005b6001811015610756578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612ded565b60018060a01b03808251168352806020830151166020840152506040810151604083015260608101516060830152608081015161220b6080840182612de9565b60e081016103348284612e27565b600060e08284031215612e8757600080fd5b612e8f6129b8565b90508151612e9c81612815565b81526020820151612eac81612815565b806020830152506040820151604082015260608201516060820152612ed48360808401612b8f565b608082015292915050565b600060e08284031215612ef157600080fd5b6120f98383612e75565b634e487b7160e01b600052601160045260246000fd5b6000600019821415612f2557612f25612efb565b5060010190565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160e0830191612f6990840182612de9565b50608083015160c083015292915050565b60008219821115612f8d57612f8d612efb565b500190565b60008251612fa48184602087016128a9565b9190910192915050565b600060208284031215612fc057600080fd5b81516120f9816129db56fea2646970667358221220a08cd5a5c9f928a9f413615e5ba21712b701a00a96c1c5d73452b2a04ce1113064736f6c634300080c0033`,
  BytecodeLen: 13667,
  Which: `oD`,
  version: 8,
  views: {
    Platform: {
      token: `Platform_token`,
    },
  },
};
export const _stateSourceMap = {
  1: {
    at: './index.rsh:98:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  3: {
    at: './index.rsh:351:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  4: {
    at: './index.rsh:109:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module',
  },
  5: {
    at: './index.rsh:165:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:160:15:application call to [unknown function] (defined at: ./index.rsh:160:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  6: {
    at: './index.rsh:126:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:120:15:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  7: {
    at: './index.rsh:178:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:173:15:application call to [unknown function] (defined at: ./index.rsh:173:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  8: {
    at: './index.rsh:152:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:147:15:application call to [unknown function] (defined at: ./index.rsh:147:15:function exp)'],
    msg: null,
    who: 'Module',
  },
  9: {
    at: './index.rsh:139:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:134:15:application call to [unknown function] (defined at: ./index.rsh:134:15:function exp)'],
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
  Customer_playGame: Customer_playGame,
  Customer_readBlog: Customer_readBlog,
  Customer_referFriend: Customer_referFriend,
  Customer_upgradeToBronze: Customer_upgradeToBronze,
  Customer_upgradeToGold: Customer_upgradeToGold,
  Customer_upgradeToSilver: Customer_upgradeToSilver,
  Customer_upgradeToVIP: Customer_upgradeToVIP,
};
export const _APIs = {
  Customer: {
    answerQuestion: Customer_answerQuestion,
    enroll: Customer_enroll,
    playGame: Customer_playGame,
    readBlog: Customer_readBlog,
    referFriend: Customer_referFriend,
    upgradeToBronze: Customer_upgradeToBronze,
    upgradeToGold: Customer_upgradeToGold,
    upgradeToSilver: Customer_upgradeToSilver,
    upgradeToVIP: Customer_upgradeToVIP,
  },
};
