import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Paper, Box, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {contactInfo} from '../constant/data';

//importing images
import contactPic from "../assets/images/contactus1.png";

//importing css from css folder
import { InputStyle } from "../css/muiStyle";

//import from utils
import { location } from '../utils/info';

const Contact = () => {
  const theme = useTheme();
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
            mx: { md: 10, xs: 2 },
            py: 5,
            px: 2,
            boxShadow: "1px 2px 14px",
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            md={12}
            xs={12}
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'center',
            }}
          >
            <Grid item sm={6} md={6} xs={12}
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
              xs={12}
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
                <Grid container>
                <Grid item xs={4} spacing={2}>
                  {
                     contactInfo.map((val)=>(
                      <Typography variant="h6" sx={{transform:'capitalize'}}>{val.key} :</Typography>
                     ))
                  }
                </Grid>
                <Grid item xs={8}>
                  {
                    contactInfo.map((val)=>(
                      <Typography variant="h6" sx={{transform:'capitalize'}}>{val.value}</Typography>
                    ))
                  }
                </Grid>
                </Grid>
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
                  <InputStyle
                    type="submit"
                    value="Submit"
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
                src={location}
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
