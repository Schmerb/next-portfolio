/**
 *
 * Arch Outline
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {}

// const ArchImgSrc = '/static/img/quarter-arch@2x.png';
const ArchChessImgSrc = '/static/img/Team/arc-chess@2x.png';
// const ChessImgSrc = '/static/img/Team/chess@2x.png';
// const ChessImgSrc = '/static/img/Team/arch-chess@2x.png';

const ArchOutline = (props: Props) => {
  return (
    <ArchImageWrapper>
      <ChessImg src={ArchChessImgSrc} />
      {/* <ChessImg src={ChessImgSrc} /> */}
    </ArchImageWrapper>
  );
};

export default ArchOutline;

const ArchImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 130px;
  margin: 20px auto 0;
  margin-top: 60px;
  text-align: center;
  transform: scale(1.1);
  transition: margin-top 0.3s;
  /* border: 1px solid limegreen; */
  ${({ theme }) => theme.media.max.mobile`
    width: 80px;
  `}
  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
     transform: scale(1.1);
  `}
  ${({ theme }) => theme.media.min.desktop`
    margin-top: 10vw;
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

const ChessImg = styled.img`
  position: absolute;
  top: 0;
  ${({ theme }) => theme.media.max.mobile`
    width: 300%;
    left: 0;
    `}
  ${({ theme }) => theme.media.min.mobile`
    right: -50%;
    width: 300%;
    transform: translateX(50%);
  `}
`;
