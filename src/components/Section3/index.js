import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

 import ImageCarousal from './carousal';

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
  yellowText: {
    color: "#e4c616",
    fontSize: "40px",
    marginBottom: "0px"
}
}));

export default function Section3(props) {
  const classes = useStyles();


  return (
        <Grid
            direction="column"
            style={{marginTop:"10px"}}
        >
            <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                <span className={classes.yellowText}>L</span>orem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages 
                </Typography>      
                </Grid>
            <Grid item>
                <ImageCarousal />
            </Grid>
            <Grid item>
                <Typography variant="subtitle2" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                 </Typography>
            </Grid>
        </Grid>
  );
}
