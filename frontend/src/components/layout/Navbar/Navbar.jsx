import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SignedInLinks from 'components/layout/SignedInLinks';
import SignedOutLinks from 'components/layout/SignedOutLinks';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  logo: {
    color: theme.palette.common.white
  },
  grow: {
    flexGrow: 1,
  },
  rightActions: {
    paddingRight: 24
  }
});

const Navbar = ({ classes }) => {
  return (  
    <React.Fragment>
      <Typography variant="title" color="inherit" className={classes.grow} noWrap>
        <Link to="/" className={classes.logo}>Project Manager</Link>
      </Typography>
      <div className={classes.rightActions}>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </React.Fragment>
  );
}
 
export default withStyles(styles)(Navbar);