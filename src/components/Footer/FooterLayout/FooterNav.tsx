/**
 *
 * Footer Nav
 *
 *  */

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Link from 'components/Elements/Link';
import { allLinks } from 'utils/navigation';

interface Props {}

const FooterNav = (props: Props) => {
  const router = useRouter();

  const { pathname } = router;
  return (
    <StyledNav>
      <NavList>
        {allLinks.map((link) => (
          <StyledListItem key={link.href}>
            <StyledLink
              href={link.href}
              text={link.text}
              isActive={pathname === link.href}
            />
          </StyledListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default FooterNav;

const StyledNav = styled.nav`
  margin-bottom: 50px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  li {
    text-transform: uppercase;
    font-family: 'NextPro-Light', sans-serif;
  }
`;

const StyledLink = styled(Link)<any>`
  margin-left: 10px;
  margin-right: 10px;
  color: #000;
`;

const StyledListItem = styled.li`
  margin-left: 7px;
  margin-right: 7px;
`;
