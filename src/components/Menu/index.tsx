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

// import BurgerMenu from 'components/BurgerMenu';
import Link from 'components/Elements/Link';
import { links } from 'utils/navigation';
import { closeMenu } from 'actions/display';

const Menu = ({ dispatch, menuIsOpen }: IMenuProps) => {
  //
  const animatedProps = useSpring({
    opacity: menuIsOpen ? 1 : 0,
  });
  //
  const router = useRouter();
  //
  const handleLinkClick = (evt) => {
    evt.preventDefault();
    dispatch(closeMenu());
  };
  return (
    <Container className={menuIsOpen ? 'open' : ''}>
      <AnimatedDiv style={animatedProps}>
        <List>
          {links.map(({ id, href, text }) => (
            <li key={id}>
              <StyledLink
                href={href}
                text={text}
                onClick={handleLinkClick}
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
  pointer-events: none;
  &.open {
    pointer-events: all;
  }
`;

const AnimatedDiv = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(
    -45deg,
    rgba(162, 85, 255, 0.95) -50%,
    rgba(101, 31, 255, 0.99)
  );
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 2.3rem;
  text-align: center;

  li {
    margin-bottom: 30px;
    font-family: 'Raleway', sans-serif;
    /* font-size: 32px; */
    text-transform: uppercase;
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
