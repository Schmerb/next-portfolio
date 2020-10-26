/**
 *
 * ElephantSection
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Tablet, Mobile } from 'components/Utils';

import { Title, TitleText } from '../Intro';
import ElephantSlider from './ElephantSlider';
import ElephantDescription from './ElephantDescription';

const ElephantSrc = '/static/img/Landing/elephant-group@2x.png';
const GraphLeftSrc = '/static/img/Landing/graph-left@2x.png';
const GraphRightSrc = '/static/img/Landing/graph-right@2x.png';

interface Props {}
const title = '';
const ElephantSection = (props: Props) => {
  const [elephantState, setElephantState] = useState(() => ({
    slug: '',
    title: () => (
      <div style={{ color: '#000' }}>
        <div>the elephant</div> in the room
      </div>
    ),
    descriptions: [
      {
        id: uuidv4(),
        title: 'accounting for data',
        description:
          'Aspects of digital business models catch traditional accounting standards off guard. How does business account for intangible assets in a world that calculates market value on a perception? Find out how we help organizations exceed today’s accounting standards to improve transparency and identify the real economics behind the data.',
      },
      {
        id: uuidv4(),
        title: 'data as an asset',
        description:
          'Pricing data as an asset is something we all aim for, but how do you do it? Understanding how data assets correlate to value creation over time is the key to using discount cash flow methods for valuation of both data and digital assets. Find out how to identify the data to invest in and the expected return-on-allocated-capital.',
      },
      {
        id: uuidv4(),
        title: 'data risk',
        description:
          'The constant change in regulation forces data executives to acknowledge that beyond any doubt, data discovery is critical to compliance. With a data privacy revolution going on, how do you make sure you are staying compliant with US based, EU based, UK based, EMEA based regulations while staying on top of the likelihood of a breach and ransom attack? What if you could reduce your cybersecurity investments by merely understanding the scope of potential harm?',
      },
    ],
  }));

  const leftData = elephantState.descriptions[0];
  const middleData = elephantState.descriptions[1];
  const rightData = elephantState.descriptions[2];

  return (
    <Section>
      <TextElephantWrapper>
        <SubTitleWrapper style={{ color: '#000', marginTop: '100px' }}>
          <Title style={{ color: '#000' }}>{elephantState.title()}</Title>
        </SubTitleWrapper>
        {/* Graphs */}
        <GraphLeftImage src={GraphLeftSrc} />
        <GraphRightImage src={GraphRightSrc} />
        {/* Elephant */}
        <ElephantWrapper style={{ marginTop: '55px' }}>
          <ElephantImage src={ElephantSrc} />
          <Tablet>
            <ElephantDescription
              position="left"
              title={leftData.title}
              description={leftData.description}
            />
            <ElephantDescription
              position="middle"
              title={middleData.title}
              description={middleData.description}
            />
            <ElephantDescription
              position="right"
              title={rightData.title}
              description={rightData.description}
            />
          </Tablet>
        </ElephantWrapper>
      </TextElephantWrapper>
      <Mobile style={{ marginTop: '35px' }}>
        <ElephantSlider slides={elephantState.descriptions} />
      </Mobile>
      {/* TODO: Add Tri-title-description for Desktop */}
    </Section>
  );
};

export default ElephantSection;

const Section = styled.section`
  position: relative;
  color: #000;
  margin-top: 100px;
  margin-top: 55px;
  min-height: 100vh;
  text-align: center;
  /* border: 1px solid red; */
`;

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const ElephantWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  /* border: 1px solid red; */
  ${({ theme }) => theme.media.min.tablet`
    padding-bottom: 300px;
  `}
`;

//
// this bounds graph images ("position: relative") until we reach tablet size
//
const TextElephantWrapper = styled.div`
  /* border: 1px solid red; */
  ${({ theme }) => theme.media.max.tablet`
    position: relative;
  `}
`;

const ElephantImage = styled.img`
  width: 75%;
  max-width: 250px;

  ${({ theme }) => theme.media.min.tablet`
    max-width: 270px;
  `}
`;

const GraphLeftImage = styled.img`
  width: 400px;
  position: absolute;
  left: -280px;
  bottom: -100px;
  transition: left 0.3s, top 0.3s, bottom 0.3s;

  ${({ theme }) => theme.media.min.mobile`
     left: -200px;
  `}
  ${({ theme }) => theme.media.min.tablet`
    bottom: auto;
    top: -200px;
    left: -360px;
    width: 600px;
    `}
      // left: -300px;
  ${({ theme }) => theme.media.min.desktop`
      top: -100px;
  `}
`;
const GraphRightImage = styled.img`
  width: 400px;
  position: absolute;
  right: -300px;
  top: 0px;
  /* border: 1px solid cornflowerblue; */
  transition: right 0.3s, bottom 0.3s, top 0.3s;
  ${({ theme }) => theme.media.min.mobile`
    right: -200px;
  `}
  ${({ theme }) => theme.media.min.tablet`
    top: auto;
    right: -360px;
    bottom: -200px;
    width: 500px;
  `}
    /* right: -240px; */
  ${({ theme }) => theme.media.min.desktop`
    bottom: -100px;
  `}
`;
