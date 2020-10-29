/**
 *
 * Footer
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import LinkedInIcon from 'components/svg/Brands/LinkedIn';
import GithubIcon from 'components/svg/Brands/Github';
import EmailIcon from 'components/svg/Icons/Email';

interface FooterProps {}

export const FOOTER_HEIGHT = 200;

const props = { width: 30, height: 30, fill: '#555' };

const Footer = ({}: FooterProps) => {
  return (
    <Container>
      <Wrapper>
        <NavList>
          <li>PROJECTS</li>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>WORK FLOW</li>
          <li>CONTACT</li>
        </NavList>
      </Wrapper>
      <IconList>
        <IconListItem>
          <a href="https://github.com/Schmerb">
            <GithubIcon {...props} />
          </a>
        </IconListItem>
        <IconListItem>
          <a href="mailto:mikeschmerbeck@gmail.com">
            <EmailIcon {...props} />
          </a>
        </IconListItem>
        <IconListItem>
          <a href="https://www.linkedin.com/in/michael-schmerbeck/">
            <LinkedInIcon {...props} />
          </a>
        </IconListItem>
      </IconList>
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

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavList = styled(List)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  &::before,
  &::after {
    content: '';
    background-color: #555;
    position: absolute;
    height: 1px;
    width: 20%;
    top: 50%;
  }
  &::before {
    left: 0;
    transform: translate(50%, -50%);
  }
  &::after {
    right: 0;
    transform: translate(-50%, -50%);
  }

  li {
    margin-bottom: 15px;
  }
`;

const IconList = styled(List)`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  padding: 30px 15px;
  &::before {
    content: '';
    background-color: #555;
    position: absolute;
    height: 30px;
    width: 1px;
    top: -15%;
  }
`;

const IconListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.PrimaryGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid #555;
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 0 20px rgba(107, 107, 107, 0.6);
  }

  a {
    svg,
    path {
      transition: transform 0.15s, fill 0.15s;
    }
    &:hover {
      svg {
        transform: scale(0.85);
        path {
          fill: ${({ theme }) => theme.colors.PrimaryBluePurple};
        }
      }
    }
  }
`;

const Copyright = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.colors.PrimaryGreen};
  text-align: center;
`;
