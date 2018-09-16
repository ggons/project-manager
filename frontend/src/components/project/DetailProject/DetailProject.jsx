import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import SprintBoard from 'components/sprint/SprintBoard';

const styles = {
  root: {
    flexGrow: 1
  }
}

const Sprint = ({ classes, project }) => {
  return (  
    <div className={classes.root}>
      <SprintBoard 
        tasks={project.tasks}
      />
    </div>
  );
}
 
export default withStyles(styles)(Sprint);