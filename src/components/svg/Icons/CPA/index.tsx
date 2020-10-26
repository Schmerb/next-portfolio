/**
 *
 * CPA SVG Icon
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

const CPA = ({
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
    viewBox="0 0 23.681 18.261"
  >
    <g
      id="Group_1039"
      data-name="Group 1039"
      transform="translate(-176.852 -3272.669)"
    >
      <g id="Group_1038" data-name="Group 1038">
        <g id="Group_1037" data-name="Group 1037">
          <line
            id="Line_203"
            data-name="Line 203"
            y2="10.027"
            transform="translate(177.292 3273.109)"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.88"
          />
          <path
            id="Path_14662"
            data-name="Path 14662"
            d="M199.365,3280.619l.6-.708a.379.379,0,0,0,0-.494l-.606-.709a.381.381,0,0,1,0-.494l.606-.709a.38.38,0,0,0,0-.495l-.817-.956H180.328v-.006c-.039,0-.077.006-.116.006h0a2.92,2.92,0,0,1-2.92-2.92v14.444a2.912,2.912,0,0,0,2.912,2.912h18.949l.817-.955a.379.379,0,0,0,0-.494l-.606-.709a.382.382,0,0,1,0-.494l.606-.709a.38.38,0,0,0,0-.495l-.606-.709a.38.38,0,0,1,0-.494l.6-.708a.379.379,0,0,0,0-.494l-.606-.709a.382.382,0,0,1,0-.494l.606-.709a.38.38,0,0,0,0-.495l-.606-.709A.38.38,0,0,1,199.365,3280.619Z"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.88"
          />
          <path
            id="Path_14663"
            data-name="Path 14663"
            d="M189.484,3290.792"
            fill="none"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.173"
          />
        </g>
      </g>
      <text
        id="CPA"
        transform="translate(195.917 3286.186)"
        fontSize="9.352"
        fontFamily="Helvetica"
      >
        <tspan x="-18.54" y="0">
          CPA
        </tspan>
      </text>
    </g>
  </svg>
);

export default CPA;
