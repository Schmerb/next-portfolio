/**
 *
 * Act SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="91.964" height="81.225"

const Act = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 91.964 81.225">
    <g id="Group_328" data-name="Group 328" transform="translate(-3892.26 -3623.107)">
      <path id="Path_5486" data-name="Path 5486" d="M3936.98,3659.675h-20.208l8.7-35.568-32.214,43.656h20.208l-8.7,35.568Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <g id="Group_327" data-name="Group 327">
        <g id="Group_324" data-name="Group 324">
          <line id="Line_45" data-name="Line 45" x1="39.556" transform="translate(3929.425 3645.547)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path id="Path_5487" data-name="Path 5487" d="M3965.447,3650.647l5.234-5.1-5.234-5.165" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <g id="Group_325" data-name="Group 325">
          <line id="Line_46" data-name="Line 46" x1="37.266" transform="translate(3944.259 3663.752)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path id="Path_5488" data-name="Path 5488" d="M3977.99,3668.852l5.234-5.1-5.234-5.165" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <g id="Group_326" data-name="Group 326">
          <line id="Line_47" data-name="Line 47" x1="25.197" transform="translate(3929.425 3681.957)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path id="Path_5489" data-name="Path 5489" d="M3951.087,3687.057l5.234-5.1-5.234-5.165" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </g>
    </g>
  </svg>
);

export default Act;
