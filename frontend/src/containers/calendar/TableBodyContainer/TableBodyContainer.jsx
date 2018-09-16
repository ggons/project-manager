import React from 'react';
import { connect } from 'react-redux';
import TableBodyContainerMethod from './TableBodyContainerMethod';
import TableBody from 'components/calendar/TableBody';
import Register from 'components/calendar/Register';
import { makeWeeksData } from 'utils/date';
import * as actions from 'actions';

class TableBodyContainer extends TableBodyContainerMethod {
  render() { 
    const { currentDate, schedules } = this.props;
    const { weeksDate, weeksSchedule } = makeWeeksData(currentDate, schedules);

    return (  
      <React.Fragment>
        <TableBody 
          weeksDate={weeksDate} 
          weeksSchedule={weeksSchedule} 
          onDateClick={this.handleDateClick}
          onScheduleClick={this.handleScheduleClick}
        />
        <Register />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    currentDate: state.date.currentDate,
    schedules: state.schedule.schedules
  }),
  actions
)(TableBodyContainer);