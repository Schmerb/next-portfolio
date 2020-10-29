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

const Projects = ({ scrollTop }: ProjectsProps) => {
  return (
    <Container id="projects-section">
      <Banner title={title} text={text} scrollTop={scrollTop} />
      <ProjectList>
        {thinkfulProjects.map((project, index) => (
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

export default memo(Projects);

interface ProjectsProps {
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
