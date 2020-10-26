/**
 *
 * useFontLoader
 *
 * Handles setting classes on body to indicate when fonts have loaded
 *
 *  */
import { useEffect, useState } from 'react';

import { fontLoading, fontLoaded } from 'actions/display';

import { fontNames } from './fontNames';

let namesArr = [...fontNames];
let hasRun = false;

export const useFontLoader = ({ dispatch }: useFontLoaderProps) => {
  const [fontsReady, setFontsReady] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // lazily load package so "window" is defined when
      // package instantiates
      // eslint-disable-next-line global-require
      const WebFont = require('webfontloader');
      WebFont.load({
        custom: {
          families: fontNames,
        },
        fontloading(familyName, fvd) {
          if (!hasRun) {
            dispatch(fontLoading());
            hasRun = true;
          }
          // console.log('fontloading!!');
        },
        fontactive(familyName, fvd) {
          // console.log('fontactive!!');
          // console.log(familyName);
          const newArr = namesArr.filter((name) => name !== familyName);
          namesArr = newArr;
          if (namesArr.length === 0) {
            // all fonts have loaded
            dispatch(fontLoaded());
            setFontsReady(true);
          }
        },
        // timeout: 1000,
      });
    }
  }, []);
  return { fontsReady };
};

interface useFontLoaderProps {
  dispatch: (action: any) => void;
}

export default useFontLoader;
