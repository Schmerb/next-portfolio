/**
 *
 * CancelCircle SVG Icon
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

const CancelCircle = ({
  fill = 'none',
  stroke = '#000',
  height = '100%',
  width = '100%',
  style = {},
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={style}
    viewBox="0 0 23.715 23.715"
  >
    <g
      id="Group_1036"
      data-name="Group 1036"
      transform="translate(-276.255 -3270.093)"
    >
      <circle
        id="Ellipse_164"
        data-name="Ellipse 164"
        cx="11.417"
        cy="11.417"
        r="11.417"
        transform="translate(276.695 3270.533)"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.88"
      />
      <g id="Group_1035" data-name="Group 1035">
        <g id="Group_1034" data-name="Group 1034">
          <line
            id="Line_201"
            data-name="Line 201"
            x1="9.485"
            y2="9.485"
            transform="translate(283.37 3277.208)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.88"
          />
          <line
            id="Line_202"
            data-name="Line 202"
            x1="9.485"
            y1="9.485"
            transform="translate(283.37 3277.208)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.88"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default CancelCircle;
