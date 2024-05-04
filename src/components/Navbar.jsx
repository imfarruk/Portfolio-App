import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../css/muiStyle";
import { useTheme } from '@mui/material/styles';

const pages1 = ["home", "about", "work", "contact"]

const Navbar = ({ check, change }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };
  const theme = useTheme();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = new Date().toLocaleString("en-US", { month: "short" });
  let year = newDate.getFullYear();

  return (
    <>
      <Box sx={{ flexGrow: 1, px: 1 }}>
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { sm: "space-between", xs: "flex-end" },
            marginRight: "16px",
            alignItems: { xs: "flex-end", sm: "center" },
          }}
        >
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} onChange={change} checked={check === 'dark'} />}
            label={theme.palette.mode === "light" ? "Light Mode" : "Dark Mode"}
            sx={{ mr: { xs: 0, sm: 1 }, ml: '2px' }}
          />

          <Typography>
            DATE ⌚ {date}:{month}:{year}
          </Typography>
        </FormGroup>
      </Box>

      <AppBar
        position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* small screen */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                flexGrow: 1, display: { xs: "flex", md: "none" },
                textDecoration: "none", color: "inherit", fontWeight: 600,
                letterSpacing: '.2rem',
                justifyContent: 'center'
              }}
            >
              FARHAN HAIDER
            </Typography>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "none" }
              }}
            >
              <IconButton
                size="large"
                aria-label="menu list"
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
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  mt: 2,
                  display: { xs: "flex", md: "none" },
                }}
              >
                {pages1.map((page) => (
                  <MenuItem
                    sx={{
                      width: 400,
                      background: "inherit",
                      textTransform: "uppercase",
                    }}
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(page)
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                display: { xs: "none", md: "flex" },
                textDecoration: "none", color: "white",
                letterSpacing: '.2rem',
              }}
            >
              FARHAN HAIDER
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages1.map((page) => (
                <Button
                  key={page}
                  onClick={() => { handleCloseNavMenu(); navigate(page) }}
                  sx={{
                    ml: 5,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
