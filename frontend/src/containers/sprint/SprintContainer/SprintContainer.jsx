import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sprint from 'components/sprint/Sprint';
import * as actions from 'actions';

class SprintContainer extends Component {
  render() { 
    return (
      <Sprint 
        {...this.props}
      />
    );
  }
}
 
export default connect(
  state => ({
    // project: state.project.project
  }),
  actions.task
)(SprintContainer);