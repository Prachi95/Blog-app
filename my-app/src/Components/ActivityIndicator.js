import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  loaderImage: {
    display: 'block', 
    width: '100px', 
    height: '100px'
  }
}));


function Loader() {
  const classes = useStyles();
  return (
    <Grid celled padded className={classes.grid}>
      <img className={classes.loaderImage} src={require('./Images/loader.gif')} />              
    </Grid>
  );
}

export default Loader
