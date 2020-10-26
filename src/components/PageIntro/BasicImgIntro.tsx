/**
 *
 * PageIntro
 *
 *  */

import React from 'react';
import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header';

interface BasicImgIntroProps {
  imageSrc: string;
  style?: any;
  className?: string;
}

const PageIntro = ({
  imageSrc = '/static/img/Product/bg-image@2x.png',
  style,
  className,
}: BasicImgIntroProps) => {
  return (
    <FirstSection className={className} style={style}>
      <BGImage src={imageSrc} />
    </FirstSection>
  );
};

export default PageIntro;

const FirstSection = styled.section`
  padding-top: ${HEADER_HEIGHT}px;
  padding-top: 140px;
  min-height: 50vh;
  /* border: 1px solid red; */
`;

export const LogoWrapper = styled.div``;

export const TitleText = styled.p<any>`
  position: relative;
  color: #fff;
  text-align: center;
  font-family: 'NextPro-Light', sans-serif;
  font-size: ${({ largeText }) => (largeText ? '2rem' : '19px')};
  margin: 55px auto 0;
  max-width: 400px;
  ${({ theme, largeText }) => theme.media.max.mobile`
    font-size: ${largeText ? '2rem' : '18px'};
    max-width: 300px;
  `}

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.Primary};
    position: absolute;
    left: 50%;

    transform: translateX(-50%);
    width: 50%;
    width: 130px;
    height: 5px;
    ${({ borderTop }) =>
      borderTop
        ? css`
            top: -20px;
          `
        : css`
            bottom: -20%;
          `}
  }
`;

const BGImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
  @media (min-width: 700px) {
    width: 100vw;
  }
`;
