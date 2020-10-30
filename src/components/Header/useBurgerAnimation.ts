/**
 *
 * useBurgerAnimation
 *
 *  */
import { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

import useScrollTop from 'utils/hooks/useScrollTop';
import usePrevious from 'utils/hooks/usePrevious';

let direction = '';

export const useBurgerAnimation = ({ menuIsOpen }) => {
  const [showMenu, setShowMenu] = useState(true);
  //
  const scrollTop: number = useScrollTop({});
  const prevScrollTop: number = usePrevious(scrollTop);

  if (
    prevScrollTop > scrollTop ||
    (direction === 'up' && prevScrollTop === scrollTop) // handles same value when already scrolling up
  ) {
    direction = 'up';
  } else {
    direction = 'down';
  }

  const props = useSpring({
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 100,
    opacity: menuIsOpen || showMenu ? 1 : 0,
    transform: `translate3d(0,${menuIsOpen || showMenu ? '0px' : '-40px'},0)`,
    config: {
      tension: 300,
    },
  });

  useEffect(() => {
    const isAfterHeader = scrollTop > window.innerHeight;

    if (isAfterHeader) {
      if (direction === 'up') {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    } else {
      //
      setShowMenu(true);
    }
  }, [scrollTop, direction]);

  return props;
};

export default useBurgerAnimation;
