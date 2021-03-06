import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  button: {
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: theme.spacing.unit * 2
  },
  blueButton: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  },
  orangeButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  }
});

const Home = ({ classes }) => {
  return (
    <Grid className={classes.root} container justify="center" alignItems="center">
      <Grid item>
        <Link to="/calendar">
          <Button className={classNames(classes.button, classes.blueButton)}>{'Calendar'}</Button>
        </Link>
        <Link to="/project">
          <Button className={classNames(classes.button, classes.orangeButton)}>{'Project'}</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
 
export default withStyles(styles)(Home);