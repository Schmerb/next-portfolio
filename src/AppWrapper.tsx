/* eslint-disable react/destructuring-assignment */
/**
 *
 * App Wrapper
 *
 *  */

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Layout from 'layout';
import Theme from 'styles/theme';

export const MyAppWrapper = ({ reduxStore, children }: MyAppProps) => (
  <Provider store={reduxStore}>
    <ThemeProvider theme={Theme}>
      <Layout title="Title | 2019">{children}</Layout>
    </ThemeProvider>
  </Provider>
);

interface MyAppProps {
  children: any;
  reduxStore: any;
}

export default MyAppWrapper;
