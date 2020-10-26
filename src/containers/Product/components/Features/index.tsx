/**
 *
 * Features Section
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Mobile, Tablet } from 'components/Utils';
import { Title, TitleText } from 'containers/Landing/components/Intro';

import colors from 'styles/theme/colors';

// Product Page
import useFeaturesState from './useFeaturesState';
import DesktopFeatures from './DesktopFeatures';

interface Props {}

const Features = (props: Props) => {
  const { content, activeFeature, setActiveFeature } = useFeaturesState({});
  if (!activeFeature) return null;
  return (
    <ContainerSection>
      <TitleWrapper>
        <Title dark>{content.title}</Title>
        {/* <TitleText>{state.description}</TitleText> */}
      </TitleWrapper>
      <Mobile>
        <FeatureList>
          {content.items.map((feature, index) => {
            const { Icon, title } = feature;
            const isActive = activeFeature && activeFeature.title === title;
            const size = isActive
              ? (title === 'inventory' && 30) || 40
              : (title === 'inventory' && 25) || 30;
            const color = isActive ? colors.Primary : 'grey';
            const handleclick = () => {
              // set this as feature
              setActiveFeature(feature);
            };
            return (
              <li key={title}>
                <SVGWrapper
                  isActive={isActive}
                  onClick={handleclick}
                  isLast={index === content.items.length - 1}
                >
                  <Icon width={size} height={size} stroke={color} />
                  <NumberCircle isActive={isActive}>{index + 1}</NumberCircle>
                </SVGWrapper>
              </li>
            );
          })}
        </FeatureList>

        <ActiveFeature>
          <Title dark small>
            {activeFeature.title}
          </Title>
          <FirstText>{activeFeature.firstText}</FirstText>
          <SecondText>{activeFeature.secondText}</SecondText>
        </ActiveFeature>
      </Mobile>
      <Tablet>
        <DesktopFeatures content={content} />
      </Tablet>
    </ContainerSection>
  );
};

export default Features;

const ContainerSection = styled.section`
  color: #000;
  min-height: 80vh;
  transition: margin-top 0.3s;
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 5vw;
  `}
  ${({ theme }) => theme.media.min.tablet`
    margin-top: 6vw;
  `}
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0;
`;

const FeatureList = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  height: 100px;

  &::after {
    position: absolute;
    content: '';
    right: 0;
    left: 12%;
    width: 75%;
    height: 1px;
    border-top: 2px dashed lightgrey;
    visibility: ${({ isLast }) => (isLast ? 'hidden' : 'visible')};
    z-index: -1;
}
  }
`;

const NumberCircle = styled.div`
  position: absolute;
  color: #fff;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.Primary : 'lightgrey'};
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ isActive }) => (isActive ? 0 : '-3px')};
  right: ${({ isActive }) => (isActive ? 0 : '-3px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const SVGWrapper = styled.div`
  background-color: #fff;
  position: relative;
  border: 1px solid
    ${({ theme, isActive }) => (isActive ? theme.colors.Primary : 'lightgrey')};
  border-radius: 50%;
  height: ${({ isActive }) => (isActive ? '80px' : '50px')};
  width: ${({ isActive }) => (isActive ? '80px' : '50px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: height 0.3s, width 0.3s, color 0.3s, border-color 0.3s;

  svg {
    stroke: ${({ theme, isActive }) =>
      isActive ? theme.colors.Primary : 'grey'};
    transition: height 0.3s, width 0.3s, color 0.3s, border-color 0.3s;
  }
`;

const SVGWrapperMobile = styled(SVGWrapper)`
  ${({ theme }) => theme.media.min.tablet`
    display: none;
  `}
`;
const SVGWrapperDesktop = styled(SVGWrapper)`
  ${({ theme }) => theme.media.max.tablet`
    display: none;
  `}
`;

const ActiveFeature = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 50px auto;
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'NextPro-Light', sans-serif;
  font-size: 1.2rem;
`;

const FirstText = styled.div`
  margin-top: 40px;
`;
const SecondText = styled.div`
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.Primary};
`;
