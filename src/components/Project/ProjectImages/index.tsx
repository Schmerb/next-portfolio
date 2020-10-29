/**
 *
 *
 *    ProjectImages
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

import { ImagesType } from 'utils/data/types';

const shadowSrc = '/static/img/shadow.png';

const ProjectImages = ({
  images,
  index,
  passRef,
  imagesInView,
}: ProjectImagesProps) => {
  const isEven = index % 2 === 0;
  return (
    <Container ref={passRef}>
      <DesktopImgWrapper>
        <DesktopImg src={images.desktop} />
        <ShadowImg src={shadowSrc} />
      </DesktopImgWrapper>
      <LowerWrapper>
        {isEven ? (
          <>
            <MobileWrapper isEven>
              <MobileImg src={images.mobile} isEven />
            </MobileWrapper>
            <LaptopWrapper>
              <LaptopImg src={images.laptop} />
            </LaptopWrapper>
          </>
        ) : (
          <>
            <LaptopWrapper>
              <LaptopImg src={images.laptop} />
            </LaptopWrapper>
            <MobileWrapper>
              <MobileImg src={images.mobile} />
            </MobileWrapper>
          </>
        )}
      </LowerWrapper>
    </Container>
  );
};

export default memo(ProjectImages);

interface ProjectImagesProps {
  images: ImagesType;
  index: number;
  passRef: any;
  imagesInView: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 75px auto;
  padding-bottom: 50px;
`;

//
// Desktop
//
const DesktopImgWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 75%;
`;

const DesktopImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const ShadowImg = styled.img`
  position: absolute;
  left: 0;
  bottom: -30px;
  width: 100%;
  margin: 0 auto;
  z-index: -1;
  ${({ theme }) => theme.media.max.mobile`
    transform: translateY(-15px);
  `}
`;

//
// Laptop + Mobile
//
const LowerWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  ${({ theme }) => theme.media.max.mobile`
    transform: translateY(-15px);
  `}
`;

//
// Laptop
//
const LaptopWrapper = styled.div`
  width: 55%;
`;

const LaptopImg = styled.img`
  width: 100%;
  height: auto;
`;

//
// Mobile
//
const MobileWrapper = styled.div`
  width: 15%;
  transform: translateX(${({ isEven }) => (isEven ? '25px' : '-25px')});
`;

const MobileImg = styled.img`
  width: 100%;
  height: auto;
`;
