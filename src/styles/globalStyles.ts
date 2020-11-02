/**
 *
 * global styles
 *
 *  */

import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';

export const MyGlobalStyle = createGlobalStyle`
  *, body, html {
    box-sizing: border-box;
  }
  html, body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    font-family: 'Open Sans', sans-serif;
    -webkit-overflow-scrolling: touch;
  }
  body {
    margin: 0;
    overflow-x: hidden;
    /* overflow: hidden; // issue with double scroll bar */
    /* font-family: "NextPro-Regular", sans-serif; */
  }

  h1,h2,h3,h4,h5 {
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    font-family: 'Roboto', sans-serif;
  }

  .wf-loading body {
    visibility: hidden;
  }
  
  .wf-active body .wf-inactive body {
    visibility: visible;
    font-family: NextPro-Regular;
  }

  ${fonts}
`;
