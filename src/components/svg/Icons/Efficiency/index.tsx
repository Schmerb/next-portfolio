/**
 *
 * Efficiency SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="85.885" height="70.148"
// width={width} height={height}

const Efficiency = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 85.885 70.148">
    <g id="Group_481" data-name="Group 481" transform="translate(-736.215 -5593.41)">
      <g id="Group_475" data-name="Group 475">
        <path id="Path_5617" data-name="Path 5617" d="M737.629,5630.515l18.235-18.234,10.979,10.979,17.765-17.765,12.638,12.638,22.723-22.723" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path id="Path_5618" data-name="Path 5618" d="M820.981,5603.633l.119-9.224-9.282.061" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <g id="Group_476" data-name="Group 476">
        <path id="Path_5619" data-name="Path 5619" d="M748.466,5662.558a3,3,0,0,1-3-3V5635.3a3,3,0,0,1,6,0v24.255A3,3,0,0,1,748.466,5662.558Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <g id="Group_477" data-name="Group 477">
        <path id="Path_5620" data-name="Path 5620" d="M765.161,5662.558a3,3,0,0,1-3-3v-21.53a3,3,0,0,1,6,0v21.53A3,3,0,0,1,765.161,5662.558Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <g id="Group_478" data-name="Group 478">
        <path id="Path_5621" data-name="Path 5621" d="M781.856,5662.558a3,3,0,0,1-3-3v-38.445a3,3,0,0,1,6,0v38.445A3,3,0,0,1,781.856,5662.558Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <g id="Group_479" data-name="Group 479">
        <path id="Path_5622" data-name="Path 5622" d="M798.551,5662.558a3,3,0,0,1-3-3v-29.043a3,3,0,0,1,6,0v29.043A3,3,0,0,1,798.551,5662.558Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <g id="Group_480" data-name="Group 480">
        <path id="Path_5623" data-name="Path 5623" d="M815.246,5662.558a3,3,0,0,1-3-3v-46.341a3,3,0,0,1,6,0v46.341A3,3,0,0,1,815.246,5662.558Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </g>
  </svg>
);

export default Efficiency;
