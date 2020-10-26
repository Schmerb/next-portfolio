/**
 *
 * Theme Colors
 *
 *  */
import { css } from 'styled-components';

import { hex2rgb } from 'utils/helperFunctions/colors';

const cornflowerBlue = '#6495ED';
const rebeccaPurple = '#663399';

const Primary = '#65bdd3'; // same as secondary for now
const PrimaryLight = '#d1ecf3';
const PrimaryExtraLight = '#e1f3f7';
const Blue1 = '#68bfd5';
const Blue2 = '#4a8b9d';
const Blue3 = '#316271';
const Secondary = rebeccaPurple;

const LightBlue = 'rgb(209,235,242)';

const OffWhite = '#f9f9f9';
const OffWhiteDark = '#f4f4f4';
const Grey = '#666666';
const LightGrey = '#e5e5e5';
const LightGrey2 = '#e6e6e6';

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
  PrimaryLight,
  PrimaryHover: '#52dae3',
  Secondary,
  Text: '#000',
  //
  Blue1,
  Blue2,
  Blue3,
  LightBlue,
  //
  OffWhite,
  OffWhiteDark,
  Grey,
  LightGrey,
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
