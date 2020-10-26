/**
 *
 * DashedArch SVG Icon
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

const DashedArch = ({
  fill = 'none',
  stroke = '#919396',
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
    className={className}
    viewBox="0 0 77.877 324.425"
  >
    <path
      id="Path_5473"
      data-name="Path 5473"
      d="M3853,2001.527a209.523,209.523,0,0,0-.539,322.885"
      transform="translate(-3775.756 -2000.756)"
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="2"
      strokeDasharray="10.24"
    />
  </svg>
);

export default DashedArch;
