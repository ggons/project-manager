import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import SprintBoardTaskList from 'components/sprint/SprintBoardTaskList';
import { taskStyles, getStatusStr } from 'utils/task';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    overflowX: 'auto',
    overflowY: 'hidden',
    flexWrap: 'inherit',
  },
  statusBox: {
    width: 300,
  },
  title: {
    paddingBottom: 8,
    marginBottom: 8,
    borderBottom: '2px solid'
  },
  ...taskStyles
});

const SprintBoard = ({ classes, tasks }) => {
  const statusStr = getStatusStr();
  const renderTasks = statusStr.map(status => {
    const filteredTasks = tasks.filter(task => task.status === statusStr.indexOf(status));
    return <SprintBoardTaskList tasks={filteredTasks} /> || null
  });

  return (  
    <Grid container spacing={32} className={classes.root}>
      {renderTasks.map((renderTask, i) => (
        <Grid item className={classes.statusBox} key={statusStr[i]}>
          <Typography variant="subheading" className={classNames(classes.title, classes[statusStr[i].replace(' ', '').toLowerCase()])}>{statusStr[i]}</Typography>
          { renderTask }
        </Grid> 
      ))}
    </Grid>
  );
}
 
export default withStyles(styles)(SprintBoard);