/**
 *
 * FooterTitle
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Title } from 'containers/Landing/components/Intro';
import RevelesLogo from 'components/Logo/Reveles';

interface Props {
  titleFirstLine?: string;
  titleSecondLine?: string;
  showLogo?: boolean;
}

const FooterTitle = ({
  titleFirstLine = `let’s talk`,
  titleSecondLine = 'about your data',
  showLogo = false,
}: Props) => {
  return (
    <SubTitleWrapper>
      {showLogo && (
        <div style={{ marginBottom: '35px' }}>
          <RevelesLogo isDark isFilled />
        </div>
      )}
      <Title style={{ color: '#000' }}>
        {titleFirstLine} <SecondLine>{titleSecondLine}</SecondLine>
      </Title>
    </SubTitleWrapper>
  );
};

export default FooterTitle;

const SubTitleWrapper = styled.div`
  color: #000;
  text-align: center;
  margin-top: 50px;
  ${({ theme }) => theme.media.min.tablet`
    transform: translateY(100px);
  `}
  ${({ theme }) => theme.media.min.desktop`
    transform: translateY(200px);
  `} /* margin-top: 100px; */
`;

const SecondLine = styled.div`
  ${({ theme }) => theme.media.min.tablet`
    display: inline-block;
  `}
`;
