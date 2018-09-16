import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Project from 'components/project/Project';
import AppBar from 'components/project/AppBar';
import ProjectRoute from 'components/project/ProjectRoute';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  container: {
    height: 'calc(100vh - 64px)',
    overflow: 'auto'
  }
});

const ProjectLayout = ({ history, match, classes }) => {
  return (  
    <div className={classes.root}>
      <AppBar history={history} />
      <Grid className={classes.container} container>
        <Switch>
          <Route path={`${match.url}/:id`} render={props => <ProjectRoute {...props} />} />
          <Route path={`${match.url}`} exact component={Project} />
        </Switch>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProjectLayout); 