import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar , Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import RedoIcon from '@material-ui/icons/Redo';
import UpdateIcon from '@material-ui/icons/Update';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  avatar: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Section1(object) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography style={{ color: "#fff"}} variant="h5" gutterBottom>
          {object.quote}
        </Typography>
        <Grid container justify="space-between">
          <Grid item display="row">
               <Avatar className={classes.avatar} alt="Remy Sharp" src="../../public/Images/image10.jpg" />
          </Grid>
           <Grid item >
              <Grid direction="column">
                    <Grid item>       
                      <Typography gutterBottom variant="subtitle1">
                       {object.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" >
                        {/* DATAA */}
                        <VisibilityIcon fontSize="inherit"/>{object.views}
                        <UpdateIcon fontSize="inherit" /> {object.replays}
                      / {object.uploaded }
                      </Typography> 
                    </Grid>
               </Grid>
            </Grid>
            <Grid item >
                <IconButton aria-label="delete" className={classes.margin}>
                    <RedoIcon />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                   <BookmarkBorderIcon />
                </IconButton>
            </Grid>
          </Grid>
    </div>
  );
}
