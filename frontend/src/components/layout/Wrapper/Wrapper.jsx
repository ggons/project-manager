import React, { Component } from 'react';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from 'components/layout/Sidebar';
import Navbar from 'components/layout/Navbar';

const drawerWidth = 350;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
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
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

const Wrapper = (WrappedComponent) => {
  return withStyles(styles)(class extends Component {
    state = {
      open: false
    };
  
    handleDrawerOpen = () => {
      this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      const { classes } = this.props;
      const { open } = this.state;

      return (  
        <div className={classes.root}>
          <ToastContainer />
          <div className={classes.appFrame}>
            <AppBar className={classNames(classes.appBar, { [classes.appBarShift]: open })}>
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Navbar />
              </Toolbar>
            </AppBar>
            <Sidebar
              open={open}
              onClose={this.handleDrawerClose}
            />
            <main className={classNames(classes.content, { [classes.contentShift]: open })}>
              <WrappedComponent {...this.props} />
            </main>
          </div>
        </div>
      );
    }
  })
}

export default Wrapper;
