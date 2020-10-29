/**
 *
 * Header
 *
 *  */

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

import Particles from 'components/lib/Particles';
import BurgerV2 from 'components/BurgerMenu/Burgerv2';
import Chevron from 'components/svg/Icons/Chevron';

import { toggleMenu } from 'actions/display';

export const HEADER_HEIGHT = 60;

const Header = ({ dispatch, menuIsOpen }: HeaderProps) => {
  const handleMyWorkClick = () => {
    console.log('Scrolling to work!');
    document
      .querySelector('#work-section')
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
      <Particles />
      <StyledBurgerMenu
        isOpen={menuIsOpen}
        onClick={() => {
          console.log('click');
          // setIsOpen(!isOpen);
          dispatch(toggleMenu());
        }}
      />
      <Content>
        <Title>
          <div>
            Hey, I'm <Name>Mike Schmerbeck</Name>
          </div>
          <div>I'm A Full-stack Developer.</div>
        </Title>
        <SkillsParagraph>MongoDB + Express + React + Node</SkillsParagraph>
      </Content>
      <Button type="button" onClick={handleMyWorkClick}>
        Check My Work
        <Chevron width={20} height={20} style={{}} />
      </Button>
    </Container>
  );
};

interface HeaderProps {
  dispatch: (action: any) => void;
  menuIsOpen: boolean;
  isScrolled?: boolean;
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
  background-attachment: fixed;
  background-position: center;
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
  /* border: 1px solid limegreen; */
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
