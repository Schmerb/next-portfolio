/**
 *
 * Questions List
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import Question from './Question';

interface QuestionsProps {
  // questions: [
  //   {
  //     key: string;
  //     questionArr: string[];
  //   },
  // ];
}

const Questions = ({}: QuestionsProps) => {
  const [middleState, setMiddleState] = useState({
    slug: '',
    title: 'how do you know...',
    questions: [
      {
        key: 'question1',
        questionArr: ['What data', 'do you own'],
      },
      {
        key: 'question2',
        questionArr: ['What data', 'carries the greatest risk'],
      },
      {
        key: 'question3',
        questionArr: ['What data', 'creates the greatest value'],
      },
    ],
  });
  return (
    <ContentWrapper className="ContentWrapper">
      <SubTitleWrapper style={{ color: '#000' }}>
        <Title style={{ color: '#000' }}>{middleState.title}</Title>
      </SubTitleWrapper>
      {/* @ts-ignore */}
      <QuestionList>
        {middleState.questions.map((question: any, index: number) => (
          <Question key={question.key} question={question} index={index} />
        ))}
      </QuestionList>
    </ContentWrapper>
  );
};

export default Questions;

const ContentWrapper = styled.div`
  margin-top: 30vw;
  transition: margin-top 0.3s;
  /* border: 1px solid limegreen; */
  @media (max-width: 339px) {
    margin-top: 100px;
  }
  @media (min-width: 340px) {
    margin-top: 230px;
  }
  @media (min-width: 370px) {
    margin-top: 150px;
  }
  ${({ theme }) => theme.media.min.mobile`
    margin-top: 30vw;
  `}
`;

export const Title = styled.h2<any>`
  display: inline-block;
  position: relative;
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  text-align: center;
  margin: 0;
  font-size: ${({ small }) => (small ? '32px' : '48px')};
  font-family: 'NextPro-UltraLight', sans-serif;
  &::after {
    content: '';
    background-color: ${({ theme, light }) =>
      light ? '#fff' : theme.colors.Primary};
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    width: 50%;
    width: ${({ small }) => (small ? '50px' : '130px')};
    height: 5px;

    ${({ theme }) => theme.media.max.mobile`
      width: 80px;
    `}
    ${({ theme }) => theme.media.min.mobile`
      width: 130px;
    `}
  }
`;

const SubTitleWrapper = styled.div`
  text-align: center;
`;

const QuestionList = styled.ul`
  color: #000;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
  font-size: 1.5rem;

  li {
    margin-top: 40px;

    svg {
      position: absolute;
      left: 50%;
      /* width: 200px; */
      transform: translateX(-50%);
    }

    &:nth-of-type(2) {
      svg {
        transform: translateX(-50%) rotate(-90deg);
      }
    }
    &:nth-of-type(3) {
      svg {
        transform: translateX(-50%) rotate(180deg);
      }
    }
  }

  ${({ theme }) => theme.media.max.mobile`
    flex-direction: column;
    align-items: center;

    li {
      margin-top: 40px;

      svg {
        width: 60px;
        transform: translate(0,0);
      }

      &:nth-of-type(1) {
        svg {
          left: 0;
          transform: translateX(0) rotate(0deg);
        }
      }
      &:nth-of-type(2) {
        svg {
          transform: translateX(-50%) rotate(-90deg);
        }
      }
      &:nth-of-type(3) {
        svg {
          left: auto;
          right: 0;
          transform: rotate(180deg);
        }
      }
    }
  `}
`;
