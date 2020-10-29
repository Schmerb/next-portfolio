/**
 *
 *
 * useVisibilityState
 *
 *
 */

import { useEffect, useState, useRef } from 'react';

//
// to check if el is in viewport
//
export const isInView = (box: any) => {
  const { innerHeight } = window;
  const targetHeight = innerHeight - innerHeight / 4;
  // top: distance from top of El to top of viewport
  // bottom: distance from bottom of El to top of viewport
  const { top, bottom } = box;
  return top < targetHeight && bottom >= 0;
};

/**
 * useVisibilityState
 *
 * @param {*} { scrollTop }
 * @returns
 */
export const useVisibilityState = ({ scrollTop }) => {
  // ref
  const containerRef: any = useRef();
  // visibility
  const [containerInView, setContainerInView] = useState(false);
  //
  useEffect(() => {
    if (!containerRef.current) {
      // return if not mounted yet
      return () => {};
    }
    //
    // grab node client rect DOM info
    //
    const containerRect = containerRef.current.getBoundingClientRect();
    //
    // check if is in view and set state
    //
    if (isInView(containerRect)) setContainerInView(true);
  }, [scrollTop]);

  return { containerRef, containerInView };
};

export default useVisibilityState;
