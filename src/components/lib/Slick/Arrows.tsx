/**
 *
 * Slick Slider Arrows
 *
 * */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Chevron from 'components/svg/Icons/Chevron';

export const NextArrow = ({
  onClick,
  isInfinite,
  currentSlide,
  slideCount,
}) => {
  // if infinite mode, never disable arrow
  const isLastSlide = !isInfinite && currentSlide === slideCount - 1;

  return (
    <StyledNextArrow onClick={onClick} isLastSlide={isLastSlide}>
      <Chevron width="25px" style={{ transform: 'rotate(-90deg)' }} />
    </StyledNextArrow>
  );
};

export const PrevArrow = ({ onClick, isInfinite, currentSlide }) => {
  // if infinite mode, never disable arrow
  const isFirstSlide = !isInfinite && currentSlide === 0;

  return (
    <StyledPrevArrow onClick={onClick} isFirstSlide={isFirstSlide}>
      <Chevron width="25px" style={{ transform: 'rotate(90deg)' }} />
    </StyledPrevArrow>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
  currentSlide: PropTypes.any,
  slideCount: PropTypes.number,
  isInfinite: PropTypes.bool,
};
PrevArrow.propTypes = {
  onClick: PropTypes.func,
  currentSlide: PropTypes.any,
  isInfinite: PropTypes.bool,
};

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;

  svg {
    transition: fill 0.3s;
    fill: ${({ theme }) => theme.colors.Primary};
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.Blue1};
    }
  }
`;

const disabled = css`
  opacity: 0.5;
  cursor: none;
  pointer-events: none;
`;

const StyledPrevArrow = styled(Arrow)`
  left: 0px;

  ${({ isFirstSlide }) => isFirstSlide && disabled}
`;

const StyledNextArrow = styled(Arrow)`
  right: 0px;

  ${({ isLastSlide }) => isLastSlide && disabled}
`;
