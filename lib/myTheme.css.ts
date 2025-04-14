import { createTheme } from "@vanilla-extract/css";

export const [myThemeClass, myThemeVars] = createTheme({
  color: {
    brand: 'blue',
    white: '#fff'
  },
  space: {
    small: '4px',
    medium: '8px',
  }
});