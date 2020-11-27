import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid , Button } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import VideocamIcon from '@material-ui/icons/Videocam';

import dataa from "../data"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "7px"
  },
  button: {
      color: "#fff",
      fontSize: "10px",
      margin: "10px",
      borderRadius: "0px",
      width: "130px",
      height: "40px",
      backgroundColor: "rgba(255,255,255,0.13)",
  }
}));

export default function Section2(props) {
  const classes = useStyles();

  const data = dataa;

  return (
    <div className={classes.root}>
        <Grid
            container
            direction="column"
            justify="flex-start"
        >
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
            </Grid>
        </Grid>
    </div>
  );
}
