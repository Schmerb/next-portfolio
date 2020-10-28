/**
 *
 * LandingPage
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import useScrollTop from 'utils/hooks/useScrollTop';

import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';
import WorkFlow from './components/WorkFlow';
import Contact from './components/Contact';

export interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  const scrollTop = useScrollTop({});
  return (
    <Container>
      <Work scrollTop={scrollTop} />
      <Projects scrollTop={scrollTop} />
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
