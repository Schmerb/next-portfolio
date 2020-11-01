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

const Work = ({ scrollTop, direction, projects, projectHeader }: WorkProps) => {
  if (!projectHeader || !projectHeader.fields) {
    return null;
  }
  return (
    <Container id="work-section">
      <Banner
        title={projectHeader.fields.title}
        text={projectHeader.fields.text}
        scrollTop={scrollTop}
      />
      <ProjectList>
        {projects.map((project, index) => (
          <Project
            key={project.sys.id}
            project={project}
            index={index}
            scrollTop={scrollTop}
            direction={direction}
          />
        ))}
      </ProjectList>
    </Container>
  );
};

export default memo(Work);

interface WorkProps {
  scrollTop: number;
  direction: string;
  projects: any[];
  projectHeader: any;
}

const Container = styled.section`
  // border: 1px solid #000;
  min-height: 100vh;
`;

const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  /* border: 1px solid limegreen; */
`;
