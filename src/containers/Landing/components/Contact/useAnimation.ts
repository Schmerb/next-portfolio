/**
 *
 * useAnimation
 *
 *  */
import { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

import useVisibilityState from 'utils/hooks/useVisibilityState';

const springConfig = {
  config: {
    tension: 105,
  },
};

export const useAnimation = ({ scrollTop }) => {
  // inView handler
  const { containerRef, containerInView } = useVisibilityState({ scrollTop });
  // animation show states
  const [showTitle, setShowtitle] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (containerInView) {
      setShowtitle(true);
      setTimeout(() => {
        setShowLink(true);
      }, 250);
    }
  }, [containerInView]);

  const titleProps = useSpring({
    ...springConfig,
    opacity: showTitle ? 1 : 0,
    transform: `translate3d(0,${showTitle ? '0px' : '55px'},0)`,
  });

  const linkProps = useSpring({
    ...springConfig,
    opacity: showLink ? 1 : 0,
    transform: `translate3d(0,${showLink ? '0px' : '55px'},0)`,
  });

  return {
    containerRef,
    containerInView,
    titleProps,
    linkProps,
    showLink,
    showTitle,
  };
};

export default useAnimation;
