/**
 *
 * Whitepapers
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Title, TitleText } from 'containers/Landing/components/Intro';
import { HEADER_HEIGHT } from 'components/Header';
import { Mobile, Tablet } from 'components/Utils';

import PapersSlider from './WhitepapersSlider/PapersSlider';
import CaseStudiesSlider from './WhitepapersSlider/CaseStudiesSlider';
import VideosSlider from './WhitepapersSlider/VideosSlider';

import WhitepapersList from './WhitepapersList';
import CasestudiesList from './CaseStudiesList';

export interface WhitepapersProps {}

const Whitepapers = ({}: WhitepapersProps) => {
  const [state, setState] = useState({ slug: '', title: 'whitepapers' });

  return (
    <Container>
      <Title dark>{state.title}</Title>
      <Mobile>
        <PapersSlider />
        <CaseStudiesSlider />
        <VideosSlider />
      </Mobile>
      <Tablet>
        <WhitepapersList />
        <CasestudiesList />
      </Tablet>
    </Container>
  );
};

export default Whitepapers;

const Container = styled.div`
  position: relative;
  color: #000;
  min-height: 100vh;
  text-align: center;
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;
