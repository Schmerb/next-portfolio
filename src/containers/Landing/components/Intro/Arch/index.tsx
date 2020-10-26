/**
 *
 * Arch Outline
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  showMobile?: boolean;
}

const ArchImg = '/static/img/Landing/arch-clouds-balloon@2x.png';

const ArchCloudsBalloon = ({ showMobile = false }: Props) => {
  return (
    <ArchImageWrapper className="ArchImageWrapper" showMobile={showMobile}>
      <Img src={ArchImg} />
    </ArchImageWrapper>
  );
};

export default ArchCloudsBalloon;

const ArchImageWrapper = styled.div`
  position: relative;
  height: 130px;
  width: 130px;
  text-align: center;
  margin: 20px auto 0;
  /* border: 1px solid limegreen; */
  transition: margin-top 0.3s;
  ${({ theme }) => theme.media.max.mobile`
    width: 80px;
  `}
  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
     transform: scale(1.1);
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 12vw;
    transform: scale(1.2);
  `}
  @media (min-width: 1200px) {
    margin-top: 15vw;
    transform: scale(1.3);
  }
  @media (min-width: 1300px) {
    transform: scale(1.4);
  }
  @media (min-width: 1400px) {
    transform: scale(2);
  }
`;

const Img = styled.img`
  width: 390%; // this keeps arch image lined up with width of wrapper container to stay in sync with header underline
  height: auto;
`;
