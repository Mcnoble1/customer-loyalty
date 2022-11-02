/* eslint-disable eqeqeq */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// material
import { loadStdlib } from '@reach-sh/stdlib';

import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Button } from '@mui/material';

//
import DashboardNavbar from '../layouts/Navbar';

import { account } from '../layouts/utils';
import * as backend from '../index.main.mjs';

import { FormProvider, RHFTextField } from '../components/hook-form';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const stdlib = loadStdlib('ALGO');

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const methods = useForm({});

  const navigate = useNavigate();

  const [info, setInfo] = useState('');
  const [id, setId] = useState('');

  async function attach(info) {
    const acc = await account();
    const ctc = acc.contract(backend, JSON.parse(info));

    console.log(info);
    console.log(localStorage.setItem('info', JSON.stringify(info)));

    console.log(ctc);

    acc.tokenAccept({ _hex: '0x071ef956', _isBigNumber: true });

    // if (stdlib.connector === 'ETH' || stdlib.connector === 'CFX') {
    //   const myGasLimit = 5000000;
    //   acc.setGasLimit(myGasLimit);
    // } else if (stdlib.connector == 'ALGO') {
    //   console.log(`Opt-ing in on ALGO`);
    //   try {
    //     await ctc.views.Platform.token();
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   // const id =
    //   //   setId(id.toNumber());
    //   try {
    //     // console.log(id);
    //     // await acc.tokenAccept({_hex: '0x071e76cd', _isBigNumber: true});
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   // console.log(await id);
    // await acc.tokenAccept(id);
    // }

    try {
      ctc.apis.Customer.enroll();
      console.log('enrolled');

      navigate('/dashboard/app', { replace: true });
    } catch (e) {
      console.log(e);
    }
  }

  const enroll = () => {
    setInfo('');
    attach(info);
  };

  return (
    <RootStyle>
      {/* <DashboardNavbar /> */}
      <Container maxWidth="sm">
        <ContentStyle>
          <Typography variant="h4" gutterBottom>
            Set Loyalty Rewards Points
          </Typography>
          <FormProvider methods={methods} onSubmit={enroll}>
            <Stack spacing={3}>
              <RHFTextField
                name="info"
                label="Enrollment Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Referral Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Anniversary Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Gold Membership Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Silver Membership Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Bronze Membership Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Play Game Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Read Tutorial Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Answer Quiz Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
              <RHFTextField
                name="info"
                label="Check In Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />

              <RHFTextField
                name="info"
                label="NFT Points"
                required
                type="number"
                onChange={(e) => setInfo(e.target.value)}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }} />

            <Button fullWidth size="large" type="submit" variant="contained">
              Set
            </Button>
          </FormProvider>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
