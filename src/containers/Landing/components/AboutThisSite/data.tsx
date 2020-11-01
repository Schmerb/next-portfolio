/**
 *
 *
 *  AboutThisSite Data
 *
 *
 */

import React from 'react';

import Link from 'components/Elements/Link';

export const title = 'Built With';

export const text = () => (
  <>
    This site is a statically generated, custom React build using{' '}
    <Link href="https://nextjs.org/">NextJS</Link> and is hosted on{' '}
    <Link href="https://www.netlify.com/">Netlify</Link>. It uses{' '}
    <Link href="https://www.react-spring.io/">react-spring</Link> to harness
    smooth, spring-physics based animations.
  </>
);

export const tools = [
  'reactRedux',
  'nextJs',
  'styledComponents',
  'reactSpring',
  'netlify',
];
// export const tools = [
//   {
//     id: uuidv4(),
//     ...logos.reactRedux,
//   },
//   {
//     id: uuidv4(),
//     ...logos.nextJs,
//   },
//   {
//     id: uuidv4(),
//     ...logos.styledComponents,
//   },
//   {
//     id: uuidv4(),
//     ...logos.reactSpring,
//   },
//   {
//     id: uuidv4(),
//     ...logos.netlify,
//   },
// ];
