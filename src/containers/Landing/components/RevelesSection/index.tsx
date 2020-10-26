/**
 *
 * Reveles Section
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Title, TitleText } from '../Intro';

interface Props {}

const RevelesSection = ({}: Props) => {
  const [endState, setEndState] = useState({
    slug: '',
    title: 'introducing reveles',
    description:
      'Reveles is a Machine Intelligence platform which identifies the data that carries the greatest risk, and alerts you on the action required to reduce exposure',
  });

  return (
    <div>
      <SubTitleWrapper style={{ color: '#000', marginTop: '100px' }}>
        <Title
          style={{
            color: '#000',
          }}
        >
          {/* <LogoImg src="/static/img/Reveles-logo.png" /> */}
          {endState.title}
        </Title>
        <TitleText style={{ color: '#000' }}>{endState.description}</TitleText>
      </SubTitleWrapper>
      <LogoWrapper>
        <LogoImg src="/static/img/Reveles-logo.png" />
        <span>REVELES</span>
      </LogoWrapper>
    </div>
  );
};

export default RevelesSection;

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const LogoWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 30px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
`;
