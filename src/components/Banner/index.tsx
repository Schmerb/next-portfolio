/**
 *
 *
 *    Banner
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const Banner = ({ title = '', text = '' }: BannerProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};

export default memo(Banner);

interface BannerProps {
  title: string;
  text: string;
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  color: ${({ theme }) => theme.colors.PrimaryBlue};
  /* background-color: ${({ theme }) => theme.colors.DarkBlue};
  color: ${({ theme }) => theme.colors.GreyScale}; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  height: 400px;
  padding: 15px;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.Blue};
  font-size: 3rem;
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.Bone};
  font-size: 1.5rem;
  max-width: 800px;
  padding: 0;
  margin: 0 auto;
  text-align: center;
`;
