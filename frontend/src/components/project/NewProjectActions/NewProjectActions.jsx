import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    textAlign: 'right',
    padding: theme.spacing.unit * 4
  },
  button: {
    marginRight: theme.spacing.unit,
  }
});

const NewProjectActions = ({ classes, steps, activeStep, onNext, onBack, onReset }) => {
  return (  
    <Grid container justify="flex-end" className={classes.root}>
      <Grid item>
        {activeStep === steps.length ? (
          <Button onClick={onReset}>Reset</Button>
        ) : (
          <React.Fragment>
            <Button
              disabled={activeStep === 0}
              onClick={onBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={onNext} className={classes.button}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
}
// const NewProjectActions = ({ classes, steps, activeStep, onNext, onBack, onReset }) => {
//   return (  
//     <Grid container>
//       <Grid item xs={7} />
//       <Grid item xs={5}>
//         {activeStep === steps.length ? (
//           <Button onClick={onReset}>Reset</Button>
//         ) : (
//           <React.Fragment>
//             <Button
//               disabled={activeStep === 0}
//               onClick={onBack}
//               className={classes.button}
//             >
//               Back
//             </Button>
//             <Button variant="contained" color="primary" onClick={onNext} className={classes.button}>
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </React.Fragment>
//         )}
//       </Grid>
//     </Grid>
//   );
// }
 
export default withStyles(styles)(NewProjectActions);