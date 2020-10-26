/**
 *
 * App
 *
 *  */

import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
// import { Transition, animated } from 'react-spring';
// import { Transition } from 'react-spring/renderprops';

import FadeIn from 'components/FadeIn';

import withReduxStore from 'utils/withReduxStore';
import AppWrapper from './AppWrapper';
import useAppLogic from './useAppLogic';

export const MyApp = ({
  Component,
  pageProps,
  reduxStore,
  router,
}: MyAppProps) => {
  const { loaded } = useAppLogic({ dispatch: reduxStore.dispatch });
  console.log({ loaded });
  // const items = [
  //   {
  //     id: router.route,
  //     Component,
  //     pageProps,
  //   },
  // ];

  // console.log = function () {};
  // console.error = function () {};

  return (
    <AppWrapper reduxStore={reduxStore}>
      {loaded && <Component key={router.route} {...pageProps} />}
    </AppWrapper>
  );
};

interface MyAppProps {
  Component: any;
  pageProps: any;
  reduxStore: any;
  router: any;
}

// add redux provider
const AppWithStore = withReduxStore(MyApp);

export default AppWithStore;

const Container = styled.div``;

//
// Example of loading screen and fadeIn comp
//
// {/* <LoadingScreen loaded={loaded} />  */}
// {/* <FadeIn loaded={loaded}>
//   {loaded && <Component key={router.route} {...pageProps} />}
// </FadeIn>  */}

// <Transition
//   items={items}
//   keys={(item) => item.id}
//   from={{ opacity: 0 }}
//   initial={{ opacity: 0 }}
//   enter={{ opacity: 1 }}
//   leave={{ opacity: 0, position: 'absolute' }}
// >
//   {(styles, props) => (
//     <animated.div style={{ ...styles, width: '100%' }}>
//       <AppWrapper reduxStore={reduxStore}>
//         {/* <props.Component key={props.id} {...props.pageProps} /> */}
//         {loaded && fontsReady && (
//           <props.Component key={props.id} {...props.pageProps} />
//         )}
//         {/* <FadeIn loaded={loaded}>
//           <props.Component key={props.id} {...props.pageProps} />
//         </FadeIn> */}
//       </AppWrapper>
//     </animated.div>
//   )}
// </Transition>
