import { React, useState } from "react";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Container, CssBaseline, Typography } from "@mui/material";
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
  typography: {
    fontFamily: ["Open Sans", "Roboto", "Helvetica"].join(","),
  },
});

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeTheme = createTheme(
    getDesignTokens(darkMode ? "dark" : "light")
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      return !prev;
    });
  };

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: 0, padding: "0 !important" }}>
        <NavBar toggleDarkMode={toggleDarkMode} />
      </Container>
    </ThemeProvider>
  );
};
export default App;
