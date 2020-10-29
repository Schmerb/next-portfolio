/**
 *
 *
 * AnimatedWrapper
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

import usePrevious from 'utils/hooks/usePrevious';

const AnimatedWrapper = ({
  inView,
  children,
  scrollTop,
}: AnimatedWrapperProps) => {
  const prevScrolltop: number = usePrevious(scrollTop);
  const direction = scrollTop < prevScrolltop ? 'up' : 'down';
  const containerProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translate3d(0,0,0)'
      : `translate3d(0,${direction === 'up' ? '-' : ''}50px,0)`,
    config: {
      tension: 105,
    },
  });
  return <animated.div style={containerProps}>{children}</animated.div>;
};

export default memo(AnimatedWrapper);

interface AnimatedWrapperProps {
  inView: boolean;
  children: any;
  scrollTop: number;
}

const Container = styled.div`
  border: 1px solid #000;
`;
