/**
 *
 * LandingPage
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

const size = { height: 50, width: 50 };

export interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  return (
    <Container>
      <h2>YOOOO</h2>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
`;
