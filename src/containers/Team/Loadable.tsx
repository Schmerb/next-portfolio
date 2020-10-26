/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { TeamProps } from './index';

export default loadable<TeamProps>(() => import('./index'));
