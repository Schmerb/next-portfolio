/**
 *
 * ElephantText
 *
 *  */

import React from 'react';
import styled, { css } from 'styled-components';

import LearnButton from 'components/Elements/Button';
import Connector from 'components/svg/Connector';

interface Props {
  position: string;
  title: string;
  description: string;
}

const ElephantText = ({ position, title, description }: Props) => {
  let CompDescript: any = () => <span />;
  if (position === 'left') {
    CompDescript = LeftDescription;
  } else if (position === 'middle') {
    CompDescript = MiddleDescription;
  } else {
    CompDescript = RightDescription;
  }
  return (
    <CompDescript position={position}>
      <SmallTitle position={position}>{title}</SmallTitle>
      <SVGWrapper position={position}>
        <Connector width={100} height={100} />
      </SVGWrapper>
      <Text>{description}</Text>
      <LearnButton primary style={{ marginTop: 0 }} text="Learn More" />
    </CompDescript>
  );
};

export default ElephantText;

const SmallTitle = styled.h3`
  color: ${({ theme }) => theme.colors.Primary};

  ${({ position }) =>
    (() => {
      switch (position) {
        case 'left':
          return css`
            max-width: 100px;
            text-align: right;
            margin-left: auto;
          `;
        case 'middle':
          return css`
            max-width: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          `;
        default:
          return '';
      }
    })()}
`;

const Description = styled.div`
  position: absolute;
  width: 220px;
  /* border: 1px solid red; */
  ${({ theme }) => theme.media.min.desktop`
      width: 240px;
  `}
  @media (min-width: 1100px) {
    width: 280px;
  }

  ${({ position }) =>
    (() => {
      switch (position) {
        case 'middle':
          return css`
            width: 280px;
          `;
        default:
          return '';
      }
    })()}
`;
const LeftDescription = styled(Description)`
  text-align: right;
  top: 10px;
  left: 20px;
  ${({ theme }) => theme.media.min.desktop`
    left: 100px;
  `}
`;
const MiddleDescription = styled(Description)`
  text-align: center;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
`;
const RightDescription = styled(Description)`
  text-align: left;
  top: 10px;
  right: 20px;
  ${({ theme }) => theme.media.min.desktop`
    right: 100px;
  `}
`;

const Text = styled.p``;

const LeftStyles = css`
  transform: rotate(90deg);
`;
const RightStyles = css`
  transform: rotate(180deg);
`;

const SVGWrapper = styled.div`
  position: absolute;
  width: 60px;
  ${({ position }) =>
    (() => {
      switch (position) {
        case 'left':
          return css`
            top: 30px;
            right: -80px;
            transform: scaleX(-1) rotate(-90deg);
          `;
        case 'middle':
          return css`
            top: -49px;
            right: 39px;
          `;
        case 'right':
          return css`
            left: -63px;
            top: 65px;
            transform: rotate(-148deg);
          `;
        default:
          return '';
      }
    })()}
`;
