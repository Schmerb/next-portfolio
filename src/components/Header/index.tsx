/**
 *
 * Header
 *
 *  */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { animated } from 'react-spring';
import { isBrowser, isMobile } from 'react-device-detect';

import Particles from 'components/lib/Particles';
import BurgerV2 from 'components/BurgerMenu/Burgerv2';
import Chevron from 'components/svg/Icons/Chevron';

import { toggleMenu } from 'actions/display';

import useBurgerAnimation from './useBurgerAnimation';

export const HEADER_HEIGHT = 60;

const Header = ({ dispatch, menuIsOpen, hasData }: HeaderProps) => {
  const props = useBurgerAnimation({ menuIsOpen });
  return (
    <Container className={isMobile ? 'isMobile' : 'isNotMobile'}>
      {hasData && <Particles />}
      <animated.div style={props}>
        <StyledBurgerMenu
          isOpen={menuIsOpen}
          onClick={() => {
            console.log('click');
            // setIsOpen(!isOpen);
            dispatch(toggleMenu());
          }}
        />
      </animated.div>
      <Content>
        <Title>
          <div>
            Hey, I'm <Name>Mike Schmerbeck</Name>
          </div>
          <div>I'm A Full-stack JavaScript Egnineer.</div>
        </Title>
        <SkillsParagraph>MongoDB + Express + React + Node</SkillsParagraph>
      </Content>
      <Link to="work-section" smooth={true}>
        <Button type="button">
          Check My Work
          <Chevron width={20} height={20} style={{}} />
        </Button>
      </Link>
    </Container>
  );
};

interface HeaderProps {
  dispatch: (action: any) => void;
  menuIsOpen: boolean;
  isScrolled?: boolean;
  hasData: boolean;
}

export default memo(Header);

const StyledBurgerMenu = styled(BurgerV2)`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 100;
`;

const Container = styled.header<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  background-image: url('/static/img/nicolas-cool-unsplash.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &.isNotMobile {
    background-attachment: fixed;
  }

  color: #fff;
  height: 100vh;
  padding: 15px;
  ${({ theme }) => theme.media.max.mobile`
    background-position: 60% 50%;
  `}

  &::before {
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const Content = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: lighter;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: lighter;
  font-size: 3rem;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-top: 100px;
  ${({ theme }) => theme.media.max.mobile`
    margin-top: 50px;
    font-size: 2.3rem;
  `}
`;

const SkillsParagraph = styled.p`
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  font-weight: lighter;
`;

const Name = styled.span`
  color: #e69839;
`;

const Button = styled.button`
  position: relative;
  background-color: rgba(255, 255, 255, 0.85);
  color: #e69839;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 26px;
  width: 90%;
  max-width: 280px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
  z-index: 1;
  overflow: hidden;
  transition: 0.15s transform, 0.15s box-shadow;
  ${({ theme }) => theme.styles.boxShadows['1']}

  svg {
    transition: 0.3s transform;
    transform: rotate(-90deg);
  }

  &:active {
    transform: translate3d(0, 2px, 0);
    ${({ theme }) => theme.styles.boxShadows['0']}
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.55);
    transform: translate3d(-80%, 0, 0) rotate(-45deg);
    transition: 0.3s transform;
    z-index: -1;
  }

  &:hover {
    svg {
      transform: rotate(0deg);
    }
    &::after {
      transform: translate3d(-55%, 0, 0) rotate(-45deg);
    }
  }
`;
