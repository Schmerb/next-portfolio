/**
 *
 *
 *    Menu
 *
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-scroll';

import { links } from 'utils/navigation';
import { closeMenu } from 'actions/display';

const Menu = ({ dispatch, menuIsOpen }: IMenuProps) => {
  //
  const animatedProps = useSpring({
    opacity: menuIsOpen ? 1 : 0,
  });
  //
  const handleLinkClick = (id: string) => (evt: any) => {
    evt.preventDefault();
    dispatch(closeMenu());
    // const El = document.querySelector(`#${id}`);
    // setTimeout(() => {
    //   El.scrollIntoView({ behavior: 'smooth' });
    // }, 100);
  };
  return (
    <Container className={menuIsOpen ? 'open' : ''}>
      <AnimatedDiv style={animatedProps}>
        <List>
          {links.map(({ id, text }) => (
            <li key={id}>
              <Link to={id} smooth={true} duration={1500}>
                <StyledSpan onClick={handleLinkClick(id)}>{text}</StyledSpan>
              </Link>
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
    /* font-size: 32px; */
    text-transform: uppercase;
  }
`;

const StyledSpan = styled.span`
  color: #fff;
  padding-bottom: 8px;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  transition: color 0.15s;
  &:hover {
    color: lightgrey;
  }
`;
