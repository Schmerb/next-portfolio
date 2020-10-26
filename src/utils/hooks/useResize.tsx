/**
 *
 * useResize
 *
 *  */

import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

/**
 * Use Resize
 *
 */
export const useResize = (throttle = 66) => {
  const [{ width, height }, setDimensions] = useState<any>(() => ({
    width: 0,
    height: 0,
  }));

  const setWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
  };

  useEffect(() => setWindowDimensions(), []);

  useEventListener('resize', setWindowDimensions, throttle, true);

  return { width, height };
};

export default useResize;
