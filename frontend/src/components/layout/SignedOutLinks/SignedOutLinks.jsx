import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  link: {
    color: theme.palette.common.white
  }
});

const SignedOutLinks = ({ classes }) => {
  return (  
    <Button color="inherit"><NavLink to="/" className={classes.link}>Login</NavLink></Button>
  );
}
 
export default withStyles(styles)(SignedOutLinks);