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
  return <Container>Footer</Container>;
};

Footer.propTypes = {};

export default Footer;

const Container = styled.footer`
  background-color: cornflowerblue;
  color: #fff;
  min-height: ${FOOTER_HEIGHT}px;
  padding: 15px;
`;
