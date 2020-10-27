/**
 *
 * Theme types
 *
 *  */

export interface ColorProps {
  alphaMod: (val: string, opacity: any) => string;
  Primary: string;
  Secondary: string;
  Text: string;
  //
  OffWhite: string;
  //
  PrimaryBlue: string;
  PrimaryGrey: string;
  Blue: string;
  DarkBlue: string;
  Red: string;
  GreyScale: string;
  // brands
  Facebook: string;
  Twitter: string;
  button: {
    Primary: string;
    Text: string;
    Hover: string;
    SecondaryHover: string;
    Active: string;
  };
  system: {
    ERROR_DARK: string;
    ERROR: string;
    SUCCESS: string;
    WARNING: string;
    GENERAL: string;
  };
}

export interface ThemeProps {
  colors: ColorProps;
  styles: {
    Gradient: (angle?: string, colorA?: string, colorB?: string) => any;
    gradient: any;
    grow: any;
    middle: any;
    boxShadows: any;
    inputActive: any;
    ellipsisMask: any;
  };
  breakpoints: {
    desktop: number;
    tablet: number;
    mobile: number;
    smallphones: number;
  };
  media: {
    min: object;
    max: object;
    MAX_WIDTH: number;
  };
}
