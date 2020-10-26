/**
 *
 * Contact Page
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Contact from 'containers/Contact/Loadable';

interface ContactPageProps {}

export const ContactPage = ({}: ContactPageProps) => (
  <>
    <SEO title="Contact Page" />
    <Contact />
  </>
);

export default ContactPage;
