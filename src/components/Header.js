import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    textTransform: 'none',
    textDecoration: 'none'
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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography component="h2" variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
          <img src="/influenco-logo.png" width={100}></img>
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
            to="/trends"
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Trends
          </Link>
          <Link
            component={RouterLink}
            variant="button"
            color="textPrimary"
            className={classes.link}
            onClick={handleMenu}
            aria-controls="simple-menu" aria-haspopup="true"
          >
            Analytics
          </Link>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link
                component={RouterLink}
                to="/twitter-analytics"
                variant="button"
                color="textPrimary"
                className={classes.link}
                style={{ width: '100%' }}
              >
                Twitter
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                component={RouterLink}
                to="/instagram-analytics"
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                Instagram
              </Link>
            </MenuItem>
          </Menu>
        </nav>
        {isAuthenticated ? authLinks : guessLinks}
      </Toolbar>
    </AppBar>
  );
}


export default Header;