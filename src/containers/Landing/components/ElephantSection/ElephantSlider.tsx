/**
 *
 * Elephant Slider
 *
 *
 */

import React from 'react';
import styled from 'styled-components';

import SlickSlider from 'components/lib/Slick';
import Button from 'components/Elements/Button';

interface Props {
  slides: any[];
}

const ElephantSlider = ({ slides }: Props) => {
  return (
    <StyledSlickSlider
      slides={slides}
      renderSlide={(slide: any) => (
        <Slide>
          <TitleText>{slide.title}</TitleText>
          <Description>{slide.description}</Description>
          <Button text="Learn More" />
        </Slide>
      )}
    />
  );
};

export default ElephantSlider;

const StyledSlickSlider = styled(SlickSlider)`
  min-height: 340px;
  background-color: ${({ theme }) => theme.colors.LightBlue};
`;

const Slide = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 70px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
`;

const TitleText = styled.h3`
  color: ${({ theme }) => theme.colors.Primary};
  font-size: 2rem;
  font-family: 'NextPro-Medium', sans-serif;
`;

const Description = styled.p`
  text-align: center;
  font-family: 'NextPro-Light', sans-serif;
`;
