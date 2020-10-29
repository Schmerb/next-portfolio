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

import tools from './tools';

const title = 'Work Flow';
const text = 'Some of the tools I use to develop efficiently';

const WorkFlow = ({ scrollTop }: WorkFlowProps) => {
  // inView handler
  const { containerRef, containerInView } = useVisibilityState({ scrollTop });
  // animation
  const trail = useTrailAnimation({ containerInView });
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
}

const Container = styled.section`
  padding: 50px 15px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 0 auto;
  border: 1px solid #000;
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
 * useVisibilityState
 *
 * @param {*} { scrollTop }
 * @returns
 */
export const useVisibilityState = ({ scrollTop }) => {
  // ref
  const containerRef: any = useRef();
  // visibility
  const [containerInView, setContainerInView] = useState(false);
  //
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
    if (isInView(containerRect)) setContainerInView(true);
  }, [scrollTop]);

  return { containerRef, containerInView };
};

/**
 * useTrailAnimation
 *
 * @param {*} { containerInView }
 * @returns
 */
const useTrailAnimation = ({ containerInView }) => {
  // animation
  const [trail, set, stop]: any = useTrail(tools.length, () => ({
    opacity: 0,
    transform: 'translate3d(55px,25px,0)',
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
