/**
 *
 * Industry
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import FooterTitle from 'components/FooterTitle';
import { Title } from 'containers/Landing/components/Intro';
import IndustryIntro from './components/IndustryIntro';
import CaseStudies from './components/CaseStudies';

export interface IndustryProps {}

const Industry = ({}: IndustryProps) => {
  const [state, setState] = useState({ slug: '', title: 'Industry Page' });

  return (
    <>
      <Container>
        <IndustryIntro />
        <CaseStudies />
      </Container>
      <FooterTitle />
    </>
  );
};

export default Industry;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
  /* border: 1px solid red; */
`;
