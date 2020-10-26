/**
 *
 * Arch SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  height?: number | string;
  width?: number | string;
}

//   width="673.894" height="673.894"

const Arch = ({ fill = '#67bfd6', height = '100%', width = '100%' }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 673.894 673.894"
  >
    <path
      id="Path_5551"
      data-name="Path 5551"
      d="M832.644,773.078h254.987c0,230.986,187.921,418.907,418.907,418.907v254.987C1134.95,1446.972,832.644,1144.664,832.644,773.078Z"
      transform="translate(-832.644 -773.078)"
      fill={fill}
    />
  </svg>
);

export default Arch;
