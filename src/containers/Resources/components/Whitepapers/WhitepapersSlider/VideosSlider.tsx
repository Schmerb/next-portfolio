/**
 *
 * VideosSlider
 *
 *
 */

import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { Title } from 'containers/Landing/components/Intro';

import SlickSlider from 'components/lib/Slick';

interface Props {}

const slides = [
  {
    id: uuidv4(),
    title: '',
    imageSrc: '/static/img/Resources/Mobile/videos1@2x.png',
    description: '',
  },
  {
    id: uuidv4(),
    title: '',
    imageSrc: '/static/img/Resources/Mobile/videos1@2x.png',
    description: '',
  },
  {
    id: uuidv4(),
    title: '',
    imageSrc: '/static/img/Resources/Mobile/videos1@2x.png',
    description: '',
  },
  {
    id: uuidv4(),
    title: '',
    imageSrc: '/static/img/Resources/Mobile/videos1@2x.png',
    description: '',
  },
];

const VideosSlider = (props: Props) => {
  return (
    <SliderWrapper>
      <TitleWrapper>
        <Title dark>videos</Title>
      </TitleWrapper>
      <StyledSlickSlider
        slides={slides}
        renderSlide={(slide: any) => (
          <Slide>
            <Image src={slide.imageSrc} />
          </Slide>
        )}
      />
    </SliderWrapper>
  );
};

export default VideosSlider;

const TitleWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const SliderWrapper = styled.div``;

const StyledSlickSlider = styled(SlickSlider)`
  min-height: 340px;
`;

const Slide = styled.div`
  position: relative;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 70px;
  /* border: 1px solid #000; */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
