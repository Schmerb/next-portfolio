/**
 *
 * Number SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
  number?: number;
}

// width="73.896" height="80.898"

const Number = ({
  fill = 'none',
  stroke = '#000',
  height = '100%',
  width = '100%',
  style = {},
  number = 1,
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
    style={style}
    viewBox="0 0 26.714 44.714"
  >
    <text
      id={`_${number}`}
      data-name={number}
      transform="translate(13.357 34.357)"
      stroke={stroke}
      strokeWidth="0.357"
      fontSize="43.583"
      fontFamily="Helvetica"
      fill={fill}
    >
      <tspan x="-12.119" y="0">
        {number}
      </tspan>
    </text>
  </svg>
);

export default Number;
