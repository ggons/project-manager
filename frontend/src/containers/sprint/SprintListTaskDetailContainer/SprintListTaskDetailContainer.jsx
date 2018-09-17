import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintListTaskDetail from 'components/sprint/SprintListTaskDetail';
import * as actions from 'actions';
import { getStatusStr } from 'utils/task';
const statusStr = getStatusStr();

class SprintListTaskDetailContainer extends Component {
  state = {
    isOpenStatusDialog: false
  }

  handleOpenStatusDialog = (open) => this.setState({ isOpenStatusDialog: open });

  handleStatusChange = (event, value) => {
    const { task } = this.props;

    this.props.updateTask({
      ...task,
      status: statusStr.indexOf(value)
    });
    this.handleOpenStatusDialog(false);
  }

  handleDescriptionChange = e => {
    this.props.changeTaskForm({ description: e.target.value  })
  }

  handleDescriptionBlur = e => {
    const { task } = this.props;
    this.props.updateTask({ ...task });
  }

  render() { 
    const { isOpenStatusDialog } = this.state;
    const { task } = this.props;

    return (
      <SprintListTaskDetail
        task={task}
        isOpenStatusDialog={isOpenStatusDialog}
        onStatusChange={this.handleStatusChange}
        onOpenStatusDialog={this.handleOpenStatusDialog}
        onDescriptionChange={this.handleDescriptionChange}
        onDescriptionBlur={this.handleDescriptionBlur}
      />
    );
  }
}
 
export default connect(
  state => ({
    task: state.task.task
  }),
  actions.task
)(SprintListTaskDetailContainer);