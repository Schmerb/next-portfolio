/**
 *
 * Cost SVG Icon
 *
 *  */

import React from 'react';

interface Props {
  fill?: string;
  stroke?: string;
  height?: number | string;
  width?: number | string;
}

//  width="88.732" height="88.732"

const Cost = ({
  fill = 'none', stroke = '#67bfd6', height = '100%', width = '100%',
}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 88.732 88.732">
    <g id="Group_462" data-name="Group 462" transform="translate(-915.635 -5227.323)">
      <g id="Group_460" data-name="Group 460">
        <g id="Group_459" data-name="Group 459">
          <g id="Group_457" data-name="Group 457">
            <path id="Path_5600" data-name="Path 5600" d="M960,5253.5" fill={fill} stroke={stroke} strokeMiterlimit="10" strokeWidth="2" />
            <path id="Path_5601" data-name="Path 5601" d="M960,5238.115a33.33,33.33,0,0,1,22.73,8.865l-4.134,4.135a1.4,1.4,0,0,0,.989,2.388h15.388a1.4,1.4,0,0,0,1.4-1.4v-15.388a1.4,1.4,0,0,0-2.387-.989l-4.325,4.324a43.366,43.366,0,0,0-73.025,31.638" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path id="Path_5602" data-name="Path 5602" d="M1000.569,5271.689" fill={fill} stroke={stroke} strokeMiterlimit="10" strokeWidth="2" />
          </g>
          <g id="Group_458" data-name="Group 458">
            <path id="Path_5603" data-name="Path 5603" d="M960,5289.875" fill={fill} stroke={stroke} strokeMiterlimit="10" strokeWidth="2" />
            <path id="Path_5604" data-name="Path 5604" d="M960,5305.263a33.33,33.33,0,0,1-22.73-8.865l4.134-4.135a1.4,1.4,0,0,0-.989-2.388H925.028a1.4,1.4,0,0,0-1.4,1.4v15.388a1.4,1.4,0,0,0,2.388.989l4.325-4.325a43.365,43.365,0,0,0,73.025-31.637" fill={fill} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </g>
      <g id="Group_461" data-name="Group 461">
        <path id="Path_5605" data-name="Path 5605" d="M952.569,5282.406c-.222-.148-.235-.321-.037-.518l.776-1.035c.123-.148.3-.16.517-.036a11.522,11.522,0,0,0,5.654,1.884v-10.237a8.128,8.128,0,0,1-4.859-2.253,6.27,6.27,0,0,1-1.608-4.435,6.787,6.787,0,0,1,1.792-4.878,6.938,6.938,0,0,1,4.675-2.106v-1.922a.327.327,0,0,1,.37-.369h.7a.326.326,0,0,1,.369.369v1.922a11.045,11.045,0,0,1,5.359,1.663q.369.222.111.517l-.629,1a.348.348,0,0,1-.517.11,10.741,10.741,0,0,0-4.324-1.367v9.9q6.689.961,6.689,6.726a6.817,6.817,0,0,1-6.689,7.206v1.958a.327.327,0,0,1-.369.37h-.7a.327.327,0,0,1-.37-.37v-1.884A12.214,12.214,0,0,1,952.569,5282.406Zm6.91-11.974v-9.719a4.865,4.865,0,0,0-3.289,1.515,4.785,4.785,0,0,0-1.219,3.363,4.669,4.669,0,0,0,1.034,3.16A5.982,5.982,0,0,0,959.479,5270.432Zm1.441,12.232a5.413,5.413,0,0,0,3.474-1.608,5.071,5.071,0,0,0,1.257-3.6q0-4.028-4.731-4.767Z" fill="#67bfd6" />
      </g>
    </g>
  </svg>
);

export default Cost;
