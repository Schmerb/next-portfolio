/**
 *
 * LandingPage
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import useScrollTop from 'utils/hooks/useScrollTop';
import usePrevious from 'utils/hooks/usePrevious';

import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';
import WorkFlow from './components/WorkFlow';
import Contact from './components/Contact';

export interface LandingPageProps {}

let direction = '';

const LandingPage = ({}: LandingPageProps) => {
  const scrollTop = useScrollTop({});
  const prevScrollTop: number = usePrevious(scrollTop);
  if (
    prevScrollTop > scrollTop ||
    (direction === 'up' && prevScrollTop === scrollTop) // handles same value when already scrolling up
  ) {
    direction = 'up';
  } else {
    direction = 'down';
  }
  return (
    <Container>
      <Work scrollTop={scrollTop} direction={direction} />
      <Projects scrollTop={scrollTop} direction={direction} />
      <About />
      <WorkFlow scrollTop={scrollTop} direction={direction} />
      <Contact scrollTop={scrollTop} />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  position: relative;
  color: #000;
  min-height: 100vh;
`;
