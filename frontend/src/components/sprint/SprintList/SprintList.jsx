import React from 'react';
import { Grid } from '@material-ui/core';
import SprintListTasksContainer from 'containers/sprint/SprintListTasksContainer';
import SprintListTaskDetailContainer from 'containers/sprint/SprintListTaskDetailContainer';

const SprintList = props => {
  return (  
    <Grid container spacing={8}>
      <Grid item xs>
        <SprintListTasksContainer {...props} />
      </Grid>
      <Grid item xs>
        <SprintListTaskDetailContainer />
      </Grid>
    </Grid>
  );
}
 
export default SprintList;