import React from 'react';
import { Box, Grid, Typography, Button, Link, Tooltip, Icon } from '@mui/material';
import { saveAs } from "file-saver";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { useTheme } from "@mui/material/styles";
//importing images
import myPic from '../assets/images/owner.jpg';
import myResume from "../assets/pdf/Md-resume.pdf"


//importing icons
import Download from "@mui/icons-material/Download";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import Home from "@mui/icons-material/Home";
import Cake from "@mui/icons-material/Cake";
import reactIcon from '../assets/images/sciene.png';
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import jsIcon from '../assets/images/js.png';
import nodeIcon from '../assets/images/nodejs.png';
import bootIcon from '../assets/images/bootstrap.png';
import muiIcon from '../assets/images/mongo.svg';

const Icons = [
    { id: 1, icon: htmlIcon, title: "html" },
    { id: 2, icon: cssIcon, title: "css" },
    { id: 3, icon: jsIcon, title: "javascript" },
    { id: 4, icon: reactIcon, title: "reactjs" },
    { id: 5, icon: nodeIcon, title: "nodejs" },
    { id: 6, icon: bootIcon, title: "bootstrap" },
    { id: 7, icon: muiIcon, title: "materialUI" },
    { id: 8, icon: bootIcon, title: "bootstrap" },
]

// extra component design


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </Box>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const Resume = () => {

    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const saveFile = () => {
        saveAs(myResume, "farhan-haider.pdf")
    };

    return (
        <>
            <Box sx={{py:5}}>
                    <Grid
                        item
                        xs="auto"
                    >
                        <Box sx={{px:2,display:'flex',flexDirection: "column",justifyContent: "center",
                            alignItems: "center",gap:1}}>
                        <Typography>Click on button to download resume</Typography>
                        <Button onClick={saveFile} variant="contained" sx={{
                            background: theme.palette.button.bg,
                            color:theme.palette.button.color,
                          outline:'.5px solid grey'
                        }}>
                            Download <Download/>
                           {/* Download */}
                        </Button>
                        </Box>
                    </Grid>

                <Box sx={{ my: 2, mx: { xs: 2, sm: 10 }, minHeight: "400px" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            onChange={handleChange}
                           sx={{color:'red'}}
                            >
                            <Tab label="Persona Info" {...a11yProps(0)} />
                            <Tab label="Education" {...a11yProps(1)} />
                            <Tab label="Skills" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                     
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6} md={4} order={{ xs: 1, sm: 2 }}>
                                    <Box sx={{zIndex:11}}>
                                    <img
                                        src={myPic}
                                        alt="personal info"
                                        height="250px"
                                        width="200px"
                                        border="2px solid white"
                                    />
                                    </Box>
                                </Grid>
                                 <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={8}
                                    order={{ xs: 1, sm: 2 }}
                                    // sx={{ display: 'flex', flexWrap: 'wrap' }}
                                >
                                <Box sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    overflowWrap:'anywhere'
                                }}>
                                        <Typography variant="h5" >
                                            Md Farhan Haider
                                        </Typography>
                                        <Typography sx={{ display: "flex", paddingTop: 2, fontSize: 18 }}>
                                             <Icon sx={{ pr: 4 }}><Cake fontSize='20px' /></Icon>

                                            06-09-1993
                                        </Typography>
                                        <Typography
                                            sx={{
                                                display: "flex",
                                                paddingTop: 2,
                                                textDecoration: "none",
                                                fontSize: 18
                                            }}
                                        >
                                            <Tooltip title="Click to mail" placement="right">
                                                <Link
                                                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                                    sx={{ textDecoration: "none", color: "inherit" }}
                                                >

                                                   <Icon sx={{ pr: 4 }}>  <Email fontSize='20px' style={{ pr: 2, textDecoration: "none", fontSize: 22 }} /></Icon>
                                                    imfarruk@gmail.com

                                                </Link>
                                            </Tooltip>
                                        </Typography>
                                        <Typography sx={{ display: "flex", paddingTop: 2, fontSize: 18 }}>
                                             <Icon sx={{ pr: 4 }}><Phone fontSize='20px' style={{ pr: 2, fontSize: 22 }} /></Icon>
                                            8328206725
                                        </Typography>
                                        <Typography sx={{ display: "flex", paddingTop: 2, fontSize: 18 }}>
                                            <Icon sx={{ pr: 4 }}><Home fontSize='20px' style={{ pr: 2, fontSize: 22 }} /></Icon>
                                            Tolichowki, Hyderabad, Telangana
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                       
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={12}>
                                <Typography variant="h5">High School</Typography>
                                <Typography>BVIC Shekhanpur </Typography>
                                <Typography>70 %</Typography>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography variant="h5" component="h2">Intemediate</Typography>
                                <Typography>BVIC Shekhanpur </Typography>
                                <Typography>56.8 %</Typography>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Typography variant="h5">Graduation</Typography>
                                <Typography variant="h6">B.Tech</Typography>
                                <Typography>Maulana Azad National Urdu University </Typography>
                                <Typography>71.56 %</Typography>
                            </Grid>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Grid container spacing={2}>

                            {/* <Grid item sm={3}> */}
                            {
                                Icons.map((curVal, i) => {
                                    return (
                                        <Grid key={i} item sm={3} sx={{ display: 'flex', justifyContent: 'center', zIndex: 1 }}>
                                            <Box sx={{ width: '60px' }}>
                                                <Tooltip title={curVal.title}>
                                                    <img src={curVal.icon} alt="njfn"  width="100%" />
                                                </Tooltip>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                        {/* </Grid> */}
                    </CustomTabPanel>



                </Box>
            </Box>
        </>
    )
}

export default Resume;