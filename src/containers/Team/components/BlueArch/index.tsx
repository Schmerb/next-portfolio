/**
 *
 * BlueArch
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Title, TitleWrapper } from 'containers/Landing/components/Intro';

import BlueArchLayout from './BlueArchLayout';

interface Props {}

const BlueArch = (props: Props) => {
  return (
    <Container>
      <ImgBG src="/static/img/Team/bg-arch@2x.png" />
      <TitleWrapper style={{ marginTop: '15vw' }}>
        <Title light>how we started</Title>
      </TitleWrapper>
      <BlueArchLayout />
      <ImgBGBottom src="/static/img/Team/bg-arch@2x.png" />
    </Container>
  );
};

export default BlueArch;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 50vh;
  margin-top: 100px;
  border: 1px solid transparent;
`;

const ImgBG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 200px;
  z-index: -1;
  height: auto;
`;

const ImgBGBottom = styled.img`
  position: absolute;
  left: 0;
  bottom: -20%;
  width: 100vw;
  height: 200px;
  z-index: -1;
  height: auto;
`;
