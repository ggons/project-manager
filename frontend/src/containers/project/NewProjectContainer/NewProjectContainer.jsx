import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewProject from 'components/project/NewProject';
import * as actions from 'actions';

function getSteps() {
  return ['Write a project name', 'Create an ad group', 'Create an ad'];
}

class NewProjectContainer extends Component {
  state = {
    steps: getSteps(),
    activeStep: 0,
    newname: ''
  };

  handleNext = () => {
    const { steps, activeStep, newname } = this.state;
    const state = { activeStep: activeStep + 1 };

    if (activeStep + 1 === steps.length) {
      this.props.addProject(newname);
      state.newname = '';
    }
    
    this.setState(state);
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };

  handleReset = () => {
    this.setState({ activeStep: 0, newname: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() { 
    const { steps, activeStep, newname } = this.state;

    return (  
      <NewProject
        steps={steps}
        activeStep={activeStep}
        newname={newname}
        onNext={this.handleNext}
        onBack={this.handleBack}
        onReset={this.handleReset}
        onChange={this.handleChange}
      />
    );
  }
}
 


export default connect(
  null,
  actions.project
)(NewProjectContainer);