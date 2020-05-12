import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
  },
  linkContainer: {
    textAlign: 'right',
  }
}));

const LoginForm = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = { username, password };
    props.submit(data)
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <div className={classes.linkContainer}>
          <Link underline="always" color="textPrimary" variant="caption" component={RouterLink} to="/register" className={classes.forgot}>
            Forgot password?
          </Link>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          className={classes.submit}
        >
          Login
        </Button>
        <div className={classes.linkContainer}>
          <Link underline="always" color="textPrimary" variant="caption" component={RouterLink} to="/register">
            Don't have an account? Sign Up
          </Link>
        </div>
      </form>
    </div >
  );
}

export default LoginForm;