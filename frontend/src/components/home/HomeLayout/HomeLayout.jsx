import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Home from 'components/home/Home';
import brown from '@material-ui/core/colors/brown'

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: brown[50]
  }
});

const HomeLayout = ({ classes }) => {
  return (  
    <div className={classes.root}>
      <Home />
    </div>
  );
}
 
export default withStyles(styles)(HomeLayout);