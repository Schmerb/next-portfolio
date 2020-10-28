/**
 *
 *
 *    Project UI
 *
 *
 */

import React, { useState, useEffect, memo, useRef } from 'react';
import styled from 'styled-components';

import { ProjectType } from 'utils/data/types';

import ProjectInfo from './ProjectInfo';
import ProjectLogos from './ProjectLogos';
import ProjectButtons from './ProjectButtons';
import ProjectImages from './ProjectImages';
import useVisibilityState from './useVisibilityState';

const Project = ({ project, index, scrollTop }: ProjectProps) => {
  const {
    //
    // node Ref's
    //
    containerRef,
    titleRef,
    logosRef,
    buttonsRef,
    imagesRef,
    //
    // inView bool's
    //
    containerInView,
    titleInView,
    logosInView,
    buttonsInView,
    imagesInView,
  } = useVisibilityState({ scrollTop });

  return (
    <Container ref={containerRef} containerInView={containerInView}>
      <ProjectInfo titleRef={titleRef} project={project} />
      <ProjectLogos logosRef={logosRef} project={project} />
      <ProjectButtons
        passRef={buttonsRef}
        project={project}
        buttonsInView={buttonsInView}
      />
      <ProjectImages
        passRef={imagesRef}
        images={project.images}
        index={index}
        imagesInView={imagesInView}
      />
    </Container>
  );
};

export default memo(Project);

interface ProjectProps {
  project: ProjectType;
  index: number;
  scrollTop: number;
}

const Container = styled.div`
  position: relative;
  padding: 15px;
  padding-bottom: 50px;
  opacity: ${({ containerInView }) => (containerInView ? 1 : 0)};
  transition: opacity 2s;
  &:not(:last-of-type) {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 95%;
      height: 2px;
      margin: 0 auto;
      background-color: grey;
    }
  }
`;
