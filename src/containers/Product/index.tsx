/**
 *
 * Product
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import ProductIntroSection from './components/Intro';
import FeaturesSection from './components/Features';

export interface ProductProps {}

const Product = ({}: ProductProps) => {
  const [state, setState] = useState({ slug: '', title: 'Product Page' });

  return (
    <Container>
      <ProductIntroSection />
      <FeaturesSection />
    </Container>
  );
};

export default Product;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
`;
