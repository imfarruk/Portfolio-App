import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import { myWorkData } from "../constant/data.js";
import { useTheme } from "@mui/material/styles";



// const styles = makeStyles({
//   cardBox: {
//     display: "flex",
//     marginTop: 20,
//     paddingBottom: 100,
//     flexDirection: "row",
//     justifyContent:'center'
//   },
//   cards: {
//     border: "2px solid primary",
//     boxShadow: "0px 0px 10px #b36413",
//   },
//   anchorTag: {
//     textDecoration: "none",
//   },
// });
const Work = () => {
  const theme = useTheme();
//   const classes = styles();
  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <>
      <Box sx={{m:5}}>
          <Grid
            container
            px={2}
            sx={{
              display: "flex",
              flexDirection:'column',
              justifyContent: "center",
              alignItems: "center",
              gap:3
            }}
          >
            <Typography sx={{ fontSize: {md:"45px",xs:"30px"},
                  fontWeight: 900,
                  textDecoration: "underline solid  30%",
                  color: theme.palette.color.default}}> 
                  LATEST WORK
             </Typography>
              <Typography variant="h5">
              These are some of my recent favorites – always subject to change.
            </Typography>
          </Grid>
        <Box sx={{display:'flex',justifyContent:'center'}}>
          <Grid
            item
            mt={3}
            // xs={12}
            // sm={12}
            lg={10}
            container
            spacing={4}
            sx={{
                display:'flex',
                justifyContent:'center'
            }}
          >
           
            {myWorkData.map((item, i) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex:1
                }}
                key={i}
              >
                 <Box>
                <Card 
                sx={{
                    padding:'2px',
                    border: "2px solid primary",
                    boxShadow: `0px 0px 10px ${theme.palette.color.default}`,
                    background:theme.palette.card.default
                }}
                // className={classes.cards} 
                >
                  <CardActionArea>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      <CardMedia
                        component="img"
                        height="200px"
                        image={item.url}
                        alt={item.title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {item.name}
                        </Typography>
                        <Typography>
                          This my first technical website which is designed with
                          the help of reactjs library.
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                  <CardActions>
                    <Link
                      href={item.codes}
                      target="_blank"
                      rel="noreferrer"
                    //   className={classes.anchorTag}
                    >
                      <Button
                        size="large"
                        sx={{ fontWeight: 700,
                          // background: theme.palette.button.bg,
                          color:theme.palette.typography.color,
                        }}
                      >
                        Codes
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
                </Box>
              </Grid>
            ))}
         
          </Grid>
          </Box>
      </Box>
    </>
  );
};

export default Work;
