/**
 *
 * Header
 *
 *  */

import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';

import Navigation from 'components/Navigation';

import Logo from 'components/Logo';

import { toggleMenu, setIsScrolled } from 'actions/display';

import useScrollTop from 'utils/hooks/useScrollTop';
import useOnChangeWatcher from 'utils/hooks/useOnChangeWatcher';

export const HEADER_HEIGHT = 60;

const Header = ({ dispatch, menuIsOpen }: HeaderProps) => {
  const [state, setState] = useState({ slug: '', title: 'SecondSight' });
  // const [isTop, setIsTop] = useState(true);

  const handleBurgerClick = (evt: any) => {
    dispatch(toggleMenu());
  };

  const scrollTop = useScrollTop({});
  // console.log({ scrollTop });

  // useOnChangeWatcher(scrollTop, () => {
  //   // console.log({ scrollTop });
  //   if (scrollTop >= 40) {
  //     if (!isScrolled) {
  //       // setIsScrolled(true);
  //       // console.log('setIsScrolled(true)');
  //       dispatch(setIsScrolled(true));
  //     }
  //   } else if (isScrolled) {
  //     // console.log('setIsScrolled(false)');
  //     // setIsScrolled(false); .
  //     dispatch(setIsScrolled(false));
  //   }
  // });

  // calculated state
  const isScrolled = scrollTop >= 40;
  // console.log('header render ', isScrolled);

  return (
    <Container isScrolled={isScrolled}>
      <Wrapper>
        <Logo isDark={isScrolled} />
        <Navigation
          menuIsOpen={menuIsOpen}
          onBurgerClick={handleBurgerClick}
          isScrolled={isScrolled}
        />
      </Wrapper>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ isScrolled }) => (isScrolled ? '#000' : '#fff')};
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255,255,255,0.95)' : 'transparent'};
  height: ${HEADER_HEIGHT}px;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 2;
  /* border-bottom: 2px solid ${({ isScrolled }) =>
    isScrolled ? '#000' : '#fff'}; */
  transition: color 0.3s, background-color 0.3s;
  /* ${({ theme }) => theme.styles.boxShadows['1']}; */
  box-shadow: rgba(52, 115, 130, 0.3) 0px 5px 8px -7px;
  border-bottom: 1px solid #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.media.MAX_WIDTH}px;
  height: 100%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-size: 19px;
`;
