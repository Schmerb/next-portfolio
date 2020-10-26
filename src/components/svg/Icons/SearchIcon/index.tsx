/**
 *
 * SearchIcon SVG Icon
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

const SearchIcon = ({
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
    viewBox="0 0 19.095 19.079"
  >
    <g
      id="Group_39"
      data-name="Group 39"
      transform="translate(-5113.141 -135.665)"
    >
      <line
        id="Line_13"
        data-name="Line 13"
        x1="5.986"
        y1="6.145"
        transform="translate(5125.189 147.538)"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <g
        id="Ellipse_1"
        data-name="Ellipse 1"
        transform="translate(5113.141 135.665)"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <circle cx="7.156" cy="7.156" r="7.156" stroke="none" />
        <circle cx="7.156" cy="7.156" r="6.406" fill="none" />
      </g>
      <path
        id="Path_51"
        data-name="Path 51"
        d="M5120.3,145.934a3.113,3.113,0,0,1-3.113-3.113"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);

export default SearchIcon;
