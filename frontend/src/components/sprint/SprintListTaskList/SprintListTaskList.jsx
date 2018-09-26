import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
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
    // marginRight: theme.spacing.unit,
    width: theme.spacing.unit * 3 + 'px',
    paddingTop: 3
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `1px solid ${grey[300]}`,
    padding: `${theme.spacing.unit + 2}px 10px`,
  },
  name: {
    flex: '1 1 auto'
  },
  date: {
    width: 80,
    marginRight: 20
  },
  status: {
    width: 70,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  ...taskStyles
});

const SprintListTaskList = ({ classes, tasks, selectedIndex, onSelect }) => {
  const renderDoneIcon = i => selectedIndex === i && <DoneIcon color="primary" />;

  const renderName = name => 
    <Typography variant="body2" className={classes.name}>{name}</Typography>;

  const renderDate = (date) =>
    <Typography variant="caption" className={classes.date}>{formatDate(date)}</Typography>;

  const renderStatus = (status) => 
    <Typography variant="caption" className={classNames(classes.status, classes[status.replace(' ', '').toLowerCase()])}>{status}</Typography>;

  return (  
    <Grid container direction="column" className={classes.root}>
      {tasks.map((task, i) => (
        <Grid container key={task.name} className={classes.rowBox} onClick={() => onSelect(i)}>
          <Grid item className={classes.iconBox}>
            { renderDoneIcon(i) }
          </Grid>
          <Grid item xs className={classes.row}>
            { renderName(task.name) }
            { renderDate(task.created_at) }
            { renderStatus(getStatusStr(task.status)) }
          </Grid>
        </Grid>
      ))}
    </Grid>
  );

  function formatDate(date) {
    return moment(date).format('MMMM DD');
  }
}
 
export default withStyles(styles)(SprintListTaskList);