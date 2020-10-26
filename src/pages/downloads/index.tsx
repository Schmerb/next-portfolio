/**
 *
 * Download Page
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Downloads from 'containers/Downloads/Loadable';

interface DownloadPageProps {}

export const DownloadPage = ({}: DownloadPageProps) => (
  <>
    <SEO title="Download Page" />
    <Downloads />
  </>
);

export default DownloadPage;
