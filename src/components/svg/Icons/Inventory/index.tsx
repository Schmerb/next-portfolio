/**
 *
 * Inventory SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="73.896" height="80.898"

const Inventory = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 73.896 80.898">
    <g id="Group_335" data-name="Group 335" transform="translate(-3909.994 -2337.268)">
      <g id="Group_333" data-name="Group 333">
        <g id="Group_332" data-name="Group 332">
          <g id="Group_331" data-name="Group 331">
            <path id="Path_5496" data-name="Path 5496" d="M3966.78,2384.431v32.735h-55.787v-78.9h34.255l21.532,21.205V2377" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path id="Path_5497" data-name="Path 5497" d="M3966.78,2359.469l-21.533-21.2v19.481a1.72,1.72,0,0,0,1.72,1.72Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <line id="Line_54" data-name="Line 54" x2="23.489" transform="translate(3916.703 2359.469)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_55" data-name="Line 55" x2="23.489" transform="translate(3938.071 2409.714)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_56" data-name="Line 56" x2="44.368" transform="translate(3916.703 2369.518)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_57" data-name="Line 57" x2="37.191" transform="translate(3916.866 2379.567)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_58" data-name="Line 58" x2="29.198" transform="translate(3917.029 2389.616)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <line id="Line_59" data-name="Line 59" x2="44.368" transform="translate(3917.192 2399.665)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
      <path id="Path_5498" data-name="Path 5498" d="M3977.042,2368.583l4-4,1.845,1.845-4,4" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <g id="Group_334" data-name="Group 334">
        <rect id="Rectangle_107" data-name="Rectangle 107" width="5.22" height="28.709" transform="translate(3959.51 2391.652) rotate(-135)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path id="Path_5499" data-name="Path 5499" d="M3953.067,2394.4l6.426-2.735-3.691-3.691Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </g>
  </svg>

);

export default Inventory;
