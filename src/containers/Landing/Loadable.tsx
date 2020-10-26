/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { LandingPageProps } from './index';

export default loadable<LandingPageProps>(() => import('./index'));
