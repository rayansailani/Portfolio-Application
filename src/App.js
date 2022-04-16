import * as React from "react";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, Typography } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import NavBar from "./Components/Navbar";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "dark" && {
        main: "#0D1117",
      }),
      ...(mode === "light" && {
        main: "#FFFFFF",
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#0D1117",
        paper: "#0D1117",
      },
    }),

    ...(mode === "light" && {
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
    }),

    text: {
      ...(mode === "light"
        ? {
            primary: "black",
          }
        : {
            primary: "#fff",
          }),

      secondary: "#0969da",
    },
  },
});

const App = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl">
      <NavBar />
    </Container>
  );
};

const darkModeTheme = createTheme(getDesignTokens("dark"));

export default function DarkThemeWithCustomPalette() {
  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
