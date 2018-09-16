import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { getStatusStr } from 'utils/task';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const SprintListTaskForm = ({ classes, task = {}, onStatusChange }) => {
  return (  
    <React.Fragment>
      <Typography>{task.name}</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="status">Workflow</InputLabel>
        <Select
          value={task.status}
          onChange={onStatusChange}
          inputProps={{
            name: 'status',
            id: 'status',
          }}
        >
          {getStatusStr().map((status, i) => (
            <MenuItem value={i} key={status}>{status}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
 
export default withStyles(styles)(SprintListTaskForm);