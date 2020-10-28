/**
 *
 *
 *    ProjectButtons
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import ProjectButton from './ProjectButton';

const ProjectButtons = ({ project }: IProjectButtonsProps) => {
  return (
    <ButtonWrapper hasAPI={!!project.apiCode}>
      <ProjectButton
        noIcon
        text="Check it Out"
        href={project.link.href}
        style={!project.apiCode ? { marginRight: '25px' } : {}}
      />
      {!project.apiCode && (
        <ProjectButton text="Code" href={project.clientCode} />
      )}
      {project.apiCode && (
        <BottomButtonWrapper style={{ marginTop: '25px' }}>
          <ProjectButton
            text="Client Code"
            href={project.clientCode}
            style={{ marginRight: '25px' }}
          />
          <ProjectButton text="Api Code" href={project.apiCode} />
        </BottomButtonWrapper>
      )}
    </ButtonWrapper>
  );
};

export default memo(ProjectButtons);

interface IProjectButtonsProps {
  project: any;
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
