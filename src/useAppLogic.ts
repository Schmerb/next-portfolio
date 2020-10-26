/**
 *
 * useAppLogic
 *
 *  all app startup logic should go here
 *
 *  */

import { useState, useEffect } from 'react';

export const useAppLogic = ({ dispatch }: UseAppLogicProps) => {
  const [state, setState] = useState({
    loaded: false,
  });

  useEffect(() => {
    setState({
      loaded: true,
    });
  }, []);

  return { ...state };
};

interface UseAppLogicProps {
  dispatch: (action: (props?: any) => void) => void;
}

export default useAppLogic;
