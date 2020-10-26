/**
 *
 * PapersSlider
 *
 *
 */

import React from 'react';
import styled from 'styled-components';

import SlickSlider from 'components/lib/Slick';
import Button from 'components/Elements/Button';

import slides from '../data/papers';

interface Props {}

//
// Shape:
//
//   {
//     title: 'Powering the Accounting Industry',
//     imageSrc: '/static/img/Resources/Mobile/whitepaper1@2x.png',
//     meta: '1.24 MB, October 2020',
//     description: 'asddasd',
//   }
//

const PapersSlider = (props: Props) => {
  return (
    <StyledSlickSlider
      slides={slides}
      renderSlide={(slide: any) => (
        <Slide key={slide.imageSrc}>
          <Image src={slide.imageSrc} />
          <Wrapper>
            <TitleText>{slide.title}</TitleText>
            <Description>{slide.description}</Description>
            <Description>{slide.meta}</Description>
            <Button primary text="Download PDF" />
          </Wrapper>
        </Slide>
      )}
    />
  );
};

export default PapersSlider;

const StyledSlickSlider = styled(SlickSlider)`
  min-height: 340px;
  margin-top: 25px;
`;

const Slide = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 70px;
  text-align: left;
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
`;

const TitleText = styled.h3`
  /* color: ${({ theme }) => theme.colors.Primary}; */
  font-size: 1rem;
  font-family: 'NextPro-Medium', sans-serif;
`;

const Description = styled.p`
  font-family: 'NextPro-Light', sans-serif;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  object-fit: contain;
`;
