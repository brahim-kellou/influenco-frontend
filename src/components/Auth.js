import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.pexels.com/photos/207582/pexels-photo-207582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Auth = (props) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square className={classes.paper}>
        {props.children}
      </Grid>
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
    </Grid>
  );
}

export default Auth;
