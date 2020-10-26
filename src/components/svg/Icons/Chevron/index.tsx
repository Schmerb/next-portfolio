/**
 *
 * Chevron
 *
 *  */

import React from 'react';

const Chevron = ({
  height,
  width,
  fill,
  style = {},
  className,
  onClick,
}: ChevronProps) => (
  <svg
    height={height}
    width={width}
    style={style}
    viewBox="0 0 128 128"
    className={className}
  >
    <path
      fill={fill}
      d="M0 .688v22.625l58.344 58.344 5.656 5.656 5.656-5.656 58.344-58.344v-22.625l-64 64-64-64z"
      transform="translate(0 12)"
      onClick={onClick}
    />
  </svg>
);

export interface ChevronProps {
  fill?: string;
  width?: string | number;
  height?: string | number;
  style?: {};
  className?: string;
  onClick?: (evt: any) => void;
}

export default Chevron;
