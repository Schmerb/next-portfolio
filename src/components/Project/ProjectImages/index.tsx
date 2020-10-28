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

const ProjectImages = ({ images }: ProjectImagesProps) => {
  return (
    <Container>
      <DesktopImgWrapper>
        <DesktopImg src={images.desktop} />
      </DesktopImgWrapper>
      <LowerWrapper>
        <LaptopWrapper>
          <LaptopImg src={images.laptop} />
        </LaptopWrapper>
        <MobileWrapper>
          <MobileImg src={images.mobile} />
        </MobileWrapper>
      </LowerWrapper>
    </Container>
  );
};

export default memo(ProjectImages);

interface ProjectImagesProps {
  images: ImagesType;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 50px;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  margin: 50px auto 0;
`;

const DesktopImgWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 75%;
`;

const LowerWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LaptopWrapper = styled.div`
  width: 55%;
`;

const MobileWrapper = styled.div`
  width: 15%;
  transform: translateX(-25px);
`;

const DesktopImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const LaptopImg = styled.img`
  width: 100%;
  height: auto;
`;

const MobileImg = styled.img`
  width: 100%;
  height: auto;
`;
