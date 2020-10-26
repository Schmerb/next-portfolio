/**
 *
 * Product
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import FadeIn from 'components/FadeIn';
import Product from 'containers/Product/Loadable';

interface ProductPageProps {}

export const ProductPage = ({}: ProductPageProps) => (
  <>
    <SEO title="Product Page" />
    {/* <FadeIn> */}
    <Product />
    {/* </FadeIn> */}
  </>
);

export default ProductPage;
