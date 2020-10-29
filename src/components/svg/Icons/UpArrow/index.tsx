/**
 *
 *
 *    UpArrow
 *
 *
 */

import React, { memo } from 'react';

const UpArrow = ({ width, height, style, fill }: UpArrowProps) => {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 32 32">
      <path d="M26.276 20.943c-0.26 0.26-0.601 0.391-0.943 0.391s-0.683-0.131-0.943-0.391l-8.391-8.391-8.391 8.391c-0.521 0.521-1.364 0.521-1.885 0s-0.521-1.364 0-1.885l9.333-9.333c0.521-0.521 1.364-0.521 1.885 0l9.333 9.333c0.521 0.521 0.521 1.364 0 1.885v0zM0 32h32v-32h-32v32z"></path>
    </svg>
  );
};

export default memo(UpArrow);

interface UpArrowProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: any;
}
