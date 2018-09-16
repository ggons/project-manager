import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import { blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: blueGrey[50]
  }
}

export default withStyles(styles)(({ history, classes }) => {
  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar>
        <IconButton aria-label="Back" onClick={() => history.goBack()}>
          <BackIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
});