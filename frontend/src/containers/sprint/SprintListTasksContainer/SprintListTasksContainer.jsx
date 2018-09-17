import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintListLeftPane from 'components/sprint/SprintListLeftPane';
import * as actions from 'actions'

class SprintListTasksContainer extends Component {
  state = {  
    isOpenNewTaskInput: false,
    newtask: ''
  }

  handleOpenNewTaskInput = (isOpen) => this.setState({ isOpenNewTaskInput: isOpen });
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSelect = index => this.props.selectTask(index);

  handleNewTaskSubmit = e => {
    e.preventDefault();

    const { newtask } = this.state;
    if (newtask.trim() === '') return true;

    this.props.addTask({
      name: newtask,
      project_id: this.props.match.params.id
    });
    this.setState({ newtask: '', isOpenNewTaskInput: false });
  }

  render() { 
    const { tasks } = this.props;
    const { isOpenNewTaskInput } = this.state;

    return (  
      <SprintListLeftPane
        tasks={tasks}
        isOpenNewTaskInput={isOpenNewTaskInput}
        onOpenNewTaskInput={this.handleOpenNewTaskInput}
        onSubmit={this.handleNewTaskSubmit}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      />
    );
  }
}

export default connect(
  state => ({
    tasks: state.task.tasks
  }),
  actions.task
)(SprintListTasksContainer);