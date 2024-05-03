import React,{useState,useEffect,useCallback} from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box, Typography, Tooltip, Button,Link } from "@mui/material";
// import Icon from "@mui/material/Icon";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "typewriter-effect";
import { deepOrange } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
// import "./navbar.css";
import { render } from "react-dom";

// importing images
import myClipart from "../assets/images/my-clipart.png";
import beard from "../assets/images/beard-man.png";
import homeIcon from "../assets/images//icons8-facebook.svg";
import twitterIcon from "../assets/images/icons8-twitter (1).svg";
import instaIcon from "../assets/images/icons8-instagram.svg";
import linkedIcon from "../assets/images/icons8-linkedin.svg";
import zIndex from "@mui/material/styles/zIndex";

// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// const styles = makeStyles({
//   details: {
//     display: "flex",
//     fontSize: 25,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     // alignItems: "center",
//     textAlign: "center",
//   },
//   detailedInfo: {
//     fontSize: 30,
//     fontWeight: 800,
//     color: "green",
//     textShadow: "1px 2px 13px",
//     textAlign: "center",
//   },
//   icons: {
//     display: "flex",
//     flexDirection: "row",
//     marginTop: 20,
//     alignItems: "center",
//   },
//   icon: {
//     color: "white",
//     width: 40,
//     height: 40,
//     border: "1px solid white",
//     borderRadius: 50,
//     boxShadow: "1px 1px 15px red",
//     fontSize: 5,
//     margin: 8,
//     padding: 3,
//     cursor: "pointer",
//   },
//   imgStyle: {
//     width: "100%",
//     height: "400px",
//   },
// });
const iconed = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon];



const icons = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    iconsName: "FacebookIcon",
    iconImage: homeIcon,
  },
  {
    href: "https://www.twitter.com/imfarruk",
    title: "Twitter",
    iconsName: "TwitterIcon",
    iconImage: twitterIcon,
  },
  {
    href: "https://www.instagram.com/imfarruk",
    title: "Instagram",
    iconsName: "InstagramIcon",
    iconImage: instaIcon,
  },
  {
    href: "https://www.linkedin.com/in/md-farhan-haider-59b843184/",
    title: "LinkedIn",
    iconsName: "LinkedInIcon",
    iconImage: linkedIcon,
  },
];
const Home = () => {
  const theme = useTheme();
  const [ init, setInit ] = useState(false);

 


  return (
    <>
   

   <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        //   paddingBottom: 7,
          height: "fit-content",
        //   minHeight: "100vh",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap:4
          }}
        >
          <Grid
            item
            xs={10}
            sm={5}
            md={4}
            lg={4}
            // order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "flex", md: "flex" },
              // flexDirection:{xs:'row'}
              justifyContent:'center'
            }}
          >
            <img style={{zIndex:1}} src={myClipart} alt="myHome" className="img" width={250} height={400}/>
          </Grid>
          {/* <Grid
            item
            xs={10}
            sm={10}
            md={4}
            lg={4}
            order={{ xs: 1, sm: 1 }}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={myClipart}
              alt="myHome"
              style={{ width: "50%", height: "200px" }}
            />
          </Grid> */}
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
              <Box sx={{ display: "flex", fontFamily: "cursive" ,flexWrap:'wrap'}}>
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
            <Box 
            >
              <Typography sx={{fontSize:18}}>Follow Me ⭐</Typography>
              <Box  sx={{display:'flex',flexDirection:"row",gap:1,flexWrap:'wrap',justifyContent:{xs:'center',sm:'flex-start'}}}>
              {icons.map((icon, i) => {
                return(
                  <Box key={i} sx={{m:1,width:{sm:'50px',xs:'40px'},my:2}}>
                <Link href={icon.href} target="_blank" sx={{display:'flex',flexDirection:"row"}}>
                
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
            <Box sx={{mt:2}}>
                <Link to="/contact">
                <Button variant="contained" sx={{
                  background: theme.palette.button.bg,
                  color:theme.palette.button.color,
                  outline:'.5px solid grey'
                }}>Contact Me</Button>
                </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
