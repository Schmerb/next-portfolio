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
  const imagesRef: any = useRef();
  //
  // visibility states
  //
  const [containerInView, setContainerInView] = useState(false);
  const [titleInView, setTitleInView] = useState(false);
  const [logosInView, setLogosInView] = useState(false);
  const [buttonsInView, setButtonsInView] = useState(false);
  const [imagesInView, setImagesInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) {
      // return if not mounted yet
      return () => {};
    }
    // to check if el is in viewport
    const isInView = (box) => {
      const targetHeight = window.innerHeight - window.innerHeight / 4;
      return box.top < targetHeight && box.bottom >= 0;
    };

    //
    // grab node client rect DOM info
    //
    const containerRect = containerRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const logosRect = logosRef.current.getBoundingClientRect();
    const buttonsRect = buttonsRef.current.getBoundingClientRect();
    const imagesRect = imagesRef.current.getBoundingClientRect();
    //
    // check if is in view and set state
    //
    if (isInView(containerRect)) setContainerInView(true);
    if (isInView(titleRect)) setTitleInView(true);
    if (isInView(logosRect)) setLogosInView(true);
    if (isInView(buttonsRect)) setButtonsInView(true);
    if (isInView(imagesRect)) setImagesInView(true);
  }, [scrollTop]);

  return {
    refs: {
      containerRef,
      titleRef,
      logosRef,
      buttonsRef,
      imagesRef,
    },
    state: {
      containerInView,
      titleInView,
      logosInView,
      buttonsInView,
      imagesInView,
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
