import { createMuiTheme } from "@material-ui/core/styles";
import { Palette, ThemeVariant } from "../models";



export const Colors: any = {
  lightYellow: '#f9ed20',
  darkYellow: '#fbb716',
  orange: '#EA5D1A',
  purple: "#7510F7",
  lightFluorGreen: '#b8fde0',
  fluorGreen: "#13ff9d",
  lightRed: '#ff7d7d',
  red: '#eb2326',
  lightGreen: '#9fb9ae',
  medGreen: '#50b64a',
  darkGreen: '#15a851',
  darkBlue: '#003e51',
  blue: '#003c4a',
  paleGrey: '#f5f5f5',
  veryLightGrey: '#ededed',
  lighterGrey: '#d1d1d1',
  grey: '#d5d5d5',
  venusGrey: '#878284',
  lightGrey: '#a3a3a3',
  mediumGray: '#494949',
  darkGrey: '#242221',
  darkerGrey: '#1b1b1b',
  doveGrey: '#666',
  white: '#ffffff',
  black: '#0f0f0f',
  pureBlack: '#000',
  lightPeach: '#dbd3cb',
  darkPeach: '#686461',
  copperGold: '#95572b',
  ironsideGrey: '#747468',
  temptress: '#190F14',
  suvaGrey: '#98928F',
  narvik: '#ECE9E1',
  albescentWhite: '#E1D7CD',
  jonGrey: '#473f43',
  shadyLadyGrey: '#a29fa1',
  zambezi: '#695F5E',
  stormGrey: '#75787B',
  galleryGrey: '#dedad4',
  desertStorm: '#F8F8F6',
};

/* Theme Color Palette */
export const ColorPalette: Palette = {
  ...Colors,

  /* Base Colors */
  primary: Colors.purple,
  secondary: Colors.lightFluorGreen,

  /* Warning Colors */
  error: Colors.lightRed,
  success: Colors.medGreen,
};

export const theme=({darkMode} : ThemeVariant) => createMuiTheme({
  palette: {
    primary: {
      main: ColorPalette.primary,
    },
    secondary: {
      main: ColorPalette.secondary,
    },
    type: darkMode ? 'dark' : 'light',
  },
  typography: {
    fontFamily: "Open Sans, Roboto",
  },
});
