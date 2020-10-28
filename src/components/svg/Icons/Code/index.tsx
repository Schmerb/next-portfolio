/**
 *
 * CodeIcon SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  height?: number | string;
  width?: number | string;
  style?: any;
}

//  width="75.069" height="88.732"

const CodeIcon = ({
  fill = 'none',
  height = '100%',
  width = '100%',
  style = {},
}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    style={style}
    viewBox="0 0 100 100"
  >
    <path
      fill={fill}
      d="M34.784 29.594a1.503 1.503 0 0 0-2.121.061l-18.234 19.31a1.5 1.5 0 0 0 0 2.06l18.234 19.32a1.496 1.496 0 0 0 2.12.062 1.5 1.5 0 0 0 .062-2.12L17.582 49.995l17.263-18.28a1.502 1.502 0 0 0-.061-2.121zm50.787 19.384L67.337 29.655a1.5 1.5 0 1 0-2.182 2.058l17.263 18.293-17.263 18.279a1.502 1.502 0 0 0 1.091 2.53c.398 0 .796-.157 1.091-.47l18.234-19.309a1.498 1.498 0 0 0 0-2.058zm-27.717-19.44a1.503 1.503 0 0 0-1.938.863L41.283 68.526a1.5 1.5 0 0 0 2.8 1.075l14.633-38.125a1.499 1.499 0 0 0-.862-1.938z"
    />
  </svg>
);

export default CodeIcon;
