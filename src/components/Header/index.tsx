/**
 *
 * Header
 *
 *  */

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

import Chevron from 'components/svg/Icons/Chevron';

export const HEADER_HEIGHT = 60;

const Header = ({ dispatch, menuIsOpen }: HeaderProps) => {
  const [state, setState] = useState({ slug: '', title: 'SecondSight' });

  return (
    <Container>
      <Content>
        <Title>
          <div>
            Hey, I'm <Name>Mike Schmerbeck</Name>
          </div>
          <div>I'm A Full-stack Developer.</div>
        </Title>
        <SkillsParagraph>MongoDB + Express + React + Node</SkillsParagraph>
      </Content>
      <Button type="button">
        Check My Work
        <Chevron
          width={20}
          height={20}
          style={{ transform: 'rotate(-90deg)' }}
        />
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

const Container = styled.header<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-image: url(/static/img/nicolas-cool-unsplash.jpg);
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
  border: 1px solid limegreen;
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
  background-color: rgba(255, 255, 255, 0.85);
  color: #e69839;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  z-index: 1;
  ${({ theme }) => theme.styles.boxShadows['1']};
`;
