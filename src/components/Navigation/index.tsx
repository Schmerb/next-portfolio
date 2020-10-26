/**
 *
 * Navigation
 *
 *  */

import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
// import { Portal } from 'react-portal';

import Link from 'components/Elements/Link';
import BurgerMenu from 'components/BurgerMenu';
import Tablet from 'components/Utils/Tablet';

import { links } from 'utils/navigation';
import useResize from 'utils/hooks/useResize';
import { breakpoints } from 'styles/theme/breakpoints';

const Navigation = ({
  menuIsOpen,
  onBurgerClick,
  isScrolled,
}: NavigationProps) => {
  // Router
  const router = useRouter();
  const { pathname } = router;
  // window resize
  const { width } = useResize();
  const renderBurger = width < breakpoints.tablet;

  return (
    <Container>
      <StyledMobile>
        <BurgerMenu
          color={isScrolled ? '#000000' : '#ffffff'}
          isOpen={menuIsOpen}
          onClick={onBurgerClick}
        />
      </StyledMobile>
      <Tablet>
        <StyledList>
          {links.map((link) => (
            <StyledListItem key={link.href}>
              <StyledLink
                href={link.href}
                text={link.text}
                isActive={pathname === link.href}
                isScrolled={isScrolled}
              />
            </StyledListItem>
          ))}
        </StyledList>
      </Tablet>
    </Container>
  );
};

interface NavigationProps {
  menuIsOpen: boolean;
  isScrolled: boolean;
  onBurgerClick: (evt: any) => void;
}

export default Navigation;

const Container = styled.div`
  color: #fff;
`;

const StyledMobile = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
  ${({ theme }) => theme.media.min.tablet`
    display: none;
  `}
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 19px;
  font-size: 0.9rem;
  font-family: 'NextPro-Light', sans-serif;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)<any>`
  color: ${({ isActive, isScrolled }) => (isScrolled ? '#000' : '#fff')};
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 5px;
  ${({ isActive, isScrolled }) =>
    isActive &&
    css`
      border-bottom: 3px solid ${isScrolled ? '#000' : '#fff'};
    `}
`;

const StyledListItem = styled.li`
  margin-left: 7px;
  margin-right: 7px;
`;
