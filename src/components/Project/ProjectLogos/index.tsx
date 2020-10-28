/**
 *
 *
 *    ProjectLogos
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { ProjectType } from 'utils/data/types';

const ProjectLogos = ({ logosRef, project }: IProjectLogosProps) => {
  const [, set] = useState();

  return (
    <LogoImagesList ref={logosRef}>
      {project.tools.map(({ id, imgSrc, href, style }) => (
        <li key={id}>
          <Link href={href} target="_blank">
            <LogoImage src={imgSrc} style={style} />
          </Link>
        </li>
      ))}
    </LogoImagesList>
  );
};

export default memo(ProjectLogos);

interface IProjectLogosProps {
  logosRef: any;
  project: ProjectType;
}

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

const Link = styled.a`
  text-align: center;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.PrimaryGrey};
`;

const LogoImage = styled.img`
  width: auto;
  height: 70px;
`;
