import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListSubheader, List, ListItem, ListItemText, Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  addButton: {
    paddingBottom: 10,
    minWidth: 32,
    minHeight: 20
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6,
  },
});

const data = [
  {
    name: 'ggons 블로그',
    _id: parseInt(Math.random() * 1000000, 10)
  },
  {
    name: '프로젝트 매니저',
    _id: parseInt(Math.random() * 1000000, 10),
    children: [
      {
        name: '기획',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '디자인',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '개발',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: 'QA',
        _id: parseInt(Math.random() * 1000000, 10)
      }
    ]
  },
  {
    name: '비트코인 거래소',
    _id: parseInt(Math.random() * 1000000, 10)
  },
  {
    name: '스케쥴러',
    _id: parseInt(Math.random() * 1000000, 10)
  },
  {
    name: '프로젝트 매니저 v1.1',
    _id: parseInt(Math.random() * 1000000, 10),
    children: [
      {
        name: '프로젝트 매니저 v1.01',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '프로젝트 매니저 v1.02',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '프로젝트 매니저 v1.03',
        _id: parseInt(Math.random() * 1000000, 10)
      }
    ]
  },
  {
    name: '프로젝트 매니저 v1.2',
    _id: parseInt(Math.random() * 1000000, 10),
    children: [
      {
        name: '프로젝트 매니저 v1.11',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '프로젝트 매니저 v1.12',
        _id: parseInt(Math.random() * 1000000, 10)
      },
      {
        name: '프로젝트 매니저 v1.13',
        _id: parseInt(Math.random() * 1000000, 10)
      }
    ]
  }
];

class SidebarProjectList extends Component {
  state = {
    open: { }
  };

  handleClick = id => {
    const { open } = this.state;
    if (open[id]) delete open[id];
    else open[id] = true;
    this.setState({ open });
  };

  renderList = (classes, projectList) => {
    const { open } = this.state;
    const projects = projectList.map(project => {
      if (project.children) {
        return (
          <React.Fragment key={project._id}>
            <ListItem button onClick={() => this.handleClick(project._id)}>
              <ListItemText inset primary={project.name} />
              {open[project._id] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open[project._id]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>{
                project.children.map(subproject => {
                  return (
                    <ListItem button className={classes.nested} key={subproject._id}>
                      <ListItemText inset primary={subproject.name} />
                    </ListItem>
                  )
                })
              }</List>
            </Collapse>
          </React.Fragment>
        )
      } else {
        return (
          <ListItem button key={project._id}>
            <ListItemText inset primary={project.name} />
          </ListItem>
        )
      }
    });

    return projects;
  }

  renderSubheader = (classes) => {
    return (
      <ListSubheader component="div">
        Project List
        <Button  className={classes.addButton}>+</Button>
      </ListSubheader>
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
          subheader={this.renderSubheader(classes)}
        >
          { this.renderList(classes, data) }
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarProjectList);