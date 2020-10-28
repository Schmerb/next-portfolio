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
import Project from 'components/Project';

import { headerData, thinkfulProjects } from 'utils/data/projects';

const { title, text } = headerData;

const Projects = ({}: ProjectsProps) => {
  return (
    <Container>
      <Banner title={title} text={text} />
      <ProjectList>
        {thinkfulProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ProjectList>
    </Container>
  );
};

export default memo(Projects);

interface ProjectsProps {}

const Container = styled.section`
  // border: 1px solid #000;
`;

const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* border: 1px solid limegreen; */
`;
