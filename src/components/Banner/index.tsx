/**
 *
 *
 *    Banner
 *
 *
 */

import React, { useState, useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Banner = ({ title = '', text = '', scrollTop }: BannerProps) => {
  const { containerRef, inView } = useVisibilityState({ scrollTop });

  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timeout;
    if (inView) {
      setShowTitle(true);
      timeout = setTimeout(() => {
        setShowText(true);
      }, 500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [inView]);

  const containerProps = useSpring({
    opacity: showTitle ? 1 : 0,
    config: {
      tension: 105,
    },
  });

  const textProps = useSpring({
    opacity: showText ? 1 : 0,
    config: {
      tension: 105,
    },
  });

  return (
    <Container ref={containerRef}>
      <animated.div style={containerProps}>
        <Title>{title}</Title>
      </animated.div>
      <animated.div style={textProps}>
        <Text>{text}</Text>
      </animated.div>
    </Container>
  );
};

export default memo(Banner);

interface BannerProps {
  title: string;
  text: string;
  scrollTop: number;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  color: ${({ theme }) => theme.colors.PrimaryBlue};
  /* background-color: ${({ theme }) => theme.colors.DarkBlue};
  color: ${({ theme }) => theme.colors.GreyScale}; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  height: 400px;
  padding: 15px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Blue};
  font-size: 3rem;
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.Bone};
  font-size: 1.5rem;
  max-width: 800px;
  padding: 0;
  margin: 0 auto;
  text-align: center;
`;

const useVisibilityState = ({ scrollTop }) => {
  // ref
  const containerRef: any = useRef();
  // state
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) {
      // return if not mounted yet
      return () => {};
    }
    // to check if el is in viewport
    const isInView = (box: any) => {
      const { innerHeight } = window;
      const targetHeight = innerHeight - innerHeight / 4;
      // top: distance from top of El to top of viewport
      // bottom: distance from bottom of El to top of viewport
      const { top, bottom } = box;
      return top < targetHeight && bottom >= 0;
    };

    //
    // grab node client rect DOM info
    //
    const containerRect = containerRef.current.getBoundingClientRect();
    //
    // check if is in view and set state
    //
    if (isInView(containerRect)) setInView(true);
  }, [scrollTop]);

  return {
    containerRef,
    inView,
  };
};
