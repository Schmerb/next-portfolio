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

import { getName } from 'utils/contentful';

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

const ProjectInfo = ({
  titleRef,
  project,
  inView,
  direction,
}: ProjectInfoProps) => {
  const [titleReady, setTitleReady] = useState(false);
  const [linkReady, setLinkReady] = useState(false);
  const [textReady, setTextReady] = useState(false);

  const titleProps = useAnimation(titleReady, direction);
  const linkProps = useAnimation(linkReady, direction);
  const textProps = useAnimation(textReady, direction);

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
          <Title>{project.fields.title}</Title>
        </animated.div>
        <animated.div style={linkProps}>
          <Link href={project.fields.linkHref} target="_blank">
            {project.fields.linkTitle}
          </Link>
        </animated.div>
      </TitleWrapper>
      <animated.div style={textProps}>
        <TextWrapper>
          <Text>{project.fields.description}</Text>
          {project.fields.credit && <Credit>{project.fields.credit}</Credit>}
        </TextWrapper>
      </animated.div>
    </>
  );
};

export default memo(ProjectInfo);

interface ProjectInfoProps {
  titleRef: any;
  project: any;
  inView: boolean;
  direction: string;
}

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.PrimaryBlue};
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  padding: 0;
  margin: 0;
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
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
  text-align: justify;
`;

const Credit = styled.div`
  padding-top: 15px;
  padding-left: 30px;
`;
