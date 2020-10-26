/**
 *
 * CloseIcon SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
}

//  width="75.069" height="88.732"

const CloseIcon = ({
  fill = 'none',
  stroke = '#000',
  height = '100%',
  width = '100%',
  style = {},
}: Props) => (
  <svg
    width={width}
    height={height}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <title>Close Icon</title>
    <path
      fill={fill}
      d="M17.41 16l8.29-8.29a1 1 0 0 0-1.41-1.41L16 14.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29-8.3 8.29A1 1 0 1 0 7.7 25.7l8.3-8.29 8.29 8.29a1 1 0 0 0 1.41-1.41z"
    />
  </svg>
);

export default CloseIcon;
