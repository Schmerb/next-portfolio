/**
 *
 *
 *    Burger V2
 *
 *
 */

import React, { useState, memo } from 'react';
import styled, { css } from 'styled-components';

const BurgerV2 = ({ className, isOpen, onClick }: IBurgerV2Props) => (
  <ContainerBtn onClick={onClick} className={className} type="button">
    <Bars isOpen={isOpen} />
  </ContainerBtn>
);

export default memo(BurgerV2);

interface IBurgerV2Props {
  onClick: (evt?: any) => void;
  isOpen: boolean;
  className?: string;
}

const ContainerBtn = styled.button`
  background-color: rgba(100, 100, 100, 0.2); // gba(grey, 0.4);
  display: block;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
`;

const Bars = styled.div`
  width: 100%;
  &::before,
  &::after {
    content: '';
    position: relative;
    background-color: white;
    display: block;
    margin: 0 auto;
    width: 30px;
    height: 4px;
    transition: 0.3s all ease-in-out;
  }
  &::before {
    top: -5px;
  }
  &::after {
    top: 5px;
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      &::before {
        transform: rotate(225deg);
        top: 3px;
      }
      &::after {
        transform: rotate(135deg);
        top: 0;
      }
    `}
`;
