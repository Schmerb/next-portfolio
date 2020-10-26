/**
 *
 * CaseStudies
 *
 *  */

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import Button from 'components/Elements/Button';
import { Title, TitleText } from 'containers/Landing/components/Intro';

import useCaseStudiesState from './useCaseStudiesState';

interface Props {}

const CaseStudies = (props: Props) => {
  const router = useRouter();
  const { content } = useCaseStudiesState({});
  const handleCaseStudyClick = ({ title, imageSrc, description }) => () => {
    router.push({
      pathname: `/downloads`,
      query: { title, imageSrc, description },
    });
  };
  return (
    <Container>
      <CaseStudiesList>
        {content.map(({ title, imageSrc, description }, index) => (
          <li key={title}>
            {index % 2 !== 0 && (
              <ImgBtnWrapper>
                <Img src={imageSrc} />
                <MobileCaseStudyBtn
                  onClick={handleCaseStudyClick({
                    title,
                    imageSrc,
                    description,
                  })}
                >
                  Case Study
                </MobileCaseStudyBtn>
              </ImgBtnWrapper>
            )}
            <MainWrapper isEven={index % 2 === 0}>
              <StyledTitle
                small
                dark
                isEven={index % 2 === 0}
                className="StyledTitle"
              >
                {title}
              </StyledTitle>
              <TextBtnWrapper isEven={index % 2 === 0}>
                <Text isEven={index % 2 === 0}>{description}</Text>
                <DesktopCaseStudyBtn
                  onClick={handleCaseStudyClick({
                    title,
                    imageSrc,
                    description,
                  })}
                >
                  Case Study
                </DesktopCaseStudyBtn>
              </TextBtnWrapper>
            </MainWrapper>
            {index % 2 === 0 && (
              <ImgBtnWrapper>
                <Img src={imageSrc} />
                <MobileCaseStudyBtn
                  onClick={handleCaseStudyClick({
                    title,
                    imageSrc,
                    description,
                  })}
                >
                  Case Study
                </MobileCaseStudyBtn>
              </ImgBtnWrapper>
            )}
          </li>
        ))}
      </CaseStudiesList>
    </Container>
  );
};

export default CaseStudies;

const Container = styled.section`
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  max-width: 500px;
  color: #000;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  ${({ theme }) => theme.media.min.desktop`
     margin-top: 15vw;
  `}
  @media (min-width: 1200px) {
    margin-top: 20vw;
  }
  transition: margin-top 0.3s;
`;

const StyledTitle = styled(Title)`
  &.StyledTitle {
    ${({ isEven }) =>
      isEven
        ? css`
            text-align: right;
            &::after {
              left: auto;
              transform: none;
              right: 0;
              text-align: right;
            }
          `
        : css`
            &::after {
              right: auto;
              transform: none;
              left: 0;
            }
          `}
  }
`;

const CaseStudiesList = styled.ul`
  color: #000;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    margin-bottom: 100px;
  }
`;

const Img = styled.img`
  width: 100px;
  width: 100%;
  height: 70%;
  object-fit: cover;
  transition: width 0.3s;
  ${({ theme }) => theme.media.min.tablet`
    width: 200px;
    height: auto;
  `}
`;

const MainWrapper = styled.div`
  width: 60%;
  /* border: 1px solid red; */
  ${({ isEven }) =>
    isEven
      ? css`
          align-items: flex-end;
          text-align: right;
          padding-right: 15px;
          ${({ theme }) => theme.media.min.tablet`
            padding-right: 35px;
          `}
        `
      : css`
          align-items: flex-start;
          padding-left: 15px;
          ${({ theme }) => theme.media.min.tablet`
            padding-left: 35px;
          `}
        `}
`;

const ImgBtnWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TextBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.min.tablet`
  
    ${({ isEven }) =>
      isEven
        ? css`
            align-items: flex-end;
          `
        : css`
            align-items: flex-start;
          `}
  `}
`;

const Text = styled.p`
  margin: 0;
  margin-top: 20px;
  font-family: 'NextPro-Light', sans-serif;

  ${({ isEven }) =>
    isEven
      ? css`
          text-align: right;
        `
      : css`
          text-align: left;
        `}
`;

const StyledButton = styled(Button)`
  width: 100px;
  margin-top: 15px;
  font-family: 'NextPro-Light', sans-serif;
  font-size: 0.8rem;
  text-align: center;
`;

const MobileCaseStudyBtn = styled(StyledButton)`
  background-color: grey;
  color: #fff;
  ${({ theme }) => theme.media.min.tablet`
    display: none;
  `}
`;
const DesktopCaseStudyBtn = styled(StyledButton)`
  background-color: grey;
  color: #fff;
  width: 100px;
  ${({ theme }) => theme.media.max.tablet`
    display: none;
  `}
`;
