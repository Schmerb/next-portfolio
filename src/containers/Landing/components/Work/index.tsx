/**
 *
 *
 *    Work
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import Banner from 'components/Banner';
import Project from 'components/Project';

import { headerData, workProjects } from 'utils/data/work';

const { title, text } = headerData;

const Work = ({ scrollTop }: WorkProps) => {
  return (
    <Container id="work-section">
      <Banner title={title} text={text} scrollTop={scrollTop} />
      <ProjectList>
        {workProjects.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            index={index}
            scrollTop={scrollTop}
          />
        ))}
      </ProjectList>
    </Container>
  );
};

export default memo(Work);

interface WorkProps {
  scrollTop: number;
}

const Container = styled.section`
  // border: 1px solid #000;
`;

const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* border: 1px solid limegreen; */
`;
