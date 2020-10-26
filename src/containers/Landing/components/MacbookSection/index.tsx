/**
 *
 * Macbook Section
 *
 *  */

import React from 'react';
import styled from 'styled-components';

interface Props {
  style?: any;
}

import LearnButton from 'components/Elements/Button';

const MacbookSection = ({ style }: Props) => {
  const handleClick = () => {
    alert('Learn more!');
  };
  return (
    <Container style={style}>
      <MacbookImg src="/static/img/Landing/macbook.png" />
      <SecondBGImage src="/static/img/Landing/bg-blue-numbers-arch.png" />
      <Text>
        <span style={{ display: 'block' }}>
          <Top>Quickly and confidently</Top> discover data assets
        </span>
        <span style={{ display: 'block' }}>and pinpoint data risks...</span>
      </Text>
      <LearnButton onClick={handleClick} text="Learn More" />
    </Container>
  );
};

export default MacbookSection;

const Container = styled.section`
  margin-top: 40px;
  position: relative;
  text-align: center;
`;

const MacbookImg = styled.img`
  width: 90%;
  max-width: 400px;
  height: auto;
  margin: 0 auto;
`;

const SecondBGImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  z-index: -1;
`;

const Text = styled.p`
  font-family: 'NextPro-Medium', sans-serif;
  font-size: 1.4rem;
  color: #fff;
  margin: 25px auto 0;
  text-align: center;

  ${({ theme }) => theme.media.min.mobile`
    width: 65%; 
  `}

  &::after {
    content: '';
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    width: 140px;
    margin-top: 10px;
  }
`;

const Top = styled.span`
  ${({ theme }) => theme.media.max.mobile`
    display: block;
  `}
`;
