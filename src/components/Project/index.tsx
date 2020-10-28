/**
 *
 *
 *    Project UI
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { ProjectType } from 'utils/data/types';

import ProjectButtons from './ProjectButtons';
import ProjectImages from './ProjectImages';

const Project = ({ project, index }: ProjectProps) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{project.title}</Title>
        <Link href={project.link.href} target="_blank">
          {project.link.title}
        </Link>
      </TitleWrapper>
      <TextWrapper>
        <Text>{project.description}</Text>
        {project.credit && <Credit>{project.credit}</Credit>}
      </TextWrapper>
      <LogoImagesList>
        {project.tools.map(({ id, imgSrc, href, style }) => (
          <li key={id}>
            <Link href={href} target="_blank">
              <LogoImage src={imgSrc} style={style} />
            </Link>
          </li>
        ))}
      </LogoImagesList>
      <ProjectButtons project={project} />
      <ProjectImages images={project.images} index={index} />
    </Container>
  );
};

export default memo(Project);

interface ProjectProps {
  project: ProjectType;
  index: number;
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

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Blue};
  font-size: 3rem;
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
  max-width: 800px;
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

const LogoImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 35px;
  margin-bottom: 35px;

  li {
    display: flex;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const LogoImage = styled.img`
  width: auto;
  height: 70px;
`;

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
