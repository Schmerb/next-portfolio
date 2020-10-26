/**
 *
 * AdvantageSection
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Tablet, Mobile } from 'components/Utils';
import Clarity from 'components/svg/Icons/Clarity';
import Cost from 'components/svg/Icons/Cost';
import Accuracy from 'components/svg/Icons/Accuracy';
import Efficiency from 'components/svg/Icons/Efficiency';
import Agility from 'components/svg/Icons/Agility';

import { Title, TitleText } from '../Intro';

interface Props {}

const size = { width: 70, height: 70 };

const AdvantageSection = (props: Props) => {
  const { state } = useAdvantageState();
  return (
    <ContainerSection>
      <SubTitleWrapper style={{ color: '#000', marginTop: '100px' }}>
        <Mobile>
          <Title style={{ color: '#000' }}>{state.mobileTitle}</Title>
        </Mobile>
        <Tablet>
          <Title style={{ color: '#000' }}>{state.title}</Title>
        </Tablet>
      </SubTitleWrapper>
      <Descriptions>
        {state.descriptions.map(({ title, Icon, description }) => (
          <li key={title}>
            <Icon {...size} />
            <div>
              <DescriptionTitle>{title}</DescriptionTitle>
              <Description>{description}</Description>
            </div>
          </li>
        ))}
      </Descriptions>
    </ContainerSection>
  );
};

export default AdvantageSection;

const ContainerSection = styled.section`
  margin-top: 100px;
`;

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Descriptions = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;

  li {
    color: #000;
    width: 50%;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    ${({ theme }) => theme.media.min.tablet`
       width: 33.3%;
    `}
  }
`;

const DescriptionTitle = styled.span`
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const useAdvantageState = () => {
  const [state, setState] = useState({
    slug: '',
    title: 'the advantage you gain',
    mobileTitle: "Reveles' advantages",
    descriptions: [
      {
        title: 'Clarity',
        Icon: Clarity,
        description:
          'Identifies what data you hold, where it is and the value it creates',
      },
      {
        title: 'Cost',
        Icon: Cost,
        description: 'Reduces exposure and driving down the cost of insurance',
      },
      {
        title: 'Accuracy',
        Icon: Accuracy,
        description:
          'Has a 94.5% model accuracy rate in comparison to the best in class for ML of 86%',
      },
      {
        title: 'Efficiency',
        Icon: Efficiency,
        description:
          'Uses MI to discover your data, which reduces the need for data engineers and analysts',
      },
      {
        title: 'Agility',
        Icon: Agility,
        description:
          "It's always on, identifying risks in real-time, so that you can swiftly address them",
      },
    ],
  });
  return {
    state,
    setState,
  };
};
