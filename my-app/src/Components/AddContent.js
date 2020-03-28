import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import Editor from './Editor';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
    display: "flex",
    flexDirection: "column",
    maxWidth: '70%',
    borderColor: '#DEE0E1',
    borderStyle: 'solid',
    borderWidth: '1px',
  },

  div: {
    display: "flex",
    width: '100%',
    height: '50px',
    borderTopStyle: 'solid',
    borderTopColor: '#DEE0E1',
    borderTopWidth: '1px',
  },

  submit: {
    margin: theme.spacing(1, 0, 1, 1), ////top,right,bottom,left
  }
  
}));

function AddContent() {
  const classes = useStyles();

  return (
    <div className="wrapper">
        <Navbar/>
        <Grid container className={classes.grid} >
            <Editor/>
            <div className={classes.div}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Submit
                </Button>
            </div>
        </Grid>
    </div>
  )
  
}

export default AddContent;
