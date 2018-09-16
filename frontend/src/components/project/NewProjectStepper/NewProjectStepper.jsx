import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Step, Stepper, StepLabel } from '@material-ui/core';

const styles = theme => ({
  root: {
    background: 'none',
    padding: `${theme.spacing.unit * 4}px 0`
  }
});

const NewProjectStepper = ({ classes, steps, activeStep }) => {
  return (  
    <Stepper activeStep={activeStep} alternativeLabel className={classes.root}>
      {steps.map(label => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
 
export default withStyles(styles)(NewProjectStepper);