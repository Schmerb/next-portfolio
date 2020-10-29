/**
 *
 *
 *    ProjectButtons
 *
 *
 */

import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import ProjectButton from './ProjectButton';

const springConfig = {
  config: {
    tension: 105,
  },
};

const useAnimation = (isReady: boolean, direction: string) =>
  useSpring({
    ...springConfig,
    opacity: isReady ? 1 : 0,
    transform: isReady
      ? 'translate3d(0,0,0)'
      : `translate3d(0,${direction === 'up' ? '-' : ''}50px,0)`,
  });

const ProjectButtons = ({
  project,
  passRef,
  buttonsInView,
  direction,
}: IProjectButtonsProps) => {
  const [topBtnReady, setTopBtnReady] = useState(false);
  const [leftBtnReady, setLeftBtnReady] = useState(false);
  const [rightBtnReady, setRightBtnReady] = useState(false);

  const topBtnProps = useAnimation(topBtnReady, direction);
  const leftBtnProps = useAnimation(leftBtnReady, direction);
  const rightBtnProps = useAnimation(rightBtnReady, direction);

  useEffect(() => {
    let timeout1;
    let timeout2;
    // create cascade effect
    if (buttonsInView) {
      setTopBtnReady(true);
      timeout1 = setTimeout(() => {
        setLeftBtnReady(true);
        timeout2 = setTimeout(() => {
          setRightBtnReady(true);
        }, 250);
      }, 250);
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [buttonsInView]);

  return (
    <ButtonWrapper hasAPI={!!project.apiCode} ref={passRef}>
      <animated.div style={topBtnProps}>
        <ProjectButton
          noIcon
          text="Check it Out"
          href={project.link.href}
          style={!project.apiCode ? { marginRight: '25px' } : {}}
        />
      </animated.div>
      {!project.apiCode && (
        <animated.div style={leftBtnProps}>
          <ProjectButton text="Code" href={project.clientCode} />
        </animated.div>
      )}
      {project.apiCode && (
        <BottomButtonWrapper style={{ marginTop: '25px' }}>
          <animated.div style={leftBtnProps}>
            <ProjectButton
              text="Client Code"
              href={project.clientCode}
              style={{ marginRight: '25px' }}
            />
          </animated.div>
          <animated.div style={rightBtnProps}>
            <ProjectButton text="Api Code" href={project.apiCode} />
          </animated.div>
        </BottomButtonWrapper>
      )}
    </ButtonWrapper>
  );
};

export default memo(ProjectButtons);

interface IProjectButtonsProps {
  project: any;
  passRef: any;
  buttonsInView: boolean;
  direction: string;
}

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: ${({ hasAPI }) => (hasAPI ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
`;

const BottomButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
