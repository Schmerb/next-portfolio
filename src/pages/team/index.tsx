/**
 *
 * Team
 *
 *  */

import React from 'react';

import SEO from 'components/SEO';
import Team from 'containers/Team/Loadable';

interface TeamPagerops {}

export const TeamPage = ({}: TeamPagerops) => (
  <>
    <SEO title="Team Page" />
    <Team />
  </>
);

export default TeamPage;
