/**
 *
 * LandingPage
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

// import { HEADER_HEIGHT } from 'components/Header';
import FooterTitle from 'components/FooterTitle';

import Intro from './components/Intro';
import MacbookSection from './components/MacbookSection';
import RevelesSection from './components/RevelesSection';
import ElephantSection from './components/ElephantSection';
import AdvantageSection from './components/AdvantageSection';
import AlternativeSection from './components/AlternativeSection';
import RunningSection from './components/RunningSection';

const size = { height: 50, width: 50 };

export interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  const [state, setState] = useState({
    slug: '',
    title: 'outpace data',
    description:
      'Data is growing at a faster rate than ever before making it both costly and time-intensive to identify risk and generate value',
  });

  return (
    <>
      <Container>
        <Intro />
        <RevelesSection />
        <MacbookSection />
        <ElephantSection />
        <AdvantageSection />
        <AlternativeSection />
        <RunningSection />
      </Container>
      <FooterTitle />
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
`;
