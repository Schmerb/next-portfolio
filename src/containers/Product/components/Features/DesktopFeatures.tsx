/**
 *
 * Desktop Features Section
 *
 *  */

import React, { useState } from 'react';
import styled from 'styled-components';

import DashedArch from 'components/svg/DashedArch';
import { Title, TitleText } from 'containers/Landing/components/Intro';
import colors from 'styles/theme/colors';

interface DesktopFeaturesProps {
  content: {
    items: any[];
  };
}

const DesktopFeatures = ({ content }: DesktopFeaturesProps) => {
  return (
    <FeaturesList>
      {content.items.map((feature, index) => {
        const { Icon, title, firstText, secondText } = feature;
        const size = (title === 'inventory' && 60) || 70;

        return (
          <li key={title}>
            <Title dark small style={{ marginBottom: 15 }}>
              {title}
            </Title>
            <StyledDashedArch className="dashed-svg" width={100} height={100} />
            <TextWrapper>
              <FirstText>{firstText}</FirstText>
              <SVGWrapper isLast={index === content.items.length - 1}>
                <Icon width={size} height={size} />
              </SVGWrapper>
              <SecondText>{secondText}</SecondText>
            </TextWrapper>
          </li>
        );
      })}
    </FeaturesList>
  );
};

export default DesktopFeatures;

const StyledDashedArch = styled(DashedArch)`
  position: absolute;
  /* left: 42%; */
  top: 182px;
  height: 200px;
  transform: translateX(-50%);
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-top: 55px;

  li {
    position: relative;
    text-align: center;
    margin-top: 75px;
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid red; */

    &:nth-of-type(2n - 1) {
      svg.dashed-svg {
        transform: translateX(-50%);
        left: 42%;
      }
    }
    &:nth-of-type(2n) {
      svg.dashed-svg {
        transform: translateX(-50%) scaleX(-1);
        right: 30%;
        top: 162px;
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const SVGWrapper = styled.div`
  background-color: #fff;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.Primary};
  border-radius: 50%;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.p`
  width: 300px;
`;

const FirstText = styled(Text)`
  color: ${({ theme }) => theme.colors.Grey};
  padding-right: 25px;
`;
const SecondText = styled(Text)`
  color: ${({ theme }) => theme.colors.Primary};
  padding-left: 25px;
`;
