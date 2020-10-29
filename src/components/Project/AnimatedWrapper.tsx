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

const AnimatedWrapper = ({ inView, children }: AnimatedWrapperProps) => {
  const containerProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,50px,0)',
  });

  return <animated.div style={containerProps}>{children}</animated.div>;
};

export default memo(AnimatedWrapper);

interface AnimatedWrapperProps {
  inView: boolean;
  children: any;
}

const Container = styled.div`
  border: 1px solid #000;
`;
