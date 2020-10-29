/**
 *
 * useVisibilityState
 *
 *  */
import { useState, useEffect, memo, useRef } from 'react';

interface useVisibilityStateProps {
  scrollTop: number;
}

export const useVisibilityState = ({ scrollTop }: useVisibilityStateProps) => {
  // DOM node Refs
  //
  const containerRef: any = useRef();
  const titleRef: any = useRef();
  const logosRef: any = useRef();
  const buttonsRef: any = useRef();
  //
  const desktopRef: any = useRef();
  const laptopRef: any = useRef();
  const mobileRef: any = useRef();
  //
  // visibility states
  //
  const [containerInView, setContainerInView] = useState(false);
  const [titleInView, setTitleInView] = useState(false);
  const [logosInView, setLogosInView] = useState(false);
  const [buttonsInView, setButtonsInView] = useState(false);
  //
  const [desktopInView, setDesktopInView] = useState(false);
  const [laptopInView, setLaptopInView] = useState(false);
  const [mobileInView, setMobileInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) {
      // return if not mounted yet
      return () => {};
    }
    // to check if el is in viewport
    const isInView = (box: any) => {
      const { innerHeight } = window;
      const targetHeight = innerHeight - innerHeight / 4;
      // top: distance from top of El to top of viewport
      // bottom: distance from bottom of El to top of viewport
      const { top, bottom } = box;
      return top < targetHeight && bottom >= 0;
    };

    //
    // grab node client rect DOM info
    //
    const containerRect = containerRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const logosRect = logosRef.current.getBoundingClientRect();
    const buttonsRect = buttonsRef.current.getBoundingClientRect();
    //
    const desktopRect = desktopRef.current.getBoundingClientRect();
    const laptopRect = laptopRef.current.getBoundingClientRect();
    const mobileRect = mobileRef.current.getBoundingClientRect();
    //
    // check if is in view and set state
    //
    if (isInView(containerRect)) setContainerInView(true);
    if (isInView(titleRect)) setTitleInView(true);
    if (isInView(logosRect)) setLogosInView(true);
    if (isInView(buttonsRect)) setButtonsInView(true);
    //
    if (isInView(desktopRect)) setDesktopInView(true);
    if (isInView(laptopRect)) setLaptopInView(true);
    if (isInView(mobileRect)) setMobileInView(true);
  }, [scrollTop]);

  return {
    refs: {
      containerRef,
      titleRef,
      logosRef,
      buttonsRef,
      //
      desktopRef,
      laptopRef,
      mobileRef,
    },
    state: {
      containerInView,
      titleInView,
      logosInView,
      buttonsInView,
      //
      desktopInView,
      laptopInView,
      mobileInView,
    },
  };
};

export default useVisibilityState;
/**
 *
 * example usage:
 *
 *  const {
 *     containerInView,
 *     titleInView,
 *     logosInView,
 *     buttonsInView,
 *     imagesInView,
 *   } = useVisibilityState({ scrollTop });
 *
 *
 */
