import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import { ThemeProvider, useTheme, createTheme,styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
// import { AppColors } from "./color/AppColors";
// import Link from "@mui/material/Link";
const pages = [
  { label: "home", id: "home" },
  { label: "about", id: "about" },
  { label: "work", id: "work" },
  { label: "contact", id: "contact" },
];

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 82,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(42px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ check, change }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (pageUrl) => {
    navigate(pageUrl);
    setAnchorElNav(null);
  };
  const theme = useTheme();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();

  return (
    <>
      {/* <FormGroup
        sx={{
          display: "flex",
          flexDirection: {xs:"column",sm:"row"},
          justifyContent: "space-between",
          marginRight: "20px",
          alignItems: {xs:"flex-end",sm:"center"},
        }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={check}
              onChange={change}
              aria-label="login switch"
              sx={{ ml: 3, display: { xs: "flex", md: "flex" } }}
            />
          }
          label={theme.palette.mode === "light" ? "Dark Mode" : "Light Mode"}
        />

        <Typography>
          DATE ⌚{date}:{month}:{year}
        </Typography>
      </FormGroup>

      <AppBar
        position="static"
       sx={{opacity:1,color:"red"}}
        
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 10,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                FARHAN KHAN
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  marginTop: 1,
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page,i) => (
                  <MenuItem
                    sx={{
                      width: 400,
                      background: "inherit",
                      textTransform: "uppercase",
                    }}
                    key={i}
                    onClick={() => handleCloseNavMenu(`/${page.id}`)}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FARHAN HAIDER
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page,i) => (
                <Button
                  key={i}
                  // to={`${page.id}`}
                  onClick={() => handleCloseNavMenu(`${page.id}`)}
                  sx={{
                    ml: 5,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}

<Box sx={{ flexGrow: 1 }}>
      <FormGroup
      sx={{
        display: "flex",
        flexDirection: {xs:"column",sm:"row"},
        justifyContent: "space-between",
        alignItems: {xs:"flex-end",sm:"center"},
        px:2
      }}>
      <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} onChange={change} checked={check==='dark'} />}
          label={theme.palette.mode === "light" ? "Light Mode" : "Dark Mode"}
        />
        <Typography>
          DATE ⌚{date}:{month}:{year}
        </Typography>
      </FormGroup>
      <AppBar
        position="sticky"    
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "white" }}
              >
                FARHAN HAIDER
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  marginTop: 1,
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page,i) => (
                  <MenuItem
                    sx={{
                      width: 400,
                      background: "inherit",
                      textTransform: "uppercase",
                    }}
                    key={i}
                    onClick={() => handleCloseNavMenu(`/${page.id}`)}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FARHAN HAIDER
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page,i) => (
                <Button
                  key={i}
                  // to={`${page.id}`}
                  onClick={() => handleCloseNavMenu(`${page.id}`)}
                  sx={{
                    ml: 5,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
</Box>
    </>
  );
};
export default Navbar;