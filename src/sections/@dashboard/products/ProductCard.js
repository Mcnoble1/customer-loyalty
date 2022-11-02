import { loadStdlib } from '@reach-sh/stdlib';

import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Button, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import * as backend from '../../../index.main.mjs';
import { account } from '../../../layouts/utils';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, price } = product;

  const inf = localStorage.getItem('info');
  const info = JSON.parse(inf);
  console.log(info);

  const mintN = (event) => {
    event.preventDefault();
    mint();
  };

  async function mint() {
    try {
      const acc = await account();
      acc.tokenAccept({ _hex: '0x072b9b33', _isBigNumber: true });
      const ctc = acc.contract(backend, JSON.parse(info));
      await ctc.apis.Customer.mintNFT();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">{price} LYC</Typography>
          <Button variant="contained" onClick={mintN}>
            Mint
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
