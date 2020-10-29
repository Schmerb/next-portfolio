/**
 *
 * Footer
 *
 *  */

import React from 'react';
import styled from 'styled-components';

interface FooterProps {}

export const FOOTER_HEIGHT = 200;

const Footer = ({}: FooterProps) => {
  return (
    <Container>
      <div>
        <NavList>
          <li>PROJECTS</li>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>WORK FLOW</li>
          <li>CONTACT</li>
        </NavList>
      </div>
      <div>
        <IconList>
          <IconListItem>Github</IconListItem>
          <IconListItem>Email</IconListItem>
          <IconListItem>LinkedIn</IconListItem>
        </IconList>
      </div>
      <Copyright>copyright © 2020 | Mike Schmerbeck</Copyright>
    </Container>
  );
};

Footer.propTypes = {};

export default Footer;

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  color: #fff;
  min-height: ${FOOTER_HEIGHT}px;
  padding: 15px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid red;
`;

const IconList = styled(List)`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  border: 1px solid limegreen;
`;

const IconListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid grey;
`;

const Copyright = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  text-align: center;
`;
