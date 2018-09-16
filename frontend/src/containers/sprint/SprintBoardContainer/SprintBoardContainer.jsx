import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintBoard from 'components/sprint/SprintBoard';
import * as actions from 'actions'

class SprintBoardContainer extends Component {
  state = {  }

  componentDidMount() {
    this.props.requestTasksByProjectId(this.props.match.params.id);
  }

  render() { 
    let { tasks } = this.props;

    return (  
      <SprintBoard tasks={tasks} />
    );
  }
}
 
export default connect(
  state => ({
    tasks: state.task.tasks
  }),
  actions.task
)(SprintBoardContainer);