/**
 *
 * LandingPage
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';
import WorkFlow from './components/WorkFlow';
import Contact from './components/Contact';

const size = { height: 50, width: 50 };

export interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  return (
    <Container>
      <Projects />
      <Work />
      <About />
      <WorkFlow />
      <Contact />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  position: relative;
  color: #000;
  min-height: 100vh;
`;
