import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectList from 'components/project/ProjectList';
import * as actions from 'actions';

class ProjectListContainer extends Component {
  componentDidMount() {
    this.props.requestProjects();
  }

  handleProjectClick = id => {
    this.props.history.push('/project/' + id);
  }

  render() { 
    const { projects } = this.props;

    return (  
      <ProjectList
        projects={projects}
        onClick={this.handleProjectClick}
      />
    );
  }
}
 
export default connect(
  state => ({
    projects: state.project.projects
  }), 
  actions.project,
)(ProjectListContainer);