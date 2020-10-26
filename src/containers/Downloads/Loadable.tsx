/**
 *
 * Asynchronously loads the component for ExamplePage
 *
 */

import loadable from 'utils/loadable';
import { DownloadsProps } from './index';

export default loadable<DownloadsProps>(() => import('./index'));
