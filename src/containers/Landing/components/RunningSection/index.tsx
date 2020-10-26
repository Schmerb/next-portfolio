/**
 *
 * RunningSection
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Tablet, Mobile } from 'components/Utils';
import Number from 'components/svg/Icons/Number';
import SmallArch from 'components/svg/SmallArch';

import colors from 'styles/theme/colors';

import { Title, TitleText } from '../Intro';

interface Props {}

const RunningSection = ({}: Props) => {
  const [state, setState] = useState({
    slug: '',
    title: 'up and running in 3 steps',
    descriptions: [
      {
        title: 'first',
        Icon: () => <Number width={60} height={60} number={1} />,
        fill: colors.Blue1,
        description:
          "Let's talk about your organization’s data footprint and identify the best solution for you",
      },
      {
        title: 'second',
        Icon: () => <Number width={60} height={60} number={2} />,
        fill: colors.Blue2,
        description: "We'll launch Reveles, and start to scan your data",
      },
      {
        title: 'third',
        Icon: () => <Number width={60} height={60} number={3} />,
        fill: colors.Blue3,
        description:
          'Sit back and let Reveles discover and classify your data. To identify risks and opportuities',
      },
    ],
  });
  return (
    <ContainerSection>
      <TitleImgWrapper>
        <SubTitleWrapper style={{ color: '#000', marginTop: '100px' }}>
          <Title style={{ color: '#000' }}>{state.title}</Title>
        </SubTitleWrapper>
        <MacbookWrapper>
          <MacbookImg src={'/static/img/Landing/macbook-with-arch@2x.png'} />
        </MacbookWrapper>
      </TitleImgWrapper>
      <div>
        <NumbersList>
          {state.descriptions.map(({ title, fill, Icon, description }) => (
            <li key={title}>
              <IconWrpper>{Icon()}</IconWrpper>
              <SmallArch
                opacity="1"
                fill={fill}
                width={80}
                height={80}
                style={{ transform: 'rotate(225deg) translate(30px, 30px)' }}
              />
              <ItemDescription>{description}</ItemDescription>
            </li>
          ))}
        </NumbersList>
      </div>
    </ContainerSection>
  );
};

export default RunningSection;

const ContainerSection = styled.section`
  margin-top: 100px;
`;

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
  ${({ theme }) => theme.media.min.tablet`
    width: 315px;
  `}
`;

const NumbersList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: #000;
  list-style: none;
  li {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 50%;
  }

  ${({ theme }) => theme.media.min.tablet`
    li {
      width: 33.3%;
      &:nth-of-type(2) {
        margin-top: 100px;
      }
      &:nth-of-type(3) {
        margin-top: 200px;
      }
    }
  `}
`;

const TitleImgWrapper = styled.div`
  ${({ theme }) => theme.media.min.tablet`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `}
`;

const MacbookWrapper = styled.div`
  text-align: center;
`;

const MacbookImg = styled.img`
  width: 75%;
  max-width: 450px;
  height: auto;
  margin: 0 auto;
  ${({ theme }) => theme.media.min.tablet`
      width: 450px;
  `}
`;

const IconWrpper = styled.div`
  /* padding-bottom: 40px; */
`;

const ItemDescription = styled.span`
  width: 80%;
  max-width: 250px;
`;
