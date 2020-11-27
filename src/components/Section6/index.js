import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid , Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  },
}));

export default function Section4(props) {
  const classes = useStyles()

  return (
        <Grid
            direction="column"
        >
            <Grid item>   
            <Grid 
                container
                direction="row"
                justify="space-between"
                >
                 <Typography variant="button" align="flex-start" gutterBottom className={classes.title}>
                    VIDEO REPLIES (18)
                 </Typography>  
                 <Typography variant="h6" align="flex-end" gutterBottom className={classes.subTitle}>
                    See All <ArrowForwardIosIcon fontSize="inherit"/>
                </Typography>
                </Grid>
            </Grid>
            <Grid item> 
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                >
                   <img  src="http://placeimg.com/640/360/2" 
                    width={100}
                    height={120}
                    />
                      <img  src="http://placeimg.com/640/360/5" 
                    width={100}
                    height={120}
                    />
                    <img  src="http://placeimg.com/640/360/2" 
                    width={100}
                    height={120}
                    />
                    <img  src="http://placeimg.com/640/360/2" 
                    width={100}
                    height={120}
                    />
                     </Grid>
            </Grid>
            <Grid item >
                 <Typography variant="button" align="flex-start" gutterBottom className={classes.title}>
                    OTHER PUBLICATIONS
                 </Typography>  
                </Grid>
                <Grid item> 
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                >
                    <img  src="http://placeimg.com/640/360/4" 
                   width={150}
                   height={150}
                    />
                      <img  src="http://placeimg.com/640/360/9" 
                   width={150}
                   height={150}
                    />
                     </Grid>
            </Grid>
        </Grid>
  );
}
