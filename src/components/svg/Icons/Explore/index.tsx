/**
 *
 * Explore SVG Icon
 *
 *  */

import React from 'react';

interface ExploreProps {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

// width="92.416" height="81.639"

const Explore = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: ExploreProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 92.416 81.639">
    <g id="Group_329" data-name="Group 329" transform="translate(-3899.698 -1908.219)">
      <path id="Path_5490" data-name="Path 5490" d="M3921.905,1947.353l11.981-5.453,3.779-18.769" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path id="Path_5491" data-name="Path 5491" d="M3905.128,1978.364v-23.375l9.924-4.517" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_49" data-name="Ellipse 49" cx="26.641" cy="26.641" r="26.641" transform="translate(3911.476 1909.219)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <rect id="Rectangle_105" data-name="Rectangle 105" width="6.539" height="29.175" transform="translate(3954.626 1956.994) rotate(-45)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_50" data-name="Ellipse 50" cx="20.47" cy="20.47" r="20.47" transform="translate(3917.647 1915.391)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path id="Rectangle_106" data-name="Rectangle 106" d="M0,0H9.615a0,0,0,0,1,0,0V24.367a4.808,4.808,0,0,1-4.808,4.808h0A4.808,4.808,0,0,1,0,24.367V0A0,0,0,0,1,0,0Z" transform="matrix(0.707, -0.707, 0.707, 0.707, 3963.271, 1967.814)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_51" data-name="Ellipse 51" cx="4.43" cy="4.43" r="4.43" transform="translate(3900.698 1973.934)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_52" data-name="Ellipse 52" cx="4.43" cy="4.43" r="4.43" transform="translate(3900.698 1950.559)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_53" data-name="Ellipse 53" cx="6.651" cy="6.651" r="6.651" transform="translate(3927.235 1935.25)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle id="Ellipse_54" data-name="Ellipse 54" cx="3.949" cy="3.949" r="3.949" transform="translate(3933.716 1919.182)" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </g>
  </svg>
);

export default Explore;
