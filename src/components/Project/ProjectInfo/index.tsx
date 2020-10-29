/**
 *
 *
 *    ProjectInfo
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { ProjectType } from 'utils/data/types';

const ProjectInfo = ({ titleRef, project, inView }: ProjectInfoProps) => {
  console.log({ inView });
  return (
    <>
      <TitleWrapper ref={titleRef}>
        <Title>{project.title}</Title>
        <Link href={project.link.href} target="_blank">
          {project.link.title}
        </Link>
      </TitleWrapper>
      <TextWrapper>
        <Text>{project.description}</Text>
        {project.credit && <Credit>{project.credit}</Credit>}
      </TextWrapper>
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
