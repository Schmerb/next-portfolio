/**
 *
 * Industry
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Industry from 'containers/Industry/Loadable';

interface IndustryPageProps {}

export const IndustryPage = ({}: IndustryPageProps) => (
  <>
    <SEO title="Industry Page" />
    <Industry />
  </>
);

export default IndustryPage;
