/**
 *
 * SmallArch SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  opacity?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
}

// width="91.964" height="81.225"

const SmallArch = ({
  fill = '#67bfd650',
  height = '100%',
  width = '100%',
  opacity = '0.3',
  style = {},
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={style}
    viewBox="0 0 134.065 134.064"
  >
    <path
      id="Path_5534"
      data-name="Path 5534"
      d="M675.456,1635.714v50.727a83.432,83.432,0,0,0-83.337,83.337H541.391C541.391,1695.855,601.533,1635.714,675.456,1635.714Z"
      transform="translate(-541.391 -1635.714)"
      fill={fill}
      opacity={opacity}
    />
  </svg>
);

export default SmallArch;
