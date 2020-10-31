/**
 *
 *
 *    CopyToClipboard
 *
 *
 */

import React, { memo } from 'react';

const CopyToClipboard = ({
  width,
  height,
  style,
  fill,
}: CopyToClipboardProps) => {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 32 32">
      <title>copy to clipboard icon</title>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="0.9412"
        strokeMiterlimit="4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        d="M23.723 13.647v-3.294c0-1.035-0.847-1.882-1.882-1.882h-3.934c-0.395-1.092-1.431-1.882-2.654-1.882s-2.259 0.791-2.654 1.882h-3.934c-1.035 0-1.882 0.847-1.882 1.882v13.176c0 1.035 0.847 1.882 1.882 1.882h13.176c1.035 0 1.882-0.847 1.882-1.882v-3.294"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="0.9412"
        strokeMiterlimit="4"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        d="M15.253 8.471c0.518 0 0.941 0.424 0.941 0.941s-0.424 0.941-0.941 0.941-0.941-0.424-0.941-0.941 0.424-0.941 0.941-0.941z"
      ></path>
      <path d="M18.076 21.647h-9.412v-1.882h9.412zM15.253 17.882h-6.588v-1.882h6.588zM18.076 14.118h-9.412v-1.882h9.412zM25.688 18.815h-3.765v2.824l-4.706-4.706 4.706-4.706v2.824h3.765z"></path>
    </svg>
  );
};

export default memo(CopyToClipboard);

interface CopyToClipboardProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: any;
}
