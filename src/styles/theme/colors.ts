/**
 *
 * Theme Colors
 *
 *  */
import { css } from 'styled-components';

import { hex2rgb } from 'utils/helperFunctions/colors';

const Primary = '#262626';
const Secondary = '#BFBFBF';

const PrimaryBlue = '#2896f0';
const PrimaryGrey = '#262626';
const PrimaryPurple = '#a255ff';
const PrimaryBluePurple = '#651fff';
const Bone = '#e3dac9';

const Blue = '#2294d1'; //'rgb(34, 148, 209)';
const DarkBlue = '#566c73'; //'rgb(86, 108, 115)';
const Red = '#d37161'; // 'rgb(211, 113, 97)';
const GreyScale = '#dde2e4'; // 'rgb(221,226,228)';

const LightBlue = 'rgb(209,235,242)';

const OffWhite = '#f2f2f2';

export const Gradient = (
  angle = 'to right',
  colorA = Primary,
  colorB = Secondary,
) => css`
  background: ${colorA}; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    ${angle},
    ${colorA},
    ${colorB}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    ${angle},
    ${colorA},
    ${colorB}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

// default footer gradient
export const gradient = Gradient('to right');

export const colors = {
  // values get cached in hex2rgb
  alphaMod: (val: string, opacity: any) => hex2rgb(val, opacity),
  Primary,
  Secondary,
  Text: '#000',
  //
  OffWhite,
  Bone,
  //
  PrimaryBlue,
  PrimaryGrey,
  PrimaryPurple,
  PrimaryBluePurple,
  //
  Blue,
  DarkBlue,
  Red,
  GreyScale,
  // --------------
  Loader: Primary, // for hash spinner
  // --------------
  // brand colors
  Facebook: '#4469b0',
  Twitter: '#38A1F3',
  button: {
    Primary,
    Text: '#fff',
    Hover: hex2rgb(Primary, 0.75),
    SecondaryHover: hex2rgb(Secondary, 0.75),
    Active: '#555',
  },
  system: {
    ERROR_DARK: '#d8000c',
    ERROR: '#ffbaba',
    SUCCESS: '#d5edda',
    WARNING: '#fff3cd',
    GENERAL: '#cae6fe',
  },
};

export default colors;
