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
  const {} = project;
  return <Container></Container>;
};

export default memo(Project);

interface ProjectProps {
  project: ProjectType;
}

const Container = styled.div`
  border: 1px solid #000;
`;
