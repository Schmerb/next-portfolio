/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { IndustryProps } from './index';

export default loadable<IndustryProps>(() => import('./index'));
