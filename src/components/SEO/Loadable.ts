/**
*
* Asynchronously loads the component for Seo
*
*/

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
