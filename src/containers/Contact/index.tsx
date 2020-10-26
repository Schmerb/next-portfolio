/**
 *
 * Contact Page
 *
 *  */

import React from 'react';
import styled from 'styled-components';

import FooterTitle from 'components/FooterTitle';

import ContactIntro from './components/ContactIntro';
import ContactForm from './components/ContactForm';
import Addresses from './components/Addresses';

export interface ContactPageProps {}

export const ContactPage = ({}: ContactPageProps) => (
  <>
    <Container>
      <ContactIntro />
      <ContactForm />
      <Addresses />
    </Container>
    <FooterTitle />
  </>
);

export default ContactPage;

const Container = styled.div`
  position: relative;
  color: #fff;
  min-height: 100vh;
  /* border: 1px solid red; */
`;
