import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  link: {
    color: theme.palette.common.white
  },
  user: {
    width: 36,
    height: 36,
  }
});

const SignedInLinks = ({ classes }) => {
  return (  
    <React.Fragment>
      <Button color="inherit"><NavLink to="/" className={classes.link}>New Project</NavLink></Button>
      <Button color="inherit"><NavLink to="/" className={classes.link}>LogOut</NavLink></Button>
      <Button color="inherit" variant="fab" className={classes.user}><NavLink to="/" className={classes.link}>NN</NavLink></Button>
    </React.Fragment>
  );
}
 
export default withStyles(styles)(SignedInLinks);