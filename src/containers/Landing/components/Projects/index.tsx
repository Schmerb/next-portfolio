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

import { headerData } from 'utils/data/work';

const { title, text } = headerData;

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
