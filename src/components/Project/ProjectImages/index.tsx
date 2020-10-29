/**
 *
 *
 *    ProjectImages
 *
 *
 */

import React, { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { ImagesType } from 'utils/data/types';

const shadowSrc = '/static/img/shadow.png';

const ProjectImages = ({
  images,
  index,
  passDesktopRef,
  passLaptopRef,
  passMobileRef,
  desktopInView,
  laptopInView,
  mobileInView,
}: ProjectImagesProps) => {
  const [showDesktop, setShowDesktop] = useState(false);
  const [showLaptop, setShowLaptop] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const isEven = index % 2 === 0;

  const desktopProps = useSpring({
    opacity: showDesktop ? 1 : 0,
    transform: showDesktop ? 'translate3d(0,0,0)' : `translate3d(0,50px,0)`,
    config: {
      tension: 105,
    },
  });
  const laptopProps = useSpring({
    opacity: showLaptop ? 1 : 0,
    transform: showLaptop
      ? 'translate3d(0,0,0)'
      : `translate3d(${isEven ? '' : '-'}50px,50px,0)`,
    config: {
      tension: 105,
    },
  });
  const mobileProps = useSpring({
    opacity: showMobile ? 1 : 0,
    transform: showMobile
      ? `translate3d(${isEven ? '25px' : '-25px'},0,0)`
      : `translate3d(${isEven ? '-' : ''}50px,50px,0)`,
    config: {
      tension: 105,
    },
  });

  useEffect(() => {
    if (desktopInView) {
      setShowDesktop(true);
      setTimeout(() => {
        setShowLaptop(true);
        setTimeout(() => {
          setShowMobile(true);
        }, 1000);
      }, 1000);
    }
  }, [desktopInView, laptopInView, mobileInView]);

  return (
    <Container>
      <DesktopAnimatedDiv style={desktopProps} ref={passDesktopRef}>
        <DesktopImg src={images.desktop} />
        <ShadowImg src={shadowSrc} />
      </DesktopAnimatedDiv>
      <LowerWrapper>
        {isEven ? (
          <>
            <MobileAnimatedDiv isEven style={mobileProps} ref={passMobileRef}>
              <MobileImg src={images.mobile} isEven />
            </MobileAnimatedDiv>
            <LaptopAnimatedDiv style={laptopProps} ref={passLaptopRef}>
              <LaptopImg src={images.laptop} />
            </LaptopAnimatedDiv>
          </>
        ) : (
          <>
            <LaptopAnimatedDiv style={laptopProps} ref={passLaptopRef}>
              <LaptopImg src={images.laptop} />
            </LaptopAnimatedDiv>
            <MobileAnimatedDiv style={mobileProps} ref={passMobileRef}>
              <MobileImg src={images.mobile} />
            </MobileAnimatedDiv>
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
  passDesktopRef: any;
  passLaptopRef: any;
  passMobileRef: any;
  desktopInView: boolean;
  laptopInView: boolean;
  mobileInView: boolean;
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
const DesktopAnimatedDiv = styled(animated.div)`
  position: relative;
  text-align: center;
  width: 75%;
  margin: 0 auto;
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
  bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  ${({ theme }) => theme.media.max.mobile`
    transform: translateY(-15px);
  `}
`;

//
// Laptop
//
const LaptopAnimatedDiv = styled(animated.div)`
  width: 55%;
`;

const LaptopImg = styled.img`
  width: 100%;
  height: auto;
`;

//
// Mobile
//
const MobileAnimatedDiv = styled(animated.div)`
  width: 15%;
`;

const MobileImg = styled.img`
  width: 100%;
  height: auto;
`;
