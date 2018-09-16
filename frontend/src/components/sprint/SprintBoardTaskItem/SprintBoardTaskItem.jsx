import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    borderRadius: 0,
    transition: '0.2s all ease-out',
    '&:hover': {
      boxShadow: '0px 0px 1px 2px rgba(0,0,0,0.4);'
    },
    '&:hover $moreButton': {
      display: 'block'
    },
    userSelect: 'none'
  },
  firstRow: {
    display: 'flex', 
    alignItems: 'center', 
    height: 24
  },
  name: {
    flex: '1 1 auto'
  },
  moreButton: {
    width: 'auto',
    height: 'auto',
    display: 'none'
  },
  content: {
    padding: `${theme.spacing.unit * 2}px !important`,
  }
});

const SprintBoardTaskItem = ({ classes, name }) => {
  return (  
    <Grid item>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Grid className={classes.firstRow}>
            <Typography variant="body1" className={classes.name}>
              {name}
            </Typography>
            <IconButton className={classes.moreButton}>
              <MoreIcon />
            </IconButton>
          </Grid>
          <Typography variant="caption" align="right">
            Oct 29
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
 
export default withStyles(styles)(SprintBoardTaskItem);