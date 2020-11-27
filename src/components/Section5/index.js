import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button ,Divider , Grid , Typography } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import VideocamIcon from '@material-ui/icons/Videocam';

import video from '../../media/video3.mp4'

const useStyles = makeStyles((theme) => ({
    button: {
        color: "#fff",
        fontSize: "10px",
        margin: "10px",
        borderRadius: "0px",
        width: "130px",
        height: "40px",
        backgroundColor: "rgba(255,255,255,0.13)",
    },
  divider1: {
    height: "0.5px",
    margin: "20px auto 50px", 
    width: "100%",
    background: "#9d959c",
    opacity: "70%"
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
  subTitle: {
    color: "#615a61",
    fontSize: "15px"
  },
  yellowText: {
      color: "#e4c616"
  },
  videoContainer: {
        position: "relative",
        overflow: "hidden",
        width: "100px",
        height: "100px",
        borderRadius: "50px",
        backgroundColor: "red",
        margin: "auto"
  },
  video: {
    position: "absolute",
    width: "auto",
    height: "100%",
    top: "0",
    left: "0",
  }
}));

export default function Section4(props) {
  const classes = useStyles()

  return (
        <Grid
            direction="column"
        >
            <Grid item>   
                 <Divider variant="medium" className={classes.divider1}/>  
                 <div className={classes.videoContainer}>
                 {/* <video autoPlay playsInline muted className={classes.video} src={require('../../Images/video.mp4')} /> */}
                 <video autoPlay playsInline id="background-video" loop muted className={classes.video} src={video} />
                 </div>
                 <Typography variant="h6" align="center" gutterBottom className={classes.title}>
                    Kerby Jean-Raymond
                 </Typography>  
                 <Typography variant="h6" align="center" gutterBottom className={classes.subTitle}>
                    opinion
                </Typography>
            </Grid>
            <Grid item>   
                 <Divider variant="medium" className={classes.divider1}/>  
                 <Typography variant="body2" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industryy. Lorem Ipsum has been the <span className={classes.yellowText}>industry's standard dummy text ever since the 1500s</span>
                 </Typography> 
            </Grid>
            <Grid  item>
                <Grid 
                container
                direction="row"
                justify="space-evenly"
                >
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<LaunchIcon />}
                    >
                        Read More
                    </Button>
                    <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<VideocamIcon />}
                    >
                        Reply
                    </Button>   
                    <Divider variant="medium" className={classes.divider1}/>               
                </Grid>
            </Grid>
        </Grid>
  );
}
