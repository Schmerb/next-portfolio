/**
 *
 *
 *    Contact
 *
 *
 */

import React, { useState, memo } from 'react';
import styled from 'styled-components';

const Contact = ({}: ContactProps) => {
  const [, set] = useState();

  return <Container id="contact-section">Contact</Container>;
};

export default memo(Contact);

interface ContactProps {}

const Container = styled.section`
  // border: 1px solid #000;
`;
