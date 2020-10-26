/**
 *
 *
 *    Work
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const Work = ({}: WorkProps) => {
  const [, set] = useState();

  return <Container>Work</Container>;
};

export default memo(Work);

interface WorkProps {}

const Container = styled.section`
  border: 1px solid #000;
`;
