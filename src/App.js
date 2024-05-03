import { useState, lazy, Suspense, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

// importing css files
import "./App.css";
import Loading from "./components/Loading";

// import components
const Navbar = lazy(async () => await import("./components/Navbar"));
const Home = lazy(async () => await import("./components/Home"));
const Error = lazy(async () => await import("./components/Error"));
const BackgroundAnim = lazy(
  async () => await import("./components/BackgroundAnim")
);
const Work = lazy(async () => await import("./components/Work"));
const Contact = lazy(async () => await import("./components/Contact"));
const About = lazy(async () => await import("./components/About"));
const Resume = lazy(async () => await import("./components/Resume"));

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <CssBaseline />
          <Box>
            <BackgroundAnim />

            <Navbar check={darkMode} change={(e) => themeChange()} />
            <Box
              sx={{
                // Adjust margin top based on header height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "calc(100vh - 105px)", // Calculate height minus header height
              }}
            >
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/work" element={<Work />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/about/resume" element={<Resume />} />
                <Route path="*" element={<Error />} />
                <Route path="/loading" element={<Loading />} />
              </Routes>
            </Box>
          </Box>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
