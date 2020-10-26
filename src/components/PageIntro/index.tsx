/**
 *
 * PageIntro
 *
 *  */

import React from 'react';
import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header';
import RevelesLogo from 'components/Logo/Reveles';

interface PageIntroProps {
  imageSrc: string;
  text?: string;
  textArr?: string[];
  children?: any;
  style?: any;
  className?: string;
  borderTop?: boolean;
  largeText?: boolean;
  noLogo?: boolean;
  imgStyle?: any;
}

const PageIntro = ({
  imageSrc = '/static/img/Product/bg-image@2x.png',
  children,
  text,
  textArr = null,
  style,
  className,
  borderTop = true,
  largeText = false,
  noLogo = false,
  imgStyle = {},
}: PageIntroProps) => {
  // console.log({ imgStyle });
  return (
    <FirstSection className={className} style={style}>
      <BGImage src={imageSrc} imgStyle={imgStyle} />

      <LogoWrapper>
        {!noLogo && <RevelesLogo />}
        {text ? (
          <TitleText largeText={largeText} borderTop={borderTop}>
            {text}
          </TitleText>
        ) : textArr ? (
          <TitleText largeText={largeText} borderTop={borderTop}>
            <span style={{ display: 'block' }}>{textArr[0]}</span>
            <span style={{ display: 'block' }}>{textArr[1]}</span>
          </TitleText>
        ) : (
          ''
        )}
      </LogoWrapper>

      {children}
    </FirstSection>
  );
};

export default PageIntro;

const FirstSection = styled.section`
  padding-top: ${HEADER_HEIGHT}px;
  padding-top: 140px;
  min-height: 100vh;

  @media (max-width: 699px) and (max-height: 700px) {
    // this helps with smaller viewport sizes avoid whitespace and title colliding
    margin-bottom: 300px;
  }

  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;

export const LogoWrapper = styled.div`
  @media (min-width: 700px) {
    margin-top: 40px;
  }

  ${({ theme }) => theme.media.min.tablet`
     margin-top: 60px;
     transform: scale(1.1);
  `}
  /* margin-top: 10vw; */
  ${({ theme }) => theme.media.min.desktop`
    transform: scale(1.2);
  `} 
   @media (min-width: 1200px) {
    transform: scale(1.3);
  }
  @media (min-width: 1300px) {
    transform: scale(1.4);
  }
  @media (min-width: 1400px) {
    transform: scale(2);
  }
`;

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
    ${({ theme }) => theme.media.max.mobile`
      width: 80px;
    `}
    ${({ theme }) => theme.media.min.mobile`
      width: 130px;
    `}
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
  object-fit: cover;
  z-index: -1;

  @media all and (orientation: landscape) {
    width: 100vw;
  }

  @media all and (orientation: portrait) {
    height: 100vh;
  }

  @media (max-width: 699px) and (max-height: 700px) {
    // this helps with smaller viewport sizes avoid whitespace and title colliding
    height: 170vh;
  }
  @media (min-width: 700px) {
    width: 100vw;
  }
`;
