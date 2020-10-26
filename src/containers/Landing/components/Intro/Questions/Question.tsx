/**
 *
 * Question
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import SmallArch from 'components/svg/SmallArch';

interface QuestionProps {
  question: {
    key: string;
    questionArr: any[];
  };
  index: number;
}

const Question = ({ question }: QuestionProps) => {
  return (
    <StyledListItem>
      <SmallArch fill="#67bfd6" />
      <Top>{question.questionArr[0]}</Top>
      <div>{question.questionArr[1]}?</div>
    </StyledListItem>
  );
};

export default Question;

const StyledListItem = styled.li`
  position: relative;
  width: 300px;
  text-align: center;
  font-family: 'NextPro-Light', sans-serif;
`;

const Top = styled.div`
  margin-top: 25px;
`;
