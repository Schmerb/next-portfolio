/**
 *
 *
 *    Projects
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const Projects = ({}: ProjectsProps) => {
  const [, set] = useState();

  return <Container>Projects</Container>;
};

export default memo(Projects);

interface ProjectsProps {}

const Container = styled.section`
  border: 1px solid #000;
`;
