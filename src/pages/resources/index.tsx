/**
 *
 * Resources
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Resources from 'containers/Resources/Loadable';

interface ResourcesPageProps {}

export const ResourcesPage = ({}: ResourcesPageProps) => (
  <>
    <SEO title="Resources Page" />
    <Resources />
  </>
);

export default ResourcesPage;
