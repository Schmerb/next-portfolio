/**
 *
 * Link
 *
 *  */

import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { colorShade } from 'utils/helperFunctions/colors';

interface Props {
  href: string;
  text: string;
  children?: any;
  className?: string;
  isActive?: boolean;
  style?: any;
  onClick?: (evt?: any) => void;
}

export const CustomLink = ({
  href,
  text,
  children,
  isActive,
  className,
  style,
  ...props
}: Props) => (
  <Link href={href}>
    <StyledLink
      className={className}
      isActive={isActive}
      style={style}
      {...props}
    >
      {text || children}
    </StyledLink>
  </Link>
);

export default CustomLink;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;

  &:hover {
    color: #ccc;
  }
`;
