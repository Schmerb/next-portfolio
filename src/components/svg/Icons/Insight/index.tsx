/**
 *
 * Insight SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="54.739" height="81.225"

const Insight = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 54.739 81.225">
    <g id="Group_330" data-name="Group 330" transform="translate(-3910.873 -3194.385)">
      <path id="Path_5492" data-name="Path 5492" d="M3964.611,3221.754a26.369,26.369,0,1,0-42.908,20.537,10.685,10.685,0,0,1,3.9,8.339v.016a12.641,12.641,0,0,0,12.641,12.64h0a12.64,12.64,0,0,0,12.64-12.64v-.02a11.056,11.056,0,0,1,4.114-8.511A26.313,26.313,0,0,0,3964.611,3221.754Z" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path id="Path_5493" data-name="Path 5493" d="M3927.947,3265.427a14.55,14.55,0,0,0,20.59,0" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path id="Path_5494" data-name="Path 5494" d="M3944.595,3268.257a6.353,6.353,0,0,1-12.706,0" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <line id="Line_53" data-name="Line 53" y1="17.273" transform="translate(3938.242 3234.255)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path id="Path_5495" data-name="Path 5495" d="M3950.3,3225.21l-4.1,4.1-4.015-4.015-3.772,8.956-3.839-9.022-4.28,4.28-4.1-4.1" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </g>
  </svg>

);

export default Insight;
