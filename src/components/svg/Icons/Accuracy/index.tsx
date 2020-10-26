/**
 *
 * Accuracy SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

//  width="98.011" height="98.011"

const Accuracy = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 98.011 98.011">
    <g id="Group_466" data-name="Group 466" transform="translate(-1262.573 -5218.044)">
      <g id="Group_465" data-name="Group 465">
        <circle id="Ellipse_56" data-name="Ellipse 56" cx="6.753" cy="6.753" r="6.753" transform="translate(1304.825 5260.297)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Group_464" data-name="Group 464">
          <line id="Line_133" data-name="Line 133" y2="96.011" transform="translate(1311.578 5219.044)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line id="Line_134" data-name="Line 134" x2="36.6" transform="translate(1322.984 5267.049)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line id="Line_135" data-name="Line 135" x2="48.005" transform="translate(1263.573 5267.049)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <path id="Path_5606" data-name="Path 5606" d="M1335.074,5275.364a24.919,24.919,0,1,1-23.5-33.231" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default Accuracy;
