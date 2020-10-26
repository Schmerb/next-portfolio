/**
 *
 *
 *    About
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const About = ({}: IAboutProps) => {
  const [, set] = useState();

  return <Container>About</Container>;
};

export default memo(About);

interface IAboutProps {}

const Container = styled.section`
  border: 1px solid #000;
`;
