/**
 *
 * CaseStudiesSlider
 *
 *
 */

import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Title } from 'containers/Landing/components/Intro';

import SlickSlider from 'components/lib/Slick';
import Button from 'components/Elements/Button';

interface Props {}

const slides = [
  {
    title: 'A Process of Discovery and Transformation',
    id: uuidv4(),
    imageSrc: '/static/img/Resources/Mobile/casestudy1@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
  {
    title: 'Reveles for Intelligent Data Migration',
    id: uuidv4(),
    imageSrc: '/static/img/Resources/Mobile/casestudy1@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
  {
    title: 'Meaning and Value: A Chicken and Egg Analysis',
    id: uuidv4(),
    imageSrc: '/static/img/Resources/Mobile/casestudy1@2x.png',
    meta: '3.92 MB, January 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  },
];

const CaseStudiesSlider = (props: Props) => {
  return (
    <SliderWrapper>
      <TitleWrapper>
        <Title dark>case studies</Title>
      </TitleWrapper>
      <StyledSlickSlider
        slides={slides}
        renderSlide={(slide: any) => (
          <Slide>
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
    </SliderWrapper>
  );
};

export default CaseStudiesSlider;

const TitleWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SliderWrapper = styled.div`
  /* min-height: 340px; */
  background-color: ${({ theme }) => theme.colors.LightBlue};
`;
const StyledSlickSlider = styled(SlickSlider)`
  min-height: 340px;
  background-color: ${({ theme }) => theme.colors.LightBlue};
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

const TitleText = styled.h3`
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
