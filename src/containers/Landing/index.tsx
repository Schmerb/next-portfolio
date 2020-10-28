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

export interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  return (
    <Container>
      <Work />
      <Projects />
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
