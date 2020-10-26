/**
 *
 * Quantify SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="89.701" height="70.817"

const Quantify = ({
  fill = 'none',
  stroke = '#67bfd6',
  height = '100%',
  width = '100%',
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 89.701 70.817"
  >
    <g
      id="Group_323"
      data-name="Group 323"
      transform="translate(-3898.62 -2772.436)"
    >
      <g id="Group_322" data-name="Group 322">
        <g id="Group_317" data-name="Group 317">
          <g id="Group_316" data-name="Group 316">
            <path
              id="Path_5477"
              data-name="Path 5477"
              d="M3924.266,2797.347l-.037,14.348,14.058,8.116.037-14.349Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5478"
              data-name="Path 5478"
              d="M3938.248,2789.2l-13.966,8.117,14.058,8.116,13.966-8.116Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5479"
              data-name="Path 5479"
              d="M3938.355,2805.463l-.037,14.35,13.966-8.117.037-14.348Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
        <g id="Group_319" data-name="Group 319">
          <g id="Group_318" data-name="Group 318">
            <path
              id="Path_5480"
              data-name="Path 5480"
              d="M3910.269,2819.787l-.037,14.348,14.058,8.116.037-14.348Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5481"
              data-name="Path 5481"
              d="M3924.251,2811.644l-13.966,8.117,14.058,8.116,13.966-8.116Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5482"
              data-name="Path 5482"
              d="M3924.358,2827.9l-.037,14.349,13.966-8.117.037-14.348Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
        <g id="Group_321" data-name="Group 321">
          <g id="Group_320" data-name="Group 320">
            <path
              id="Path_5483"
              data-name="Path 5483"
              d="M3938.355,2819.787l-.037,14.348,14.058,8.116.037-14.348Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5484"
              data-name="Path 5484"
              d="M3952.338,2811.644l-13.967,8.117,14.058,8.116,13.966-8.116Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_5485"
              data-name="Path 5485"
              d="M3952.445,2827.9l-.037,14.349,13.966-8.117.037-14.348Z"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </g>
    <text
      id="_"
      data-name="$"
      transform="translate(0 33)"
      fill={fill}
      fontSize="41.831"
      fontFamily="Helvetica"
    >
      <tspan x="0" y="0">
        $
      </tspan>
    </text>
    <text
      id="_2"
      data-name=" €"
      transform="translate(46.701 33)"
      fill={fill}
      fontSize="41.831"
      fontFamily="Helvetica"
    >
      <tspan x="0" y="0" xmlSpace="preserve">
        {' '}
        €
      </tspan>
    </text>
  </svg>
);

export default Quantify;
