import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1e464a",
    },
    secondary: {
      main: "#494c7d",
    },
    background: {
      default: "#121212", // Custom background color for dark mode
    },
    color: {
      default: "#ffffff",
    },
    typography: {
      color: "#ffffff",
    },
    button: {
      color: "#ffffff",
      bg: "#121212",
    },
    card: {
      default: "#121212",
    },
    typewriter: {
      default: green[500],
    },
    animation: {
      color: "#ffffff",
    },
  },
});

export default darkTheme;
