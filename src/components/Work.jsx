import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import { myWorkData } from "../constant/data.js";
import { useTheme } from "@mui/material/styles";



const Work = () => {
  const theme = useTheme();

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <>
      <Box sx={{ m: 5 }}>
        <Box
          px={0}
          sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            gap: 3
          }}
        >
          <Typography sx={{
            fontSize: { md: "45px", xs: "30px" },
            fontWeight: 900,
            textDecoration: "underline solid  30%",
            color: theme.palette.color.default
          }}>
            LATEST WORK
          </Typography>
          <Typography variant="h5">
            These are some of my recent favorites – always subject to change.
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid
            item
            mt={3}
            lg={10}
            container
            spacing={4}
            sx={{
              display: 'flex',
              justifyContent: 'center'
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
                  zIndex: 1
                }}
                key={i}
              >
                <Box>
                  <Card
                    sx={{
                      padding: '2px',
                      border: "2px solid primary",
                      boxShadow: `0px 0px 10px ${theme.palette.color.default}`,
                      background: theme.palette.card.default
                    }}
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
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                    <CardActions>
                      <Link
                        href={item.codes}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          size="large"
                          sx={{
                            fontWeight: 700,
                            color: theme.palette.typography.color,
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
