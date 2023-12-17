import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
      color: '#0d8d3e',
  },
  palette: {
    primary: {
      main: '#0d8d3e', // Set your desired primary color
    },
  },
  // components: {
  //   MuiTab: {
  //     styleOverrides: {
  //       textColorPrimary: {
  //         color: '#0d8d3e', // Set your desired text color
  //       },
  //     },
  //   },
  // },
  // Other theme configurations...
});