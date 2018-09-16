import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from 'components/calendar/Header';
import * as actions from 'actions';

class HeaderContainer extends Component {
  handlePrevClick = () => {
    const { currentDate } = this.props;
    this.props.setCurrentDate(moment(currentDate).set('date', 1).subtract(1, 'months'));
  }

  handleNextClick = () => {
    const { currentDate } = this.props;
    this.props.setCurrentDate(moment(currentDate).set('date', 1).add(1, 'months'));
  }

  render() { 
    const { currentDate } = this.props;

    return (  
      <Header 
        currentDate={currentDate}
        onPrevClick={this.handlePrevClick}
        onNextClick={this.handleNextClick}
      />
    );
  }
}
 
export default connect(
  state => ({
    currentDate: state.date.currentDate
  }),
  actions
)(HeaderContainer);