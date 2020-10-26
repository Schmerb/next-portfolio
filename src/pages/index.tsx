/**
 *
 * Index
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Landing from 'containers/Landing/Loadable';

interface Props {}

export const Index = ({}: Props) => (
  <>
    <SEO title="Landing Page" />
    <Landing />
  </>
);

export default Index;
