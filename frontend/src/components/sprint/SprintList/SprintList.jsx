import React from 'react';
import { Grid } from '@material-ui/core';
import SprintListLeftPane from 'components/sprint/SprintListLeftPane';
import SprintListTaskForm from 'components/sprint/SprintListTaskForm';

const SprintList = ({ 
  tasks, 
  activeIndex, 
  isOpenNewTaskInput, 
  onOpenNewTaskInput, 
  onNewTaskSubmit,
  onChange,
  onSelect,
  onStatusChange
}) => {
  return (  
    <Grid container>
      <Grid item xs>
        <SprintListLeftPane
          tasks={tasks}
          isOpenNewTaskInput={isOpenNewTaskInput}
          activeIndex={activeIndex}
          onOpenNewTaskInput={onOpenNewTaskInput}
          onSubmit={onNewTaskSubmit}
          onChange={onChange}
          onSelect={onSelect}
        />
      </Grid>
      <Grid item xs>
        <SprintListTaskForm
          activeIndex={activeIndex}
          task={tasks[activeIndex]}
          onStatusChange={onStatusChange}
        />
      </Grid>
    </Grid>
  );
}
 
export default SprintList;