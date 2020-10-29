/**
 *
 *
 *   WorkFlow Tools
 *
 *
 */

import { v4 as uuidv4 } from 'uuid';

import logos from 'utils/data/logos';
import { ToolType } from 'utils/data/types';

export const tools: ToolType[] = [
  {
    id: uuidv4(),
    imgSrc: logos.vscode.imgSrc,
    href: logos.vscode.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.sketch.imgSrc,
    href: logos.sketch.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.gulp.imgSrc,
    href: logos.gulp.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.bsync.imgSrc,
    href: logos.bsync.href,
  },
  {
    id: uuidv4(),
    imgSrc: logos.git.imgSrc,
    href: logos.git.href,
  },
];

export default tools;
