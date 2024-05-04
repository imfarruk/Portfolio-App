import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';

// importing components
import Home from "../components/Home";
import Error from "../components/Error";
import Work from "../components/Work";
import Contact from "../components/Contact";
import About from "../components/About";
import Resume from "../components/Resume";

const AppRoute = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "calc(100vh - 105px)",
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
      </Routes>
    </Box>
  );
};

export default AppRoute;
