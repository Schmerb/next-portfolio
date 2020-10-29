/**
 *
 *
 *    ProjectButton
 *
 *
 */

import React, { useState, memo } from 'react';
import styled, { css } from 'styled-components';

import CodeIcon from 'components/svg/Icons/Code';

const ProjectButton = ({ text, href, style, noIcon }: ProjectButtonProps) => (
  <StyledLink href={href} target="_blank" style={style} noIcon={noIcon}>
    <span style={!noIcon ? { paddingRight: 10 } : {}}>{text}</span>
    {!noIcon && <CodeIcon width={30} height={30} />}
  </StyledLink>
);

export default memo(ProjectButton);

interface ProjectButtonProps {
  text: string;
  href: string;
  style?: any;
  noIcon?: boolean;
}

const StyledLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.PrimaryGrey};
  min-width: 140px;
  height: 46px;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.PrimaryBlue};
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s color, 0.15s border-color;

  ${({ noIcon }) =>
    !noIcon &&
    css`
      justify-content: space-evenly;
    `}

  svg,
  path {
    fill: ${({ theme }) => theme.colors.PrimaryGrey};
    transition: 0.15s color, 0.15s border-color;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.PrimaryPurple};
    color: ${({ theme }) => theme.colors.PrimaryPurple};

    svg,
    path {
      fill: ${({ theme }) => theme.colors.PrimaryPurple};
    }
  }
`;
