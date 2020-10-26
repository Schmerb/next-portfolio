/**
 *
 * BurgerMenu
 *
 * This is connected to Redux
 *
 */

import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Theme from 'styles/theme';

const { colors } = Theme;

const BurgerMenu = ({
  isOpen,
  color,
  onClick,
  type,
  style,
  className,
}: IBurgerMenuProps) => (
  <Container
    className={className}
    onClick={onClick}
    style={style}
    type={type || 'button'}
    color={color}
  >
    <Menu menuIsOpen={isOpen} color={color} />
  </Container>
);

interface IBurgerMenuProps {
  isOpen: boolean;
  // dispatch: (props: any) => void;
  onClick: (evt: any) => void;
  className?: string;
  color?: any;
  type?: any;
  style?: any;
}

export default BurgerMenu;

const burgerOpen = (color = colors.Secondary) => keyframes`
   0% {
      background-color: ${colors.alphaMod(color, 1)};
  }
  50% {
      background-color: ${colors.alphaMod(color, 1)};
  }
  51% {
       background-color: ${colors.alphaMod(color, 0)};
  }
  100% {
       background-color: ${colors.alphaMod(color, 0)};
  }
`;

const burgerTopOpen = keyframes`
  0% {
      top: -10px;
      transform: none;
  }
  50% {
      top: 0;
      transform: none;
  }
  90% {
      top: 0;
      transform: rotate3d(0, 0, 1, 55deg);
  }
  100% {
      top: 0;
      transform: rotate3d(0, 0, 1, 45deg);
  }
`;

const burgerBotOpen = keyframes`
   0% {
      bottom: -10px;
      transform: none;
  }
  50% {
      bottom: 0;
      transform: none;
  }
  90% {
      bottom: 0;
      transform: rotate3d(0, 0, 1, -55deg);
  }
  100% {
      bottom: 0;
      transform: rotate3d(0, 0, 1, -45deg);
  }
`;

const burgerClosed = (color = colors.Secondary) => keyframes`
 0% {
       background-color: ${colors.alphaMod(color, 0)};
  }
  50% {
       background-color: ${colors.alphaMod(color, 0)};
  }
  75% {
      background-color: ${colors.alphaMod(color, 1)};
  }
  100% {
      background-color: ${colors.alphaMod(color, 1)};
  }
`;

const burgerTopClosed = keyframes`
  0% {
      top: 0;
      transform: rotate3d(0,0,1,-45deg);
  }
  50% {
      top: 0;
      transform: none;
  }
  90% {
      top: -12px;
      transform: none;
  }
  100% {
      top: -10px;
      transform: none;
  }
`;

const burgerBotClosed = keyframes`
  0% {
      bottom: 0;
      transform: rotate3d(0,0,1,45deg);
  }
  50% {
      bottom: 0;
      transform: none;
  }
  90% {
      bottom: -12px;
      transform: none;
  }
  100% {
      bottom: -10px;
      transform: none;
  }
`;

const Container = styled.button`
  background-color: transparent;
  position: relative;
  width: 35px;
  height: 35px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;

// interface MenuProps {
//   menuIsOpen: boolean;
// }

/* eslint-disable-next-line */
const Menu = styled.div<any>`
  background-color: ${({ color }) => color || colors.Secondary};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 3px;
  transition: background-color 0.15s;

  &::before,
  &::after {
    content: '';
    background-color: ${({ color }) => color || colors.Secondary};
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    transition: background-color 0.15s, transform 0.3s;
  }

  &::before {
    top: 12px;
  }
  &::after {
    bottom: 12px;
  }

  ${({ menuIsOpen, color }) =>
    menuIsOpen
      ? css`
          animation: ${burgerOpen(color)} 0.3s forwards;
          &::before {
            animation: ${burgerTopOpen} 0.3s forwards;
          }
          &::after {
            animation: ${burgerBotOpen} 0.3s forwards;
          }
        `
      : css`
          animation: ${burgerClosed(color)} 0.3s forwards;
          &:before {
            animation: ${burgerTopClosed} 0.3s forwards;
          }
          &:after {
            animation: ${burgerBotClosed} 0.3s forwards;
          }
        `};
`;
