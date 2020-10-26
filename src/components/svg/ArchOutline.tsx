/**
 *
 * ArchOutline SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
  className?: string;
}

// width="91.964" height="81.225"

const ArchOutline = ({
  fill = 'none',
  stroke = '#67bfd6',
  height = '100%',
  width = '100%',
  style = {},
  className = '',
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={style}
    viewBox="0 0 675.894 675.894"
  >
    <path
      id="Path_3245"
      data-name="Path 3245"
      d="M7160.048,773.078h254.987c0,230.986,187.921,418.907,418.907,418.907v254.987C7462.354,1446.972,7160.048,1144.664,7160.048,773.078Z"
      transform="translate(-7159.048 -772.078)"
      fill={fill}
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export default ArchOutline;
