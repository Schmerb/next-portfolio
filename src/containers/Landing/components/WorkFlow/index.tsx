/**
 *
 *
 *    WorkFlow
 *
 *
 */
import React, { useEffect, useState, memo, useRef } from 'react';
import styled from 'styled-components';
import { useTrail, animated } from 'react-spring';

import useVisibilityState from 'utils/hooks/useVisibilityState';

import tools from './tools';

const title = 'Work Flow';
const text = 'Some of the tools I use to develop efficiently';

const WorkFlow = ({ scrollTop, direction }: WorkFlowProps) => {
  // inView handler
  const { containerRef, containerInView } = useVisibilityState({ scrollTop });
  // animation
  const trail = useTrailAnimation({ containerInView, direction });
  return (
    <Container id="work-flow-section" ref={containerRef}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <List>
        {trail.map((props, index) => {
          const { id, imgSrc, href, style } = tools[index];
          return (
            <animated.li style={props} key={id}>
              <Link href={href} target="_blank">
                <LogoImage src={imgSrc} style={style} />
              </Link>
            </animated.li>
          );
        })}
      </List>
    </Container>
  );
};

export default memo(WorkFlow);

interface WorkFlowProps {
  scrollTop: number;
  direction: string;
}

const Container = styled.section`
  padding: 50px 15px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 50px auto;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 95%;
    height: 1px;
    margin: 0 auto;
    background-color: rgba(100, 100, 100, 0.4);
    transition: opacity 1s;
    opacity: ${({ inView }) => (inView ? 1 : 0)};
  }
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  text-align: center;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 2rem;
  `}
  margin: 0;
  padding: 0;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin-top: 50px;
  ${({ theme }) => theme.media.max.mobile`
    flex-direction: column;
    align-items: center;
  `}

  li {
    ${({ theme }) => theme.media.max.mobile`
      margin-top: 15px;
      margin-bottom: 15px;
    `}
  }
`;

const Link = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.PrimaryGrey};
`;

const LogoImage = styled.img`
  width: auto;
  height: 100px;
  transition: transform 0.15s;
  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`;

/**
 * useTrailAnimation
 *
 * @param {*} { containerInView }
 * @returns
 */
const useTrailAnimation = ({ containerInView, direction }) => {
  // animation
  const [trail, set, stop]: any = useTrail(tools.length, () => ({
    opacity: 0,
    transform: `translate3d(55px,${direction === 'up' ? '-' : ''}25px,0)`,
    config: {
      tension: 105,
    },
  }));

  //
  // track when inView to fire trail animation
  //
  useEffect(() => {
    if (containerInView) {
      set({ opacity: 1, transform: 'translate3d(0,0,0)' });
    }
  }, [containerInView]);

  return trail;
};
