/**
 *
 * Intro
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header';

import ArchCloudsBalloon from './Arch';
import Questions from './Questions';

interface Props {}

const Intro = ({}: Props) => {
  const [state, setState] = useState({
    slug: '',
    title: 'outpace data',
    description:
      'Data is growing at a faster rate than ever before making it both costly and time-intensive to identify risk and generate value',
  });

  return (
    <FirstSection className="FirstSection">
      <TitleWrapper className="TitleWrapper">
        <Title>{state.title}</Title>
        <TitleText>{state.description}</TitleText>
      </TitleWrapper>

      <BGImage src="/static/img/Landing/bg@2x.png" />

      <ArchCloudsBalloon />

      <Questions />
    </FirstSection>
  );
};

export default Intro;

const FirstSection = styled.section`
  padding-top: ${HEADER_HEIGHT}px;
  padding-top: 140px;
  min-height: 100vh;
  min-height: 80vh;
`;

export const TitleWrapper = styled.div`
  text-align: center;

  @media (min-width: 700px) {
    margin-top: 40px;
  }

  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
     transform: scale(1.1);
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 15vw;
    transform: scale(1.2);
  `} 
   @media (min-width: 1200px) {
    /* margin-top: 20vw; */
    transform: scale(1.3);
  }
  @media (min-width: 1300px) {
    /* margin-top: 25vw; */
    transform: scale(1.4);
  }
  @media (min-width: 1400px) {
    /* margin-top: 30vw; */
    transform: scale(2);
  }
`;

export const Title = styled.h2<any>`
  display: inline-block;
  position: relative;
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  text-align: center;
  margin: 0;
  font-size: ${({ small }) => (small ? '32px' : '48px')};
  font-family: 'NextPro-UltraLight', sans-serif;
  &::after {
    content: '';
    background-color: ${({ theme, light }) =>
      light ? '#fff' : theme.colors.Primary};
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 50%;
    width: ${({ small }) => (small ? '50px' : '130px')};
    height: 5px;

    ${({ theme }) => theme.media.max.mobile`
      width: 80px;
    `}
    ${({ theme }) => theme.media.min.mobile`
      width: 130px;
    `}
  }
`;

export const TitleText = styled.p`
  color: #fff;
  text-align: center;
  font-family: 'NextPro-Light', sans-serif;
  font-size: 19px;
  margin: 35px auto 0;
  max-width: 400px;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 18px;
    max-width: 300px;
  `}
`;

const BGImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (max-width: 699px) {
    height: 100vh;
  }
  @media (min-width: 700px) {
    width: 100vw;
  }
`;
