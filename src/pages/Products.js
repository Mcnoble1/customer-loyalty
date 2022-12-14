// import { useState } from 'react';
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductList } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  return (
    <Page title="Marketplace">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Marketplace
        </Typography>

        <ProductList products={PRODUCTS} />
      </Container>
    </Page>
  );
}
