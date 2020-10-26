/**
 *
 * Logo
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import Link from 'components/Elements/Link';
import LogoIcon from 'components/svg/Logo';

interface Props {
  isDark?: boolean;
  height?: number;
  width?: number;
  className?: string;
  style?: any;
}

const Logo = ({
  isDark = false,
  height = 30,
  width = 30,
  className,
  style,
}: Props) => {
  return (
    <StyledLink href="/" className={className} style={style}>
      <LogoIcon width={width} height={height} fill={isDark ? '#000' : '#fff'} />
      <span style={{ color: isDark ? '#000' : '#fff' }}>SecondSight</span>
    </StyledLink>
  );
};

export default Logo;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
