import { useState, lazy, Suspense, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import AppRoute from "./routes/appRoute";

// importing components
import Navbar from "./components/Navbar";
import BackgroundAnim from "./components/BackgroundAnim";

const App = () => {
  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    const fetchMode = async () => {
      let modes = await localStorage.getItem("portfolioMode");
      setDarkMode(modes);
    };
    fetchMode();
  }, []);

  const theme = darkMode === "dark" ? darkTheme : lightTheme;

  const themeChange = (e) => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);
    localStorage.setItem("portfolioMode", newMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundAnim />
      <Navbar check={darkMode} change={(e) => themeChange()} />
      <AppRoute />
    </ThemeProvider>
  );
};

export default App;
