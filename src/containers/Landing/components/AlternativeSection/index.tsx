/**
 *
 * AlternativeSection
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Tablet, Mobile } from 'components/Utils';
import CancelCircle from 'components/svg/Icons/CancelCircle';
import AI from 'components/svg/Icons/AI';
import PeopleGear from 'components/svg/Icons/PeopleGear';
import CPA from 'components/svg/Icons/CPA';

import { Title, TitleText } from '../Intro';

interface Props {}

const size = { width: 30, height: 30 };

const AlternativeSection = (props: Props) => {
  const [state, setState] = useState({
    slug: '',
    title: 'the alternative choice',
    description:
      'We apply the most advanced machine intelligence techniques to see the value amidst the noise. While most data discovery companies rely on heavily backed by humans technology our AI driven approach has reached 94.5% accuracy, without the costs for exponentially expanding a data department and the need to catch up with your growing data assets',
  });
  return (
    <ContainerSection>
      <SubTitleWrapper style={{ color: '#000', marginTop: '100px' }}>
        <Title style={{ color: '#000' }}>{state.title}</Title>
      </SubTitleWrapper>
      <Text>{state.description}</Text>
      <Table>
        <Column>
          <Row></Row>
          <Row>Audit</Row>
          <Row>Inventory</Row>
          <Row>Governance</Row>
          <Row>Remedy</Row>
          <Row>Value & Risk $</Row>
        </Column>
        <Column>
          <Row>Reveles</Row>
          <Row>
            <AI {...size} />
          </Row>
          <Row>
            <AI {...size} />
          </Row>
          <Row>
            <AI {...size} />
          </Row>
          <Row>
            <AI {...size} />
          </Row>
          <Row>
            <CPA {...size} />
          </Row>
        </Column>

        <Column>
          <Row>Others</Row>
          <Row>
            <PeopleGear {...size} />
          </Row>
          <Row>
            <PeopleGear {...size} />
          </Row>
          <Row>
            <PeopleGear {...size} />
          </Row>
          <Row>
            <PeopleGear {...size} />
          </Row>
          <Row>
            <CancelCircle {...size} />
          </Row>
        </Column>
      </Table>
    </ContainerSection>
  );
};

export default AlternativeSection;

const ContainerSection = styled.section`
  margin-top: 100px;
`;

const SubTitleWrapper = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const Text = styled.p`
  width: 80%;
  max-width: 600px;
  margin: 25px auto;
  font-size: 1.4rem;
  text-align: center;
  color: #000;
`;

const Table = styled.div`
  background-color: ${({ theme }) => theme.colors.LightBlue};
  display: flex;
  padding: 25px;
  max-width: 900px;
  border-radius: 15px;
  margin: 0 auto;
`;

const borderStyle = '1px solid lightgrey';

const Column = styled.div`
  color: #000;
  width: 33.33%;
  text-align: center;
  &:not(:last-of-type) {
    border-right: ${borderStyle};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top: ${borderStyle};
  &:nth-of-type(1) {
    font-family: 'NextPro-Heavy', sans-serif;
    font-family: 'NextPro-Regular', sans-serif;
    border-top: none;
    font-size: 1.3rem;
  }
  &:not(:first-of-type) {
    font-family: 'NextPro-Regular', sans-serif;
  }
`;
