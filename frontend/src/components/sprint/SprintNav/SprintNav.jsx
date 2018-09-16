import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
});

const SprintNav = ({ classes, navList, value, onChange }) => {
  const renderTabs = navList.map(nav => <Tab label={nav} key={nav} />);

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={onChange}>
        { renderTabs }
      </Tabs>
    </div>
  );
}
 
export default withStyles(styles)(SprintNav);