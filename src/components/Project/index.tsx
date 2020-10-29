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
  // node Ref's, inView bool's
  const { refs, state } = useVisibilityState({ scrollTop });

  return (
    <Container ref={refs.containerRef}>
      <AnimatedWrapper inView={state.titleInView} scrollTop={scrollTop}>
        <ProjectInfo
          titleRef={refs.titleRef}
          project={project}
          inView={state.titleInView}
        />
      </AnimatedWrapper>
      <AnimatedWrapper inView={state.logosInView} scrollTop={scrollTop}>
        <ProjectLogos
          logosRef={refs.logosRef}
          project={project}
          inView={state.logosInView}
        />
      </AnimatedWrapper>
      <AnimatedWrapper inView={state.buttonsInView} scrollTop={scrollTop}>
        <ProjectButtons
          passRef={refs.buttonsRef}
          project={project}
          buttonsInView={state.buttonsInView}
        />
      </AnimatedWrapper>
      <ProjectImages
        index={index}
        images={project.images}
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
