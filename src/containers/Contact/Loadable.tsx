/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { ContactPageProps } from './index';

export default loadable<ContactPageProps>(() => import('./index'));
