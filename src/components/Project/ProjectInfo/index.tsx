/**
 *
 *
 *    ProjectInfo
 *
 *
 */

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { ProjectType } from 'utils/data/types';

const springConfig = {
  config: {
    tension: 105,
  },
};

const useAnimation = (isReady: boolean) =>
  useSpring({
    ...springConfig,
    opacity: isReady ? 1 : 0,
    transform: isReady ? 'translate3d(0,0,0)' : `translate3d(0,50px,0)`,
  });

const ProjectInfo = ({ titleRef, project, inView }: ProjectInfoProps) => {
  const [titleReady, setTitleReady] = useState(false);
  const [linkReady, setLinkReady] = useState(false);
  const [textReady, setTextReady] = useState(false);

  const titleProps = useAnimation(titleReady);
  const linkProps = useAnimation(linkReady);
  const textProps = useAnimation(textReady);

  useEffect(() => {
    let timeout1;
    let timeout2;
    // create cascade effect
    if (inView) {
      setTitleReady(true);
      timeout1 = setTimeout(() => {
        setLinkReady(true);
        timeout2 = setTimeout(() => {
          setTextReady(true);
        }, 250);
      }, 250);
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [inView]);

  return (
    <>
      <TitleWrapper ref={titleRef}>
        <animated.div style={titleProps}>
          <Title>{project.title}</Title>
        </animated.div>
        <animated.div style={linkProps}>
          <Link href={project.link.href} target="_blank">
            {project.link.title}
          </Link>
        </animated.div>
      </TitleWrapper>
      <animated.div style={textProps}>
        <TextWrapper>
          <Text>{project.description}</Text>
          {project.credit && <Credit>{project.credit}</Credit>}
        </TextWrapper>
      </animated.div>
    </>
  );
};

export default memo(ProjectInfo);

interface ProjectInfoProps {
  titleRef: any;
  project: ProjectType;
  inView: boolean;
}

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.PrimaryBlue};
  font-size: 2.2rem;
  padding: 0;
  margin: 0;

  font-family: 'Montserrat', sans-serif;
`;

const Link = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.PrimaryGrey};
`;

const TextWrapper = styled.div`
  max-width: 600px;
  margin: 35px auto 0px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.PrimaryGrey};
  font-size: 1.4rem;
  padding: 0;
  margin: 0;
  text-align: justify;
`;

const Credit = styled.div`
  padding-top: 15px;
  padding-left: 30px;
`;
