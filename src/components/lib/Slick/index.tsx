/**
 *
 * SlickSlider
 *
 *
 */

import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { PrevArrow, NextArrow } from './Arrows';

const SlickSlider = ({ className, slides, renderSlide }: SlickSliderProps) => {
  const slider = useRef();
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    // autoplay: true,
    // autoplaySpeed: 6000,
    // speed: 1500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // rows: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // onInit: () => {
    //   // console.log('\n\n\n');
    //   console.log('onInit');
    //   // console.log('\n\n\n');
    // },
    // onReInit: () => {
    //   // console.log('\n\n\n');
    //   console.log('onReInit');
    //   // console.log('\n\n\n');
    // },
  };
  // console.log({ settings });
  // console.log({ slider });
  return (
    <StyledSlider ref={slider} {...settings} className={className}>
      {slides &&
        slides.length > 0 &&
        slides.map((slide: any) => (
          <div key={slide.id}>{renderSlide(slide)}</div>
        ))}
    </StyledSlider>
  );
};

interface SlickSliderProps {
  renderSlide: (slide: any) => any;
  slides: any[];
  className?: string;
}

export default SlickSlider;

const StyledSlider = styled(Slider)<any>`
  position: relative;

  .slick-track {
    height: 100%;
    width: 100%;
  }

  .slick-dots {
    bottom: 8px;
    font-size: 1rem;

    button {
      width: 3px;
      height: 3px;
      cursor: pointer;
      &::before {
        content: '';
        width: 3px;
        height: 3px;
        background-color: grey;
        border: 3px solid grey;
        opacity: 0.8;
        border-radius: 50%;
        font-size: 1rem;
      }
    }

    li.slick-active {
      button {
        width: 3px;
        height: 3px;
        &::before {
          width: 3px;
          height: 3px;
          background-color: ${({ theme }) => theme.colors.Primary};
          border-color: ${({ theme }) => theme.colors.Primary};
        }
      }
    }
  }

  .slick-slide {
    min-height: 100%;
    outline: none !important;
    border: none !important;
  }
`;
