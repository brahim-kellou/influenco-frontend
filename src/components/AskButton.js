import React from 'react';

import Fab from '@material-ui/core/Fab';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    right: 32,
    bottom: 32,
  }
}));

const AskButton = () => {
  const classes = useStyles();

  return (
    <Fab color="primary" aria-label="add" className={classes.fab}>
      <ModeCommentIcon />
    </Fab>
  )
}

export default AskButton;
