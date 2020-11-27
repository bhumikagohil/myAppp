import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Divider , Grid , Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  divider: {
    height: "2px",
    margin: "30px auto 20px", 
    width: "60px",
    background: "#e4c616",
  },
  divider2: {
    height: "0.5px",
    margin: "20px auto 50px", 
    width: "30px",
    background: "#e4c616",
    opacity: "70%"
  },
  divider3: {
    height: "0.5px",
    margin: "20px auto 50px", 
    width: "100%",
    background: "#9d959c",
    opacity: "70%"
  },
  divider4: {
    height: "0.5px",
    margin: "20px auto 50px", 
    width: "100%",
    background: "#9d959c",
    opacity: "70%"
  },
  divider4: {
    height: "0.5px",
    margin: "40px auto 30px", 
    width: "100%",
    background: "#9d959c",
    opacity: "70%"
  },
  quote: {
    color: "#e4c616",
    fontWeight: "bold",
  },
  author: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
      color: "#e4c616",
      fontWeight: "bold",
      margin: "auto"
  }
}));

export default function Section4(props) {
  const classes = useStyles()

  return (
        <Grid
            direction="column"
        >
            <Grid item>   
                <Divider variant="medium" className={classes.divider}/>  
                <Typography variant="h4" gutterBottom className={classes.header}>
                    Possessing some pretty advanced controls,  let's you Img  dummy text of the printing
                </Typography>
                <Divider variant="inset" className={classes.divider2}/>
            </Grid>
            <Grid item>
                <Typography variant="body2" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages 
                 </Typography>
            </Grid>
            <Grid  item>
                <Divider variant="medium" className={classes.divider3}/>  
                <Typography variant="h4" align="center" gutterBottom className={classes.quote}>
                “You only live once, but if you do it right, once is enough.”
                </Typography>
                </Grid>
                <Grid  item justify="center">
                <Typography variant="h6"align="center"  gutterBottom className={classes.author}>- Mae West -</Typography>  
                 <Divider variant="inset" className={classes.divider4}/>
                </Grid>
                <Grid  item justify="center">
                <Typography variant="body2" gutterBottom>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages 
                 </Typography>
            </Grid>
            <Grid  item>
                <Divider variant="medium" className={classes.divider5}/>  
            </Grid>
        </Grid>
  );
}
