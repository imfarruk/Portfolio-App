import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme,styled } from "@mui/material/styles";

// importing images
import webDev from '../assets/images/web2.png';
import uiDev from '../assets/images/setting.png';
import pic from '../assets/images/weatherapp4.png';
import beard from '../assets/images/beardman.png';


const TypoDiv=styled(Typography)(({theme})=>({
  transform: "scaleY(1.3)",
  textDecoration: "underline solid  20%",
  textUnderlinePosition: "under",
  fontWeight: 700,
  color: theme.palette.color.default,
  paddingBottom:12,
  letterSpacing:2
})
);

const About = () => {
  const theme = useTheme();
  
  const aboutInfo = [
    {
      imgUrl: webDev,
      aboutTitle: "Frontend Development",
      aboutDetails:
        "Frontend development refers to the building,creating,and maintaining of front side of websites.A web developer is at heart an interactive artist",
    },
    {
      imgUrl: uiDev,
      aboutTitle: "Backend Development",
      aboutDetails:
        "Backend is the process of maintaining and process your data which is related to your website and make website dynamic which is more usefull nowadays.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          paddingBottom: 4,
          height: "auto",
          display: "flex",
          justifyContent: "center",
          // height: "100vh",
        }}
        id="about"
      >
        <Grid
        item
          container
          xs={11}
          sm={10}
          md={10}
          lg={10}
          spacing={2}
          sx={{
            display: "flex",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            
            order={{ xs: 2, sm: 2, md: 1 }}
            sx={{
              display: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box>
              <TypoDiv variant="h5" contained>
                HELLO, 
              </TypoDiv>
              <TypoDiv variant="h5">I Am Farhan Haider</TypoDiv>
              
              <Typography>
                A self taught developer who loves to codes something that will
                impact majority of the people
              </Typography>
              </Box>
            {/*  */}
            <Grid
              py={2}
              item
              xs={12}
              sm={12}
              md={12}
              // lg={8}
              container
              
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap:'20px'
              }}
            >
              {aboutInfo.map((info, i) => (
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={8}
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "5px",
                    borderLeft: "12px solid",
                    borderColor: theme.palette.color.default,
                    paddingLeft: 1,
                    justifyContent: "center",
                    
                  }}
                >
                  <Box 
                  >
                    <img
                      src={info.imgUrl}
                      alt="webb"
                      width="35px"
                      height="35px"
                    />
                  </Box>
                  <Typography
                    sx={{
                      paddingBottom: 1,
                      color: theme.palette.color.default,
                      fontSize: 22,
                      textDecoration: "underline",
                      textUnderlinePosition: "under",
                    }}
                  >
                    {info.aboutTitle}
                  </Typography>
                  <Typography sx={{fontSize:18}}>{info.aboutDetails}</Typography>
                </Grid>
              ))}
            </Grid>
            {/* <Grid item xs={10} sm={10} md={6} lg={6} sx={{}}> */}
            <Box sx={{ marginTop: 2 }}>
              <Link
                to="/about/resume"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  style={{ fontSize: 18, fontWeight: 700,
                    background: theme.palette.button.bg,
                    color:theme.palette.button.color,
                  outline:'.5px solid grey'}}
                >
                  Open CV
                </Button>
              </Link>
              <Link
                to="/work"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  variant="contained"
                  style={{ marginLeft: 10, fontSize: 18, fontWeight: 700,
                    background: theme.palette.button.bg,
                    color:theme.palette.button.color,
                  outline:'.5px solid grey' }}
                >
                  My Work
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
              zIndex:1
            }}
          >
            <img
              src={beard}
              alt="myHome"
              style={{ width: "50%", height: "200px" ,zIndex:1}}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              zIndex:1
            }}
          >
            <img
              src={beard}
              alt="myHome"
              style={{ width: "100%", height: "400px" ,zIndex:1}}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
