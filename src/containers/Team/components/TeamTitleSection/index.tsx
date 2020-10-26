/**
 *
 * TeamTitleSection
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Title, TitleText } from 'containers/Landing/components/Intro';

interface Props {}

const TeamTitleSection = (props: Props) => {
  const [content, setContent] = useState({
    title: ['minds', 'and makers'],
    description1:
      'We are Minds and Makers set out to re-imagine the relationship between the economics of Data and Business.',
    description2:
      'We are Hedge Funders, Business Owners, Chief Data Officers, Chemical Engineers and Microbiologists, driven by a common vision of rethinking and reshaping the way businesses see data.',
  });
  return (
    <Container>
      <TitleWrapper>
        <BGArch src="/static/img/Team/bg-grey-arch@2x.png" />
        <Title dark>
          <div>{content.title[0]}</div>
          <span>{content.title[1]}</span>
        </Title>
        <Text>{content.description1}</Text>
        <TextLight>{content.description2}</TextLight>
      </TitleWrapper>
    </Container>
  );
};

export default TeamTitleSection;

const Container = styled.section`
  width: 100%;
  padding: 0 15px;
  transition: margin-top 0.3s;

  ${({ theme }) => theme.media.min.desktop`
     margin-top: 5vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 10vw;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 0;
  ${({ theme }) => theme.media.min.tablet`
    font-size: 1.1rem;
  `}
  ${({ theme }) => theme.media.min.desktop`
    font-size: 1.2rem;
  `}
`;

const BGArch = styled.img`
  position: absolute;
  top: -35%;
  left: -26%;
  width: 100vw;
  max-width: 1700px;
  height: auto;
  z-index: -2;
  opacity: 0.75;
  ${({ theme }) => theme.media.min.mobile`
    top: -20vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    width: 80vw;
    left: -7%;
  `}
`;

const Text = styled.p`
  color: #000;
  width: 80%;
  max-width: 300px;
  margin: 35px auto 0;
  ${({ theme }) => theme.media.min.tablet`
    max-width: 400px;
    margin-top: 100px;
  `}
`;

const TextLight = styled(Text)`
  font-family: 'NextPro-Light', sans-serif;
  margin: 35px auto 0;
`;
