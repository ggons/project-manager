import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import SprintHeaderContainer from 'containers/sprint/SprintHeaderContainer';
import SprintListContainer from 'containers/sprint/SprintListContainer';
import SprintBoardContainer from 'containers/sprint/SprintBoardContainer';
import SprintGantt from 'components/sprint/SprintGantt';
import SprintFiles from 'components/sprint/SprintFiles';
import SprintStream from 'components/sprint/SprintStream';
import SprintTimelog from 'components/sprint/SprintTimelog';
import SprintAnalytics from 'components/sprint/SprintAnalytics';

const styles = {
  root: {
    flexGrow: 1
  }
}

const Sprint = props => {
  const { classes, match } = props;

  return (  
    <div className={classes.root}>
      <SprintHeaderContainer {...props} />
      <Divider />
      <Switch>
        <Route path={`${match.url}/list`} render={() => <SprintListContainer {...props} />} />
        <Route path={`${match.url}/board`} render={() => <SprintBoardContainer {...props} />} />
        <Route path={`${match.url}/ganttchart`} component={SprintGantt} />
        <Route path={`${match.url}/files`} component={SprintFiles} />
        <Route path={`${match.url}/stream`} component={SprintStream} />
        <Route path={`${match.url}/timelog`} component={SprintTimelog} />
        <Route path={`${match.url}/analytics`} component={SprintAnalytics} />
        <Redirect from={`${match.url}/`} to={`${match.url}/list`} />
      </Switch>
    </div>
  );
}
 
export default withStyles(styles)(Sprint);