/**
 *
 * useAppLogic
 *
 *  all app startup logic should go here
 *
 *  */

import { useState, useEffect } from 'react';

import { useFontLoader } from 'styles/fonts/useFontLoader';

export const useAppLogic = ({ dispatch }: UseAppLogicProps) => {
  const [state, setState] = useState({
    loaded: false,
  });

  useEffect(() => {
    setState({
      loaded: true,
    });
  }, []);

  //
  // load fonts and update redux state
  //
  const { fontsReady } = useFontLoader({ dispatch });
  //
  //
  // TODO: Need to render fallback while app and fonts load
  //
  //

  return { ...state, fontsReady };
};

interface UseAppLogicProps {
  dispatch: (action: (props?: any) => void) => void;
}

export default useAppLogic;
