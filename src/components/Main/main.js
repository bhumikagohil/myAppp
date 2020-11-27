import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Section1 from '../Section1/index';
import Section2 from '../Section2/index';
import Section3 from '../Section3/index';
import Section4 from '../Section4/index';
import Section5 from '../Section5/index';
import Section6 from '../Section6/index';

import video from '../../media/video2.mp4'

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(0deg, rgba(0,0,0,1) 23%, rgba(33,24,32,0.743271954674221) 53%, rgba(218,211,211,0.6129603399433428) 96%)",

  },
  title: {
    flexGrow: 1,
    color: "#fff"
  },
  appBar: {
    background: "transparent",
    position: "absolute"
  },
  icon: {
    color: "#fff",
  },
  mainSections: {
    position: "absolute",
    marginTop: "-200px",
    marginBottom:"2px",
     color: "#fff" ,   
      background: "transparent",
      zIndex: "2",
     padding: "0% 5% 5% 5%"  ,
  },
container: {
  position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",

},
video: {
  position: "relative",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",

},
background: {
  color: "#fff",
  background: "#000",
  position: "absolute"
}


}));

export default function MainLayout(object) {
  const classes = useStyles();

  const Data = object;

  return (
    <div className={classes.root}>
        <AppBar  elevation="0" className={classes.appBar}>
        <Toolbar>
            <Grid
                justify="space-between" // Add it here :)
                container 
                spacing={24}
                >
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                           { Data.title }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div>
                        <ExpandMore className={classes.icon}/>
                        </div>
                 </Grid>
            </Grid>
        </Toolbar>
            </AppBar>
            <div className={classes.container}>
                 <video autoPlay playsInline id="background-video" loop muted className={classes.video} src={video} />
            </div>
            <div className={classes.mainSections}>
                <Section1 
                title={Data.title}
                quote={Data.quote}
                views={Data.views}
                replays={Data.replays}
                uploaded={Data.uploaded}
                />
                <Section2 Data/>
                </div>
                <div className={classes.background}>
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                </div>
            
            
    </div>
  );
}
