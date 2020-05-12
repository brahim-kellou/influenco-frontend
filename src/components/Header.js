import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flex: 1
  },
  mainNav: {
    flex: 1,
    align: 'center'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: 'none'
  },
  auth: {
    flex: 1
  }
}));

const Header = (props) => {
  const classes = useStyles();

  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <nav>
      <Button
        color="primary"
        size="large"
        className={classes.link}
        component={Link} to={'/login'}
        onClick={props.logout}
      >
        Logout
      </Button>
    </nav>
  );

  const guessLinks = (
    <nav>
      <Button
        color="primary"
        size="large"
        className={classes.link}
        component={RouterLink}
        to={'/login'}
      >
        Login
      </Button>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        size="large"
        className={classes.link}
        component={RouterLink}
        to={'/register'}
      >
        Register
      </Button>
    </nav>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2" variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
          Influenco
        </Typography>
        <nav>
          <Link
            component={RouterLink}
            to="/"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/influencers"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Influencers
          </Link>
          <Link
            component={RouterLink}
            to="/instagram-analytics"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Analytics
          </Link>
        </nav>
        {isAuthenticated ? authLinks : guessLinks}
      </Toolbar>
    </AppBar>
  );
}


export default Header;