/**
 *
 *
 *    LinkedIn
 *
 *
 */

import React, { memo } from 'react';

const LinkedIn = ({ width, height, style, fill }: LinkedInProps) => {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M32 19.458v11.831h-6.859v-11.038c0-2.773-0.992-4.665-3.475-4.665-1.895 0-3.023 1.275-3.519 2.509-0.181 0.441-0.228 1.055-0.228 1.672v11.522h-6.861s0.092-18.695 0-20.632h6.86v2.925c-0.014 0.022-0.032 0.045-0.045 0.067h0.045v-0.067c0.911-1.404 2.539-3.409 6.183-3.409 4.514 0 7.898 2.949 7.898 9.286zM3.882 0.711c-2.347 0-3.882 1.539-3.882 3.564 0 1.981 1.491 3.567 3.791 3.567h0.046c2.393 0 3.881-1.586 3.881-3.567-0.045-2.025-1.488-3.564-3.835-3.564zM0.407 31.289h6.858v-20.632h-6.858v20.632z"
      ></path>
    </svg>
  );
};

export default memo(LinkedIn);

interface LinkedInProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: any;
}
