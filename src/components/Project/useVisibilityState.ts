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
  //
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
    const isInView = (box) => box.top < window.innerHeight && box.bottom >= 0;

    //
    // grab node client rect DOM info
    //
    const containerRect = containerRef.current.getBoundingClientRect();
    const titleRect = titleRef.current.getBoundingClientRect();
    const logosRect = logosRef.current.getBoundingClientRect();
    const buttonsRect = buttonsRef.current.getBoundingClientRect();
    const imagesRect = imagesRef.current.getBoundingClientRect();

    if (isInView(containerRect)) {
      setContainerInView(true);
      // console.log(`${project.title} is in the viewport!`);
    }
    //
    if (isInView(titleRect)) {
      setTitleInView(true);
      // console.log(`${project.title} is in the viewport!`);
    }
    //
    if (isInView(logosRect)) {
      setLogosInView(true);
      // console.log(`${project.title} is in the viewport!`);
    }
    //
    if (isInView(buttonsRect)) {
      setButtonsInView(true);
      // console.log(`${project.title} is in the viewport!`);
    }
    //
    if (isInView(imagesRect)) {
      setImagesInView(true);
      // console.log(`${project.title} is in the viewport!`);
    }
  }, [scrollTop]);

  return {
    containerRef,
    titleRef,
    logosRef,
    buttonsRef,
    imagesRef,
    //
    //
    //
    containerInView,
    titleInView,
    logosInView,
    buttonsInView,
    imagesInView,
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
