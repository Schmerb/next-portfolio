/**
 *
 * Resources
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import FooterTitle from 'components/FooterTitle';

import ResourcesIntro from './components/ResourcesIntro';
import Whitepapers from './components/Whitepapers';

export interface ResourcesProps {}

const Resources = ({}: ResourcesProps) => {
  const [state, setState] = useState({ slug: '', title: 'Resources Page' });

  return (
    <>
      <Container>
        <ResourcesIntro />
        <Whitepapers />
      </Container>
      <FooterTitle />
    </>
  );
};

export default Resources;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
`;
