import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SidebarProjectList from 'components/base/SidebarProjectList';

const drawerWidth = 350;
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const Sidebar = ({ classes, theme, open, onClose }) => {
  return (  
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <SidebarProjectList />
    </Drawer>
  );
}
 
export default withStyles(styles, { withTheme: true })(Sidebar);;