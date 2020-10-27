/**
 *
 *
 *    Projects
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import Banner from 'components/Banner';

const title = 'Work';
const text =
  'Below is a project I was hired to build. I was the only developer and worked closely with the designer.';
const Projects = ({}: ProjectsProps) => {
  const [, set] = useState();

  return (
    <Container>
      <Banner title={title} text={text} />
    </Container>
  );
};

export default memo(Projects);

interface ProjectsProps {}

const Container = styled.section`
  border: 1px solid #000;
`;
