import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper, Box, Button, TextField } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import contactPic from "../assets/images/contactus1.png";
import emailPic from "../assets/images/email.png";

// const styles = makeStyles({
//   cardBox: {
//     display: "flex",
//     // height: "90vh",
//     paddingBottom: 11,
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   formStyle: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   inputStyle: {
//     marginTop: 15,
//     "&:focus": {
//       background: "#5d4600",
//     },
//   },
//   formMsg: {
//     fontSize: 25,
//     fontWeight: 800,
//     background: "linear-gradient(0deg, green,orange)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   formInput: {
//     textDecoration: "underline solid  30%",
//     fontSize: 25,
//     marginBottom: 2,
//     background: "linear-gradient(10deg,grey,yellow)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
// });

const Contact = () => {
  const theme = useTheme();
  //   const classes = styles();
  const form = useRef();
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h547pu8",
        "template_7ur5ovo",
        form.current,
        "tJbssPAO4LrXT7rv_"
      )
      .then((res) => {
        console.log(res);
        toast.success(" I will contact you shortly!", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        sx={{
          my: 5,
          mx: { xs: 3, sm: 5 },
        }}
        id="contact"
      >
        <Paper
          sx={{
            mx: { md: 10, xs: 0 },
            // my: 5,
            py: 5,
            px: 2,
            boxShadow: "1px 2px 14px",
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Grid
            item
            md={12}
            xs={10}
            container
            spacing={2}

            style={{
              display: "flex",
              //   flexDirection: {xs:"column",sm:"row"},
              justifyContent: "center",
              alignItems: 'center',
              // gap:"5px"
            }}
          >
            <Grid item sm={6} md={6} xs={10}
              sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}
            >
              <Box
                sx={{
                  width: { xs: 150, sm: 200 },
                  height: { xs: 100, sm: 150 }
                }}>
                <img
                  src={contactPic}
                  alt="details"
                  style={{ width: '100%', height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              xs={10}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
            >
              <Box sx={{ justifyContent: "center", width: '100%' }}>
                <Typography
                  py={2}
                  sx={{
                    fontSize: 25,
                    fontWeight: 900,
                    position: "relative",
                    textDecoration: "underline",
                    textDecoration: "underline solid  30%",
                    color: theme.palette.color.default,
                  }}
                >
                  Contact Info
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ width: "25%" }}>
                    Name :
                  </Typography>
                  <Typography>
                    Md Farhan Haider
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ width: "25%" }}>
                    Email :
                  </Typography>
                  <Typography>
                    imfarruk@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ width: "25%" }}>
                    Mobile No :
                  </Typography>
                  <Typography>
                    8328206725
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={2}
          sx={{ mt: 5, justifyContent: 'center' }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography
              sx={
                {
                  transform: "scaleY(1.1)",
                  fontSize: 25,
                  fontWeight: 800,
                  background: "linear-gradient(0deg, green,orange)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              }
            >
              HELLO! LET’S TALK
              <br /> ABOUT YOUR <br />
              NEW PROJECT
            </Typography>
            <Typography >
              ========================
            </Typography>
            <Typography>
              Your feedback / message is very important for me..
            </Typography>

            {/* email js */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 2
            }}>
              <form
                ref={form}
                onSubmit={formSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <TextField
                  label="Name"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  autoComplete="off"
                  required
                // className={classes.inputStyle}
                />

                <TextField
                  label="Email"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  sx={{
                    mt: 2,

                  }}
                />

                <TextField
                  label="Message"
                  placeholder="Type your message"
                  type="text"
                  name="message"
                  multiline
                  required
                  minRows={3}
                  sx={{ mt: 2 }}
                  autoComplete="off"
                // className={classes.inputStyle}
                />

                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                />
                <Box>
                  <input
                    type="submit"
                    value="Submit"
                    style={{
                      marginTop: '16px',
                  height: '40px',
                  width: '200px',
                  padding: '0 40px',
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '5px',
                  outline: '.5px solid grey',
                  float: 'inline-end',
                  background: theme.palette.button.bg,
                  color:theme.palette.button.color,
                  cursor:'pointer'
                 }}
              />
                </Box>
              </form>
            </Box>

          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} order={{ xs: 3, sm: 2 }} sx={{ zIndex: 1 }}>

            <Box
              sx={{
                width: '100%',
                height: { xs: '400px', sm: '100%', zIndex: 1 }
              }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.321251585961!2d78.40448641343872!3d17.39592881222081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96e9e5058e73%3A0x47d93e7b57ce6f1!2sToli%20Chowki%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1714282631759!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 'none', zIndex: 1 }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
