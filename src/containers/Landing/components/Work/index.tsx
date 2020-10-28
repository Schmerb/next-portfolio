/**
 *
 *
 *    Work
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import Banner from 'components/Banner';

import { headerData } from 'utils/data/work';

const { title, text } = headerData;

const Work = ({}: WorkProps) => {
  return (
    <Container>
      <Banner title={title} text={text} />
    </Container>
  );
};

export default memo(Work);

interface WorkProps {}

const Container = styled.section`
  border: 1px solid #000;
`;
