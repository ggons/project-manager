import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import CreateProjectName from 'components/project/CreateProjectName';
import ConfirmNewProject from 'components/project/ConfirmNewProject';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabContainer: {
    textAlign: 'center',
    padding: theme.spacing.unit * 4
  },
  hidden: {
    visibility: 'hidden'
  }
});

const NewProjectTabContainers = ({ classes, theme, index, newname, onChange }) => {
  const containers = [
    <CreateProjectName 
      newname={newname}
      onChange={onChange}
    />,
    'Item Two',
    <ConfirmNewProject />
  ];

  const renderTabContainers = () => {
    return containers.map((container, i) => (
      <div 
        dir={theme.direction} 
        className={classNames(classes.TabContainer, { [classes.hidden]: index !== i })}
        key={i}
      >
        { container }
      </div>
    ));
  }

  return (  
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={index}
      className={classes.root}
    >
      { renderTabContainers() }
    </SwipeableViews>
  );
}
 
export default withStyles(styles, { withTheme: true })(NewProjectTabContainers);