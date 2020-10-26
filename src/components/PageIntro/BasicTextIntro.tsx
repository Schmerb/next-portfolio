/**
 *
 * BasicTextIntro
 *
 *  */

import React from 'react';
import styled, { css } from 'styled-components';

import { HEADER_HEIGHT } from 'components/Header';
import RevelesLogo from 'components/Logo/Reveles';

interface BasicTextIntroProps {
  imageSrc: string;
  text?: string;
  textArr?: string[];
  children?: any;
  style?: any;
  className?: string;
  borderTop?: boolean;
  largeText?: boolean;
}

const BasicTextIntro = ({
  imageSrc = '/static/img/Product/bg-image@2x.png',
  children,
  text,
  textArr = null,
  style,
  className,
  borderTop = true,
  largeText = false,
}: BasicTextIntroProps) => {
  return (
    <FirstSection className={className} style={style}>
      <BGImage src={imageSrc} />

      <LogoWrapper>
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

export default BasicTextIntro;

const FirstSection = styled.section`
  padding-top: 140px;
  min-height: 100vh;
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
  z-index: -1;
  @media (max-width: 699px) {
    height: 100vh;
  }
  @media (min-width: 700px) {
    width: 100vw;
  }
`;
