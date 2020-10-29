/**
 *
 *
 * Project UI
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
import AnimatedWrapper from './AnimatedWrapper';
import useVisibilityState from './useVisibilityState';

const Project = ({ project, index, scrollTop }: ProjectProps) => {
  const {
    // node Ref's
    refs,
    // inView bool's
    state,
  } = useVisibilityState({ scrollTop });

  return (
    // <AnimatedWrapper inView={state.containerInView}>
    <Container ref={refs.containerRef}>
      <AnimatedWrapper inView={state.titleInView}>
        <ProjectInfo
          titleRef={refs.titleRef}
          project={project}
          inView={state.titleInView}
        />
      </AnimatedWrapper>
      <AnimatedWrapper inView={state.logosInView}>
        <ProjectLogos
          logosRef={refs.logosRef}
          project={project}
          inView={state.logosInView}
        />
      </AnimatedWrapper>
      <AnimatedWrapper inView={state.buttonsInView}>
        <ProjectButtons
          passRef={refs.buttonsRef}
          project={project}
          buttonsInView={state.buttonsInView}
        />
      </AnimatedWrapper>
      <AnimatedWrapper inView={state.imagesInView}>
        <ProjectImages
          passRef={refs.imagesRef}
          images={project.images}
          index={index}
          imagesInView={state.imagesInView}
        />
      </AnimatedWrapper>
    </Container>
    // </AnimatedWrapper>
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
