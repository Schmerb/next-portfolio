/**
 *
 * PeopleGear SVG Icon
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

const PeopleGear = ({
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
    viewBox="0 0 23.707 24.486"
  >
    <g
      id="Group_1026"
      data-name="Group 1026"
      transform="translate(-276.259 -3119.356)"
    >
      <g id="Group_1024" data-name="Group 1024">
        <g id="Group_1021" data-name="Group 1021">
          <g id="Group_1020" data-name="Group 1020">
            <path
              id="Path_14656"
              data-name="Path 14656"
              d="M286.6,3134.118a6.386,6.386,0,0,0-1.576-.739,3.974,3.974,0,1,0-3.741-.023,6.417,6.417,0,0,0-4.583,6.149h8.907"
              fill="none"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.88"
            />
          </g>
        </g>
        <g id="Group_1023" data-name="Group 1023">
          <g id="Group_1022" data-name="Group 1022">
            <path
              id="Path_14657"
              data-name="Path 14657"
              d="M297.537,3131.624a6.431,6.431,0,0,0-4.253-4.337,3.972,3.972,0,1,0-3.741-.022,6.4,6.4,0,0,0-2.557,1.472"
              fill="none"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.88"
            />
          </g>
        </g>
      </g>
      <g id="Group_1025" data-name="Group 1025">
        <path
          id="Path_14658"
          data-name="Path 14658"
          d="M298.409,3136.5a4.707,4.707,0,0,0-.513-1.239l.472-1.107-1.037-1.037-1.107.472a4.67,4.67,0,0,0-1.24-.513l-.449-1.117h-1.466l-.449,1.117a4.67,4.67,0,0,0-1.24.513l-1.107-.472-1.037,1.037.472,1.107a4.706,4.706,0,0,0-.513,1.239l-1.117.449v1.467l1.117.449a4.733,4.733,0,0,0,.513,1.24l-.472,1.107,1.037,1.036,1.107-.472a4.7,4.7,0,0,0,1.24.514l.449,1.116h1.466l.449-1.116a4.7,4.7,0,0,0,1.24-.514l1.107.472,1.037-1.036-.472-1.107a4.734,4.734,0,0,0,.513-1.24l1.117-.449v-1.467Zm-4.607,3.749a2.567,2.567,0,1,1,2.567-2.566A2.567,2.567,0,0,1,293.8,3140.245Z"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.88"
        />
      </g>
    </g>
  </svg>
);

export default PeopleGear;
