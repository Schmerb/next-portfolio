/**
 *
 * Agility SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="88.764" height="79.348"
// width={width} height={height}

const Agility = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 88.764 79.348">
    <g id="Group_474" data-name="Group 474" transform="translate(-1089.831 -5589.017)">
      <path id="Path_5613" data-name="Path 5613" d="M1092.5,5620.024l6.438,6.606,6.52-6.606" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <g id="Group_473" data-name="Group 473">
        <path id="Path_5614" data-name="Path 5614" d="M1098.977,5625.245a35.227,35.227,0,1,1,35.227,35.227" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Group_472" data-name="Group 472">
          <path id="Path_5615" data-name="Path 5615" d="M1153.085,5620.4a19.378,19.378,0,0,0-2.1-5.079l1.933-4.537-4.249-4.249-4.537,1.933a19.356,19.356,0,0,0-5.079-2.1l-1.842-4.577H1131.2l-1.842,4.577a19.348,19.348,0,0,0-5.078,2.1l-4.537-1.933-4.249,4.249,1.933,4.537a19.353,19.353,0,0,0-2.1,5.078l-4.576,1.842v6.009l4.576,1.842a19.366,19.366,0,0,0,2.1,5.079l-1.933,4.537,4.249,4.248,4.537-1.933a19.341,19.341,0,0,0,5.078,2.1l1.842,4.575h6.008l1.842-4.575a19.351,19.351,0,0,0,5.079-2.1l4.537,1.933,4.249-4.248-1.933-4.537a19.432,19.432,0,0,0,2.1-5.079l4.575-1.842v-6.009Zm-18.881,15.365a10.519,10.519,0,1,1,10.519-10.519A10.519,10.519,0,0,1,1134.2,5635.764Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <line id="Line_138" data-name="Line 138" x1="43.374" transform="translate(1090.831 5660.472)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_139" data-name="Line 139" x1="19.13" transform="translate(1157.66 5660.472)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path id="Path_5616" data-name="Path 5616" d="M1170.989,5666.951l6.606-6.437-6.606-6.52" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default Agility;
