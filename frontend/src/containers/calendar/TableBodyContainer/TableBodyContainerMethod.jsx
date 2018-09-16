import { Component } from 'react';

class TableBodyContainerMethod extends Component {
  handleDateClick = day => {
    this.props.initScheduleForm({ title: '', startDate: day.str, endDate: day.str, vo: null });
    this.handleOpen();
  }

  handleScheduleClick = (e, { title, startDate, endDate, vo }) => {
    e.stopPropagation();
    this.props.initScheduleForm({ title, startDate, endDate, vo });
    this.handleOpen();
  }

  handleOpen = () => {
    this.props.setScheduleModal(true);
  }
}
 
export default TableBodyContainerMethod;