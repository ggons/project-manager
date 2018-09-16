import React from 'react';
import { Button, Grid } from '@material-ui/core';
import LeftIcon from '@material-ui/icons/NavigateBefore';
import RightIcon from '@material-ui/icons/NavigateNext';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    textAlign: 'center'
  },
  title: {
    padding: '0 10px'
  }
};

const Header = ({ classes, currentDate, onPrevClick, onNextClick }) => {
  const formatDate = moment(currentDate).format('YYYY MM');

  return (  
    <Grid container justify="center">
      <Grid item>
        <Button aria-label="Prev" onClick={onPrevClick}>
          <LeftIcon />
        </Button>
        <span className={classes.title}>{formatDate}</span>
        <Button aria-label="Next" onClick={onNextClick}>
          <RightIcon />
        </Button>
      </Grid>
    </Grid>
  );
}
 
export default withStyles(styles)(Header);