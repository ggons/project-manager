import React from 'react';
import { Grid } from '@material-ui/core';
import SprintBoardTaskItem from 'components/sprint/SprintBoardTaskItem';

const SprintBoardTaskList = ({ tasks }) => {
  return (  
    <Grid container direction="column" spacing={8}>
      {tasks.map(task => (
        <SprintBoardTaskItem
          name={task.name}
          key={task.name}
        />
      ))}
    </Grid>
  );
}
 
export default SprintBoardTaskList;