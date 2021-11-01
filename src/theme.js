import { createTheme } from "@mui/material/styles";

const lightPalettes = {
  primary: {
    main: "#153e70",
  },
  secondary: {
    main: "#257eaa",
  },
  // used for the card background
  tertiary: {
    main: "#ede9e0",
  },
  info: {
    main: "#03a9f4",
    contrastText: "white",
  },
};

const darkPalettes = {
  primary: {
    main: "#03a9f4",
  },
  secondary: {
    main: "#03a9f4",
  },
  // used for the card background
  tertiary: {
    main: "#ede9e0",
  },
  info: {
    main: "#03a9f4",
    contrastText: "white",
  },
};

export const theme = createTheme({
  palette: {
    mode: "light",
    ...lightPalettes,
  },
});

export const modeTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "dark" ? darkPalettes : lightPalettes),
    },
  });
