/**
 *
 *
 *    Menu
 *
 *
 */

import React, { useState, memo } from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useRouter } from 'next/router';

import BurgerMenu from 'components/BurgerMenu';
import Link from 'components/Elements/Link';
import { allLinks } from 'utils/navigation';
import { closeMenu } from 'actions/display';

const Menu = ({ dispatch, menuIsOpen }: IMenuProps) => {
  const animatedProps = useSpring({
    opacity: menuIsOpen ? 1 : 0,
  });
  const router = useRouter();
  // console.log({ router });
  return (
    <Container menuIsOpen={menuIsOpen}>
      <AnimatedDiv style={animatedProps}>
        <StyledMobile>
          <BurgerMenu
            color="#ffffff"
            isOpen={menuIsOpen}
            onClick={() => dispatch(closeMenu())}
          />
        </StyledMobile>
        <List>
          {allLinks.map(({ href, text }) => (
            <li key={href}>
              <StyledLink
                href={href}
                text={text}
                onClick={() => dispatch(closeMenu())}
                isActive={router.pathname === href}
              />
            </li>
          ))}
        </List>
      </AnimatedDiv>
    </Container>
  );
};

export default memo(Menu);

interface IMenuProps {
  dispatch: any;
  menuIsOpen: any;
}

const StyledMobile = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  ${({ menuIsOpen }) =>
    menuIsOpen
      ? css`
          pointer-events: all;
        `
      : css`
          pointer-events: none;
        `}
`;

const AnimatedDiv = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  text-align: center;

  li {
    margin-bottom: 30px;
    font-family: 'NextPro-Light', sans-serif;
  }
`;

const StyledLink = styled(Link)`
  padding-bottom: 8px;
  ${({ isActive }) =>
    isActive
      ? css`
          border-bottom: 2px solid #fff;
        `
      : css``}
`;
