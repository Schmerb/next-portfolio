/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { ProductProps } from './index';

export default loadable<ProductProps>(() => import('./index'));
