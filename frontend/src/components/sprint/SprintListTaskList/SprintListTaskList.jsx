import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import UserIcon from '@material-ui/icons/PersonOutline';
import { grey } from '@material-ui/core/colors';
import { taskStyles, getStatusStr } from 'utils/task';

const styles = theme => ({
  root: {
    padding: `0 ${theme.spacing.unit * 4}px`
  },
  rowBox: {
    display: 'flex',
    alignItems: 'center'
  },
  iconBox: {
    marginRight: theme.spacing.unit,
    paddingTop: 3
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${grey[300]}`,
    padding: `${theme.spacing.unit + 2}px 0`,
  },
  name: {
    width: '50%'
  },
  date: {
    width: 60,
  },
  status: {
    fontWeight: 'bold',
  },
  ...taskStyles
});

const SprintListTaskList = ({ classes, tasks, onSelect }) => {
  const renderName = name => 
    <div className={classes.name}>{name}</div>;

  const renderDate = (date) =>
    <div className={classes.date}><Typography variant="caption" >{date}</Typography></div>;

  const renderStatus = (status) => 
    <Typography variant="caption" className={classNames(classes.status, classes[status.replace(' ', '').toLowerCase()])}>{status}</Typography>;

  return (  
    <Grid container direction="column" className={classes.root}>
      {tasks.map((task, i) => (
        <Grid container key={task.name} className={classes.rowBox} onClick={() => onSelect(i)}>
          <Grid item className={classes.iconBox}><UserIcon /></Grid>
          <Grid item xs className={classes.row}>
            { renderName(task.name) }
            { renderDate(task.date) }
            { renderStatus(getStatusStr(task.status)) }
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
 
export default withStyles(styles)(SprintListTaskList);