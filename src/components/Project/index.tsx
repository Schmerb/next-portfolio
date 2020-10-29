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

const Project = ({ project, index, scrollTop, direction }: ProjectProps) => {
  // node Ref's, inView bool's
  const { refs, state } = useVisibilityState({ scrollTop });

  return (
    <Container ref={refs.containerRef} inView={state.containerInView}>
      <ProjectInfo
        titleRef={refs.titleRef}
        project={project}
        direction={direction}
        inView={state.titleInView}
      />
      <ProjectLogos
        logosRef={refs.logosRef}
        project={project}
        inView={state.logosInView}
      />
      <ProjectButtons
        passRef={refs.buttonsRef}
        project={project}
        direction={direction}
        buttonsInView={state.buttonsInView}
      />
      <ProjectImages
        index={index}
        images={project.images}
        direction={direction}
        // refs
        passDesktopRef={refs.desktopRef}
        passLaptopRef={refs.laptopRef}
        passMobileRef={refs.mobileRef}
        // inView state
        desktopInView={state.desktopInView}
        laptopInView={state.laptopInView}
        mobileInView={state.mobileInView}
      />
    </Container>
  );
};

export default memo(Project);

interface ProjectProps {
  project: ProjectType;
  index: number;
  scrollTop: number;
  direction: string;
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
      height: 1px;
      margin: 0 auto;
      background-color: rgba(100, 100, 100, 0.4);
      transition: opacity 1s;
      opacity: ${({ inView }) => (inView ? 1 : 0)};
    }
  }
`;
