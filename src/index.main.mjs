// Automatically generated with Reach 0.1.12 (96568703)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (96568703)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
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
    Some: ctc6
    });
  const map0_ctc = ctc7;
  
  
  const Info_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1446, v1447, v1452] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1446, v1447, v1468, v1475, v1476] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1446, v1447, v1468, v1476, v1619] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v1446, v1447, v1468, v1476, v1947] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v1446, v1447, v1468, v1476, v2267] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1446, v1447, v1468, v1476, v2586] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v1446, v1447, v1468, v1476, v2905] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v1446, v1447, v1468, v1476, v3224] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v1446, v1447, v1468, v3342, v3546] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'))) {
      const [v1446, v1447, v1468, v1476, v3865] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '13'))) {
      const [v1446, v1447, v1468, v1476, v4184] = svs;
      return (await ((async () => {
        
        
        return v1447;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        details: {
          decode: Info_details,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5],
      4: [ctc0, ctc1, ctc2, ctc5, ctc2],
      5: [ctc0, ctc1, ctc2, ctc2, ctc5],
      6: [ctc0, ctc1, ctc2, ctc2, ctc5],
      7: [ctc0, ctc1, ctc2, ctc2, ctc5],
      8: [ctc0, ctc1, ctc2, ctc2, ctc5],
      9: [ctc0, ctc1, ctc2, ctc2, ctc5],
      10: [ctc0, ctc1, ctc2, ctc2, ctc5],
      11: [ctc0, ctc1, ctc2, ctc2, ctc5],
      12: [ctc0, ctc1, ctc2, ctc2, ctc5],
      13: [ctc0, ctc1, ctc2, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc3,
    Customer_enroll0_77: ctc3,
    Customer_playGame0_77: ctc3,
    Customer_readBlog0_77: ctc3,
    Customer_referFriend0_77: ctc3,
    Customer_upgradeToBronze0_77: ctc3,
    Customer_upgradeToGold0_77: ctc5,
    Customer_upgradeToSilver0_77: ctc3,
    Customer_upgradeToVIP0_77: ctc3
    });
  const ctc7 = stdlib.T_Address;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v1438 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1439 = [v1438];
  const v1443 = stdlib.protect(ctc2, interact.getToken, 'for Admin\'s interact field getToken');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1443],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:93:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:93:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1447], secs: v1449, time: v1448, didSend: v27, from: v1446 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1447
        });
      ;
      const v1450 = v1439[stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0')];
      const v1451 = stdlib.Array_set(v1450, '0', stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0'));
      const v1452 = stdlib.Array_set(v1439, stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0'), v1451);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1447], secs: v1449, time: v1448, didSend: v27, from: v1446 } = txn1;
  ;
  ;
  const v1450 = v1439[stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0')];
  const v1451 = stdlib.Array_set(v1450, '0', stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0'));
  const v1452 = stdlib.Array_set(v1439, stdlib.checkedBigNumberify('./index.rsh:95:14:application', stdlib.UInt_max, '0'), v1451);
  const txn2 = await (ctc.sendrecv({
    args: [v1446, v1447, v1452],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1448,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:98:23:decimal', stdlib.UInt_max, '100000'), v1447]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v1456, time: v1455, didSend: v34, from: v1454 } = txn2;
      
      ;
      const v1457 = v1452[stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0')];
      const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0')];
      const v1459 = stdlib.add(v1458, stdlib.checkedBigNumberify('./index.rsh:98:23:decimal', stdlib.UInt_max, '100000'));
      const v1461 = stdlib.Array_set(v1457, '0', v1459);
      const v1462 = stdlib.Array_set(v1452, stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0'), v1461);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:98:23:decimal', stdlib.UInt_max, '100000'),
        kind: 'to',
        tok: v1447
        });
      
      const v1468 = stdlib.checkedBigNumberify('./index.rsh:110:35:decimal', stdlib.UInt_max, '0');
      const v1469 = v1455;
      const v1475 = v1462;
      const v1476 = stdlib.checkedBigNumberify('./index.rsh:87:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
        
        return v1488;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
        const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v1446,
          tok: v1447
          });
        sim_r.txns.push({
          kind: 'from',
          to: v1446,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1447
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1456, time: v1455, didSend: v34, from: v1454 } = txn2;
  ;
  const v1457 = v1452[stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0')];
  const v1458 = v1457[stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0')];
  const v1459 = stdlib.add(v1458, stdlib.checkedBigNumberify('./index.rsh:98:23:decimal', stdlib.UInt_max, '100000'));
  const v1461 = stdlib.Array_set(v1457, '0', v1459);
  const v1462 = stdlib.Array_set(v1452, stdlib.checkedBigNumberify('./index.rsh:100:9:dot', stdlib.UInt_max, '0'), v1461);
  ;
  const v1463 = stdlib.addressEq(v1446, v1454);
  stdlib.assert(v1463, {
    at: './index.rsh:100:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  stdlib.protect(ctc0, await interact.ready(), {
    at: './index.rsh:104:23:application',
    fs: ['at ./index.rsh:104:23:application call to [unknown function] (defined at: ./index.rsh:104:23:function exp)', 'at ./index.rsh:104:23:application call to "liftedInteract" (defined at: ./index.rsh:104:23:application)'],
    msg: 'ready',
    who: 'Admin'
    });
  
  let v1468 = stdlib.checkedBigNumberify('./index.rsh:110:35:decimal', stdlib.UInt_max, '0');
  let v1469 = v1455;
  let v1475 = v1462;
  let v1476 = stdlib.checkedBigNumberify('./index.rsh:87:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
    
    return v1488;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn4;
    switch (v1584[0]) {
      case 'Customer_answerQuestion0_77': {
        const v1587 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v1604 = null;
        await txn4.getOutput('Customer_answerQuestion', 'v1604', ctc0, v1604);
        stdlib.protect(ctc0, await interact.seeAnswer(v1583), {
          at: './index.rsh:164:35:application',
          fs: ['at ./index.rsh:164:35:application call to [unknown function] (defined at: ./index.rsh:164:35:function exp)', 'at ./index.rsh:164:35:application call to "liftedInteract" (defined at: ./index.rsh:164:35:application)', 'at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:15:function exp)'],
          msg: 'seeAnswer',
          who: 'Admin'
          });
        
        const v1611 = v1475[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
        const v1612 = v1611[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
        const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'));
        const v1618 = stdlib.Array_set(v1611, '0', v1616);
        const v1619 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0'), v1618);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v1619],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v1622, time: v1621, didSend: v419, from: v1620 } = txn5;
            
            ;
            const v1623 = v1619[stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0')];
            const v1624 = v1623[stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0')];
            const v1625 = stdlib.add(v1624, stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'));
            const v1627 = stdlib.Array_set(v1623, '0', v1625);
            const v1628 = stdlib.Array_set(v1619, stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0'), v1627);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v1621;
            const cv1475 = v1628;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1622, time: v1621, didSend: v419, from: v1620 } = txn5;
        ;
        const v1623 = v1619[stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0')];
        const v1624 = v1623[stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0')];
        const v1625 = stdlib.add(v1624, stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'));
        const v1627 = stdlib.Array_set(v1623, '0', v1625);
        const v1628 = stdlib.Array_set(v1619, stdlib.checkedBigNumberify('./index.rsh:167:17:dot', stdlib.UInt_max, '0'), v1627);
        ;
        const v1629 = stdlib.addressEq(v1446, v1620);
        stdlib.assert(v1629, {
          at: './index.rsh:167:17:dot',
          fs: ['at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v1621;
        const cv1475 = v1628;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_enroll0_77': {
        const v1877 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v1923 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1583), null);
        const v1924 = {
          None: 0,
          Some: 1
          }[v1923[0]];
        const v1925 = stdlib.eq(v1924, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        const v1926 = v1925 ? false : true;
        stdlib.assert(v1926, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
          msg: 'Already enrolled into the loyalty program',
          who: 'Admin'
          });
        const v1928 = stdlib.addressEq(v1583, v1446);
        const v1929 = v1928 ? false : true;
        stdlib.assert(v1929, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
          msg: 'You are the Admin',
          who: 'Admin'
          });
        const v1931 = null;
        await txn4.getOutput('Customer_enroll', 'v1931', ctc0, v1931);
        await stdlib.mapSet(map0, v1583, null);
        stdlib.protect(ctc0, await interact.seeCustomer(v1583), {
          at: './index.rsh:125:37:application',
          fs: ['at ./index.rsh:125:37:application call to [unknown function] (defined at: ./index.rsh:125:37:function exp)', 'at ./index.rsh:125:37:application call to "liftedInteract" (defined at: ./index.rsh:125:37:application)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
          msg: 'seeCustomer',
          who: 'Admin'
          });
        
        const v1939 = v1475[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
        const v1940 = v1939[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
        const v1944 = stdlib.sub(v1940, stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'));
        const v1946 = stdlib.Array_set(v1939, '0', v1944);
        const v1947 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0'), v1946);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v1947],
          evt_cnt: 0,
          funcNum: 5,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v1950, time: v1949, didSend: v485, from: v1948 } = txn5;
            
            ;
            const v1951 = v1947[stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0')];
            const v1952 = v1951[stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0')];
            const v1953 = stdlib.add(v1952, stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'));
            const v1955 = stdlib.Array_set(v1951, '0', v1953);
            const v1956 = stdlib.Array_set(v1947, stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0'), v1955);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'),
              kind: 'to',
              tok: v1447
              });
            const v1958 = stdlib.safeAdd(v1468, stdlib.checkedBigNumberify('./index.rsh:129:27:decimal', stdlib.UInt_max, '1'));
            const cv1468 = v1958;
            const cv1469 = v1949;
            const cv1475 = v1956;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1950, time: v1949, didSend: v485, from: v1948 } = txn5;
        ;
        const v1951 = v1947[stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0')];
        const v1952 = v1951[stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0')];
        const v1953 = stdlib.add(v1952, stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'));
        const v1955 = stdlib.Array_set(v1951, '0', v1953);
        const v1956 = stdlib.Array_set(v1947, stdlib.checkedBigNumberify('./index.rsh:128:17:dot', stdlib.UInt_max, '0'), v1955);
        ;
        const v1957 = stdlib.addressEq(v1446, v1948);
        stdlib.assert(v1957, {
          at: './index.rsh:128:17:dot',
          fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const v1958 = stdlib.safeAdd(v1468, stdlib.checkedBigNumberify('./index.rsh:129:27:decimal', stdlib.UInt_max, '1'));
        const cv1468 = v1958;
        const cv1469 = v1949;
        const cv1475 = v1956;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_playGame0_77': {
        const v2167 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v2252 = null;
        await txn4.getOutput('Customer_playGame', 'v2252', ctc0, v2252);
        stdlib.protect(ctc0, await interact.seePlay(v1583), {
          at: './index.rsh:177:33:application',
          fs: ['at ./index.rsh:177:33:application call to [unknown function] (defined at: ./index.rsh:177:33:function exp)', 'at ./index.rsh:177:33:application call to "liftedInteract" (defined at: ./index.rsh:177:33:application)', 'at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)'],
          msg: 'seePlay',
          who: 'Admin'
          });
        
        const v2259 = v1475[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
        const v2260 = v2259[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
        const v2264 = stdlib.sub(v2260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'));
        const v2266 = stdlib.Array_set(v2259, '0', v2264);
        const v2267 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0'), v2266);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v2267],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v2270, time: v2269, didSend: v511, from: v2268 } = txn5;
            
            ;
            const v2271 = v2267[stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0')];
            const v2272 = v2271[stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0')];
            const v2273 = stdlib.add(v2272, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'));
            const v2275 = stdlib.Array_set(v2271, '0', v2273);
            const v2276 = stdlib.Array_set(v2267, stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0'), v2275);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v2269;
            const cv1475 = v2276;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v2270, time: v2269, didSend: v511, from: v2268 } = txn5;
        ;
        const v2271 = v2267[stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0')];
        const v2272 = v2271[stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0')];
        const v2273 = stdlib.add(v2272, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'));
        const v2275 = stdlib.Array_set(v2271, '0', v2273);
        const v2276 = stdlib.Array_set(v2267, stdlib.checkedBigNumberify('./index.rsh:180:17:dot', stdlib.UInt_max, '0'), v2275);
        ;
        const v2277 = stdlib.addressEq(v1446, v2268);
        stdlib.assert(v2277, {
          at: './index.rsh:180:17:dot',
          fs: ['at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v2269;
        const cv1475 = v2276;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_readBlog0_77': {
        const v2457 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v2571 = null;
        await txn4.getOutput('Customer_readBlog', 'v2571', ctc0, v2571);
        stdlib.protect(ctc0, await interact.seeRead(v1583), {
          at: './index.rsh:151:33:application',
          fs: ['at ./index.rsh:151:33:application call to [unknown function] (defined at: ./index.rsh:151:33:function exp)', 'at ./index.rsh:151:33:application call to "liftedInteract" (defined at: ./index.rsh:151:33:application)', 'at ./index.rsh:148:15:application call to [unknown function] (defined at: ./index.rsh:148:15:function exp)'],
          msg: 'seeRead',
          who: 'Admin'
          });
        
        const v2578 = v1475[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
        const v2579 = v2578[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
        const v2583 = stdlib.sub(v2579, stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'));
        const v2585 = stdlib.Array_set(v2578, '0', v2583);
        const v2586 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0'), v2585);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v2586],
          evt_cnt: 0,
          funcNum: 7,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v2589, time: v2588, didSend: v536, from: v2587 } = txn5;
            
            ;
            const v2590 = v2586[stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0')];
            const v2591 = v2590[stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0')];
            const v2592 = stdlib.add(v2591, stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'));
            const v2594 = stdlib.Array_set(v2590, '0', v2592);
            const v2595 = stdlib.Array_set(v2586, stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0'), v2594);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v2588;
            const cv1475 = v2595;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v2589, time: v2588, didSend: v536, from: v2587 } = txn5;
        ;
        const v2590 = v2586[stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0')];
        const v2591 = v2590[stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0')];
        const v2592 = stdlib.add(v2591, stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'));
        const v2594 = stdlib.Array_set(v2590, '0', v2592);
        const v2595 = stdlib.Array_set(v2586, stdlib.checkedBigNumberify('./index.rsh:154:17:dot', stdlib.UInt_max, '0'), v2594);
        ;
        const v2596 = stdlib.addressEq(v1446, v2587);
        stdlib.assert(v2596, {
          at: './index.rsh:154:17:dot',
          fs: ['at ./index.rsh:148:15:application call to [unknown function] (defined at: ./index.rsh:148:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v2588;
        const cv1475 = v2595;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_referFriend0_77': {
        const v2747 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v2890 = null;
        await txn4.getOutput('Customer_referFriend', 'v2890', ctc0, v2890);
        stdlib.protect(ctc0, await interact.seeReferral(v1583), {
          at: './index.rsh:138:37:application',
          fs: ['at ./index.rsh:138:37:application call to [unknown function] (defined at: ./index.rsh:138:37:function exp)', 'at ./index.rsh:138:37:application call to "liftedInteract" (defined at: ./index.rsh:138:37:application)', 'at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)'],
          msg: 'seeReferral',
          who: 'Admin'
          });
        
        const v2897 = v1475[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
        const v2898 = v2897[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
        const v2902 = stdlib.sub(v2898, stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'));
        const v2904 = stdlib.Array_set(v2897, '0', v2902);
        const v2905 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0'), v2904);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v2905],
          evt_cnt: 0,
          funcNum: 8,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v2908, time: v2907, didSend: v561, from: v2906 } = txn5;
            
            ;
            const v2909 = v2905[stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0')];
            const v2910 = v2909[stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0')];
            const v2911 = stdlib.add(v2910, stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'));
            const v2913 = stdlib.Array_set(v2909, '0', v2911);
            const v2914 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0'), v2913);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v2907;
            const cv1475 = v2914;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v2908, time: v2907, didSend: v561, from: v2906 } = txn5;
        ;
        const v2909 = v2905[stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0')];
        const v2910 = v2909[stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0')];
        const v2911 = stdlib.add(v2910, stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'));
        const v2913 = stdlib.Array_set(v2909, '0', v2911);
        const v2914 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./index.rsh:141:17:dot', stdlib.UInt_max, '0'), v2913);
        ;
        const v2915 = stdlib.addressEq(v1446, v2906);
        stdlib.assert(v2915, {
          at: './index.rsh:141:17:dot',
          fs: ['at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v2907;
        const cv1475 = v2914;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_upgradeToBronze0_77': {
        const v3037 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v3209 = null;
        await txn4.getOutput('Customer_upgradeToBronze', 'v3209', ctc0, v3209);
        stdlib.protect(ctc0, await interact.seeBronzeUpgrade(v1583), {
          at: './index.rsh:217:42:application',
          fs: ['at ./index.rsh:217:42:application call to [unknown function] (defined at: ./index.rsh:217:42:function exp)', 'at ./index.rsh:217:42:application call to "liftedInteract" (defined at: ./index.rsh:217:42:application)', 'at ./index.rsh:214:15:application call to [unknown function] (defined at: ./index.rsh:214:15:function exp)'],
          msg: 'seeBronzeUpgrade',
          who: 'Admin'
          });
        
        const v3216 = v1475[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
        const v3217 = v3216[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
        const v3221 = stdlib.sub(v3217, stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'));
        const v3223 = stdlib.Array_set(v3216, '0', v3221);
        const v3224 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0'), v3223);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v3224],
          evt_cnt: 0,
          funcNum: 9,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v3227, time: v3226, didSend: v586, from: v3225 } = txn5;
            
            ;
            const v3228 = v3224[stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0')];
            const v3229 = v3228[stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0')];
            const v3230 = stdlib.add(v3229, stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'));
            const v3232 = stdlib.Array_set(v3228, '0', v3230);
            const v3233 = stdlib.Array_set(v3224, stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0'), v3232);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v3226;
            const cv1475 = v3233;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v3227, time: v3226, didSend: v586, from: v3225 } = txn5;
        ;
        const v3228 = v3224[stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0')];
        const v3229 = v3228[stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0')];
        const v3230 = stdlib.add(v3229, stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'));
        const v3232 = stdlib.Array_set(v3228, '0', v3230);
        const v3233 = stdlib.Array_set(v3224, stdlib.checkedBigNumberify('./index.rsh:220:17:dot', stdlib.UInt_max, '0'), v3232);
        ;
        const v3234 = stdlib.addressEq(v1446, v3225);
        stdlib.assert(v3234, {
          at: './index.rsh:220:17:dot',
          fs: ['at ./index.rsh:214:15:application call to [unknown function] (defined at: ./index.rsh:214:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v3226;
        const cv1475 = v3233;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_upgradeToGold0_77': {
        const v3327 = v1584[1];
        undefined /* setApiDetails */;
        const v3342 = stdlib.add(v1476, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
        ;
        const v3530 = null;
        await txn4.getOutput('Customer_upgradeToGold', 'v3530', ctc0, v3530);
        stdlib.protect(ctc0, await interact.seeGoldUpgrade(v1583), {
          at: './index.rsh:191:40:application',
          fs: ['at ./index.rsh:191:40:application call to [unknown function] (defined at: ./index.rsh:191:40:function exp)', 'at ./index.rsh:191:40:application call to "liftedInteract" (defined at: ./index.rsh:191:40:application)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
          msg: 'seeGoldUpgrade',
          who: 'Admin'
          });
        
        const v3538 = v1475[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
        const v3539 = v3538[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
        const v3543 = stdlib.sub(v3539, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
        const v3545 = stdlib.Array_set(v3538, '0', v3543);
        const v3546 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0'), v3545);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v3342, v3546],
          evt_cnt: 0,
          funcNum: 10,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v3549, time: v3548, didSend: v614, from: v3547 } = txn5;
            
            ;
            const v3550 = v3546[stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0')];
            const v3551 = v3550[stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0')];
            const v3552 = stdlib.add(v3551, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
            const v3554 = stdlib.Array_set(v3550, '0', v3552);
            const v3555 = stdlib.Array_set(v3546, stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0'), v3554);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v3548;
            const cv1475 = v3555;
            const cv1476 = v3342;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v3549, time: v3548, didSend: v614, from: v3547 } = txn5;
        ;
        const v3550 = v3546[stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0')];
        const v3551 = v3550[stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0')];
        const v3552 = stdlib.add(v3551, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
        const v3554 = stdlib.Array_set(v3550, '0', v3552);
        const v3555 = stdlib.Array_set(v3546, stdlib.checkedBigNumberify('./index.rsh:194:17:dot', stdlib.UInt_max, '0'), v3554);
        ;
        const v3556 = stdlib.addressEq(v1446, v3547);
        stdlib.assert(v3556, {
          at: './index.rsh:194:17:dot',
          fs: ['at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v3548;
        const cv1475 = v3555;
        const cv1476 = v3342;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_upgradeToSilver0_77': {
        const v3617 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v3850 = null;
        await txn4.getOutput('Customer_upgradeToSilver', 'v3850', ctc0, v3850);
        stdlib.protect(ctc0, await interact.seeSilverUpgrade(v1583), {
          at: './index.rsh:204:42:application',
          fs: ['at ./index.rsh:204:42:application call to [unknown function] (defined at: ./index.rsh:204:42:function exp)', 'at ./index.rsh:204:42:application call to "liftedInteract" (defined at: ./index.rsh:204:42:application)', 'at ./index.rsh:201:15:application call to [unknown function] (defined at: ./index.rsh:201:15:function exp)'],
          msg: 'seeSilverUpgrade',
          who: 'Admin'
          });
        
        const v3857 = v1475[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
        const v3858 = v3857[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
        const v3862 = stdlib.sub(v3858, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'));
        const v3864 = stdlib.Array_set(v3857, '0', v3862);
        const v3865 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0'), v3864);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v3865],
          evt_cnt: 0,
          funcNum: 11,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v3868, time: v3867, didSend: v639, from: v3866 } = txn5;
            
            ;
            const v3869 = v3865[stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0')];
            const v3870 = v3869[stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0')];
            const v3871 = stdlib.add(v3870, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'));
            const v3873 = stdlib.Array_set(v3869, '0', v3871);
            const v3874 = stdlib.Array_set(v3865, stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0'), v3873);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v3867;
            const cv1475 = v3874;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v3868, time: v3867, didSend: v639, from: v3866 } = txn5;
        ;
        const v3869 = v3865[stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0')];
        const v3870 = v3869[stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0')];
        const v3871 = stdlib.add(v3870, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'));
        const v3873 = stdlib.Array_set(v3869, '0', v3871);
        const v3874 = stdlib.Array_set(v3865, stdlib.checkedBigNumberify('./index.rsh:207:17:dot', stdlib.UInt_max, '0'), v3873);
        ;
        const v3875 = stdlib.addressEq(v1446, v3866);
        stdlib.assert(v3875, {
          at: './index.rsh:207:17:dot',
          fs: ['at ./index.rsh:201:15:application call to [unknown function] (defined at: ./index.rsh:201:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v3867;
        const cv1475 = v3874;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      case 'Customer_upgradeToVIP0_77': {
        const v3907 = v1584[1];
        undefined /* setApiDetails */;
        ;
        const v4169 = null;
        await txn4.getOutput('Customer_upgradeToVIP', 'v4169', ctc0, v4169);
        stdlib.protect(ctc0, await interact.seeVipUpgrade(v1583), {
          at: './index.rsh:230:39:application',
          fs: ['at ./index.rsh:230:39:application call to [unknown function] (defined at: ./index.rsh:230:39:function exp)', 'at ./index.rsh:230:39:application call to "liftedInteract" (defined at: ./index.rsh:230:39:application)', 'at ./index.rsh:227:15:application call to [unknown function] (defined at: ./index.rsh:227:15:function exp)'],
          msg: 'seeVipUpgrade',
          who: 'Admin'
          });
        
        const v4176 = v1475[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
        const v4177 = v4176[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
        const v4181 = stdlib.sub(v4177, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'));
        const v4183 = stdlib.Array_set(v4176, '0', v4181);
        const v4184 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0'), v4183);
        ;
        const txn5 = await (ctc.sendrecv({
          args: [v1446, v1447, v1468, v1476, v4184],
          evt_cnt: 0,
          funcNum: 12,
          lct: v1585,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'), v1447]]],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            
            const {data: [], secs: v4187, time: v4186, didSend: v664, from: v4185 } = txn5;
            
            ;
            const v4188 = v4184[stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0')];
            const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0')];
            const v4190 = stdlib.add(v4189, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'));
            const v4192 = stdlib.Array_set(v4188, '0', v4190);
            const v4193 = stdlib.Array_set(v4184, stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0'), v4192);
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'),
              kind: 'to',
              tok: v1447
              });
            const cv1468 = v1468;
            const cv1469 = v4186;
            const cv1475 = v4193;
            const cv1476 = v1476;
            
            await (async () => {
              const v1468 = cv1468;
              const v1469 = cv1469;
              const v1475 = cv1475;
              const v1476 = cv1476;
              
              if (await (async () => {
                const v1488 = stdlib.lt(v1468, stdlib.checkedBigNumberify('./index.rsh:114:20:decimal', stdlib.UInt_max, '5'));
                
                return v1488;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: v1447
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v1446,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v1447
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc7, ctc2, ctc4, ctc4, ctc10],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v4187, time: v4186, didSend: v664, from: v4185 } = txn5;
        ;
        const v4188 = v4184[stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0')];
        const v4189 = v4188[stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0')];
        const v4190 = stdlib.add(v4189, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'));
        const v4192 = stdlib.Array_set(v4188, '0', v4190);
        const v4193 = stdlib.Array_set(v4184, stdlib.checkedBigNumberify('./index.rsh:233:17:dot', stdlib.UInt_max, '0'), v4192);
        ;
        const v4194 = stdlib.addressEq(v1446, v4185);
        stdlib.assert(v4194, {
          at: './index.rsh:233:17:dot',
          fs: ['at ./index.rsh:227:15:application call to [unknown function] (defined at: ./index.rsh:227:15:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1468 = v1468;
        const cv1469 = v4186;
        const cv1475 = v4193;
        const cv1476 = v1476;
        
        v1468 = cv1468;
        v1469 = cv1469;
        v1475 = cv1475;
        v1476 = cv1476;
        
        txn3 = txn5;
        continue;
        
        
        break;
        }
      }
    
    }
  const v4197 = v1475[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
  const v4198 = v4197[stdlib.checkedBigNumberify('./index.rsh:354:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function _Customer_answerQuestion4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_answerQuestion4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_answerQuestion4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1523 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:159:39:application call to [unknown function] (defined at: ./index.rsh:159:39:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_answerQuestion0_77" (defined at: ./index.rsh:159:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_answerQuestion'
    });
  const v1527 = ['Customer_answerQuestion0_77', v1523];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1527],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:159:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_answerQuestion"
            });
          ;
          const v1604 = null;
          const v1605 = await txn1.getOutput('Customer_answerQuestion', 'v1604', ctc0, v1604);
          
          const v1611 = v1475[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
          const v1612 = v1611[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
          const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'));
          const v1618 = stdlib.Array_set(v1611, '0', v1616);
          const v1619 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0'), v1618);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v1604 = null;
      const v1605 = await txn1.getOutput('Customer_answerQuestion', 'v1604', ctc0, v1604);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v1587, v1605), {
          at: './index.rsh:159:11:application',
          fs: ['at ./index.rsh:159:11:application call to [unknown function] (defined at: ./index.rsh:159:11:function exp)', 'at ./index.rsh:162:14:application call to "ret" (defined at: ./index.rsh:161:15:function exp)', 'at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:15:function exp)'],
          msg: 'out',
          who: 'Customer_answerQuestion'
          });
        }
      else {
        }
      
      const v1611 = v1475[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
      const v1612 = v1611[stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0')];
      const v1616 = stdlib.sub(v1612, stdlib.checkedBigNumberify('./index.rsh:28:20:decimal', stdlib.UInt_max, '20000'));
      const v1618 = stdlib.Array_set(v1611, '0', v1616);
      const v1619 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:165:41:application', stdlib.UInt_max, '0'), v1618);
      ;
      return;
      
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_enroll4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_enroll4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_enroll4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1489 = ctc.selfAddress();
  const v1491 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:116:31:application call to [unknown function] (defined at: ./index.rsh:116:31:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:116:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_enroll'
    });
  const v1492 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1489), null);
  const v1493 = {
    None: 0,
    Some: 1
    }[v1492[0]];
  const v1494 = stdlib.eq(v1493, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1495 = v1494 ? false : true;
  stdlib.assert(v1495, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:31:application call to [unknown function] (defined at: ./index.rsh:116:31:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:116:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'Already enrolled into the loyalty program',
    who: 'Customer_enroll'
    });
  const v1497 = stdlib.addressEq(v1489, v1446);
  const v1498 = v1497 ? false : true;
  stdlib.assert(v1498, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:116:31:application call to [unknown function] (defined at: ./index.rsh:116:31:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_enroll0_77" (defined at: ./index.rsh:116:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'You are the Admin',
    who: 'Customer_enroll'
    });
  const v1503 = ['Customer_enroll0_77', v1491];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1503],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:116:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_enroll"
            });
          ;
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1583), null);
          const v1931 = null;
          const v1932 = await txn1.getOutput('Customer_enroll', 'v1931', ctc0, v1931);
          
          await stdlib.simMapSet(sim_r, 0, v1583, null);
          const v1939 = v1475[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
          const v1940 = v1939[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
          const v1944 = stdlib.sub(v1940, stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'));
          const v1946 = stdlib.Array_set(v1939, '0', v1944);
          const v1947 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0'), v1946);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v1923 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1583), null);
      const v1924 = {
        None: 0,
        Some: 1
        }[v1923[0]];
      const v1925 = stdlib.eq(v1924, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1926 = v1925 ? false : true;
      stdlib.assert(v1926, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
        msg: 'Already enrolled into the loyalty program',
        who: 'Customer_enroll'
        });
      const v1928 = stdlib.addressEq(v1583, v1446);
      const v1929 = v1928 ? false : true;
      stdlib.assert(v1929, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
        msg: 'You are the Admin',
        who: 'Customer_enroll'
        });
      const v1931 = null;
      const v1932 = await txn1.getOutput('Customer_enroll', 'v1931', ctc0, v1931);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v1877, v1932), {
          at: './index.rsh:116:11:application',
          fs: ['at ./index.rsh:116:11:application call to [unknown function] (defined at: ./index.rsh:116:11:function exp)', 'at ./index.rsh:122:14:application call to "ret" (defined at: ./index.rsh:121:15:function exp)', 'at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
          msg: 'out',
          who: 'Customer_enroll'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v1583, null);
      const v1939 = v1475[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
      const v1940 = v1939[stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0')];
      const v1944 = stdlib.sub(v1940, stdlib.checkedBigNumberify('./index.rsh:18:26:decimal', stdlib.UInt_max, '2'));
      const v1946 = stdlib.Array_set(v1939, '0', v1944);
      const v1947 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:126:47:application', stdlib.UInt_max, '0'), v1946);
      ;
      return;
      
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_playGame4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_playGame4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_playGame4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1531 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:172:33:application call to [unknown function] (defined at: ./index.rsh:172:33:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_playGame0_77" (defined at: ./index.rsh:172:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_playGame'
    });
  const v1535 = ['Customer_playGame0_77', v1531];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1535],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:172:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_playGame"
            });
          ;
          const v2252 = null;
          const v2253 = await txn1.getOutput('Customer_playGame', 'v2252', ctc0, v2252);
          
          const v2259 = v1475[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
          const v2260 = v2259[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
          const v2264 = stdlib.sub(v2260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'));
          const v2266 = stdlib.Array_set(v2259, '0', v2264);
          const v2267 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0'), v2266);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v2252 = null;
      const v2253 = await txn1.getOutput('Customer_playGame', 'v2252', ctc0, v2252);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v2167, v2253), {
          at: './index.rsh:172:11:application',
          fs: ['at ./index.rsh:172:11:application call to [unknown function] (defined at: ./index.rsh:172:11:function exp)', 'at ./index.rsh:175:14:application call to "ret" (defined at: ./index.rsh:174:15:function exp)', 'at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)'],
          msg: 'out',
          who: 'Customer_playGame'
          });
        }
      else {
        }
      
      const v2259 = v1475[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
      const v2260 = v2259[stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0')];
      const v2264 = stdlib.sub(v2260, stdlib.checkedBigNumberify('./index.rsh:25:18:decimal', stdlib.UInt_max, '5000'));
      const v2266 = stdlib.Array_set(v2259, '0', v2264);
      const v2267 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:178:39:application', stdlib.UInt_max, '0'), v2266);
      ;
      return;
      
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_readBlog4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_readBlog4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_readBlog4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1515 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:146:33:application call to [unknown function] (defined at: ./index.rsh:146:33:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_readBlog0_77" (defined at: ./index.rsh:146:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_readBlog'
    });
  const v1519 = ['Customer_readBlog0_77', v1515];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1519],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:146:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_readBlog"
            });
          ;
          const v2571 = null;
          const v2572 = await txn1.getOutput('Customer_readBlog', 'v2571', ctc0, v2571);
          
          const v2578 = v1475[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
          const v2579 = v2578[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
          const v2583 = stdlib.sub(v2579, stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'));
          const v2585 = stdlib.Array_set(v2578, '0', v2583);
          const v2586 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0'), v2585);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v2571 = null;
      const v2572 = await txn1.getOutput('Customer_readBlog', 'v2571', ctc0, v2571);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v2457, v2572), {
          at: './index.rsh:146:11:application',
          fs: ['at ./index.rsh:146:11:application call to [unknown function] (defined at: ./index.rsh:146:11:function exp)', 'at ./index.rsh:149:14:application call to "ret" (defined at: ./index.rsh:148:15:function exp)', 'at ./index.rsh:148:15:application call to [unknown function] (defined at: ./index.rsh:148:15:function exp)'],
          msg: 'out',
          who: 'Customer_readBlog'
          });
        }
      else {
        }
      
      const v2578 = v1475[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
      const v2579 = v2578[stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0')];
      const v2583 = stdlib.sub(v2579, stdlib.checkedBigNumberify('./index.rsh:27:22:decimal', stdlib.UInt_max, '10'));
      const v2585 = stdlib.Array_set(v2578, '0', v2583);
      const v2586 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:152:43:application', stdlib.UInt_max, '0'), v2585);
      ;
      return;
      
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_referFriend4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_referFriend4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_referFriend4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1507 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:133:36:application call to [unknown function] (defined at: ./index.rsh:133:36:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_referFriend0_77" (defined at: ./index.rsh:133:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_referFriend'
    });
  const v1511 = ['Customer_referFriend0_77', v1507];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1511],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:133:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_referFriend"
            });
          ;
          const v2890 = null;
          const v2891 = await txn1.getOutput('Customer_referFriend', 'v2890', ctc0, v2890);
          
          const v2897 = v1475[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
          const v2898 = v2897[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
          const v2902 = stdlib.sub(v2898, stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'));
          const v2904 = stdlib.Array_set(v2897, '0', v2902);
          const v2905 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0'), v2904);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v2890 = null;
      const v2891 = await txn1.getOutput('Customer_referFriend', 'v2890', ctc0, v2890);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v2747, v2891), {
          at: './index.rsh:133:11:application',
          fs: ['at ./index.rsh:133:11:application call to [unknown function] (defined at: ./index.rsh:133:11:function exp)', 'at ./index.rsh:136:14:application call to "ret" (defined at: ./index.rsh:135:15:function exp)', 'at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)'],
          msg: 'out',
          who: 'Customer_referFriend'
          });
        }
      else {
        }
      
      const v2897 = v1475[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
      const v2898 = v2897[stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0')];
      const v2902 = stdlib.sub(v2898, stdlib.checkedBigNumberify('./index.rsh:19:24:decimal', stdlib.UInt_max, '5'));
      const v2904 = stdlib.Array_set(v2897, '0', v2902);
      const v2905 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:139:45:application', stdlib.UInt_max, '0'), v2904);
      ;
      return;
      
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_upgradeToBronze4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToBronze4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToBronze4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1559 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:212:40:application call to [unknown function] (defined at: ./index.rsh:212:40:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_upgradeToBronze0_77" (defined at: ./index.rsh:212:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_upgradeToBronze'
    });
  const v1563 = ['Customer_upgradeToBronze0_77', v1559];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1563],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:212:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_upgradeToBronze"
            });
          ;
          const v3209 = null;
          const v3210 = await txn1.getOutput('Customer_upgradeToBronze', 'v3209', ctc0, v3209);
          
          const v3216 = v1475[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
          const v3217 = v3216[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
          const v3221 = stdlib.sub(v3217, stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'));
          const v3223 = stdlib.Array_set(v3216, '0', v3221);
          const v3224 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0'), v3223);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v3209 = null;
      const v3210 = await txn1.getOutput('Customer_upgradeToBronze', 'v3209', ctc0, v3209);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v3037, v3210), {
          at: './index.rsh:212:11:application',
          fs: ['at ./index.rsh:212:11:application call to [unknown function] (defined at: ./index.rsh:212:11:function exp)', 'at ./index.rsh:215:14:application call to "ret" (defined at: ./index.rsh:214:15:function exp)', 'at ./index.rsh:214:15:application call to [unknown function] (defined at: ./index.rsh:214:15:function exp)'],
          msg: 'out',
          who: 'Customer_upgradeToBronze'
          });
        }
      else {
        }
      
      const v3216 = v1475[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
      const v3217 = v3216[stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0')];
      const v3221 = stdlib.sub(v3217, stdlib.checkedBigNumberify('./index.rsh:23:26:decimal', stdlib.UInt_max, '1'));
      const v3223 = stdlib.Array_set(v3216, '0', v3221);
      const v3224 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:218:47:application', stdlib.UInt_max, '0'), v3223);
      ;
      return;
      
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_upgradeToGold4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToGold4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToGold4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([ctc4]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc9,
    Customer_enroll0_77: ctc9,
    Customer_playGame0_77: ctc9,
    Customer_readBlog0_77: ctc9,
    Customer_referFriend0_77: ctc9,
    Customer_upgradeToBronze0_77: ctc9,
    Customer_upgradeToGold0_77: ctc8,
    Customer_upgradeToSilver0_77: ctc9,
    Customer_upgradeToVIP0_77: ctc9
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1539 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:185:42:application call to [unknown function] (defined at: ./index.rsh:185:42:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_upgradeToGold0_77" (defined at: ./index.rsh:185:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_upgradeToGold'
    });
  const v1547 = ['Customer_upgradeToGold0_77', v1539];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1547],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_upgradeToGold"
            });
          const v3342 = stdlib.add(v1476, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3530 = null;
          const v3531 = await txn1.getOutput('Customer_upgradeToGold', 'v3530', ctc0, v3530);
          
          const v3538 = v1475[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
          const v3539 = v3538[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
          const v3543 = stdlib.sub(v3539, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
          const v3545 = stdlib.Array_set(v3538, '0', v3543);
          const v3546 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0'), v3545);
          sim_r.txns.push({
            kind: 'from',
            to: v1446,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      undefined /* setApiDetails */;
      const v3342 = stdlib.add(v1476, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
      ;
      const v3530 = null;
      const v3531 = await txn1.getOutput('Customer_upgradeToGold', 'v3530', ctc0, v3530);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v3327, v3531), {
          at: './index.rsh:185:11:application',
          fs: ['at ./index.rsh:185:11:application call to [unknown function] (defined at: ./index.rsh:185:11:function exp)', 'at ./index.rsh:189:14:application call to "ret" (defined at: ./index.rsh:188:15:function exp)', 'at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
          msg: 'out',
          who: 'Customer_upgradeToGold'
          });
        }
      else {
        }
      
      const v3538 = v1475[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
      const v3539 = v3538[stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0')];
      const v3543 = stdlib.sub(v3539, stdlib.checkedBigNumberify('./index.rsh:21:24:decimal', stdlib.UInt_max, '5'));
      const v3545 = stdlib.Array_set(v3538, '0', v3543);
      const v3546 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:192:45:application', stdlib.UInt_max, '0'), v3545);
      ;
      return;
      
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_upgradeToSilver4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToSilver4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToSilver4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1551 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:199:40:application call to [unknown function] (defined at: ./index.rsh:199:40:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_upgradeToSilver0_77" (defined at: ./index.rsh:199:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_upgradeToSilver'
    });
  const v1555 = ['Customer_upgradeToSilver0_77', v1551];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1555],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:199:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_upgradeToSilver"
            });
          ;
          const v3850 = null;
          const v3851 = await txn1.getOutput('Customer_upgradeToSilver', 'v3850', ctc0, v3850);
          
          const v3857 = v1475[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
          const v3858 = v3857[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
          const v3862 = stdlib.sub(v3858, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'));
          const v3864 = stdlib.Array_set(v3857, '0', v3862);
          const v3865 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0'), v3864);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v3850 = null;
      const v3851 = await txn1.getOutput('Customer_upgradeToSilver', 'v3850', ctc0, v3850);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v3617, v3851), {
          at: './index.rsh:199:11:application',
          fs: ['at ./index.rsh:199:11:application call to [unknown function] (defined at: ./index.rsh:199:11:function exp)', 'at ./index.rsh:202:14:application call to "ret" (defined at: ./index.rsh:201:15:function exp)', 'at ./index.rsh:201:15:application call to [unknown function] (defined at: ./index.rsh:201:15:function exp)'],
          msg: 'out',
          who: 'Customer_upgradeToSilver'
          });
        }
      else {
        }
      
      const v3857 = v1475[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
      const v3858 = v3857[stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0')];
      const v3862 = stdlib.sub(v3858, stdlib.checkedBigNumberify('./index.rsh:22:26:decimal', stdlib.UInt_max, '3'));
      const v3864 = stdlib.Array_set(v3857, '0', v3862);
      const v3865 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:205:47:application', stdlib.UInt_max, '0'), v3864);
      ;
      return;
      
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Customer_upgradeToVIP4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToVIP4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Customer_upgradeToVIP4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc4, ctc4, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc4]);
  const ctc10 = stdlib.T_Data({
    Customer_answerQuestion0_77: ctc8,
    Customer_enroll0_77: ctc8,
    Customer_playGame0_77: ctc8,
    Customer_readBlog0_77: ctc8,
    Customer_referFriend0_77: ctc8,
    Customer_upgradeToBronze0_77: ctc8,
    Customer_upgradeToGold0_77: ctc9,
    Customer_upgradeToSilver0_77: ctc8,
    Customer_upgradeToVIP0_77: ctc8
    });
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v1446, v1447, v1468, v1475, v1476] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc2, ctc3, ctc4, ctc7, ctc4]);
  const v1567 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:225:37:application call to [unknown function] (defined at: ./index.rsh:225:37:function exp)', 'at ./index.rsh:110:33:application call to "runCustomer_upgradeToVIP0_77" (defined at: ./index.rsh:225:10:function exp)', 'at ./index.rsh:110:33:application call to [unknown function] (defined at: ./index.rsh:110:33:function exp)'],
    msg: 'in',
    who: 'Customer_upgradeToVIP'
    });
  const v1571 = ['Customer_upgradeToVIP0_77', v1567];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1446, v1447, v1468, v1475, v1476, v1571],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./index.rsh:225:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
      
      switch (v1584[0]) {
        case 'Customer_answerQuestion0_77': {
          const v1587 = v1584[1];
          
          break;
          }
        case 'Customer_enroll0_77': {
          const v1877 = v1584[1];
          
          break;
          }
        case 'Customer_playGame0_77': {
          const v2167 = v1584[1];
          
          break;
          }
        case 'Customer_readBlog0_77': {
          const v2457 = v1584[1];
          
          break;
          }
        case 'Customer_referFriend0_77': {
          const v2747 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToBronze0_77': {
          const v3037 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToGold0_77': {
          const v3327 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToSilver0_77': {
          const v3617 = v1584[1];
          
          break;
          }
        case 'Customer_upgradeToVIP0_77': {
          const v3907 = v1584[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Customer_upgradeToVIP"
            });
          ;
          const v4169 = null;
          const v4170 = await txn1.getOutput('Customer_upgradeToVIP', 'v4169', ctc0, v4169);
          
          const v4176 = v1475[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
          const v4177 = v4176[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
          const v4181 = stdlib.sub(v4177, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'));
          const v4183 = stdlib.Array_set(v4176, '0', v4181);
          const v4184 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0'), v4183);
          sim_r.txns.push({
            kind: 'from',
            to: v1583,
            tok: v1447
            });
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc4, ctc7, ctc4, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1584], secs: v1586, time: v1585, didSend: v395, from: v1583 } = txn1;
  switch (v1584[0]) {
    case 'Customer_answerQuestion0_77': {
      const v1587 = v1584[1];
      return;
      break;
      }
    case 'Customer_enroll0_77': {
      const v1877 = v1584[1];
      return;
      break;
      }
    case 'Customer_playGame0_77': {
      const v2167 = v1584[1];
      return;
      break;
      }
    case 'Customer_readBlog0_77': {
      const v2457 = v1584[1];
      return;
      break;
      }
    case 'Customer_referFriend0_77': {
      const v2747 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToBronze0_77': {
      const v3037 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToGold0_77': {
      const v3327 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToSilver0_77': {
      const v3617 = v1584[1];
      return;
      break;
      }
    case 'Customer_upgradeToVIP0_77': {
      const v3907 = v1584[1];
      undefined /* setApiDetails */;
      ;
      const v4169 = null;
      const v4170 = await txn1.getOutput('Customer_upgradeToVIP', 'v4169', ctc0, v4169);
      if (v395) {
        stdlib.protect(ctc0, await interact.out(v3907, v4170), {
          at: './index.rsh:225:11:application',
          fs: ['at ./index.rsh:225:11:application call to [unknown function] (defined at: ./index.rsh:225:11:function exp)', 'at ./index.rsh:228:14:application call to "ret" (defined at: ./index.rsh:227:15:function exp)', 'at ./index.rsh:227:15:application call to [unknown function] (defined at: ./index.rsh:227:15:function exp)'],
          msg: 'out',
          who: 'Customer_upgradeToVIP'
          });
        }
      else {
        }
      
      const v4176 = v1475[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
      const v4177 = v4176[stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0')];
      const v4181 = stdlib.sub(v4177, stdlib.checkedBigNumberify('./index.rsh:24:23:decimal', stdlib.UInt_max, '10'));
      const v4183 = stdlib.Array_set(v4176, '0', v4181);
      const v4184 = stdlib.Array_set(v1475, stdlib.checkedBigNumberify('./index.rsh:231:44:application', stdlib.UInt_max, '0'), v4183);
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function Customer_answerQuestion(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_answerQuestion expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_answerQuestion expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_answerQuestion4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_enroll(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_enroll expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_enroll expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_enroll4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_playGame(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_playGame expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_playGame expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_playGame4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_readBlog(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_readBlog expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_readBlog expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_readBlog4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_referFriend(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_referFriend expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_referFriend expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_referFriend4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_upgradeToBronze(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_upgradeToBronze expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_upgradeToBronze expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_upgradeToBronze4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_upgradeToGold(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_upgradeToGold expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_upgradeToGold expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_upgradeToGold4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_upgradeToSilver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_upgradeToSilver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_upgradeToSilver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_upgradeToSilver4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Customer_upgradeToVIP(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer_upgradeToVIP expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer_upgradeToVIP expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Customer_upgradeToVIP4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Customer_answerQuestion()byte[0]`, `Customer_enroll()byte[0]`, `Customer_playGame()byte[0]`, `Customer_readBlog()byte[0]`, `Customer_referFriend()byte[0]`, `Customer_upgradeToBronze()byte[0]`, `Customer_upgradeToGold(uint64)byte[0]`, `Customer_upgradeToSilver()byte[0]`, `Customer_upgradeToVIP()byte[0]`],
    pure: [`Info_details()uint64`],
    sigs: [`Customer_answerQuestion()byte[0]`, `Customer_enroll()byte[0]`, `Customer_playGame()byte[0]`, `Customer_readBlog()byte[0]`, `Customer_referFriend()byte[0]`, `Customer_upgradeToBronze()byte[0]`, `Customer_upgradeToGold(uint64)byte[0]`, `Customer_upgradeToSilver()byte[0]`, `Customer_upgradeToVIP()byte[0]`, `Info_details()uint64`]
    },
  appApproval: `ByAdAAEEBQgKICgwAwIMBgcLDQmIJ6CcAaCNBrbH7JQMm8eupQ75iLTmDsf0/+8Oj6O+pw2ukbO5BNDHmLEF1duA/QmX26f9AiYDAQAAAQEiNQAxGEELZSlkSSJbNQEhBFs1AjEZIxJBAAgxACgoZkILMzYaABdJQQHgIjUEIzUGSSEUDEAAfkkhFQxAAEhJIRYMQAAtSSEXDEAAEiEXEkQ2GgE1/4ABBjT/UEIFjyEWEkQpNf+AAQc0/1AhBK9QQgV7IRUSRCk1/4ABBTT/UCEEr1BCBWdJIRgMQAAUIRgSRCk1/4ABBDT/UCEEr1BCBUwhFBJEKTX/gAEDNP9QIQSvUEIFOEkhGQxAAR1JIRoMQAAtSSEbDEAAFCEbEkQpNf+AAQg0/1AhBK9QQgUPIRoSRCk1/yg0/1AhBK9QQgT9IRkSRDQBSSEEDEAAekkhDgxAADtJIQsMQAAmSSEPDEAAESEPEkQoZEk1A1cgCDUHQgpBSChkSTUDVyAINQdCCjNIKGRJNQNXIAg1B0IKJUkhEAxAACNJIQUMQAAOSChkSTUDVyAINQdCCglIKGRJNQNXIAg1B0IJ+0goZEk1A1cgCDUHQgntSSUMQAA4SSEMDEAAI0khDQxAAA5IKGRJNQNXIAg1B0IJy0goZEk1A1cgCDUHQgm9SChkSTUDVyAINQdCCa9JJAxAAA5IKGRJNQNXIAg1B0IJmyMSRChkSTUDVyAINQdCCYtJIRwMQAAUIRwSRCk1/4ABAjT/UCEEr1BCA/mB/Nr8ygESRCk1/yo0/1AhBK9QQgPjNhoCFzUENhoDNhoBF0khDQxAAn5JIQUMQAE+SSEODEAA1EkhCwxAAGghCxJEIQ80ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lc4ETX9gATKq843sDT9VwARNfwhBTT+iAk8NP8xABJENP80/jQDIQdbMgY0/TT8SSJbIQUIFlwAXAA0AyEIW0IICUghCzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VzgRNf2ABOPZNjWwNP1XABE1/CEJNP6ICNc0/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlshCQgWXABcADQDIQhbQgekSCEONAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQZbNf5XOBE1/YAE00RzI7A0/VcAETX8JTT+iAhzNP8xABJENP80/jQDIQdbMgY0/TT8SSJbJQgWXABcADQDIQhbQgdBSSEEDEAAzUkhEAxAAGNIIQU0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lc4ETX9gASiBWaOsDT9VwARNfwjNP6ICAI0/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlsjCBZcAFwANAMhCFtCBtBIIRA0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lc4ETX9gAQX/NsusDT9VwARNfwlNP6IB580/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlslCBZcAFwANAMhCFtCBm1IIQQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lc4ETX9gATiG7OpsDT9VwARNfwhBTT+iAc7NP8xABJENP80/jQDIQdbMgY0/TT8SSJbIQUIFlwAXAA0AyEIW0IGCEkkDEABPUklDEAA00khDAxAAGVIIQ00ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lc4ETX9gARhtKwMsDT9VwARNfwhETT+iAbDNP8xABJENP80/jQDIQdbMgY0/TT8SSJbIREIFlwAXAA0AyEIW0IFkEghDDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VzgRNf2ABMyZklywNP1XABE1/CEKNP6IBl40/zEAEkQ0/zT+NAMhB1sjCDIGNP00/EkiWyEKCBZcAFwANAMhCFtCBSlIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VzgRNf2ABJEnNPOwNP1XABE1/CESNP6IBfg0/zEAEkQ0/zT+NAMhB1syBjT9NPxJIlshEggWXABcADQDIQhbQgTFSSMMQARRSSEJDEAD7EgkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQdbNf1XMBE1/IFBWzX7STUFNfqABJHxp5o0+lCwNPoiVUkkDEAB/UkhDAxAATZJIQ0MQADISSEEDEAAYiEEEkSACAAAAAAAABBJsCk1BzT8VwARNfk0/DT5SSJbIQUJFlwAXAA1+LEisgEhBbISJLIQMQCyFDT+shGzNP80/hZQNP0WUDT7FlA0+FAoSwFXAElnSCEPNQEyBjUCQgSKSIAIAAAAAAAADwqwKTUHNPxXABE1+TT8NPlJIlshCQkWXABcADX4sSKyASEJshIkshAxALIUNP6yEbM0/zT+FlA0/RZQNPsWUDT4UChLAVcASWdIIQs1ATIGNQJCBCtINPslCDX5JYgEf4AIAAAAAAAADcqwKTUHNPxXABE1+DT8NPhJIlslCRZcAFwANfexIrIBJbISJLIQNP+yFDT+shGzNP80/hZQNP0WUDT5FlA091AoSwFXAElnSCEONQEyBjUCQgPESSUMQABdSIAIAAAAAAAADImwKTUHNPxXABE1+TT8NPlJIlsjCRZcAFwANfixIrIBI7ISJLIQMQCyFDT+shGzNP80/hZQNP0WUDT7FlA0+FAoSwFXAElnSCEFNQEyBjUCQgNhSIAIAAAAAAAAC0qwKTUHNPxXABE1+TT8NPlJIlslCRZcAFwANfixIrIBJbISJLIQMQCyFDT+shGzNP80/hZQNP0WUDT7FlA0+FAoSwFXAElnSCEQNQEyBjUCQgMESSEKDEAAxUkhCQxAAF9IgAgAAAAAAAAKC7ApNQc0/FcAETX5NPw0+UkiWyEFCRZcAFwANfixIrIBIQWyEiSyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0ghBDUBMgY1AkICl0iACAAAAAAAAAjMsCk1BzT8VwARNfk0/DT5SSJbIREJFlwAXAA1+LEisgEhEbISJLIQMQCyFDT+shGzNP80/hZQNP0WUDT7FlA0+FAoSwFXAElnSCENNQEyBjUCQgI4SSMMQAB0SDEAiAJ+IlUjE0QxADT/E0SACAAAAAAAAAeLsCk1BzEAKCpmNPxXABE1+TT8NPlJIlshCgkWXABcADX4sSKyASEKshIkshAxALIUNP6yEbM0/zT+FlA0/RZQNPsWUDT4UChLAVcASWdIIQw1ATIGNQJCAb5IgAgAAAAAAAAGRLApNQc0/FcAETX5NPw0+UkiWyESCRZcAFwANfixIrIBIRKyEiSyEDEAshQ0/rIRszT/NP4WUDT9FlA0+xZQNPhQKEsBVwBJZ0glNQEyBjUCQgFgIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VygRNf2ABJqLkXSwNP1XABE1/CETNP6IAZk0/zEAEkQ0/zT+IjIGNP00/EkiWyETCBZcAFwAIkIAbkghE4gBWyI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIERrzX+IROIATCxIrIBIrISJLIQMgqyFDT/shGzNP5JVwARIQSvXABcADX9MQA0/xZQNP1QKEsBVwA5Z0gjNQEyBjUCQgCUNf81/jX9Nfw1+zX6NPwlDEEAIzT6NPsWUDT8FlA0/lA0/xZQKEsBVwBJZ0gkNQEyBjUCQgBesSKyATT+VwARIluyEiSyEDT6shQ0+7IRs7EisgE0/7III7IQNPqyB7OxIrIBIrISJLIQMgmyFTIKshQ0+7IRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEKMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAADSCiJKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 73,
  unsupported: [],
  version: 11,
  warnings: []
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
                "name": "v1447",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
                "name": "v1447",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
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
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
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
                    "internalType": "enum _enum_T23",
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
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Customer_upgradeToGold0_77",
                    "type": "tuple"
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
                "internalType": "struct T23",
                "name": "v1584",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
    "name": "_reach_oe_v1604",
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
    "name": "_reach_oe_v1931",
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
    "name": "_reach_oe_v2252",
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
    "name": "_reach_oe_v2571",
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
    "name": "_reach_oe_v2890",
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
    "name": "_reach_oe_v3209",
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
    "name": "_reach_oe_v3530",
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
    "name": "_reach_oe_v3850",
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
    "name": "_reach_oe_v4169",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
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
    "name": "Info_details",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
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
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
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
                    "internalType": "enum _enum_T23",
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
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T22",
                    "name": "_Customer_upgradeToGold0_77",
                    "type": "tuple"
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
                "internalType": "struct T23",
                "name": "v1584",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
        "internalType": "struct T21",
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
  Bytecode: `0x608060405260405162003c0338038062003c038339810160408190526200002691620003aa565b6000805543600355620000386200024f565b604080513381528351602080830191909152840151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000b734156008620001a2565b62000129816020015160006040518060600160405280600081526020018560200151600060018110620000ee57620000ee62000468565b6020020151602001518152602001856020015160006001811062000116576200011662000468565b60200201516040015115159052620001cc565b60408201526200013862000296565b338152602080840151516001600160a01b03168183015260408084015181840152600160008190554390555162000172918391016200047e565b6040516020818303038152906040526002908051906020019062000198929190620002b7565b5050505062000552565b81620001c85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001d662000346565b60005b60018110156200022c57848160018110620001f857620001f862000468565b602002015182826001811062000212576200021262000468565b6020020152806200022381620004eb565b915050620001d9565b508181846001811062000243576200024362000468565b60200201529392505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200028262000346565b81526020016200029162000346565b905290565b60408051606081018252600080825260208201529081016200029162000346565b828054620002c59062000515565b90600052602060002090601f016020900481019282620002e9576000855562000334565b82601f106200030457805160ff191683800117855562000334565b8280016001018555821562000334579182015b828111156200033457825182559160200191906001019062000317565b506200034292915062000393565b5090565b60405180602001604052806001905b6200037c604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003555790505090565b5b8082111562000342576000815560010162000394565b6000818303604080821215620003bf57600080fd5b80518082016001600160401b038082118383101715620003ef57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200040957600080fd5b8351945060208501915084821081831117156200043657634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200045657600080fd5b90825260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401519091168183015260408084015160a08401929082850160005b6001811015620004e057825180518352848101518584015285015115158583015291830191606090910190600101620004ac565b505050505092915050565b60006000198214156200050e57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200052a57607f821691505b602082108114156200054c57634e487b7160e01b600052602260045260246000fd5b50919050565b6136a180620005626000396000f3fe60806040526004361061015a5760003560e01c806383230757116100c8578063bf2c5b2411610084578063e00acef111610061578063e00acef11461030c578063e533a29d1461031f578063ed1927e114610332578063fca3bc0d1461033a57005b8063bf2c5b24146102d3578063c7980037146102e6578063de736998146102f957005b8063832307571461025a5780638b9fadc81461026f5780638e31476914610282578063a7661d5414610295578063ab53f2c6146102a8578063b2b24ed1146102cb57005b806331df50cb1161011757806331df50cb146101fa5780633bc5b7bf146102025780634d8ffbe21461022f57806370e483671461023757806377c05a971461023f578063795eb08c1461024757005b8062060f3214610163578063091ddfba1461018057806311faee8c1461018857806316674bfa1461019b5780631e93b0f1146101c85780632c10a159146101e757005b3661016157005b005b61016b61034d565b60405190151581526020015b60405180910390f35b61016b61035c565b610161610196366004612e42565b610366565b3480156101a757600080fd5b506101b061038a565b6040516001600160a01b039091168152602001610177565b3480156101d457600080fd5b506003545b604051908152602001610177565b6101616101f5366004612e42565b61039c565b61016b6103bc565b34801561020e57600080fd5b5061022261021d366004612e6f565b6103c6565b6040516101779190612ea2565b61016b6103dd565b61016b6103e7565b61016b6103f1565b610161610255366004612edb565b6103fb565b34801561026657600080fd5b506001546101d9565b61016161027d366004612e42565b61041b565b610161610290366004612e42565b61043b565b6101616102a3366004612e42565b61045b565b3480156102b457600080fd5b506102bd61047b565b604051610177929190612f1a565b61016b610518565b6101616102e1366004612e42565b610522565b6101616102f4366004612e42565b610542565b610161610307366004612e42565b610562565b61016161031a366004612e42565b610582565b61016161032d366004612e42565b6105a2565b61016b6105c2565b61016b610348366004612f54565b6105cc565b60006103576105d7565b905090565b6000610357610607565b61036e612adf565b61038661038036849003840184613052565b82610637565b5050565b60008061039681610858565b91505090565b6103a4612adf565b6103866103b636849003840184613052565b82610b47565b6000610357610d24565b6103ce612b2b565b6103d782610d54565b92915050565b6000610357610e17565b6000610357610e48565b6000610357610e78565b610403612adf565b610386610415368490038401846130f9565b82610ea8565b610423612adf565b61038661043536849003840184613052565b82611995565b610443612adf565b61038661045536849003840184613052565b82611b41565b610463612adf565b61038661047536849003840184613052565b82611cf5565b600060606000546002808054610490906131fb565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc906131fb565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50505050509050915091509091565b6000610357611ea3565b61052a612adf565b61038661053c36849003840184613052565b82611ed3565b61054a612adf565b61038661055c36849003840184613052565b8261201a565b61056a612adf565b61038661057c36849003840184613052565b826121c8565b61058a612adf565b61038661059c36849003840184613052565b82612374565b6105aa612adf565b6103866105bc36849003840184613052565b82612520565b6000610357612667565b60006103d782612694565b60006105e1612b4e565b602081015151600290526105f3612adf565b6105fd8282610ea8565b6040015192915050565b6000610611612b4e565b60208101515160049052610623612adf565b61062d8282610ea8565b6080015192915050565b610647600d6000541460466126cf565b815161066290158061065b57508251600154145b60476126cf565b600080805560028054610674906131fb565b80601f01602080910402602001604051908101604052809291908181526020018280546106a0906131fb565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b50505050508060200190518101906107059190613323565b90507f72a9411aeeab8125b28db8f535a4d5f35c25515d1a088a10d0ce323245387cbf338460405161073892919061333f565b60405180910390a161074c341560436126cf565b61076661075f338360200151600a6126f5565b60446126cf565b805161077e906001600160a01b0316331460456126cf565b610786612b6d565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191909152514392019190915260808301805182516060810190935290515151610832926000918190600a015b815260200186608001516000600181106107fb576107fb613367565b6020020151602001518152602001866080015160006001811061082057610820613367565b6020020151604001511515905261270d565b602082018051604001919091526060808401519151015261085281612781565b50505050565b60006001600054141561091057600060028054610874906131fb565b80601f01602080910402602001604051908101604052809291908181526020018280546108a0906131fb565b80156108ed5780601f106108c2576101008083540402835291602001916108ed565b820191906000526020600020905b8154815290600101906020018083116108d057829003601f168201915b5050505050806020019051810190610905919061337d565b602001519392505050565b600460005414156109bb5760006002805461092a906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054610956906131fb565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505050505080602001905181019061090591906133d0565b60056000541415610a66576000600280546109d5906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054610a01906131fb565b8015610a4e5780601f10610a2357610100808354040283529160200191610a4e565b820191906000526020600020905b815481529060010190602001808311610a3157829003601f168201915b50505050508060200190518101906109059190613323565b60066000541415610a80576000600280546109d5906131fb565b60076000541415610a9a576000600280546109d5906131fb565b60086000541415610ab4576000600280546109d5906131fb565b60096000541415610ace576000600280546109d5906131fb565b600a6000541415610ae8576000600280546109d5906131fb565b600b6000541415610b02576000600280546109d5906131fb565b600c6000541415610b1c576000600280546109d5906131fb565b600d6000541415610b36576000600280546109d5906131fb565b610b42600060076126cf565b919050565b610b57600160005414600c6126cf565b8151610b72901580610b6b57508251600154145b600d6126cf565b600080805560028054610b84906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb0906131fb565b8015610bfd5780601f10610bd257610100808354040283529160200191610bfd565b820191906000526020600020905b815481529060010190602001808311610be057829003601f168201915b5050505050806020019051810190610c15919061337d565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610c4892919061333f565b60405180910390a1610c5c341560096126cf565b610c78610c71338360200151620186a06126f5565b600a6126cf565b8051610c90906001600160a01b03163314600b6126cf565b610c98612b6d565b815181516001600160a01b039182169052602080840151835192169181019190915280820180516000908190529051439083015260408085018051825160608101845282515151620186a0018152825151860151958101959095529051610d059491939282019083610820565b6020820180516040019190915251600060609091015261085281612781565b6000610d2e612b4e565b60208101515160059052610d40612adf565b610d4a8282610ea8565b60a0015192915050565b610d5c612b2b565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610d8b57610d8b612e8c565b1415610e08576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610dcc57610dcc612e8c565b6001811115610ddd57610ddd612e8c565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b6000610e21612b4e565b60208101515160089052610e33612adf565b610e3d8282610ea8565b610100015192915050565b6000610e52612b4e565b60208101515160039052610e64612adf565b610e6e8282610ea8565b6060015192915050565b6000610e82612b4e565b60208101515160019052610e94612adf565b610e9e8282610ea8565b6020015192915050565b610eb860046000541460196126cf565b8151610ed3901580610ecc57508251600154145b601a6126cf565b600080805560028054610ee5906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054610f11906131fb565b8015610f5e5780601f10610f3357610100808354040283529160200191610f5e565b820191906000526020600020905b815481529060010190602001808311610f4157829003601f168201915b5050505050806020019051810190610f7691906133d0565b9050610f80612b96565b7f283afb843e382c2816a95a4917a2873b5ddcda59e416fcb100bc72727e62d2383385604051610fb192919061344c565b60405180910390a16000602085015151516008811115610fd357610fd3612e8c565b141561111657610fe53415600e6126cf565b604051600081527fbea5d41f4dba32536a1405bf34fab9673b582590ffcf0d3960606284db41c8759060200160405180910390a160008084526060838101805160408051938401905290515151611082939192908190614e1f19015b8152602001866060015160006001811061105d5761105d613367565b6020020151602001518152602001866060015160006001811061082057610820613367565b815260208201516110969033614e20612898565b61109e612c19565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526080808601516060850152845190840152600560005543600155516110eb9183910161358d565b6040516020818303038152906040526002908051906020019061110f929190612c5a565b5050610852565b600160208501515151600881111561113057611130612e8c565b1415611287576111423415600f6126cf565b611178600161115033610d54565b51600181111561116257611162612e8c565b1461116e576001611171565b60005b60106126cf565b815161119e906001600160a01b03163314611194576001611197565b60005b60116126cf565b604051600081527f3949c4d644e940ad940293d8dffadf9fec49e43fd873e61a65f2715726fbcdae9060200160405180910390a160006020848101829052338252600490526040808220805462ff00ff19166001179055606084810180518351928301909352515151611218939190819060011901611041565b81602001819052506112308260200151336002612898565b611238612c19565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260808086015160608501528483015190840152600660005543600155516110eb9183910161358d565b60026020850151515160088111156112a1576112a1612e8c565b1415611383576112b3341560126126cf565b604051600081527f3ca750c77c42052c0317b3bf02478251fd3a484fe040ce27bc129ddd5010f9519060200160405180910390a16000604084810182905260608481018051835192830190935251515161131593919081906113871901611041565b6040820152602082015161132c9033611388612898565b611334612c19565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260808086015160608501528482015190840152600760005543600155516110eb9183910161358d565b600360208501515151600881111561139d5761139d612e8c565b1415611489576113af341560136126cf565b604051600081527fa42a3d93f0445947a0a86a9232814eb2ca86673cd6c2d8efb24d52aadf7e1f869060200160405180910390a1600060608085018290528381018051604080519384019052905161141993919290819061104190845b6020020151516009190190565b6060820152602082015161142f9033600a612898565b611437612c19565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260808086015160608086019190915285015190840152600860005543600155516110eb9183910161358d565b60046020850151515160088111156114a3576114a3612e8c565b141561158d576114b5341560146126cf565b604051600081527f83b12601c034cc4cf81d4bfb20cdcf6c5709009239adb4823d93aec07e5848f79060200160405180910390a160006080840181905260608084018051604080519384019052905161152093919290819061104190845b6020020151516004190190565b6080820152602082015161153690336005612898565b61153e612c19565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260808086015160608501528481015190840152600960005543600155516110eb9183910161358d565b60056020850151515160088111156115a7576115a7612e8c565b141561168a576115b9341560156126cf565b604051600081527f32e9005c11153df6a8815b2cd1e9856edc6da6e10d03f0c950c9772ffcf78e379060200160405180910390a1600060a08401819052606083810180516040805193840190529051515161161c93919290819060001901611041565b60a0820152602082015161163290336001612898565b61163a612c19565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152608080860151606085015260a085015190840152600a60005543600155516110eb9183910161358d565b60066020850151515160088111156116a4576116a4612e8c565b141561179757608082015160050160c08201526116c53460051460166126cf565b604051600081527f0f74405fde4aa4d5ca62793186e0b88c1044f39cd8a736144773afdecc17da129060200160405180910390a1600060c084018190526060808401805160408051938401905290516117279391929081906110419084611513565b60e08201526020820151825161173f91906005612898565b611747612c19565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260c0840151606084015260e08401516080840152600b60005543600155516110eb9183910161358d565b60076020850151515160088111156117b1576117b1612e8c565b1415611896576117c3341560176126cf565b604051600081527fe1b5eb057124a347f30d8675bb89b8dadd4efe36c62cca97652c6adcdfac5c5f9060200160405180910390a1600060e08401819052606083810180516040805193840190529051515161182693919290819060021901611041565b610100820152602082015161183d90336003612898565b611845612c19565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152608080860151606085015261010085015190840152600c60005543600155516110eb9183910161358d565b60086020850151515160088111156118b0576118b0612e8c565b1415610852576118c2341560186126cf565b604051600081527f1973964b07d6cdd2e127c22d65d71a3574c46396350fab03060c8202ef7626209060200160405180910390a160006101008401819052606080840180516040805193840190529051611925939192908190611041908461140c565b610120820152602082015161193c9033600a612898565b611944612c19565b82516001600160a01b0390811682526020808501519091168183015260408085015181840152608080860151606085015261012085015190840152600d60005543600155516110eb9183910161358d565b6119a5600c6000541460416126cf565b81516119c09015806119b957508251600154145b60426126cf565b6000808055600280546119d2906131fb565b80601f01602080910402602001604051908101604052809291908181526020018280546119fe906131fb565b8015611a4b5780601f10611a2057610100808354040283529160200191611a4b565b820191906000526020600020905b815481529060010190602001808311611a2e57829003601f168201915b5050505050806020019051810190611a639190613323565b90507f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503384604051611a9692919061333f565b60405180910390a1611aaa3415603e6126cf565b611ac4611abd33836020015160036126f5565b603f6126cf565b8051611adc906001600160a01b0316331460406126cf565b611ae4612b6d565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518284018051919091525143920191909152608083018051825160608101909352905151516108329260009181906003016107df565b611b5160066000541460236126cf565b8151611b6c901580611b6557508251600154145b60246126cf565b600080805560028054611b7e906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054611baa906131fb565b8015611bf75780601f10611bcc57610100808354040283529160200191611bf7565b820191906000526020600020905b815481529060010190602001808311611bda57829003601f168201915b5050505050806020019051810190611c0f9190613323565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051611c4292919061333f565b60405180910390a1611c56341560206126cf565b611c70611c6933836020015160026126f5565b60216126cf565b8051611c88906001600160a01b0316331460226126cf565b611c90612b6d565b815181516001600160a01b039182169052602080840151835192169101526040820151611cbe9060016128ac565b60208281018051929092529051439101526080820180516040805160608101909152915151516108329260009181906002016107df565b611d05600560005414601e6126cf565b8151611d20901580611d1957508251600154145b601f6126cf565b600080805560028054611d32906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054611d5e906131fb565b8015611dab5780601f10611d8057610100808354040283529160200191611dab565b820191906000526020600020905b815481529060010190602001808311611d8e57829003601f168201915b5050505050806020019051810190611dc39190613323565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223384604051611df692919061333f565b60405180910390a1611e0a3415601b6126cf565b611e25611e1e338360200151614e206126f5565b601c6126cf565b8051611e3d906001600160a01b03163314601d6126cf565b611e45612b6d565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191909152514392019190915260808301805182516060810190935290515151610832926000918190614e20016107df565b6000611ead612b4e565b60208101515160079052611ebf612adf565b611ec98282610ea8565b60e0015192915050565b611ee3600860005414602d6126cf565b8151611efe901580611ef757508251600154145b602e6126cf565b600080805560028054611f10906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3c906131fb565b8015611f895780601f10611f5e57610100808354040283529160200191611f89565b820191906000526020600020905b815481529060010190602001808311611f6c57829003601f168201915b5050505050806020019051810190611fa19190613323565b90507f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3384604051611fd492919061333f565b60405180910390a1611fe83415602a6126cf565b612002611ffb338360200151600a6126f5565b602b6126cf565b805161077e906001600160a01b03163314602c6126cf565b61202a60076000541460286126cf565b815161204590158061203e57508251600154145b60296126cf565b600080805560028054612057906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054612083906131fb565b80156120d05780601f106120a5576101008083540402835291602001916120d0565b820191906000526020600020905b8154815290600101906020018083116120b357829003601f168201915b50505050508060200190518101906120e89190613323565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338460405161211b92919061333f565b60405180910390a161212f341560256126cf565b61214a6121433383602001516113886126f5565b60266126cf565b8051612162906001600160a01b0316331460276126cf565b61216a612b6d565b815181516001600160a01b0391821690526020808401518351921691810191909152604080840151828401805191909152514392019190915260808301805182516060810190935290515151610832926000918190611388016107df565b6121d8600a6000541460376126cf565b81516121f39015806121ec57508251600154145b60386126cf565b600080805560028054612205906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054612231906131fb565b801561227e5780601f106122535761010080835404028352916020019161227e565b820191906000526020600020905b81548152906001019060200180831161226157829003601f168201915b50505050508060200190518101906122969190613323565b90507f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33846040516122c992919061333f565b60405180910390a16122dd341560346126cf565b6122f76122f033836020015160016126f5565b60356126cf565b805161230f906001600160a01b0316331460366126cf565b612317612b6d565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518284018051919091525143920191909152608083018051825160608101909352905151516108329260009181906001016107df565b612384600b60005414603c6126cf565b815161239f90158061239857508251600154145b603d6126cf565b6000808055600280546123b1906131fb565b80601f01602080910402602001604051908101604052809291908181526020018280546123dd906131fb565b801561242a5780601f106123ff5761010080835404028352916020019161242a565b820191906000526020600020905b81548152906001019060200180831161240d57829003601f168201915b50505050508060200190518101906124429190613323565b90507f3d5296ff959773a694d0854b4cbbb29a1b91dabf625a358e26d9f308a93a288a338460405161247592919061333f565b60405180910390a1612489341560396126cf565b6124a361249c33836020015160056126f5565b603a6126cf565b80516124bb906001600160a01b03163314603b6126cf565b6124c3612b6d565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518284018051919091525143920191909152608083018051825160608101909352905151516108329260009181906005016107df565b61253060096000541460326126cf565b815161254b90158061254457508251600154145b60336126cf565b60008080556002805461255d906131fb565b80601f0160208091040260200160405190810160405280929190818152602001828054612589906131fb565b80156125d65780601f106125ab576101008083540402835291602001916125d6565b820191906000526020600020905b8154815290600101906020018083116125b957829003601f168201915b50505050508060200190518101906125ee9190613323565b90507f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338460405161262192919061333f565b60405180910390a16126353415602f6126cf565b61264f61264833836020015160056126f5565b60306126cf565b80516124bb906001600160a01b0316331460316126cf565b6000612671612b4e565b60208101515160009052612683612adf565b61268d8282610ea8565b5192915050565b600061269e612b4e565b6020810180515160069052515160e001518390526126ba612adf565b6126c48282610ea8565b60c001519392505050565b816103865760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000612703838530856128f9565b90505b9392505050565b612715612cde565b60005b60018110156127615784816001811061273357612733613367565b602002015182826001811061274a5761274a613367565b602002015280612759816135b1565b915050612718565b508181846001811061277557612775613367565b60200201529392505050565b6020810151516005111561281d57612797612d29565b8151516001600160a01b03908116825282516020908101519091168183015280830180515160408085019190915281518101516060808601919091529151909101516080840152600460005543600155516127f4918391016135cc565b60405160208183030381529060405260029080519060200190612818929190612c5a565b505050565b805160208082015191519083015160400151515161283c929190612898565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561287e573d6000803e3d6000fd5b506000808055600181905561289590600290612d70565b50565b6128a38383836129d3565b61281857600080fd5b6000826128b9838261361a565b91508110156103d75760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016126ec565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161296091613632565b60006040518083038185875af1925050503d806000811461299d576040519150601f19603f3d011682016040523d82523d6000602084013e6129a2565b606091505b50915091506129b382826001612aa4565b50808060200190518101906129c8919061364e565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612a3291613632565b60006040518083038185875af1925050503d8060008114612a6f576040519150601f19603f3d011682016040523d82523d6000602084013e612a74565b606091505b5091509150612a8582826002612aa4565b5080806020019051810190612a9a919061364e565b9695505050505050565b60608315612ab3575081612706565b825115612ac35782518084602001fd5b60405163100960cb60e01b8152600481018390526024016126ec565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001612b68612daa565b905290565b604080516080810182526000918101828152606082019290925290815260208101612b68612dbd565b604051806101400160405280612baa612cde565b8152602001612bb7612cde565b8152602001612bc4612cde565b8152602001612bd1612cde565b8152602001612bde612cde565b8152602001612beb612cde565b815260200160008152602001612bff612cde565b8152602001612c0c612cde565b8152602001612b68612cde565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001612b68612cde565b828054612c66906131fb565b90600052602060002090601f016020900481019282612c885760008555612cce565b82601f10612ca157805160ff1916838001178555612cce565b82800160010185558215612cce579182015b82811115612cce578251825591602001919060010190612cb3565b50612cda929150612dde565b5090565b60405180602001604052806001905b612d13604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612ced5790505090565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001612d63612cde565b8152602001600081525090565b508054612d7c906131fb565b6000825580601f10612d8c575050565b601f0160209004906000526020600020908101906128959190612dde565b6040518060200160405280612b68612df3565b60405180608001604052806000815260200160008152602001612d63612cde565b5b80821115612cda5760008155600101612ddf565b604080516101408101825260008082526020808301829052828401829052606083018290526080830182905260a0830182905260c08301829052835190810190935282529060e0820190612b3a565b600060408284031215612e5457600080fd5b50919050565b6001600160a01b038116811461289557600080fd5b600060208284031215612e8157600080fd5b813561270681612e5a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110612eb957612eb9612e8c565b8083525060208301511515602083015260408301511515604083015292915050565b60006101608284031215612e5457600080fd5b60005b83811015612f09578181015183820152602001612ef1565b838111156108525750506000910152565b8281526040602082015260008251806040840152612f3f816060850160208701612eee565b601f01601f1916919091016060019392505050565b600060208284031215612f6657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612fa657612fa6612f6d565b60405290565b6040516020810167ffffffffffffffff81118282101715612fa657612fa6612f6d565b604051610140810167ffffffffffffffff81118282101715612fa657612fa6612f6d565b6040516060810167ffffffffffffffff81118282101715612fa657612fa6612f6d565b60405160a0810167ffffffffffffffff81118282101715612fa657612fa6612f6d565b801515811461289557600080fd5b8035610b4281613039565b60006040828403121561306457600080fd5b6040516040810181811067ffffffffffffffff8211171561308757613087612f6d565b60405282358152602083013561309c81613039565b60208201529392505050565b803560098110610b4257600080fd5b6000602082840312156130c957600080fd5b6040516020810181811067ffffffffffffffff821117156130ec576130ec612f6d565b6040529135825250919050565b600081830361016081121561310d57600080fd5b613115612f83565b8335815261014080601f198401121561312d57600080fd5b613135612fac565b925061313f612fcf565b61314b602087016130a8565b815261315960408701613047565b602082015261316a60608701613047565b604082015261317b60808701613047565b606082015261318c60a08701613047565b608082015261319d60c08701613047565b60a08201526131ae60e08701613047565b60c08201526101006131c2888289016130b7565b60e08301526101206131d5818901613047565b828401526131e4848901613047565b908301525083525060208101919091529392505050565b600181811c9082168061320f57607f821691505b60208210811415612e5457634e487b7160e01b600052602260045260246000fd5b600082601f83011261324157600080fd5b613249612fac565b8060608085018681111561325c57600080fd5b855b818110156132ad578281890312156132765760008081fd5b61327e612ff3565b815181526020808301518183015260408084015161329b81613039565b9083015290865290940193820161325e565b50919695505050505050565b600060e082840312156132cb57600080fd5b6132d3613016565b905081516132e081612e5a565b815260208201516132f081612e5a565b8060208301525060408201516040820152606082015160608201526133188360808401613230565b608082015292915050565b600060e0828403121561333557600080fd5b61270683836132b9565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060a0828403121561338f57600080fd5b613397612ff3565b82516133a281612e5a565b815260208301516133b281612e5a565b60208201526133c48460408501613230565b60408201529392505050565b600060e082840312156133e257600080fd5b6133ea613016565b82516133f581612e5a565b8152602083015161340581612e5a565b6020820152604083810151908201526134218460608501613230565b606082015260c09290920151608083015250919050565b6009811061344857613448612e8c565b9052565b60006101808201905060018060a01b03841682528251602083015260208301515161347b604084018251613438565b60208101518015156060850152506040810151801515608085015250606081015180151560a085015250608081015180151560c08501525060a081015180151560e08501525060c08101516101006134d68186018315159052565b60e083015191506101206134ec81870184519052565b908301511515610140860152909101518015156101608501529050509392505050565b8060005b6001811015610852578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613513565b60018060a01b038082511683528060208301511660208401525060408101516040830152606081015160608301526080810151612818608084018261350f565b60e081016103d7828461354d565b634e487b7160e01b600052601160045260246000fd5b60006000198214156135c5576135c561359b565b5060010190565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608083015160e08301916136099084018261350f565b50608083015160c083015292915050565b6000821982111561362d5761362d61359b565b500190565b60008251613644818460208701612eee565b9190910192915050565b60006020828403121561366057600080fd5b81516127068161303956fea2646970667358221220cbb201f70afed7c21506ff125aee728964dd9af75d1f89a9f23d488e64562a0e64736f6c634300080c0033`,
  BytecodeLen: 15363,
  Which: `oD`,
  version: 8,
  views: {
    Info: {
      details: `Info_details`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:99:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:357:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:110:33:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:166:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:161:15:application call to [unknown function] (defined at: ./index.rsh:161:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:127:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:121:15:application call to [unknown function] (defined at: ./index.rsh:121:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:179:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:174:15:application call to [unknown function] (defined at: ./index.rsh:174:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:153:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:148:15:application call to [unknown function] (defined at: ./index.rsh:148:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:140:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:135:15:application call to [unknown function] (defined at: ./index.rsh:135:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:219:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:214:15:application call to [unknown function] (defined at: ./index.rsh:214:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:193:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:188:15:application call to [unknown function] (defined at: ./index.rsh:188:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:206:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:201:15:application call to [unknown function] (defined at: ./index.rsh:201:15:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:232:19:after expr stmt semicolon',
    fs: ['at ./index.rsh:227:15:application call to [unknown function] (defined at: ./index.rsh:227:15:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Customer_answerQuestion": Customer_answerQuestion,
  "Customer_enroll": Customer_enroll,
  "Customer_playGame": Customer_playGame,
  "Customer_readBlog": Customer_readBlog,
  "Customer_referFriend": Customer_referFriend,
  "Customer_upgradeToBronze": Customer_upgradeToBronze,
  "Customer_upgradeToGold": Customer_upgradeToGold,
  "Customer_upgradeToSilver": Customer_upgradeToSilver,
  "Customer_upgradeToVIP": Customer_upgradeToVIP
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
    upgradeToVIP: Customer_upgradeToVIP
    }
  };
