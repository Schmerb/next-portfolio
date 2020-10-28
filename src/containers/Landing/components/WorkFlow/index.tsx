/**
 *
 *
 *    WorkFlow
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const WorkFlow = ({}: WorkFlowProps) => {
  const [, set] = useState();

  return <Container>WorkFlow</Container>;
};

export default memo(WorkFlow);

interface WorkFlowProps {}

const Container = styled.section`
  // border: 1px solid #000;
`;
