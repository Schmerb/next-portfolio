/**
 *
 * LandingPage
 *
 *  */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import useScrollTop from 'utils/hooks/useScrollTop';
import usePrevious from 'utils/hooks/usePrevious';

import Projects from './components/Projects';
import Work from './components/Work';
import About from './components/About';
import AboutThisSite from './components/AboutThisSite';
import WorkFlow from './components/WorkFlow';
import Contact from './components/Contact';

export interface LandingPageProps {
  content: {
    data: any;
  };
}

let direction = '';

const LandingPage = ({ content }: LandingPageProps) => {
  const projectState = content.data;

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
      <Work
        scrollTop={scrollTop}
        direction={direction}
        projects={projectState.work}
        projectHeader={projectState.projectHeaders.work}
      />
      <Projects
        scrollTop={scrollTop}
        direction={direction}
        projects={projectState.personal}
        projectHeader={projectState.projectHeaders.personal}
      />
      <About data={projectState.aboutMe} />
      <WorkFlow
        scrollTop={scrollTop}
        direction={direction}
        workFlow={projectState.workFlow}
      />
      <AboutThisSite scrollTop={scrollTop} />
      <Contact scrollTop={scrollTop} />
    </Container>
  );
};

const mapStateToProps = ({ content }) => ({
  content,
});

export default connect(mapStateToProps)(LandingPage);

const Container = styled.div`
  position: relative;
  color: #000;
  min-height: 100vh;
`;
