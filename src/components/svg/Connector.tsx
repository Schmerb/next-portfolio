/**
 *
 * Connector SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
}

// width="91.964" height="81.225"

const Connector = ({
  fill = '#231f20',
  height = '100%',
  width = '100%',
  style = {},
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={style}
    viewBox="0 0 76.005 153.431"
  >
    <circle
      id="Ellipse_62"
      data-name="Ellipse 62"
      cx="4.426"
      cy="4.426"
      r="4.426"
      transform="translate(66.654 0.5)"
      fill="none"
      stroke={fill}
      strokeMiterlimit="10"
      strokeWidth="1"
    />
    <path
      id="Path_5627"
      data-name="Path 5627"
      d="M1049.638,4422.428l70.808-45.617v-98.042"
      transform="translate(-1049.368 -4269.417)"
      fill="none"
      stroke={fill}
      strokeMiterlimit="10"
      strokeWidth="1"
    />
  </svg>
);

export default Connector;
