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

const Project = ({ project }: ProjectProps) => {
  // const {} = project;
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
        {project.tools.map(({ imgSrc, href }) => (
          <li key={href}>
            <Link href={href} target="_blank">
              <LogoImage src={imgSrc} />
            </Link>
          </li>
        ))}
      </LogoImagesList>
    </Container>
  );
};

export default memo(Project);

interface ProjectProps {
  project: ProjectType;
}

const Container = styled.div`
  padding: 15px;
  /* border: 1px solid #000; */
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
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 35px;
  margin-bottom: 35px;
`;

const LogoImage = styled.img`
  width: auto;
  height: 50px;
`;
