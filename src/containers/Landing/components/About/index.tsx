/**
 *
 *
 *    About
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';

const text1 =
  'I am a full-stack JavaScript Engineer and recent graduate of the Full Stack Web Development Program at Thinkful. From a young age, I have always been inclined to build things and see what I can make. Since coding has come into my life, I have had the opportunity to do just that and create projects from scratch. The feeling of taking an idea and turning it into a fully functional, working application is unparalleled. My technology of choice is the MERN stack and I equally enjoy both frontend and backend development.';

const newText1 =
  'I am a full-stack JavaScript Engineer with over 4+ years of professional full-stack JavaScript experience, creating Isomorphic web-applications utilizing React/Redux in the front-end and NodeJs/Express running on the backend.';

const text2 =
  'When I am not solving problems, I enjoy piloting my drone and taking videos, catching deep powder on my snowboard, scuba diving, seeing live music, and riding roller coasters.';

const About = ({ data }: IAboutProps) => {
  if (!data) return null;
  console.log({ data });
  return (
    <Container id="about-me-section">
      <Content>
        <Title>Get To Know Me</Title>
        <Text>{newText1}</Text>
        <Text>{text2}</Text>
      </Content>
    </Container>
  );
};

export default memo(About);

interface IAboutProps {
  data: any;
}

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.PrimaryBlue};
  color: #fff;
  padding: 50px 15px;
  // border: 1px solid #000;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  text-align: center;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 2rem;
  `}
`;

const Text = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  font-weight: lighter;
  ${({ theme }) => theme.media.max.mobile`
    font-size: 1.3rem;
    text-align: center;
  `}
`;
