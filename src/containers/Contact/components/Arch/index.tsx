/**
 *
 * Arch
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {}

const ArchGlobeImgSrc = '/static/img/Contact/arch-globe@2x.png';

const ArchGlobe = (props: Props) => {
  return (
    <ArchImageWrapper>
      <AcrhGlobeImg src={ArchGlobeImgSrc} />
    </ArchImageWrapper>
  );
};

export default ArchGlobe;

const ArchImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 10rem;
  margin: 20px auto 0;
  margin-top: 60px;
  text-align: center;
  transform: scale(1.1);
  transition: margin-top 0.3s;
  /* border: 1px solid limegreen; */

  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
     transform: scale(1.1);
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 15vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 20vw;
    transform: scale(1.2);
  }
  @media (min-width: 1300px) {
    margin-top: 25vw;
    transform: scale(1.4);
  }
  @media (min-width: 1400px) {
    margin-top: 30vw;
    transform: scale(2);
  }
`;

const AcrhGlobeImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 240px;
  transform: translateX(50%);
  ${({ theme }) => theme.media.min.mobile`
      width: 320px;
      transform: translateX(58%) translateY(20%);
  `}
`;
