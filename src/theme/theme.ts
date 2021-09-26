import { createMuiTheme } from "@material-ui/core/styles";
import { Palette, ThemeVariant } from "../models";



export const Colors: any = {
  lightYellow: "#f9ed20",
  darkYellow: "#fbb716",
  orange: "#EA5D1A",
  lightRed: "#ff7d7d",
  red: "#eb2326",
  lightGreen: "#9fb9ae",
  medGreen: "#13ff9d",
  darkGreen: "#15a851",
  darkBlue: "#003e51",
  blue: "#003c4a",
  paleGrey: "#f5f5f5",
  veryLightGrey: "#ededed",
  lighterGrey: "#d1d1d1",
  grey: "#d5d5d5",
  purple: "#7510F7",
  lightGrey: "#a3a3a3",
  mediumGray: "#494949",
  darkGrey: "#242221",
  darkerGrey: "#1b1b1b",
  white: "#ffffff",
  black: "#000000",
  lightPeach: "#dbd3cb",
  darkPeach: "#686461",
  copperGold: "#95572b",
};

/* Theme Color Palette */
export const ColorPalette: Palette = {
  ...Colors,

  /* Base Colors */
  primary: Colors.purple,
  secondary: Colors.medGreen,

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
