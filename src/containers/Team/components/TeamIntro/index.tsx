/**
 *
 * Team Intro
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import PageIntroSection from 'components/PageIntro';
import Arch from '../Arch';

const BGImg = '/static/img/Team/bg@2x.png';
// const title = 'we are people working with people';

interface TeamIntroProps {}

const TeamIntro = (props: TeamIntroProps) => {
  return (
    <PageIntroSection
      textArr={['we are people', 'working with people']}
      imageSrc={BGImg}
      borderTop={false}
      largeText
    >
      <Arch />
    </PageIntroSection>
  );
};

export default TeamIntro;
