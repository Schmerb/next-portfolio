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
    ...logos.vscode,
  },
  {
    id: uuidv4(),
    ...logos.sketch,
  },
  {
    id: uuidv4(),
    ...logos.gulp,
  },
  {
    id: uuidv4(),
    ...logos.bsync,
  },
  {
    id: uuidv4(),
    ...logos.git,
  },
  {
    id: uuidv4(),
    ...logos.spotify,
    style: { width: 'auto', height: '90px' },
  },
];

export default tools;
