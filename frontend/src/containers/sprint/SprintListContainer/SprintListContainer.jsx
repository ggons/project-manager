import React, { Component } from 'react';
import { connect } from 'react-redux';
import SprintList from 'components/sprint/SprintList';
import * as actions from 'actions'

class SprintListContainer extends Component {
  componentDidMount() {
    this.props.requestTasksByProjectId(this.props.match.params.id);
  }

  render() { 
    return (  
      <SprintList />
    );
  }
}

export default connect(
  state => ({ }),
  actions.task
)(SprintListContainer);