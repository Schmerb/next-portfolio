/**
 *
 *
 *    LoadingScreen
 *
 *
 */

import React, { useState, useEffect, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';

import LoadingIcon from 'components/svg/Icons/LoadingIcon';

const FADE_OUT_DELAY = 1000;

const LoadingScreen = ({}: LoadingScreenProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // block vertical scrolling on html and body elements
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
    const timeout = setTimeout(() => {
      // set state to start fade out animation
      setIsFading(true);
      // allow vertical scrolling on html/body
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }, FADE_OUT_DELAY);

    return () => {
      // cleanup timer
      clearTimeout(timeout);
    };
  }, []);

  const props = useSpring({
    opacity: isFading ? 0 : 1,
    config: {
      tension: 90, // slows down speed of spring animation
    },
  });

  // class used to animate width/height of SVG
  const className = isFading ? 'fadeOut' : '';

  return (
    <Container className={className} style={props}>
      <SVGWrapper className={className}>
        <LoadingIcon />
      </SVGWrapper>
    </Container>
  );
};

export default memo(LoadingScreen);

interface LoadingScreenProps {}

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  border: 1px solid #000;
  pointer-events: none;

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
