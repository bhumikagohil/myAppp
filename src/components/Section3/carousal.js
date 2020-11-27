import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height:"300px",
    margin: "5px auto",
  },
}));

export default function Details(props) {
  const classes = useStyles();


  return (
          <Carousel className={classes.root} centerMode={true} showThumbs={false} showArrows={false} infiniteLoop useKeyboardArrows autoPlay showStatus={false}>
                <div>
                <img  src="http://placeimg.com/640/360/8" 
                    width={400}
                    height={300} 
                    />
                </div>
                <div>
                <img  src="http://placeimg.com/640/360/09" 
                    width={400}
                    height={300} 
                    />
                </div>
                <div>
                <img  src="http://placeimg.com/640/360/87" 
                    width={400}
                    height={300} 
                    />
                </div>
                <div>
                <img  src="http://placeimg.com/640/360/77" 
                    width={400}
                    height={300} 
                    />
                </div>
                <div>
                <img  src="http://placeimg.com/640/360/6" 
                    width={400}
                    height={300} 
                    />
                </div>
            </Carousel>
  );
}

