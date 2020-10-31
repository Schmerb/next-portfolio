/**
 *
 *
 *    AboutThisSite
 *
 *
 */

import React, { useState, useRef, memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';

import ProjectLogos from 'components/Project/ProjectLogos';
import Link from 'components/Elements/Link';

import useVisibilityState from 'utils/hooks/useVisibilityState';

import logos from 'utils/data/logos';

const title = 'Built With';
const text = () => (
  <>
    This site is a statically generated build using{' '}
    <Link href="https://nextjs.org/">NextJS</Link> and hosted on{' '}
    <Link href="https://www.netlify.com/">Netlify</Link>. It uses{' '}
    <Link href="https://www.react-spring.io/">react-spring</Link> to harness
    smooth animations based on spring-physics.
  </>
);
const tools = [
  {
    id: uuidv4(),
    ...logos.reactRedux,
  },
  {
    id: uuidv4(),
    ...logos.nextJs,
  },
  {
    id: uuidv4(),
    ...logos.styledComponents,
  },
  {
    id: uuidv4(),
    ...logos.reactSpring,
  },
  {
    id: uuidv4(),
    ...logos.netlify,
  },
];

const AboutThisSite = ({ scrollTop }: AboutThisSiteProps) => {
  const { containerRef, containerInView } = useVisibilityState({ scrollTop });

  const ref = useRef();

  const containerProps = useSpring({
    opacity: containerInView ? 1 : 0,
    config: {
      tension: 105,
    },
  });

  const textProps = useSpring({
    opacity: containerInView ? 1 : 0,
    config: {
      tension: 105,
    },
  });

  return (
    <Container id="aboutThisSite-section" ref={containerRef}>
      <animated.div style={containerProps}>
        <Title>{title}</Title>
      </animated.div>
      <animated.div style={textProps}>
        <Text>{text()}</Text>
      </animated.div>
      <ProjectLogos logosRef={ref} tools={tools} inView={containerInView} />
    </Container>
  );
};

export default memo(AboutThisSite);

interface AboutThisSiteProps {
  scrollTop: number;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  color: ${({ theme }) => theme.colors.GreyScale};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.PrimaryBlue};
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
  padding: 0 15px;
  margin: 20px auto;
  text-align: center;
`;
