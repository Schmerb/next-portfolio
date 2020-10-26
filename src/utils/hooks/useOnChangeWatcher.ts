/**
 *
 * useOnChangeWatcher
 *
 *  */

import { useEffect, useState } from 'react';

export const useOnChangeWatcher = (value: any, callback: () => void) => {
  const [prevValue, setPrevValue] = useState(null);
  useEffect(() => {
    if (
      typeof value !== 'undefined' &&
      typeof prevValue !== 'undefined' &&
      value !== prevValue
    ) {
      callback();
    }
    setPrevValue(value);
  }, [value]);
};

export default useOnChangeWatcher;
