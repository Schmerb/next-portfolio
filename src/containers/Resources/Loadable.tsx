/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { ResourcesProps } from './index';

export default loadable<ResourcesProps>(() => import('./index'));
