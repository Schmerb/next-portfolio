/**
 *
 *
 *    LoadingScreen
 *
 *
 */

import React, { useState, useEffect, memo } from 'react';
import styled, { keyframes } from 'styled-components';

import LoadingIcon from 'components/svg/Icons/LoadingIcon';

const LoadingScreen = ({}: LoadingScreenProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // block scrolling on html and body elements
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    const timeout = setTimeout(() => {
      setIsFading(true);
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const className = isFading ? 'fadeOut' : '';

  return (
    <Container className={className}>
      <SVGWrapper className={className}>
        <LoadingIcon />
      </SVGWrapper>
    </Container>
  );
};

export default memo(LoadingScreen);

interface LoadingScreenProps {}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  opacity: 1;
  transition: opacity 1s;
  border: 1px solid #000;
  pointer-events: none;

  &.fadeOut {
    opacity: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    background-image: url('/static/img/nicolas-cool-unsplash.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    transform: scale(1.1);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    fill: #50ffc4;
    width: 100px;
    height: 100px;
    animation: ${spin} 2s linear 0s infinite reverse;
    transition: width 1s, height 1s;
  }

  &.fadeOut {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
