/**
 *
 * App - Next uses this as custom app component
 *
 *  */

// import App from '../app';

// export default App;

/**
 *
 * App
 *
 *  */
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';

import Layout from 'layout';
import withReduxStore from 'utils/withReduxStore';
import Theme from 'styles/theme';

// const theme = {
//   primary: 'green',
// };

function MyApp({ Component, reduxStore, router, pageProps }) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={Theme}>
        <Layout title="Title | 2019">
          {loaded && <Component key={router.route} {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default withReduxStore(MyApp);

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
