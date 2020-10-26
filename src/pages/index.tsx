/**
 *
 * Index
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Landing from 'containers/Landing/Loadable';

import FadeIn from 'components/FadeIn';

interface Props {}

export const Index = ({}: Props) => (
  <>
    <SEO title="Landing Page" />
    {/* <FadeIn> */}
    <Landing />
    {/* </FadeIn> */}
  </>
);

export default Index;
