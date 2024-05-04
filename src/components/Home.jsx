import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Tooltip, Button, Link } from "@mui/material";
import Typewriter from "typewriter-effect";
import { useTheme } from "@mui/material/styles";
import {Link as NavLink} from 'react-router-dom'

import { homeIcons } from "../constant/data";

// importing images
import myClipart from "../assets/images/my-clipart.png";


const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 7,
          height: "fit-content",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4
          }}
        >
          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            lg={4}
            sx={{
              display: { xs: "flex", md: "flex" },
              justifyContent: 'center'
            }}
          >
            <img style={{ zIndex: 1 }} src={myClipart} alt="myHome" className="img" width={250} height={400} />
          </Grid>
          <Grid item xs={10} sm={7} md={4} lg={4} >
            <Box>
              <Typography
                sx={{
                  textDecoration: "underline",
                  color: theme.palette.color.default,
                  textDecorationThickness: 5,
                  lineHeight: 2,
                  fontSize: 30,
                  fontWeight: 600,
                }}
              >
                WELCOME
              </Typography>
              <Box sx={{ display: "flex", fontFamily: "cursive", flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: 30 }}>I'M </Typography>
                <Box
                  sx={{
                    color: theme.palette.typewriter.default,
                    fontSize: 30,
                    fontWeight: 900,
                    textIndent: 4,
                    cursor: "pointer",
                    textShadow: "1px 1px 5px orange ",
                    filter: "invert",
                    fontFamily: "cursive",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ["Web", "MERN", "ReactJS", "NodeJS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Box>
                <Typography sx={{ fontSize: 30 }}> Developer</Typography>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 18 }}>Follow Me ⭐</Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: "row", 
                gap: 1, 
                flexWrap: 'wrap', 
                justifyContent: { xs: 'center', sm: 'flex-start' } }}
                >
                {homeIcons.map((icon, i) => {
                  return (
                    <Box key={i} sx={{ m: 1, width: { sm: '50px', xs: '40px' }, my: 2 }}>
                      <Link href={icon.href} target="_blank" sx={{ display: 'flex', flexDirection: "row" }}>

                        <Tooltip title={icon.title}>
                          <img
                            src={icon.iconImage}
                            alt="iconsImages"
                            width='100%'
                            height='100%'
                          />
                        </Tooltip>
                      </Link>
                    </Box>
                  )
                })}
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <NavLink to="/contact">
                <Button variant="contained" sx={{
                  background: theme.palette.button.bg,
                  color: theme.palette.button.color,
                  outline: '.5px solid grey'
                }}>Contact Me</Button>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
