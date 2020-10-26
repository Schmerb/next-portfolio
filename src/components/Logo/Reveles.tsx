/**
 *
 * Reveles Logo
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import Link from 'components/Elements/Link';
import LogoIcon from 'components/svg/Logo';
import RevelesSVGLogo, { RevelesFilled } from 'components/svg/RevelesLogo';

interface Props {
  isDark?: boolean;
  height?: number;
  width?: number;
  className?: string;
  style?: any;
  isFilled?: boolean;
}

const RevelesLogo = ({
  isDark = false,
  height = 30,
  width = 30,
  className,
  style,
  isFilled = false,
}: Props) => {
  return (
    <LogoWrapper isDark={isDark}>
      {/* <LogoImg src="/static/img/Reveles-logo.png" /> */}
      {isFilled ? (
        <RevelesFilled
          width={width}
          height={height}
          style={{ marginRight: 10 }}
        />
      ) : (
        <RevelesSVGLogo width={width} height={height} />
      )}
      <span>REVELES</span>
    </LogoWrapper>
  );
};

export default RevelesLogo;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  font-size: 30px;

  svg {
    stroke: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  }
`;

const LogoImg = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
`;
