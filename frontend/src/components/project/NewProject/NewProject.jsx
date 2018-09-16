import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NewProjectStepper from 'components/project/NewProjectStepper';
import NewProjectTabContainers from 'components/project/NewProjectTabContainers';
import NewProjectActions from 'components/project/NewProjectActions';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 800,
    marginTop: 100
  }
};

const NewProject = ({ classes, steps, activeStep, name, onNext, onBack, onReset, onChange }) => {
  return (
    <Grid className={classes.root}>
      <NewProjectStepper 
        steps={steps}
        activeStep={activeStep} 
      />
      <NewProjectTabContainers 
        index={activeStep}
        name={name}
        onChange={onChange}
      />
      <NewProjectActions
        steps={steps}
        activeStep={activeStep}
        onNext={onNext} 
        onBack={onBack} 
        onReset={onReset}
      />
    </Grid>
  );
}
 
export default withStyles(styles)(NewProject);