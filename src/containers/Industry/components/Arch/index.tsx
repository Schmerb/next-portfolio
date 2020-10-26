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

const ArchImg = '/static/img/industry/quarter-arch-outline@2x.png';

const ArchOutline = ({ showMobile = false }: Props) => {
  return (
    <ArchImageWrapper showMobile={showMobile}>
      <Img src={ArchImg} />
    </ArchImageWrapper>
  );
};

export default ArchOutline;

const ArchImageWrapper = styled.div`
  height: 300px;
  width: 130px;
  position: relative;
  text-align: center;
  margin: 20px auto 0;
  /* border: 1px solid limegreen; */
  transition: margin-top 0.3s;
  ${({ theme, showMobile }) =>
    !showMobile &&
    theme.media.max.tablet`
    display: none;
  `}
  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
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

const Img = styled.img`
  width: 300px;
  width: 270%;
  height: auto;
  transform: rotate(180deg);
`;
