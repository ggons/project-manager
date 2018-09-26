import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Button, Input } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add'
import SprintListTaskList from 'components/sprint/SprintListTaskList';

const styles = theme => ({
  newTaskBox: {
    height: 54,
    paddingLeft: 20
  },
  button: {
    margin: theme.spacing.unit,
    color: lightBlue[500]
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const SprintListLeftPane = ({ 
  classes, 
  tasks, 
  selectedIndex,
  isOpenNewTaskInput,
  onOpenNewTaskInput, 
  onSubmit, 
  onChange,
  onSelect 
}) => {
  const renderTasks = <SprintListTaskList tasks={tasks} selectedIndex={selectedIndex} onSelect={onSelect} />;

  return (  
    <React.Fragment>
      <Grid className={classes.newTaskBox}>
        {isOpenNewTaskInput === false ? (
          <Button 
            size="small" 
            className={classes.button} 
            onClick={() => onOpenNewTaskInput(true)}
          >
            <AddIcon className={classes.leftIcon} />
            New task
          </Button>) : (
          <form onSubmit={onSubmit}>
            <Input
              placeholder="Enter title for new task"
              autoFocus
              name="newtask"
              className={classes.input}
              onChange={onChange}
              onBlur={() => onOpenNewTaskInput(false)}
            />
          </form>)
        }
      </Grid>
      <Divider />
      { renderTasks }
    </React.Fragment>
  );
}
 
export default withStyles(styles)(SprintListLeftPane);