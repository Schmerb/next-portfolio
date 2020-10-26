/**
 *
 * Team
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import FooterTitle from 'components/FooterTitle';

import TeamIntro from './components/TeamIntro';
import TeamTitleSection from './components/TeamTitleSection';
import Teammates from './components/Teammates';
import BlueArch from './components/BlueArch';

export interface TeamProps {}

const Team = ({}: TeamProps) => {
  const [state, setState] = useState({ slug: '', title: 'Team Page' });

  return (
    <>
      <Container>
        <TeamIntro />
        <TeamTitleSection />
        <Teammates />
        <BlueArch />
      </Container>
      <FooterTitle />
    </>
  );
};

export default Team;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
  margin-bottom: 300px;
  /* border: 1px solid red; */
`;
